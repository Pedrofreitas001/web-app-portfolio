import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../utils/useAuth';
import { ArrowLeft, Save } from 'lucide-react';
import ImageUpload from '../../components/ImageUpload';
import MultipleImageUpload from '../../components/MultipleImageUpload';

export default function ProjectForm() {
  const { id } = useParams();
  const { user, loading: authLoading } = useAuth();
  const navigate = useNavigate();
  const isEditing = id !== 'new';

  const [loading, setLoading] = useState(false);
  const [saving, setSaving] = useState(false);

  const [formData, setFormData] = useState({
    slug: '',
    title: '',
    category: '',
    company: '',
    description: '',
    coverImage: '',
    context: '',
    dataset: '',
    tools: [] as string[],
    images: [] as string[],
    repoLink: '',
    liveLink: '',
    featured: false,
  });

  const [toolInput, setToolInput] = useState('');

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/admin/login');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (isEditing && user) {
      loadProject();
    }
  }, [id, isEditing, user]);

  const loadProject = async () => {
    setLoading(true);
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .eq('id', id)
        .single();

      if (error) throw error;

      setFormData({
        slug: data.slug || '',
        title: data.title || '',
        category: data.category || '',
        company: data.company || '',
        description: data.description || '',
        coverImage: data.cover_image || '',
        context: data.context || '',
        dataset: data.dataset || '',
        tools: data.tools || [],
        images: data.images || [],
        repoLink: data.repo_link || '',
        liveLink: data.live_link || '',
        featured: data.featured || false,
      });
    } catch (error: any) {
      console.error('Error loading project:', error);
      alert('Erro ao carregar projeto: ' + error.message);
      navigate('/admin');
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSaving(true);

    try {
      const projectData = {
        slug: formData.slug,
        title: formData.title,
        category: formData.category,
        company: formData.company || null,
        description: formData.description,
        cover_image: formData.coverImage,
        context: formData.context,
        dataset: formData.dataset || null,
        tools: formData.tools,
        images: formData.images,
        repo_link: formData.repoLink || null,
        live_link: formData.liveLink || null,
        featured: formData.featured,
      };

      if (isEditing) {
        const { error } = await supabase
          .from('projects')
          .update(projectData)
          .eq('id', id);

        if (error) throw error;
        alert('Projeto atualizado com sucesso!');
      } else {
        const { error } = await supabase
          .from('projects')
          .insert([projectData]);

        if (error) throw error;
        alert('Projeto criado com sucesso!');
      }

      navigate('/admin');
    } catch (error: any) {
      console.error('Error saving project:', error);
      alert('Erro ao salvar projeto: ' + error.message);
    } finally {
      setSaving(false);
    }
  };

  const handleAddTool = () => {
    if (toolInput.trim() && !formData.tools.includes(toolInput.trim())) {
      setFormData({ ...formData, tools: [...formData.tools, toolInput.trim()] });
      setToolInput('');
    }
  };

  const handleRemoveTool = (tool: string) => {
    setFormData({ ...formData, tools: formData.tools.filter(t => t !== tool) });
  };

  if (authLoading || !user || (isEditing && loading)) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <button
            onClick={() => navigate('/admin')}
            className="flex items-center gap-2 text-zinc-400 hover:text-white transition-colors mb-2"
          >
            <ArrowLeft className="w-4 h-4" />
            Voltar
          </button>
          <h1 className="text-2xl font-bold">
            {isEditing ? 'Editar Projeto' : 'Novo Projeto'}
          </h1>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Título *
              </label>
              <input
                type="text"
                required
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nome do projeto"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Slug * (URL amigável)
              </label>
              <input
                type="text"
                required
                value={formData.slug}
                onChange={(e) => setFormData({ ...formData, slug: e.target.value.toLowerCase().replace(/\s+/g, '-') })}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="meu-projeto"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Categoria *
              </label>
              <input
                type="text"
                required
                value={formData.category}
                onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: Dashboard Power BI, Web Development"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Empresa / Cliente
              </label>
              <input
                type="text"
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Nome da empresa"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Descrição Curta *
            </label>
            <textarea
              required
              rows={2}
              value={formData.description}
              onChange={(e) => setFormData({ ...formData, description: e.target.value })}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Descrição resumida do projeto"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Contexto / Descrição Completa *
            </label>
            <textarea
              required
              rows={4}
              value={formData.context}
              onChange={(e) => setFormData({ ...formData, context: e.target.value })}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Descrição detalhada do projeto, contexto, objetivos..."
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Dataset / Informações dos Dados
            </label>
            <textarea
              rows={2}
              value={formData.dataset}
              onChange={(e) => setFormData({ ...formData, dataset: e.target.value })}
              className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Informações sobre os dados utilizados (opcional)"
            />
          </div>

          <ImageUpload
            currentImage={formData.coverImage}
            onImageUploaded={(url) => setFormData({ ...formData, coverImage: url })}
            label="Imagem de Capa *"
          />

          <MultipleImageUpload
            images={formData.images}
            onImagesChange={(images) => setFormData({ ...formData, images })}
            label="Galeria de Imagens do Projeto"
          />

          <div>
            <label className="block text-sm font-medium text-zinc-300 mb-2">
              Ferramentas / Tecnologias
            </label>
            <div className="flex gap-2 mb-2">
              <input
                type="text"
                value={toolInput}
                onChange={(e) => setToolInput(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAddTool())}
                className="flex-1 px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Ex: Python, React, Power BI..."
              />
              <button
                type="button"
                onClick={handleAddTool}
                className="px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
              >
                Adicionar
              </button>
            </div>
            <div className="flex flex-wrap gap-2">
              {formData.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1 bg-zinc-800 border border-zinc-700 rounded-full text-sm flex items-center gap-2"
                >
                  {tool}
                  <button
                    type="button"
                    onClick={() => handleRemoveTool(tool)}
                    className="text-red-500 hover:text-red-400"
                  >
                    ×
                  </button>
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Link do Repositório
              </label>
              <input
                type="url"
                value={formData.repoLink}
                onChange={(e) => setFormData({ ...formData, repoLink: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://github.com/..."
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-zinc-300 mb-2">
                Link do Projeto Online
              </label>
              <input
                type="url"
                value={formData.liveLink}
                onChange={(e) => setFormData({ ...formData, liveLink: e.target.value })}
                className="w-full px-3 py-2 bg-zinc-800 border border-zinc-700 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="https://..."
              />
            </div>
          </div>

          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="featured"
              checked={formData.featured}
              onChange={(e) => setFormData({ ...formData, featured: e.target.checked })}
              className="w-4 h-4 bg-zinc-800 border-zinc-700 rounded focus:ring-2 focus:ring-blue-500"
            />
            <label htmlFor="featured" className="text-sm font-medium text-zinc-300">
              Destacar projeto na página inicial
            </label>
          </div>

          <div className="flex gap-4 pt-4 border-t border-zinc-800">
            <button
              type="submit"
              disabled={saving || !formData.coverImage}
              className="flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Save className="w-5 h-5" />
              {saving ? 'Salvando...' : isEditing ? 'Atualizar Projeto' : 'Criar Projeto'}
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin')}
              className="px-6 py-3 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
            >
              Cancelar
            </button>
          </div>
        </form>
      </main>
    </div>
  );
}

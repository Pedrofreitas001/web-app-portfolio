import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { supabase } from '../../lib/supabase';
import { useAuth } from '../../utils/useAuth';
import { Plus, Edit, Trash2, LogOut, Eye } from 'lucide-react';
import { Project } from '../../types';

export default function Admin() {
  const { user, loading: authLoading, signOut } = useAuth();
  const navigate = useNavigate();
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!authLoading && !user) {
      navigate('/admin/login');
    }
  }, [user, authLoading, navigate]);

  useEffect(() => {
    if (user) {
      loadProjects();
    }
  }, [user]);

  const loadProjects = async () => {
    try {
      const { data, error } = await supabase
        .from('projects')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;

      // Map database fields to Project interface
      const mappedProjects: Project[] = (data || []).map((p: any) => ({
        id: p.id,
        slug: p.slug,
        title: p.title,
        category: p.category,
        company: p.company,
        description: p.description,
        coverImage: p.cover_image,
        context: p.context,
        dataset: p.dataset,
        tools: p.tools || [],
        images: p.images || [],
        repoLink: p.repo_link,
        liveLink: p.live_link,
        featured: p.featured,
      }));

      setProjects(mappedProjects);
    } catch (error: any) {
      console.error('Error loading projects:', error);
      alert('Erro ao carregar projetos: ' + error.message);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Tem certeza que deseja excluir este projeto?')) return;

    try {
      const { error } = await supabase
        .from('projects')
        .delete()
        .eq('id', id);

      if (error) throw error;

      setProjects(projects.filter(p => p.id !== id));
      alert('Projeto excluído com sucesso!');
    } catch (error: any) {
      console.error('Error deleting project:', error);
      alert('Erro ao excluir projeto: ' + error.message);
    }
  };

  if (authLoading || !user) {
    return (
      <div className="min-h-screen bg-black flex items-center justify-center">
        <div className="text-white">Carregando...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <header className="border-b border-zinc-800 bg-zinc-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Painel Admin</h1>
            <p className="text-sm text-zinc-400 mt-1">Gerenciar Projetos do Portfolio</p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={() => navigate('/')}
              className="flex items-center gap-2 px-4 py-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
            >
              <Eye className="w-4 h-4" />
              Ver Site
            </button>
            <button
              onClick={signOut}
              className="flex items-center gap-2 px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition-colors"
            >
              <LogOut className="w-4 h-4" />
              Sair
            </button>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-xl font-semibold">Projetos ({projects.length})</h2>
          <button
            onClick={() => navigate('/admin/project/new')}
            className="flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
          >
            <Plus className="w-4 h-4" />
            Novo Projeto
          </button>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <p className="text-zinc-400">Carregando projetos...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-12 bg-zinc-900 rounded-lg border border-zinc-800">
            <p className="text-zinc-400 mb-4">Nenhum projeto cadastrado ainda</p>
            <button
              onClick={() => navigate('/admin/project/new')}
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg transition-colors"
            >
              <Plus className="w-5 h-5" />
              Criar Primeiro Projeto
            </button>
          </div>
        ) : (
          <div className="grid gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 hover:border-zinc-700 transition-colors"
              >
                <div className="flex gap-4">
                  <img
                    src={project.coverImage}
                    alt={project.title}
                    className="w-32 h-24 object-cover rounded-lg"
                  />
                  <div className="flex-1">
                    <div className="flex items-start justify-between">
                      <div>
                        <h3 className="text-lg font-semibold">{project.title}</h3>
                        <p className="text-sm text-zinc-400 mt-1">
                          {project.category} {project.company && `• ${project.company}`}
                        </p>
                        <p className="text-sm text-zinc-500 mt-2 line-clamp-2">
                          {project.description}
                        </p>
                        <div className="flex flex-wrap gap-2 mt-3">
                          {project.featured && (
                            <span className="px-2 py-1 bg-yellow-500/10 text-yellow-500 text-xs rounded">
                              Destaque
                            </span>
                          )}
                          <span className="px-2 py-1 bg-blue-500/10 text-blue-400 text-xs rounded">
                            {project.images.length} imagens
                          </span>
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <button
                          onClick={() => navigate(`/admin/project/${project.id}`)}
                          className="p-2 bg-zinc-800 hover:bg-zinc-700 rounded-lg transition-colors"
                          title="Editar"
                        >
                          <Edit className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => handleDelete(project.id)}
                          className="p-2 bg-red-600/10 hover:bg-red-600/20 text-red-500 rounded-lg transition-colors"
                          title="Excluir"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}

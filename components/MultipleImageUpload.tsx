import { useState } from 'react';
import { Upload, X } from 'lucide-react';
import { uploadImage } from '../utils/imageUpload';

interface MultipleImageUploadProps {
  images: string[];
  onImagesChange: (images: string[]) => void;
  label?: string;
}

export default function MultipleImageUpload({
  images,
  onImagesChange,
  label = 'Galeria de Imagens'
}: MultipleImageUploadProps) {
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState<string>('');

  const handleFilesChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = Array.from(e.target.files || []);
    if (files.length === 0) return;

    // Validate files
    for (const file of files) {
      if (!file.type.startsWith('image/')) {
        setError('Todos os arquivos devem ser imagens');
        return;
      }
      if (file.size > 5 * 1024 * 1024) {
        setError('Cada imagem deve ter no máximo 5MB');
        return;
      }
    }

    setError('');
    setUploading(true);

    try {
      const uploadPromises = files.map(file => uploadImage(file, 'gallery'));
      const urls = await Promise.all(uploadPromises);
      onImagesChange([...images, ...urls]);
    } catch (err: any) {
      setError(err.message || 'Erro ao fazer upload das imagens');
    } finally {
      setUploading(false);
    }
  };

  const handleRemove = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    onImagesChange(newImages);
  };

  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-zinc-300">{label}</label>

      <div className="grid grid-cols-3 gap-4">
        {images.map((img, index) => (
          <div key={index} className="relative group">
            <img
              src={img}
              alt={`Gallery ${index + 1}`}
              className="w-full h-32 object-cover rounded-lg border border-zinc-700"
            />
            <button
              type="button"
              onClick={() => handleRemove(index)}
              className="absolute top-2 right-2 p-1.5 bg-red-500 text-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
        ))}

        <label className="flex flex-col items-center justify-center h-32 border-2 border-zinc-700 border-dashed rounded-lg cursor-pointer bg-zinc-800 hover:bg-zinc-750 transition-colors">
          <div className="flex flex-col items-center justify-center">
            {uploading ? (
              <Upload className="w-6 h-6 text-blue-500 animate-pulse" />
            ) : (
              <>
                <Upload className="w-6 h-6 text-zinc-500 mb-1" />
                <p className="text-xs text-zinc-400 text-center px-2">Adicionar</p>
              </>
            )}
          </div>
          <input
            type="file"
            className="hidden"
            accept="image/*"
            multiple
            onChange={handleFilesChange}
            disabled={uploading}
          />
        </label>
      </div>

      {error && (
        <p className="text-sm text-red-500">{error}</p>
      )}
    </div>
  );
}

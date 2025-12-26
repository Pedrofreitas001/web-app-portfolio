import { supabase } from '../lib/supabase';

export async function uploadImage(file: File, folder: string = 'projects'): Promise<string> {
  try {
    const fileExt = file.name.split('.').pop();
    const fileName = `${folder}/${Date.now()}-${Math.random().toString(36).substring(7)}.${fileExt}`;

    const { data, error } = await supabase.storage
      .from('project-images')
      .upload(fileName, file, {
        cacheControl: '3600',
        upsert: false,
      });

    if (error) throw error;

    // Get public URL
    const { data: { publicUrl } } = supabase.storage
      .from('project-images')
      .getPublicUrl(data.path);

    return publicUrl;
  } catch (error: any) {
    console.error('Error uploading image:', error);
    throw new Error(`Erro ao fazer upload: ${error.message}`);
  }
}

export async function deleteImage(url: string): Promise<void> {
  try {
    // Extract file path from URL
    const urlParts = url.split('/project-images/');
    if (urlParts.length < 2) return;

    const filePath = urlParts[1];

    const { error } = await supabase.storage
      .from('project-images')
      .remove([filePath]);

    if (error) throw error;
  } catch (error: any) {
    console.error('Error deleting image:', error);
    throw new Error(`Erro ao deletar imagem: ${error.message}`);
  }
}

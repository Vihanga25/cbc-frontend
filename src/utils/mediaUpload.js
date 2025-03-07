import { createClient } from "@supabase/supabase-js";


const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImR2cXZwZXRhYWlqa2JhbXVqbWt0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDEzNDE3MjYsImV4cCI6MjA1NjkxNzcyNn0.3ReRZUOsD5xppKaFIi_OYjmlRSQchvUsUn4ruMp3mOc`;

const Url = "https://dvqvpetaaijkbamujmkt.supabase.co";

const supabase = createClient(Url, key);

export default function uploadMediaToSupabase(file) {
  return new Promise((resolve, reject) => {
    if (file == null) {
      reject("File not added");
    }
    let fileName = file.name;
    const extension = fileName.split(".")[fileName.split(".").length - 1];

    const timestamp = new Date().getTime();

    fileName = timestamp +file.name+ "." + extension;

    supabase.storage.from("images").upload(fileName, file, {
      cacheControl: "3600",
      upsert: false,
    }).then(()=>{
      const publicUrl = supabase.storage.from("images").getPublicUrl(fileName).data.publicUrl;
      resolve(publicUrl);
    }).catch((err)=>{
      reject(err);
    });
  });
}

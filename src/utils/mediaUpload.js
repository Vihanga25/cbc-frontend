
const key = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZhdmNtZGZ0c2FxZ3F5Z25tY29uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDA3Njk1OTEsImV4cCI6MjA1NjM0NTU5MX0.R2UUnNKxSnXa0krCjW8-mcuSHkZLWHaL3JPzaLA2UGQ`;


const Url = "https://vavcmdftsaqgqygnmcon.supabase.co";



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
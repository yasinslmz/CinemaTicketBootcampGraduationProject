namespace CinemaProject.GenericModels
{
    public class UploadImage
    {
        private readonly IWebHostEnvironment he;
        public UploadImage(IWebHostEnvironment he)
        {
            this.he = he;
        }
        public string Image(IFormFileCollection? files, string entity)
        {
            string image = null;

            if (files.Count > 0)
            {
                string fileName = Guid.NewGuid().ToString();
                string imgPath = @"images\" + entity;
                var upload = Path.Combine(he.WebRootPath, imgPath);
                var ext = Path.GetExtension(files[0].FileName);
                var ImagePath = Path.Combine(he.WebRootPath, files[0].Name.TrimStart('\\'));
                if (System.IO.File.Exists(ImagePath))
                {
                    System.IO.File.Delete(ImagePath);
                }
                using (var fileStream = new FileStream(Path.Combine(upload, fileName + ext), FileMode.Create))
                {
                    files[0].CopyTo(fileStream);
                }
                image = fileName + ext;
            }

            return image;
        }
    }
}

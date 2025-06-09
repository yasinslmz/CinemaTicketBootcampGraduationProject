# 🎬 Cinema Ticket Booking System

Bu proje, **Patika.dev Bootcamp** mezuniyet projesi olarak geliştirilmiş modern bir sinema bileti rezervasyon sistemidir. ASP.NET Core 6.0 MVC kullanılarak geliştirilmiştir.

## 📋 Proje Hakkında

Cinema Ticket Booking System, kullanıcıların sinema filmlerini görüntüleyebileceği, bilet rezervasyonu yapabileceği ve yöneticilerin sistem yönetimini gerçekleştirebileceği kapsamlı bir web uygulamasıdır.

## ✨ Özellikler

### 👤 Kullanıcı Özellikleri
- 🔐 Kullanıcı kaydı ve giriş sistemi
- 🎭 Film listesi görüntüleme
- 🎫 Bilet rezervasyonu yapma
- 💺 Koltuk seçimi
- 💳 Online ödeme sistemi (Iyzipay entegrasyonu)
- 📧 E-posta bildirimleri
- 📱 Responsive tasarım

### 👨‍💼 Admin Özellikleri
- 🎬 Film yönetimi (ekleme, düzenleme, silme)
- 🏢 Sinema salonu yönetimi
- ⏰ Seans yönetimi
- 👥 Kullanıcı yönetimi
- 📊 Rezervasyon takibi
- 🖼️ Resim yükleme sistemi

## 🛠️ Kullanılan Teknolojiler

- **Backend**: ASP.NET Core 6.0 MVC
- **Authentication**: ASP.NET Core Identity
- **Database**: SQL Server + Entity Framework Core
- **Payment**: Iyzipay API
- **Email**: SMTP Email Service
- **Frontend**: HTML5, CSS3, JavaScript, Bootstrap
- **Icons**: Font Awesome
- **Image Upload**: Custom Upload Service

## 📦 Paket Bağımlılıkları

```xml
<PackageReference Include="Iyzipay" Version="2.1.61" />
<PackageReference Include="Microsoft.AspNetCore.Diagnostics.EntityFrameworkCore" Version="6.0.24" />
<PackageReference Include="Microsoft.AspNetCore.Identity.EntityFrameworkCore" Version="6.0.24" />
<PackageReference Include="Microsoft.AspNetCore.Identity.UI" Version="6.0.24" />
<PackageReference Include="Microsoft.EntityFrameworkCore.Sqlite" Version="6.0.26" />
<PackageReference Include="Microsoft.EntityFrameworkCore.SqlServer" Version="6.0.26" />
<PackageReference Include="Microsoft.EntityFrameworkCore.Tools" Version="6.0.26" />
<PackageReference Include="Microsoft.VisualStudio.Web.CodeGeneration.Design" Version="6.0.16" />
```

## 🚀 Kurulum

### Gereksinimler
- .NET 6.0 SDK
- SQL Server (LocalDB veya tam sürüm)
- Visual Studio 2022 veya VS Code

### Adım Adım Kurulum

1. **Projeyi klonlayın:**
```bash
git clone https://github.com/[your-username]/CinemaTicketBootcampGraduationProject.git
cd CinemaTicketBootcampGraduationProject
```

2. **Bağımlılıkları yükleyin:**
```bash
dotnet restore
```

3. **Veritabanı bağlantısını yapılandırın:**
`appsettings.json` dosyasındaki connection string'i kendi SQL Server ayarlarınıza göre düzenleyin:
```json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=(localdb)\\mssqllocaldb;Database=CinemaDb;Trusted_Connection=True;MultipleActiveResultSets=true"
  }
}
```

4. **Veritabanı migrasyonlarını çalıştırın:**
```bash
dotnet ef database update
```

5. **Uygulamayı çalıştırın:**
```bash
dotnet run
```

6. **Tarayıcınızda açın:**
```
https://localhost:5001
```

## 📁 Proje Yapısı

```
CinemaProject/
├── Areas/
│   ├── Admin/           # Admin panel
│   ├── Customer/        # Müşteri arayüzü
│   └── Identity/        # Kimlik doğrulama
├── Data/               # Veritabanı context
├── Models/             # Veri modelleri
├── Views/              # Razor view'lar
├── wwwroot/            # Statik dosyalar
├── Email/              # E-posta servisleri
├── GenericModels/      # Genel modeller
└── Migrations/         # EF Core migrasyonları
```

## 🔧 Yapılandırma

### E-posta Ayarları
E-posta gönderimi için SMTP ayarlarınızı yapılandırın.

### Ödeme Sistemi
Iyzipay API anahtarlarını `appsettings.json` dosyasına ekleyin.

## 🎯 Kullanım

### Müşteri İşlemleri
1. Ana sayfadan mevcut filmleri görüntüleyin
2. İstediğiniz filme tıklayın
3. Uygun seansı seçin
4. Koltuk seçimi yapın
5. Ödeme bilgilerini girin
6. Rezervasyonunuzu tamamlayın

### Admin İşlemleri
1. Admin paneline giriş yapın
2. Film, salon ve seans yönetimi yapın
3. Rezervasyonları takip edin
4. Kullanıcı yönetimi gerçekleştirin

## 🤝 Katkıda Bulunma

1. Bu repository'yi fork edin
2. Feature branch oluşturun (`git checkout -b feature/AmazingFeature`)
3. Değişikliklerinizi commit edin (`git commit -m 'Add some AmazingFeature'`)
4. Branch'inizi push edin (`git push origin feature/AmazingFeature`)
5. Pull Request oluşturun

## 📝 Lisans

Bu proje MIT lisansı altında lisanslanmıştır. Detaylar için `LICENSE` dosyasına bakın.

## 👨‍💻 Geliştirici

Bu proje **Patika.dev Bootcamp** mezuniyet projesi olarak geliştirilmiştir.

## 📞 İletişim

Proje hakkında sorularınız için GitHub Issues kullanabilirsiniz.

---

⭐ Bu projeyi beğendiyseniz yıldız vermeyi unutmayın! 
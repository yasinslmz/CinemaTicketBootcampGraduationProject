# 🤝 Katkıda Bulunma Rehberi

Bu projeye katkıda bulunmak istediğiniz için teşekkür ederiz! Bu rehber, projeye nasıl katkıda bulunabileceğinizi açıklar.

## 🚀 Başlangıç

### Gereksinimler
- .NET 6.0 SDK
- Visual Studio 2022 veya VS Code
- SQL Server (LocalDB veya tam sürüm)
- Git

### Geliştirme Ortamı Kurulumu

1. **Repository'yi fork edin**
   ```bash
   # GitHub'da "Fork" butonuna tıklayın
   ```

2. **Projeyi klonlayın**
   ```bash
   git clone https://github.com/YOUR_USERNAME/CinemaTicketBootcampGraduationProject.git
   cd CinemaTicketBootcampGraduationProject
   ```

3. **Upstream repository'yi ekleyin**
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/CinemaTicketBootcampGraduationProject.git
   ```

4. **Bağımlılıkları yükleyin**
   ```bash
   dotnet restore
   ```

5. **Veritabanını kurun**
   ```bash
   dotnet ef database update
   ```

## 📝 Katkıda Bulunma Süreci

### 1. Issue Oluşturma
Yeni bir özellik eklemeden veya hata düzeltmesinden önce, ilgili konuda bir issue oluşturun:

- **Bug Report**: Hata raporları için
- **Feature Request**: Yeni özellik önerileri için
- **Enhancement**: Mevcut özelliklerin iyileştirilmesi için

### 2. Branch Oluşturma
```bash
# Ana branch'ten yeni bir branch oluşturun
git checkout -b feature/your-feature-name
# veya
git checkout -b bugfix/bug-description
```

### 3. Geliştirme
- Kod yazarken mevcut kod stiline uyun
- Değişikliklerinizi küçük, anlamlı commit'lere bölün
- Commit mesajlarını açıklayıcı yazın

### 4. Test Etme
Değişikliklerinizi test edin:
```bash
# Projeyi çalıştırın
dotnet run

# Test edin (eğer test projeleri varsa)
dotnet test
```

### 5. Pull Request Gönderme
1. Değişikliklerinizi push edin:
   ```bash
   git push origin feature/your-feature-name
   ```

2. GitHub'da Pull Request oluşturun
3. PR açıklamasında şunları belirtin:
   - Değişikliklerin açıklaması
   - İlgili issue numarası
   - Test edilmiş senaryolar

## 🎯 Kod Standartları

### C# Kodlama Standartları
- **Naming Conventions**: Microsoft C# kodlama standartlarını takip edin
- **PascalCase**: Sınıflar, metotlar, özellikler için
- **camelCase**: Değişkenler ve parametreler için
- **UPPER_CASE**: Sabitler için

### Dosya Organizasyonu
```
├── Areas/
│   ├── Admin/          # Admin panel işlevleri
│   ├── Customer/       # Müşteri arayüzü
│   └── Identity/       # Kimlik doğrulama
├── Models/             # Veri modelleri
├── Views/              # Razor görünümleri
└── wwwroot/           # Statik dosyalar
```

### Commit Mesaj Formatı
```
tip: kısa açıklama (50 karakter veya daha az)

Daha detaylı açıklama gerekirse buraya yazın.
- Liste şeklinde değişiklikler
- Diğer önemli notlar

Fixes #123
```

**Tip türleri:**
- `feat`: Yeni özellik
- `fix`: Hata düzeltmesi
- `docs`: Dokümantasyon
- `style`: Kod formatı
- `refactor`: Kod yeniden düzenleme
- `test`: Test ekleme/düzeltme
- `chore`: Diğer değişiklikler

## 🐛 Hata Raporlama

Hata raporu oluştururken şunları ekleyin:

### Hata Açıklaması
- Hatanın net açıklaması
- Beklenen davranış
- Gerçekleşen davranış

### Tekrarlanabilirlik
- Hatı tekrarlama adımları
- Hatanın oluşma sıklığı

### Ortam Bilgileri
```
- İşletim Sistemi: [Windows 10/11, macOS, Linux]
- Tarayıcı: [Chrome, Firefox, Safari, Edge]
- .NET Sürümü: [6.0]
- Proje Sürümü: [commit hash veya versiyon]
```

### Ekler
- Hata ekran görüntüleri
- Console log'ları
- İlgili kod parçacıkları

## ✨ Özellik Önerileri

Yeni özellik önerirken:

1. **Açık ve net bir başlık** kullanın
2. **Özelliğin amacını** açıklayın
3. **Kullanım senaryolarını** belirtin
4. **Mümkünse mockup veya örnek** ekleyin

## 📋 Pull Request Kontrol Listesi

PR göndermeden önce kontrol edin:

- [ ] Kod derlenebiliyor
- [ ] Yeni özellikler test edildi
- [ ] Mevcut testler hala geçiyor
- [ ] Dokümantasyon güncellendi (gerekirse)
- [ ] Commit mesajları anlamlı
- [ ] PR açıklaması yeterli detayda

## 🎖️ Katkıda Bulunanlar

Tüm katkıda bulunanlara teşekkür ederiz! Katkılarınız projenin gelişmesine büyük katkı sağlıyor.

## 📞 İletişim

Sorularınız için:
- GitHub Issues kullanın
- Tartışmalar için Discussions bölümünü kullanın

---

Katkılarınız için şimdiden teşekkür ederiz! 🙏 
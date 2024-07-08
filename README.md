# 🕌 namaz-vakti

Sizi sıcak terminal arayüzünden ayırmadan, belirlediğiniz mekan için namaz vakti hakkında bilgiler verir.

## ✔ Kurulum

### [-> Bu linke tıklayarak kurulum aşamalarına gidin. <-](https://github.com/sanalzio/namaz-vakti/blob/master/docs/kurulum.md)

## ▶ Kullanımı

Kurulum sonrasında;
```bash
namaz
```
komutu ile kullanabilirsiniz.

Ayarlar ve proje hakkında bilgiler almak için;
```bash
namaz --hakkında
# yada
namaz -h
```
şeklinde kullanabilirsiniz.

## ⚙ Ayarlar

Programı ilk çalıştırdığınızda `~/.config/configstore/namaz-vakti.json` dosyasını oluşturur. Bu dosya program ayarlarını barındırır.

### 🔩 Ayarları görme

Ayarlar hakkında bilgiler almak için;
```bash
namaz --ayarlar
# yada
namaz -a
```
şeklinde kullanabilirsiniz.

### 🛠 Ayarları değiştirme

Ayarları aşağıdaki şekilde düzenleyebilirsiniz.

```bash
namaz --duzenle "<ayar ismi>" "<ayarın yeni değeri>"
# yada
namaz -d "<ayar ismi>" "<ayarın yeni değeri>"
```

### Ayarlar dosyasını düzenleme

- Windows için, <kbd><kbd>Windows</kbd> + <kbd>R</kbd></kbd> tuş kombinasyonu ile açılan pencereye `%USERPROFILE%\.config\configstore\namaz-vakti.json` yazın ve <kbd>ENTER</kbd> tuşunu kullanın.

- GNU/linux ve MacOS için, `~/.config/configstore/` dizinindeki `namaz-vakti.json` dosyasını açın.

- Ve dosya üzerinde değişiklik yapıp tekrardan `namaz` komutunu kullanın.

### Nedir bu ayarlar❓

| Ayar ismi | Anlamı |
|:-|-|
|country|Namaz vakti verilecek bölgenin bulunduğu ülkenin İngilizce ismi|
|region|Namaz vakti verilecek bölgenin bulunduğu eyalet/bölge/şehir|
|city|Namaz vakti verilecek şehir|
|timezoneOffset|UTC (Eşgüdümlü Evrensel Zaman) saat dilimine göre dakika farkı. Sıfır, negatif ya da pozitif bir tamsayı olmalıdır.|
|calculationMethod|Güneşin doğum ve batımının hangi açıda olduğu konusundaki fikrin bölgesi.|

Detaylı açıklamalar için https://vakit.vercel.app/docs#timesFromPlace adresini ziyaret edin.

### Kafam karıştı⁉

İşte sizin için birkaç ayarlar dosyası örneği:

```json
{
    "country": "Turkey",
    "region": "Adana",
    "city": "Adana",
    "timezoneOffset": "180", // UTC+3  +3 = 3 saat = 180 dakika
    "calculationMethod": "Turkey"
}
```
```json
{
    "country": "Germany",
    "region": "Bayern",
    "city": "Abtswind",
    "timezoneOffset": "120", // UTC+2  +2 = 2 saat = 180 dakika
    "calculationMethod": "MuslimWorldLeague"
}
```

## ❓/✔ Bazı önemli sorular ve cevapları

<details>
<summary>Neden çok yavaş açılıyor?</summary>
<hr>

Bu proje bir JavaScript runtime'ı ile yazıldığı için proje kodunu çalıştırılabilir bir dosya haline getirmek için kodun çalışması için gerekli Bun dosyaları ve kod dosyaları arşivlenerek çalıştırılabilir bir dosya haline getiriliyor ve bilgisayar açıldığından beri ilk çalıştırıldığında arşiv geçici bir klasöre açılıyor ve kod çalıştırılıyor. **Bu nedenle ilk açılışta sizi biraz bekletiyor.** İlk açılıştan sonra artık daha hızlı açılmaya başlıyor. Ve bilgisayar her kapandığında bu geçici dosyalar siliniyor.
<hr>
</details>
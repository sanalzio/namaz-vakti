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

## ⚙ Ayarlar

Programı ilk çalıştırdığınızda `~/.config/configstore/namaz-vakti.json` dosyasını oluşturur. Bu dosya program ayarlarını barındırır.

### 🛠 Ayarları değiştirme

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
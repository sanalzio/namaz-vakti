/* ○----- Modüller -----○ */


// kullanıcının ev klasörüne ayarlar için bir dosya oluşturur yada var ise o dosyayı okur
const configstore = require('configstore');

// kendim yadığım ansi escape kodlarını kullanarak konsol ekranını şekillendirmeye ve renklendirmeye yarayan bir modül
const { Fore, Style, Reset } = require('./colorama.js');

const pkg = require('../package.json');


/* ○----- Modüller -----○ */



/* ○----- Sabit değerler -----○ */


// * "~/.config/configstore/namaz-vakti.json" dosyasını oluştur yada oku
const conf = new configstore(pkg.name, { country: "Turkey", region: "Adana", city: "Adana", timezoneOffset: "180", calculationMethod: "Turkey" });


/* ○----- Sabit değerler -----○ */



/* ○----- Fonksiyonlar -----○ */


// belirtilen zaman ile şu anki saman arasındaki zaman farkını hesaplar
function kalanZaman(hedefSaati) {
    const simdikiZaman = new Date();
    const hedefZaman = new Date();
    const saatDilimi = hedefSaati.split(":");
    hedefZaman.setHours(parseInt(saatDilimi[0]));
    hedefZaman.setMinutes(parseInt(saatDilimi[1]));
    hedefZaman.setSeconds(0);
    let kalanZaman = hedefZaman - simdikiZaman;
    if (kalanZaman < 0) {
        kalanZaman += 24 * 60 * 60 * 1000;
    }
    const kalanSaat = Math.floor(kalanZaman / (60 * 60 * 1000));
    const kalanDakika = Math.floor((kalanZaman % (60 * 60 * 1000)) / (60 * 1000));
    const kalanSaniye = Math.floor((kalanZaman % (60 * 1000)) / 1000);
    //// const kalanSalise = Math.floor((kalanZaman % 1000) / 10);
    return [kalanSaat, kalanDakika, kalanSaniye];//, kalanSalise
}

// ayarlar ve proje hakkında bilgi verir
function logInfo() {
    console.log(`
    ${Fore.Magenta}${pkg.name}${Fore.Reset}   ${Fore.BrightBlue}${pkg.version}${Fore.Reset}

  ${Fore.Yellow}Ülke: ${Fore.Reset}${conf.get('country')}

  ${Fore.Yellow}Bölge/Eyalet: ${Fore.Reset}${conf.get('region')}

  ${Fore.Yellow}Şehir: ${Fore.Reset}${conf.get('city')}

  ${Fore.Yellow}UTC'ye göre dk. farkı: ${Fore.Reset}${conf.get('timezoneOffset')}

  ${Fore.Yellow}Hesaplama yöntemi: ${Fore.Reset}${conf.get('calculationMethod')}
`);
}

// ayarlar hakkında bilgi verir
function logSettings() {
    console.log(`
    ${Fore.Magenta}${pkg.name}${Fore.Reset}   ${Fore.BrightBlue}${pkg.version}${Fore.Reset}

  ${Fore.Yellow}country: ${Fore.Reset}${conf.get('country')}

  ${Fore.Yellow}region: ${Fore.Reset}${conf.get('region')}

  ${Fore.Yellow}city: ${Fore.Reset}${conf.get('city')}

  ${Fore.Yellow}timezoneOffset: ${Fore.Reset}${conf.get('timezoneOffset')}

  ${Fore.Yellow}calculationMethod: ${Fore.Reset}${conf.get('calculationMethod')}
`);
}

// istekten dönen verileri biçimlendirerek ve bazı işlemlerden geçirerek konsol ekranına (stdout'a) yazdırır
function log(requestData) {

    // istekten dönen veriyi işle
    const data = requestData.times[Object.keys(requestData.times)[0]];
    /* 
     * İstekten dönen veriyi şu şekile getirir:

    [
        "03:38", // İmsak vakti
        "05:17", // Güneş vakti
        "12:41", // Öğle vakti
        "16:31", // İkindi vakti
        "19:54", // Akşam vakti
        "21:27"  // Yatsı vakti
    ]
     */

    const vakitler = {
        imsak: [ 'İmsak', data[0] ],
        gunes: [ 'Güneş', data[1] ],
        ogle: [ 'Öğle', data[2] ],
        ikindi: [ 'İkindi', data[3] ],
        aksam: [ 'Akşam', data[4] ],
        yatsi: [ 'Yatsı', data[5] ]
    };

    // sonraki vakte kalan süreyi hesaplamak için maksimum değer yani 24 saat'i sonraki vakte kalan zaman olarak ayarla
    let sonrakiVakteKalan = [24, 0, 0];


    // sonraki vakti tutacak boş bir değişken oluştur
    let sonrakiVakit;

    // her bir vakit bilgileri listesi için tekrarlanacak bir döngü oluştur
    for (let i = 0; i < Object.keys(vakitler).length; i++) {

        // vakit zamanını ve ismini içeren listeyi bir sabite ata
        const vakitArr = vakitler[Object.keys(vakitler)[i]];

        // vakte kalan zamanı bir sabite ata hesapla
        const vakteKalanZaman = kalanZaman(vakitArr[1]);

        // vakte kalan saati bir sabite ata hesapla
        const kalanSaat = vakteKalanZaman[0];

        // eğer vakte kalan saat sonrakiVakteKalan değişkenindeki zamandan daha kısa ise
        if (sonrakiVakteKalan[0] > kalanSaat) {

            // sonrakiVakteKalan değişkenini bu vakte kalan zaman olarak değiştir
            sonrakiVakteKalan = vakteKalanZaman;

            // sonrakiVakit değişkenini bu vaktin ismi olarak değiştir
            sonrakiVakit = vakitArr[0];
        };
    }


    const sol_bosluk = (8 - sonrakiVakit.length) / 2;

    const out = `
          ${Fore.BrightBlue}Sonraki         Sonraki vakte${Reset}
           ${Fore.BrightBlue}vakit              kalan${Reset}

         ${" ".repeat(sol_bosluk)}${Style.Underscore + Fore.BrightYellow}${sonrakiVakit}${Reset}${" ".repeat(7-(sonrakiVakit.length+sol_bosluk))}             ${Style.Underscore + Fore.BrightYellow}${"0".repeat(2-sonrakiVakteKalan[0].toString().length)}${sonrakiVakteKalan[0]}:${"0".repeat(2-sonrakiVakteKalan[1].toString().length)}${sonrakiVakteKalan[1]}:${"0".repeat(2-sonrakiVakteKalan[2].toString().length)}${sonrakiVakteKalan[2]}${Reset}

  ${Fore.Magenta}İmsak   Güneş   Öğle    İkindi   Akşam   Yatsı${Reset}
  ${Fore.BrightMagenta}${vakitler.imsak[1]}   ${vakitler.gunes[1]}   ${vakitler.ogle[1]}   ${vakitler.ikindi[1]}    ${vakitler.aksam[1]}   ${vakitler.yatsi[1]}${Reset}
`;

    console.log(out);
    process.exit(0);
}


/* ○----- Fonksiyonlar -----○ */



/* ○----- Ana işlemler -----○ */


async function main() {

    if (process.argv.includes("--hakkında") || process.argv.includes("-h")) {
        logInfo();
        return 0;
    } else if (process.argv.includes("--ayarlar") || process.argv.includes("-a")) {
        logSettings();
        return 0;
    } else if (process.argv.includes("--duzenle") || process.argv.includes("-d")) {
        if (conf.get(process.argv[3]) === undefined) {
            console.log(`${Fore.Red}"${Fore.BrightRed}${process.argv[3]}${Fore.Red}" adında bir ayar bulunamadı.${Fore.Reset}`);
            return 1;
        }
        conf.set(process.argv[3], process.argv[4]);
        console.log(`${Fore.BrightGreen}"${Fore.Green}${process.argv[3]}${Fore.BrightGreen}" ayarı "${Fore.Green}${process.argv[4]}${Fore.BrightGreen}" olarak ayarlandı.${Fore.Reset}`);
        return 0;
    }

    // ayarlara göre api url'si oluştur
    const url = `https://vakit.vercel.app/api/timesFromPlace?country=${conf.get('country')}&region=${conf.get('region')}&city=${conf.get('city')}&timezoneOffset=${conf.get('timezoneOffset')}&calculationMethod=${conf.get('calculationMethod')}`;

    // oluşturulan url üzerinden bir veri alma isteği gönder
    const request = await fetch(url);

    // istekten dönen kodu bir sabite ata
    const status = await request.status;

    // eğer istekten dönen kod 200 değil yani istek başarılı değil ise
    if (status !== 200) {
        console.log(`${Fore.Red}Bir hata ile karşılaşıldı. Hata kodu: ${Fore.BrightRed}${status}${Fore.Reset}`);
        console.log(`${Fore.Yellow}Tekrar deneyin.${Fore.Reset}`);
        return status;
    }

    // istekten dönen veriyi bir sabite ata
    const requestData = await request.json();

    // istekten dönen veriyi log fonskiyonuna ver ve biçimlendirerek konsol ekranına (stdout) yazdır
    log(requestData);

    // hatasız çıkış yap
    return 0;

    /*

    * Örnek çıktı:

    {
        "place": {
            "country": "Turkey",
            "countryCode": "TR",
            "city": "Adana",
            "region": "Adana",
            "latitude": 37.001902,
            "longitude": 35.328827
        },
        "times": {
            "2024-05-24": [
                "03:38",
                "05:17",
                "12:41",
                "16:31",
                "19:54",
                "21:27"
            ]
        }
    }

    */
}

// main fonksiyonunu çalıştır ve verilen çıkış kodu ile programı sonlandır
process.exit(await main());


/* ○----- Ana işlemler -----○ */

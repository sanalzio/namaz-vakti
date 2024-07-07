### Windows için

1) [Bu linke tıklayarak Windows için çalıştırılabilir dosyayı indirin.](https://github.com/sanalzio/namaz-vakti/releases/latest/download/namaz-vakti-windows-x64.exe)
2) dosya ismini `namaz` olarak değiştirin.
3) Dosyayı kesin.
4) Ve `C:\Windows\System32\` adresine yapıştırın.
5) İşlem tamam. Artık terminalinize `namaz` yazarak kullanabilirsiniz.

### GNU/Linux ve MacOS için

1) [/releases](https://github.com/sanalzio/namaz-vakti/releases/latest) adresinden sisteminize uygun çalıştırılabilir dosyayı indirin.
2) İndirilen dosyanın bulunduğu dizinde bir terminal penceresi açın.
3) Aşağıdaki komutları terminal penceresine yazın.
    
    ```bash
    sudo mv "./<indirilen dosaynın ismi>" /bin/namaz
    chmod +x /bin/namaz
    ```

    > [!IMPORTANT]
    > İlk komutdaki `<indirilen dosaynın ismi>` bölümünü indirdiğiniz dosyanın adı ile değiştirin.

4) İşlem tamam. Terminal pencerenizi yeniden başlatıp `namaz` komutunu kullanmanız yeterli.
function ekranayaz()           //ekrana yazdırma fonksiyonunu tanımlama 
{
document.secim.degisken.value="";       // document.secimi i degiskenine atadık.
for (i=0;i<document.secim.length;i++)  // i ise document.secim.length'e kadar birer birer artacak.
  {
  if (document.secim.[i].checked)    //döngüye document.secim  checkleri atanırsa
   
    document.secim.degisken.value += document.secim.[i].value + ", "; //degiskeni döngüye dahil et ve görüntüle
    }
}
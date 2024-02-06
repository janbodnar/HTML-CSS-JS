# Tvorba webových stránok

Úvodné pojmy a definície. Technológie využívané pre tvorbu webových stránok. 

## Definície

Webová stránka (webové sídlo - website) je kolekcia stránok ktorá je identifikovaná unikátnou  
doménou a je publikovaná na jednom alebo viacerých webových serveroch.  

- statické stránky, https://tkinterpython.top
- dynamické stránky, https://en.wikipedia.org/wiki/Main_Page 
- webová aplikácia, https://app.diagrams.net/?src=about
- webový portál, https://azet.sk
- sociálna sieť, https://x.com
- webová služba, https://www.loggly.com/solution/laas-logging-as-a-service/

Stránky sú poprepájané pomocou hyperlinkov. Slúžia na navigáciu medzi jednotlivými stránkami a externými zdrojmi.  
Vo väčšine prípadov majú webové stránku svoju úvodnú, domovskú stránku (home page), ktorá obsahuje úvodný popis  
stránky a jej základnú navigáciu.  

V súčasnosti sa často časť funkcionality aplikácií outsorcuje na externé služby. Pretože ide o veľmi náročnú a  
neustále meniacu sa problematiku, tak sa outsorcingom zjednoduší tvorba našej aplikácie. Ide bežne o služby  
ako je logging, vyhľadávanie, autentifikácia, správa databáz.  

Z hľadiska funkcionality rozdeľujeme webové aplikácie do typických kategórií: CMS (Content Management System),  
elektronický obchod (e-commerce), firemné stránky, produktové stránky, či rôzne blogy.  

Špecifickou kategóriou sú tzv. web content management systems, ktoré automatizujú a urýchľujú tvorbu webov.   
Medzi najpopulárnejšie systémy v súčasnosti patria Wordpress, Drupal a Joomla. Odhaduje sa, že viac ako 40% z  
top 10 miliónov stránok beží pod Wordpress. (Údaj z decembra 2023.) Tu sa pod vývojom webových aplikácií rozumie  
konfigurácia jednotlivých zložiek aplikácie a programovanie pluginov.  

## Roly 

Žiaden vývojár nedokáže obsiahnuť všetky potrebné znalosti pre tvorbu webu. Developeri sa často špecializujú na  
určitú špecifickú oblasť. 

- Dizajnéri
- Architekti
- Databázoví špecialisti
- Testeri
- Securiťáci
- Špecialisti pre backend alebo frontend
- Devops špecialisti

Developeri častokrát migrujú medzi rolami. Rola testera alebo frontend vývojára je ideálnou pozíciou pre  
začínajúcich vývojárov. 


## Technológie

Základné technológie, ktoré sa využívajú na tvorbu webových stránok a aplikácií:

- HTML
- CSS
- JavaScript
- PHP/JS/Python/Java/C#

Kombinácii HTML/CSS/JS sa hovorí *frontend*. Business logika aplikácie naprogramovaná v niektorom  
jazyku sa nazýva *backend*. Dnes sa však rozdiel medzi frontendom a backendom stiera, pretože mnohé  
aplikácie prenášajú logiku aplikácie do browsera (aplikácie založené na React/Vue/Angular).  

Technológie, ktoré umožňujú beh webových stránok:

- Serverový operačný systém (Linux/Unix/Windows)
- Webový server (Apache/Nginx) 
- Databázy (MySQL/PostgreSQL) 
- Prehliadač/klient (Edge/Firefox/Chrome)

## Podporné nástroje

Existuje veľké množstvo nástrojov, ktorá nám pomáhajú pri tvorbe webu:  

- Repozitár (Git/Github)
- IDE (VS Code, PHP Storm, Web Storm)
- FTP klient (FileZilla, WinSCP)
- Developer tools
- Terminál
- Konzolové nástroje (curl, Putty, scp, ssh)
  
## Klient a server

Webové stránky/aplikácie fungujú na architektúre klient/server. *Klient* je najčastejšie webový  
prehliadač. Môže byť ale aj konzolovou aplikáciou (curl) alebo iným druhom aplikácie.  

*Server* je hardware/OS, na ktorom sa nachádzajú naše dokumenty a kde beží naša aplikácia.  
Tam sa tiež nachádzajú webový server, prípadne databáza.  

## Webové frameworky

V súčasnosti sa webové aplikácie nevyvíjajú v čistom (plain vanilla) PHP alebo JS, ale používajú sa frameworky.  
Webový framework je súbor knižníc na tvorbu webových aplikácií. Tieto knižnice obsahujú predefinovanú  
funkcionalitu, ktorá je bežná pri vývoji webových aplikácií.  

- Spracovanie formulárov
- Bezpečnosť aplikácie
- Validácia dát
- Logovanie udalostí
- Architektúra aplikácie
- Automatizácia tvorby aplikácie
- Testovanie

Medzi populárne backendové webové frameworky patria Laravel (PHP), Symfony (PHP), Express (JS),  
Spring Boot (Java) alebo C# (ASP.NET Core). Medzi pupulárne frontendové JS frameworky patria  
Angular, React a Vue.  

## Hosting 

Kde vlastne sa nachádzajú naše webové dokumenty?  
Webové stránky/aplikácie sa hostujú na externých zdrojoch. (Len zriedkakedy sa hostujú u nás, na  
našich serveroch.)  

Poznáme:

- Zdieľaný hosting (U nás napr. Websupport)
- Dedikovaný hosting
- VPS (DigitalOcean, Vultr)
- Cloud (AWS, Azure)
- Serverové farmy

*Content delivery network (CDN)* je geograficky distribuovaná skupina serverov ktorá kešuje obsah  
blízko ku koncovému užívateľovi. CDN umožňuje rýchly a bezpečný transfer webového kontentu, vrátane  
HTML dokumentov, JS a CSS súborov, obrázkov a videí.  

Medzi známe CDN patria:

- Cloudflare
- Amazon CloudFront
- Alibaba Cloud Content Delivery Service
- Fastly
- Lumen
- Microsoft Azure CDN



## Architektúra, štandardné postupy

Špecifickou oblasťou tvorby webových aplikácií je návrh jej architektúry. Pri návrhu aplikácie sa využívajú  
rokmi overené postupy. Dobre navrhnutá aplikácia zvýši šancu jej úspešného zavŕšenia, predĺži jej životnosť   
a zlepší jej škálovateľnosť.  

Aplikácie sa skladajú z viacerých vrstiev: databázová, business, presenčná vrstva. MVC návrh delí aplikáciu  
do nasledovných prvkov: model, view a controller.  

## Modely vývoja webových aplikácií

Existuje viacero postupov pre vývoj softwéru (Software Development Life Cycle - SDLC)

- Waterfall
- Agile
- Iterative
- V-Shape
- Spiral

  
## Budúcnosť

- WebAssembly
- Blockchain
- Web 3
- AI boty, Strojové učenie
- Hlasové vyhľadávanie

const MbtiResultData = {
  ISTJ: {
    description: `Jako ISTJ jesteś uosobieniem lojalności, rzetelności i wewnętrznego kompasu moralnego. Twoją największą siłą jest konsekwencja — mówisz to, co myślisz, i robisz to, co obiecałeś. W świecie pełnym zmiennych i nieprzewidywalnych zjawisk, stanowisz ostoję stabilności i rozsądku. Ludzie postrzegają Cię jako osobę poważną, godną zaufania i niezwykle zorganizowaną – dokładnie taką, jaką warto mieć po swojej stronie w kryzysie.

    Choć rzadko szukasz uwagi czy rozgłosu, Twoje działania przemawiają głośniej niż słowa. Budujesz zaufanie powoli, ale trwale – poprzez praktyczne wsparcie, punktualność i głęboko zakorzenione poczucie obowiązku. Jesteś lojalnym członkiem rodziny, niezawodnym współpracownikiem i osobą, która najczęściej bierze na siebie ciężar odpowiedzialności – nawet jeśli nikt tego głośno nie powie.

    W życiu cenisz rutynę, porządek i jasne zasady. Nie ulegasz emocjom ani nastrojom chwili, podejmując decyzje w oparciu o logiczne argumenty i konkretne dane. Czasem możesz sprawiać wrażenie zbyt sztywnego lub powściągliwego, ale dla Ciebie to właśnie konsekwencja i struktura są podstawą wolności.

    Twoim wyzwaniem może być elastyczność — świat nie zawsze da się uporządkować zgodnie z planem. Ale gdy uczysz się łączyć swój analityczny umysł z otwartością na inne punkty widzenia, zyskujesz jeszcze większą siłę: zdolność nie tylko do egzekwowania zasad, ale też do ich świadomego doskonalenia.`,

    traits: [
      { name: "Introwertyczny", value: 69 },
      { name: "Realistyczny", value: 81 },
      { name: "Analityczny", value: 78 },
      { name: "Planujący", value: 86 },
      { name: "Czujący", value: 38 },
    ],
  },

  ISFJ: {
    description: `Jako ISFJ jesteś opoką codziennej troski i cichej siły. Twoja obecność jest łagodna, ale niezwykle istotna — potrafisz niepostrzeżenie wprowadzać harmonię, stabilność i serdeczność tam, gdzie innym brakuje wyczucia. Kierujesz się głębokim poczuciem obowiązku wobec bliskich i społeczności, a Twoje działania — choć często niezauważone — są jak filary, na których opiera się wiele relacji, projektów i rodzinnych więzi.

    Obrońcy tacy jak Ty są mistrzami drobnych gestów, które mają ogromne znaczenie. Pamiętasz o urodzinach, zauważasz niewypowiedziane potrzeby innych i ofiarowujesz pomoc, zanim ktokolwiek zdąży o nią poprosić. Nie szukasz poklasku — wystarczy Ci świadomość, że zrobiłeś coś dobrego. Choć na zewnątrz możesz wydawać się cichy lub powściągliwy, wewnątrz kryje się bogaty świat emocji, lojalności i skrupulatności.

    Twoją ogromną siłą jest dbałość o szczegóły i spójność w działaniu — potrafisz dostrzec to, co niewidoczne dla innych, i sprawić, by każdy element codzienności funkcjonował sprawnie i z troską. Łączysz empatię z analitycznym umysłem, co czyni Cię wyjątkowym w budowaniu trwałych relacji, opiece nad innymi i realizowaniu odpowiedzialnych zadań.

    Czasem możesz zbyt wiele brać na siebie lub zapominać o własnych potrzebach — szczególnie gdy skupiasz się na służeniu innym. Dlatego pamiętaj: Twoja obecność sama w sobie jest wartością, a dbanie o siebie to nie egoizm — to inwestycja w Twoją długofalową siłę.`,

    traits: [
      { name: "Introwertyczny", value: 64 },
      { name: "Realistyczny", value: 76 },
      { name: "Uczuciowy", value: 71 },
      { name: "Planujący", value: 82 },
      { name: "Czujący", value: 62 },
    ],
  },

  INFJ: {
    description: `Jako INFJ jesteś kimś więcej niż tylko myślicielem – jesteś architektem znaczenia, duszą, która czuje świat głębiej niż większość. To, co dla innych jest powierzchnią, Ty widzisz jako ukryty system powiązań, emocji i przeznaczenia. Rzadki i wyjątkowy typ osobowości, INFJ to idealista z misją — nie tylko marzysz o lepszym świecie, ale pragniesz realnie przyczynić się do jego przemiany.

    Twoja wewnętrzna busola moralna jest potężna. Nie działasz z potrzeby aprobaty, lecz z głębokiego poczucia sensu i osobistej prawdy. Sukces nie oznacza dla Ciebie władzy, pieniędzy czy uznania – sukces to życie w zgodzie z wartościami, służba większemu celowi i realne wpływanie na innych w subtelny, ale trwały sposób.

    Choć możesz wydawać się cichy, w środku płonie w Tobie intensywny ogień wizji i przekonań. Łączysz głęboką empatię z doskonałą intuicją — potrafisz odczytywać potrzeby innych, zanim zostaną wypowiedziane. Często przyciągasz ludzi, którzy szukają zrozumienia i autentycznego połączenia — jesteś dla nich światłem w ciemności.

    Twoje wyzwanie? Nie zatracić się w oczekiwaniach świata i cudzych emocjach. Twoja wrażliwość jest darem, ale wymaga ochrony. Kiedy uczysz się stawiać granice i dbać o własne potrzeby, Twoja siła staje się jeszcze pełniejsza. Bo INFJ to nie tylko idealista – to strateg zmiany, który wie, że transformacja świata zaczyna się od wnętrza.`,

    traits: [
      { name: "Introwertyczny", value: 72 },
      { name: "Intuicyjny", value: 83 },
      { name: "Uczuciowy", value: 76 },
      { name: "Planujący", value: 68 },
      { name: "Czujący", value: 65 },
    ],
  },
  INTJ: {
    description: `Jako INTJ jesteś uosobieniem strategii, niezależności myślenia i intelektualnej dyscypliny. Twój umysł działa jak precyzyjny mechanizm — nieustannie analizuje, modeluje i optymalizuje wszystko, co Cię otacza. Rzadki i elitarny typ osobowości, Architekt nie tylko myśli samodzielnie, ale również projektuje systemy, idee i przyszłość z chirurgiczną precyzją.

    Samotność szczytu nie jest Ci obca. Nie dlatego, że unikasz ludzi — ale dlatego, że niewielu potrafi nadążyć za Twoją wizją i głębią analizy. Cenisz klarowność, logikę i wewnętrzną spójność — zarówno w myśleniu, jak i działaniu. Fałsz, hipokryzja czy intelektualne płycizny wyczuwasz natychmiast i bez litości odrzucasz.

    Nie jesteś osobą impulsywną – Twoje decyzje są dobrze przemyślane, oparte na długoterminowej wizji i spójnej logice. Rzadko działasz dla poklasku. W Twoim świecie najważniejsze są skuteczność, rozwój i mistrzostwo w wybranej dziedzinie. Lubisz mieć kontrolę nad otoczeniem, ale nie po to, by rządzić – tylko po to, by udoskonalać.

    Choć możesz być postrzegany jako chłodny lub zdystansowany, często skrywasz pod powierzchnią intensywną wewnętrzną motywację i lojalność wobec tych, którzy zdobyli Twoje zaufanie. Twoim wyzwaniem bywa cierpliwość wobec mniej analitycznych osób – ale kiedy łączysz swój umysł z umiejętnością przekazywania idei, stajesz się kimś, kto naprawdę zmienia zasady gry.`,

    traits: [
      { name: "Introwertyczny", value: 77 },
      { name: "Intuicyjny", value: 79 },
      { name: "Analityczny", value: 84 },
      { name: "Planujący", value: 72 },
      { name: "Asertywny", value: 61 },
    ],
  },

  ISTP: {
    description: `Jako ISTP jesteś odkrywcą rzeczywistości – Twoje dłonie i umysł pracują w harmonii, by zrozumieć świat nie przez teorię, ale przez bezpośrednie doświadczenie. Masz w sobie naturalny pęd do rozbierania rzeczy na części, testowania ich granic i składania ich na nowo – lepszych, sprawniejszych, bardziej dopasowanych do realnych potrzeb. Twoje motto? „Sprawdźmy, jak to działa”.

    Jesteś typem twórcy-inżyniera, który nie potrzebuje sztywnego planu, by działać skutecznie. Wręcz przeciwnie – najlepiej odnajdujesz się w spontanicznych działaniach, gdy możesz improwizować, analizować i wprowadzać rozwiązania tu i teraz. Twoje decyzje są oparte na logice, ale nie brakuje im intuicji opartej na bezpośrednim kontakcie ze światem.

    Nie szukasz uwagi, nie interesują Cię zasady „bo tak się robi”. Jesteś samodzielny i praktyczny – potrafisz naprawić, stworzyć, udoskonalić. Niejednokrotnie zaskakujesz innych swoją zaradnością, opanowaniem w stresie i niekonwencjonalnym podejściem do problemów, które wielu wydają się nie do ruszenia.

    Twoją mocną stroną jest elastyczność – nie przywiązujesz się do jedynego słusznego rozwiązania, bo wiesz, że każde narzędzie, każda maszyna i każdy pomysł można zawsze poprawić. Twoim wyzwaniem może być komunikacja emocjonalna – nie zawsze mówisz, co czujesz, ale Twoje działania często mówią więcej niż słowa. I właśnie za to wielu Cię podziwia.`,

    traits: [
      { name: "Introwertyczny", value: 61 },
      { name: "Realistyczny", value: 85 },
      { name: "Analityczny", value: 73 },
      { name: "Spontaniczny", value: 78 },
      { name: "Asertywny", value: 60 },
    ],
  },

  ISFP: {
    description: `Jako ISFP żyjesz po to, by czuć – świat to dla Ciebie płótno, a każdy dzień to szansa na wyrażenie siebie. Nie potrzebujesz sceny, by być artystą – Twoją galerią są codzienne wybory: sposób, w jaki się ubierasz, to jak tworzysz atmosferę wokół siebie, jak gotujesz, jak słuchasz ludzi. Jesteś Poszukiwaczem Przygód nie dlatego, że szukasz skrajnych doznań, ale dlatego, że chcesz poczuć życie we wszystkich jego kolorach.

    Twoją siłą jest autentyczność. Nie próbujesz dopasować się do cudzych oczekiwań – działasz zgodnie z tym, co czujesz, i nie boisz się podążać własną drogą, nawet jeśli prowadzi ona w zupełnie innym kierunku niż ścieżki innych. Fascynuje Cię piękno – nie tylko to wizualne, ale także piękno gestu, relacji, emocji zaklętej w małych chwilach.

    Z zewnątrz możesz wydawać się cichy, ale w środku tętni w Tobie energia twórcza i wrażliwość. Potrafisz być głęboko empatyczny, lojalny i opiekuńczy, a jednocześnie nieprzewidywalny – bo kiedy coś Cię poruszy, potrafisz rzucić wszystko i ruszyć za tym impulsem, bez oglądania się za siebie.

    Twoim wyzwaniem może być trudność w długofalowym planowaniu i unikanie konfliktów kosztem własnych potrzeb. Ale kiedy znajdziesz przestrzeń, by rozkwitać we własnym tempie, zyskujesz wyjątkową moc: inspirujesz innych do życia pełnego zmysłowości, wolności i autentyczności.`,

    traits: [
      { name: "Introwertyczny", value: 62 },
      { name: "Realistyczny", value: 68 },
      { name: "Uczuciowy", value: 74 },
      { name: "Spontaniczny", value: 81 },
      { name: "Czujący", value: 66 },
    ],
  },

  INFP: {
    description: `Jako INFP jesteś duszą, która widzi świat nie tylko takim, jakim jest — ale przede wszystkim takim, jakim mógłby być. W Twoim wnętrzu tętni życie pełne emocji, wyobraźni i znaczeń, których wielu nawet nie zauważa. Jesteś marzycielem i idealistą, dla którego każda relacja, każda myśl, każda chwila może stać się początkiem głębszej opowieści.

    Twoją naturą jest empatia – wyczuwasz nastroje i emocje innych z niezwykłą precyzją. Sztuka, muzyka, przyroda, a nawet przypadkowe spojrzenie nieznajomego mogą głęboko Cię poruszyć. Zamiast biec przez życie, Ty je chłoniesz, zadając pytania: „co to znaczy?”, „co mogę zrobić?”, „czy to zgodne z moimi wartościami?”.

    Jesteś twórcą światów – nie zawsze dosłownie, ale zawsze emocjonalnie. Twoje pasje są nieoczywiste, osobiste i głębokie. Możesz pisać, malować, komponować, pomagać – ale zawsze w taki sposób, który jest w pełni zgodny z tym, kim jesteś. Twoja potrzeba autentyczności jest silniejsza niż potrzeba uznania – to wewnętrzne „bycie sobą” stanowi dla Ciebie największy kompas.

    Czasami możesz czuć się zagubiony w świecie, który stawia efektywność ponad wrażliwość. Ale właśnie ta subtelność, ta cisza pełna znaczeń i ta lojalność wobec ideałów czyni Cię wyjątkowym. Twoje istnienie przypomina szept — cichy, ale głęboko transformujący tych, którzy się wsłuchają.`,

    traits: [
      { name: "Introwertyczny", value: 74 },
      { name: "Intuicyjny", value: 81 },
      { name: "Uczuciowy", value: 78 },
      { name: "Spontaniczny", value: 69 },
      { name: "Czujący", value: 70 },
    ],
  },

  INTP: {
    description: `Jako INTP jesteś umysłem, który nieustannie pracuje – niczym cichy mechanizm poszukujący wzorców, paradoksów i uniwersalnych prawd. Twoje myślenie wyprzedza codzienność – nie z próżności, lecz z potrzeby zrozumienia. Jesteś logiczny, ale nie sztywny. Kreatywny, ale nie chaotyczny. Twoje pomysły są jak struktury – przemyślane, wewnętrznie spójne i często wyprzedzające swoje czasy.

    Twoim naturalnym środowiskiem są pytania – szczególnie te, które nie mają łatwych odpowiedzi. Od najmłodszych lat prawdopodobnie zadawałeś pytania „dlaczego?”, „co by było, gdyby?”, „jak to działa?”. Rozważania te nie są dla Ciebie abstrakcyjne – to Twoja codzienność. Zdarza się, że prowadzisz pełnoprawne debaty… sam ze sobą. I bywa, że wygrywasz obie strony.

    Choć możesz być postrzegany jako wycofany, w rzeczywistości to, co dzieje się w Twojej głowie, bywa bogatsze niż niejedna rozmowa. Masz naturalną zdolność do rozkładania złożonych problemów na czynniki pierwsze, tworzenia koncepcji, które inni uznają za błyskotliwe – albo niezrozumiałe. Niezależność intelektualna to Twoje terytorium – nie znosisz dogmatów, półprawd i powierzchowności.

    Twoim wyzwaniem bywa działanie – bo pomysły łatwo się mnożą, ale trudniej je wcielić w życie. Ale kiedy uczysz się łączyć siłę umysłu z determinacją do działania, stajesz się kimś naprawdę rzadkim: innowatorem, który nie tylko myśli inaczej, ale potrafi zmieniać świat – od środka.`,

    traits: [
      { name: "Introwertyczny", value: 71 },
      { name: "Intuicyjny", value: 84 },
      { name: "Analityczny", value: 86 },
      { name: "Spontaniczny", value: 67 },
      { name: "Asertywny", value: 58 },
    ],
  },

  ESTP: {
    description: `Jako ESTP jesteś uosobieniem działania, energii i odwagi. Gdziekolwiek się pojawisz, tam dzieje się coś żywego, dynamicznego – jesteś jak błyskawica, która ożywia każde towarzystwo. Uwielbiasz być w centrum wydarzeń, podejmować ryzyko, improwizować i testować granice – zarówno swoje, jak i otoczenia. Dla Ciebie świat to plac zabaw, laboratorium i scena… wszystko w jednym.

    Nie cierpisz stagnacji. Kiedy inni jeszcze debatują, Ty już działasz. Planowanie? Tylko tyle, ile trzeba. Wolisz uczyć się w praktyce – szybko, konkretnie, na własnej skórze. Popełniasz błędy? Oczywiście. Ale równie szybko je naprawiasz i idziesz dalej, bogatszy o doświadczenie.

    Twoja komunikacja jest bezpośrednia, czasem bezczelna, ale zawsze autentyczna. Masz cięty humor i zaraźliwą pewność siebie, która potrafi porwać tłumy – lub przynajmniej najbliższą grupę na imprezie. Nie boisz się wyzwań, lubisz rywalizację i czujesz się najlepiej, gdy coś się dzieje. Cenisz konkret, działanie i natychmiastowy rezultat – dlatego teoretyzowanie bez celu może Cię szybko znudzić.

    Twoją siłą jest natychmiastowa reakcja – w sytuacjach kryzysowych potrafisz zachować zimną krew i podjąć trafne decyzje, zanim inni zdążą zareagować. Twoim wyzwaniem bywa zbyt duży impet, który może sprawiać, że ignorujesz długofalowe skutki lub emocje innych. Ale kiedy nauczysz się chwilami zatrzymywać, by spojrzeć w głąb siebie – Twoja skuteczność i charyzma osiągają nowy poziom.`,

    traits: [
      { name: "Ekstrawertyczny", value: 83 },
      { name: "Realistyczny", value: 79 },
      { name: "Analityczny", value: 63 },
      { name: "Spontaniczny", value: 87 },
      { name: "Asertywny", value: 72 },
    ],
  },

  ESFP: {
    description: `Jako ESFP jesteś duszą towarzystwa, która zamienia zwykłe chwile w święto życia. Masz dar przyciągania ludzi jak magnes – Twoja otwartość, energia i szczerość sprawiają, że inni czują się przy Tobie lżej, radośniej i bardziej sobą. Nie jesteś tu po to, by analizować życie — Ty je smakujesz, dotykasz, wyrażasz, celebrujesz.

    Twoje motto? „Tu i teraz” – nie odkładasz szczęścia na później. Kochasz świat wszystkimi zmysłami: muzyką, tańcem, śmiechem, kolorem. Gdy wchodzisz do pokoju, wnosi się ze sobą światło. Uwielbiasz dzielić się entuzjazmem z innymi i zarażać ich tym, co kochasz. Twój urok osobisty i spontaniczność sprawiają, że jesteś naturalnym liderem wśród znajomych – nie przez dominację, ale przez czyste „bycie sobą”.

    Choć na pierwszy rzut oka możesz wydawać się beztroski, skrywasz głęboką wrażliwość. Masz ogromne serce i potrafisz dawać z siebie wiele – czas, uwagę, troskę. Potrafisz być emocjonalnie obecny i lojalny wobec tych, na których Ci zależy. Nie znosisz sztuczności i dystansu — cenisz relacje pełne emocji i autentyczności.

    Twoim wyzwaniem bywa unikanie trudnych tematów lub ucieczka w rozrywkę, gdy pojawiają się zmartwienia. Ale kiedy uczysz się równoważyć serce z refleksją, Twoja osobowość staje się czymś więcej niż tylko energią – staje się inspiracją do życia prawdziwie i w pełnym świetle.`,

    traits: [
      { name: "Ekstrawertyczny", value: 86 },
      { name: "Realistyczny", value: 74 },
      { name: "Uczuciowy", value: 79 },
      { name: "Spontaniczny", value: 84 },
      { name: "Czujący", value: 69 },
    ],
  },

  ENFP: {
    description: `Jako ENFP jesteś iskrą, która zapala świat. Twoja obecność przyciąga – nie tylko dlatego, że jesteś towarzyski, pełen energii i otwartości, ale dlatego, że Twoje entuzjastyczne podejście do życia jest szczere i zaraźliwe. Masz rzadką zdolność łączenia lekkości z głębią – jesteś wolnym duchem, który jednocześnie szuka sensu, autentyczności i prawdziwych relacji.

    Nie znosisz nudy ani rutyny. Twoja wyobraźnia nie zna granic – w jednej chwili możesz żartować z przyjaciółmi, a w drugiej rozważać sens życia, miłości czy ludzkiego potencjału. Uwielbiasz rozmawiać o marzeniach, możliwościach, przyszłości – nie dlatego, że boisz się teraźniejszości, ale dlatego, że widzisz więcej niż to, co widać na pierwszy rzut oka.

    W relacjach jesteś ciepły, zaangażowany i hojny emocjonalnie. Pragniesz głębokich więzi, w których można być w pełni sobą, bez masek i schematów. Ludzie czują się przy Tobie wyjątkowi – bo naprawdę ich słuchasz i dostrzegasz w nich to, co najlepsze. W grupie jesteś duszą towarzystwa, ale nie z potrzeby uznania – tylko z potrzeby połączenia.

    Twoim wyzwaniem może być nadmiar pomysłów i rozkojarzenie – Twoja energia chce być wszędzie naraz. Ale kiedy nauczysz się kierować ją z intencją, stajesz się siłą twórczą, która naprawdę zmienia świat – nie przez dominację, lecz przez inspirację.`,

    traits: [
      { name: "Ekstrawertyczny", value: 78 },
      { name: "Intuicyjny", value: 82 },
      { name: "Uczuciowy", value: 76 },
      { name: "Spontaniczny", value: 80 },
      { name: "Czujący", value: 65 },
    ],
  },

  ENTP: {
    description: `Jako ENTP jesteś iskrą intelektualnej prowokacji — błyskotliwy, szybki w ripostach, nienasycony w zadawaniu pytań. Dla Ciebie każda rozmowa to szansa nie tylko na poznanie drugiego człowieka, ale i na podważenie tego, co uznane za pewnik. Kochasz debatować – nie po to, by wygrać, lecz by odkryć nowe punkty widzenia, przetestować argumenty, zainicjować błysk myślenia tam, gdzie wcześniej była tylko zgoda.

    Nie boisz się kontrowersji. Wprost przeciwnie — tematy trudne, dziwne, niewygodne to Twoje naturalne środowisko. Masz cięty język i figlarny humor, który potrafi rozbroić atmosferę lub… wzniecić burzę. Ale rzadko robisz to w złej wierze – po prostu żyjesz intelektualną stymulacją i pasją do odkrywania. Twoje pomysły są odważne, czasem szalone, często genialne – a Ty masz odwagę je wyrazić, nawet jeśli burzą porządek.

    Jesteś innowatorem z duszą performera. Potrafisz zarazić innych entuzjazmem, inspirować ich do działania i myślenia poza schematami. Nuda to dla Ciebie wróg numer jeden – dlatego unikasz rutyny, szukając nowości, zmienności, kreatywnego fermentu.

    Twoim wyzwaniem może być niedokończone projekty lub lekceważenie emocji tych, którzy nie nadążają za Twoją werbalną energią. Ale kiedy uczysz się łączyć swój umysł z empatią i cierpliwością – stajesz się kimś więcej niż tylko debatującym błyskotliwcem. Stajesz się liderem idei, który naprawdę potrafi zmieniać świat – z humorem, zapałem i rozmachem.`,

    traits: [
      { name: "Ekstrawertyczny", value: 76 },
      { name: "Intuicyjny", value: 80 },
      { name: "Analityczny", value: 75 },
      { name: "Spontaniczny", value: 82 },
      { name: "Asertywny", value: 70 },
    ],
  },

  ESTJ: {
    description: `Jako ESTJ wcielasz w życie wartości, które dla wielu stanowią fundament stabilności: porządek, obowiązek, odpowiedzialność i logika. Twoją domeną są struktury — zarówno społeczne, jak i organizacyjne — w których możesz objąć przywództwo, egzekwować standardy i skutecznie realizować cele. Dla Ciebie liczy się konkret, efektywność i przejrzystość – właśnie tam najlepiej wykorzystujesz swój talent do planowania i zarządzania.

    Twoja obecność jest wyraźna i stanowcza. Potrafisz podejmować decyzje bez wahania, kierując się faktami i racjonalnym osądem. Cenisz tradycję oraz zasady, bo to one — według Ciebie — zapewniają porządek i sprawne funkcjonowanie każdego zespołu, firmy czy społeczności.

    W relacjach jesteś bezpośredni, co może być odbierane jako dominujące, ale Twoje intencje są jasne: dążysz do celu, nie tracąc czasu na niepotrzebne niedomówienia. Dobrze sprawdzasz się w roli lidera — zarówno formalnego, jak i nieformalnego — bo potrafisz organizować innych, motywować ich do działania i dawać przykład konsekwencji.

    Z drugiej strony, warto, byś czasem zrobił krok wstecz i wsłuchał się w emocje swoje oraz innych — nie po to, by zrezygnować z zasad, ale by jeszcze lepiej je wdrażać w sposób, który uwzględnia ludzką perspektywę.`,

    traits: [
      { name: "Ekstrawertyczny", value: 56 },
      { name: "Realistyczny", value: 58 },
      { name: "Analityczny", value: 71 },
      { name: "Planujący", value: 75 },
      { name: "Asertywny", value: 67 },
    ],
  },

  ESFJ: {
    description: `Jako ESFJ jesteś sercem każdej społeczności – tym, który dba, pamięta, łączy i troszczy się, często bez fanfar i oczekiwań. Twoja obecność w życiu innych to nie przypadek – masz naturalne powołanie do tworzenia więzi, budowania wspólnoty i niesienia wsparcia tam, gdzie go najbardziej potrzeba. Dla Ciebie życie zyskuje pełnię dopiero wtedy, gdy można je dzielić z innymi.

    Cenisz uprzejmość, porządek i harmonię – nie jako sztywne zasady, lecz jako formy wyrażania szacunku i czułości wobec drugiego człowieka. Potrafisz zauważyć to, co niedopowiedziane, i odpowiedzieć gestem, który daje poczucie bezpieczeństwa. Masz wielkie serce i ogromną gotowość, by je ofiarować – rodzinie, przyjaciołom, sąsiadom, współpracownikom.

    Lubisz, gdy wszystko ma swoje miejsce – również w relacjach. Czujesz się najlepiej, gdy możesz być potrzebny i mieć wpływ na dobre samopoczucie innych. Jesteś niezawodny, obowiązkowy i bardzo oddany – czasem aż do granicy zapominania o sobie.

    Twoją siłą jest empatia połączona z praktycznym działaniem – nie tylko współczujesz, ale też organizujesz, pomagasz, wspierasz. Twoim wyzwaniem może być nadmierne przejmowanie się cudzymi opiniami i trudność z wyznaczaniem granic. Ale gdy nauczysz się kochać równie mocno siebie, jak kochasz innych – stajesz się nie tylko opiekunem świata, ale jego prawdziwym fundamentem.`,

    traits: [
      { name: "Ekstrawertyczny", value: 72 },
      { name: "Realistyczny", value: 70 },
      { name: "Uczuciowy", value: 83 },
      { name: "Planujący", value: 77 },
      { name: "Czujący", value: 71 },
    ],
  },

  ENFJ: {
    description: `Jako ENFJ jesteś kimś, kto nie tylko wierzy w ludzi — ale potrafi wydobyć z nich to, co najlepsze. Masz w sobie naturalny dar przywództwa, który nie opiera się na sile ani kontroli, lecz na inspiracji, trosce i wizji wspólnego dobra. Twoje powołanie jest głębsze niż zwykłe osiągnięcia – pragniesz wpływać na świat, uzdrawiać relacje, wzmacniać tych, którzy zwątpili w siebie.

    Masz wyjątkową zdolność łączenia idealizmu z pragmatyzmem – potrafisz marzyć o lepszym świecie, ale też podjąć konkretne działania, by go zbudować. Twoja obecność często przyciąga ludzi – czują się przy Tobie dostrzegani, zmotywowani, ważni. Umiesz przemawiać, przewodzić, wspierać, ale też słuchać z uwagą i empatią.

    Jesteś osobą, która nie unika trudnych sytuacji — wprost przeciwnie. Tam, gdzie pojawia się kryzys, Ty często jesteś tą osobą, która zbiera siły innych, podnosi ich na duchu i pomaga ruszyć dalej. Twoja pasja może rozpalać serca, ale też wzruszać do łez. Masz dar odczuwania emocji innych ludzi jak własnych – i bardzo poważnie traktujesz odpowiedzialność, jaką niesie za sobą wpływ.

    Twoim wyzwaniem bywa zapominanie o sobie. Czasem tak bardzo skupiasz się na pomaganiu innym, że wypalasz się emocjonalnie. Ale kiedy nauczysz się dawać sobie tyle samo uwagi, co innym — stajesz się nie tylko liderem, ale prawdziwą siłą napędową przemiany.`,

    traits: [
      { name: "Ekstrawertyczny", value: 75 },
      { name: "Intuicyjny", value: 76 },
      { name: "Uczuciowy", value: 85 },
      { name: "Planujący", value: 72 },
      { name: "Czujący", value: 70 },
    ],
  },

  ENTJ: {
    description: `Jako ENTJ jesteś urodzonym dowódcą – liderem nie tylko z tytułu, ale z charakteru, umysłu i wizji. Twoja obecność ma ciężar – wchodzisz do pokoju i ludzie natychmiast wyczuwają, że masz plan. Twoja charyzma, pewność siebie i strategiczne myślenie czynią z Ciebie naturalnego przewodnika – kogoś, kto potrafi wyznaczyć cel i przekonać innych, by za nim podążyli.

    Nie boisz się odpowiedzialności. Przeciwnie – dążysz do niej, bo wiesz, że tylko mając wpływ, można wprowadzać realną zmianę. Jesteś osobą, która potrafi myśleć w skali – analizujesz dane, przewidujesz konsekwencje, kalkulujesz ryzyko. Twój umysł działa jak silnik: logiczny, szybki, zorientowany na cel.

    Choć możesz być postrzegany jako surowy, w rzeczywistości kierujesz się skutecznością, nie emocją. Wierzysz, że każdy ma w sobie potencjał – ale trzeba go wydobyć, uporządkować i wykorzystać w najlepszy możliwy sposób. Masz ogromne ambicje, ale też siłę, by je realizować.

    Twoim wyzwaniem może być nadmierna kontrola, trudność w okazywaniu wrażliwości i brak cierpliwości wobec mniej zorganizowanych osób. Ale kiedy uczysz się łączyć swoją siłę z empatią, stajesz się nie tylko liderem – stajesz się wizjonerem, który potrafi budować trwałe struktury i porywać ludzi nie tylko celem, ale też sercem.`,

    traits: [
      { name: "Ekstrawertyczny", value: 73 },
      { name: "Intuicyjny", value: 77 },
      { name: "Analityczny", value: 88 },
      { name: "Planujący", value: 83 },
      { name: "Asertywny", value: 74 },
    ],
  },
};

export default MbtiResultData;

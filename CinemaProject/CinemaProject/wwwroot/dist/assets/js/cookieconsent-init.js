// obtain cookieconsent plugin
var cc = initCookieConsent();

// example logo
var logo = '<img src="https://b6s54eznn8xq.merlincdn.net/dist/assets/img/logodark.svg" alt="Biletinial" loading="lazy" style="margin-left: -4px; margin-bottom: -5px; height: 24px">';
var cookie = '';

cc.run({
    current_lang : 'tr',
    autoclear_cookies : true,                   // default: false
    cookie_name: 'biletinial_cookie',             // default: 'cc_cookie'
    cookie_expiration : 365,                    // default: 182
    page_scripts: true,                         // default: false
    auto_language: 'document',

    //                      // default: null; could also be 'browser' or 'document'
    // autorun: true,                           // default: true
    // delay: 0,                                // default: 0
    // force_consent: false,
    // hide_from_bots: false,                   // default: false
    // remove_cookie_tables: false              // default: false
    // cookie_domain: location.hostname,        // default: current domain
    // cookie_path: "/",                        // default: root
    // cookie_same_site: "Lax",
    // use_rfc_cookie: false,                   // default: false
    // revision: 0,                             // default: 0

    gui_options: {
        consent_modal: {
            layout: 'box',                      // box,cloud,bar
            position: 'bottom right',           // bottom,middle,top + left,right,center
            transition: 'slide'                 // zoom,slide
        },
        settings_modal: {
            layout: 'box',                      // box,bar
            // position: 'left',                // right,left (available only if bar layout selected)
            transition: 'slide'                 // zoom,slide
        }
    },

    onFirstAction: function(){
        console.log('onFirstAction fired');
    },

    onAccept: function (cookie) {
        console.log('onAccept fired ...');
    },

    onChange: function (cookie, changed_preferences) {
        console.log('onChange fired ...');
    },

    languages: {
        'tr': {
            consent_modal: {
                title: cookie + ' Gizlilik Tercihleri',
                description: "Biletinial'daki deneyiminizi daha iyi hale getirmek için çerezler kullanıyoruz. <button type='button' data-cc='c-settings' class='cc-link'>Buradan</button> çerez ayarlarınızı özelleştirebilirsiniz.",
                primary_btn: {
                    text: 'Tümünü Kabul Et',
                    role: 'accept_all' 
                },
                secondary_btn: {
                    text: 'Tümünü Reddet',
                    role: 'accept_necessary'      
                }
            },
            settings_modal: {
                title: logo,
                save_settings_btn: 'Ayarları Kaydet',
                accept_all_btn: 'Tümünü Kabul Et',
                reject_all_btn: 'Tümünü Reddet',
                close_btn_label: 'Kapat',
                cookie_table_headers: [
                    {col1: 'Çerez'},
                    {col2: 'Alan Adı'},
                    {col3: 'Geçerlilik'},
                    {col4: 'Açıklama'}
                ],
                blocks: [
                    {
                        title: 'Çerez Tercihlerini Yönet 📢',
                        description: 'Biletinial.com web sitesini ziyaret ettiğinizde, sitenin işlevselliğini ve performansını iyileştirmek için çerezleri kullanır. Çerezler, ziyaretçilerimizin sitemizi nasıl kullandıklarını anlamamızı ve size daha iyi bir kullanıcı deneyimi sunmamızı sağlar. İstediğiniz zaman dahil olmak/devre dışı bırakmak için her kategoriyi seçebilirsiniz. Çerezlerle ilgili daha fazla ayrıntı için <a target="_blank" href="https://biletinial.com/tr-tr/sayfa/gizlilik-bildirimi" class="cc-link">tam metni okuyun.</a>'
                    }, {
                        title: 'Zorunlu Tanımlama Bilgileri',
                        description: 'Bu tanımlama bilgileri, web sitesinin sorunsuz bir şekilde çalışabilmesi için gerekli olan verilerdir ve sistemlerimizde devre dışı bırakılamaz. Genellikle sadece sizin işlemleriniz için atanırlar. Bu işlemler, gizlilik tercihlerinizi belirlemek, oturum açmak veya form doldurmak gibi hizmet taleplerinizi içerir. Tarayıcınızı bu tanımlama bilgilerini engellemek veya uyarı almak için ayarlayabilirsiniz, ancak bu durumda sitenin bazı bölümleri düzgün çalışmayabilir.',
                        toggle: {
                            value: 'tanimlama',
                            enabled: true,
                            readonly: true,
                                 
                        }
                    }, {
                        title: 'Performans Tanımlama Bilgileri',
                        description: 'Bu tanımlama bilgileri, web sitemizin performansını değerlendirebilmemiz ve geliştirebilmemiz için ziyaret sayısını ve trafik kaynaklarını takip etmemizi sağlar. Hangi sayfaların en çok ve en az ziyaret edildiğini, ziyaretçilerin sitede nasıl gezindiğini öğrenmemize yardımcı olurlar. Bu bilgiler toplandığında, tüm veriler anonim olarak derlenir. Bu tanımlama bilgilerine izin vermezseniz, sitemizi ne zaman ziyaret ettiğinizi bilemeyiz.',
                        toggle: {
                            value: 'performans',     // there are no default categories => you specify them
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '^_ga',
                                col2: 'google.com',
                                col3: '2 yıl',
                                col4: 'Google Analytics’in sitemizi ziyaret eden misafirleri birbirinden ayırabilmesi için kullanılır.',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '24 saat',
                                col4: 'Google Analytics’in sitemizi ziyaret eden misafirleri birbirinden ayırabilmesi için kullanılır.',
                            },
                            {
                                col1: '_gat',
                                col2: 'google.com',
                                col3: '1 dakika',
                                col4: "Google'ın sonraki sayfa yüklemeleri için yeni istek göndermeden önce kontrol sağlar.",
                            },
                            {
                                col1: '_fbp',
                                col2: 'facebook.com',
                                col3: '3 ay',
                                col4: "Facebook tarafından, üçüncü taraf reklam verenlerden, gerçek zamanlı teklif verme gibi bir dizi reklam ürünü sunmak amacıyla kullanılmaktadır.",
                            },
                            {
                                col1: '_ga',
                                col2: 'google.com',
                                col3: '2 yıl',
                                col4: "Google tarafından oturum durumunu sürdürmek için kullanılır.",
                            },

                        ]
                    }, {
                        title: 'Pazarlama Tanımlama Bilgileri',
                        description: 'Bir web sitesini ziyaret ettiğinizde, genellikle tarayıcınız aracılığıyla tanımlama bilgileri gibi bilgiler alınabilir veya depolanabilir. Bu bilgiler; siz, tercihleriniz veya cihazınız hakkında olabilir ve genellikle siteyi beklediğiniz şekilde çalıştırmak için kullanılır. Bu bilgiler genellikle sizi doğrudan tanımlamaz, ancak size daha kişiselleştirilmiş bir web deneyimi sunabilir. Belirli tanımlama bilgisi türlerine izin vermemeyi seçebilirsiniz. Farklı kategori başlıklarına tıklayarak daha fazla bilgi alabilir ve varsayılan ayarları değiştirebilirsiniz. Ancak, belirli tanımlama bilgisi türlerini engellediğinizde, site deneyiminiz ve sunduğumuz hizmetler bundan etkilenebilir.',
                        toggle: {
                            value: 'pazarlama', 
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '__Secure',
                                col2: 'google.com',
                                col3: '2 yıl',
                                col4: "Google'ın reklam hizmetlerinin bir parçası olarak işlev görür ve kullanıcılara daha iyi reklam deneyimleri sunmak için kullanılır",
                                is_regex: true
                            },
                            {
                                col1: '_ttp',
                                col2: 'tiktok.com',
                                col3: '1 ay',
                                col4: 'Tiktok’un reklam hizmetlerinin bir parçası olarak işlev görür ve kullanıcılara daha iyi reklam deneyimleri sunmak için kullanılır',
                            },
                            {
                                col1: '_gcl_au',
                                col2: 'tiktok.com',
                                col3: '3 ay',
                                col4: "Google'ın reklam hizmetlerinin bir parçası olarak işlev görür ve kullanıcılara daha iyi reklam deneyimleri sunmak için kullanılır",
                            },
                            {
                                col1: 'guest_id_marketing',
                                col2: 'twitter.com',
                                col3: '1 yıl',
                                col4: "Twitter'ın reklam hizmetlerinin bir parçası olarak işlev görür ve kullanıcılara daha iyi reklam deneyimleri sunmak için kullanılır",
                            },
                            {
                                col1: '_gcl_au',
                                col2: 'google.com',
                                col3: '3 ay',
                                col4: "Google AdSense tarafından, hizmetlerini kullanan web siteleri arasında reklam verimliliğini ölçmek için kullanılır.",
                            },
                            {
                                col1: '_gcl_aw',
                                col2: 'google.com',
                                col3: '3 ay',
                                col4: "Bu çerez kullanıcı bir Google Reklamını tıkladıktan sonra web sitemize ulaşırsa ayarlanacaktır. Çeşitli dönüşüm hedefleriyle ilişkilendirebilmek için hangi reklamın tıklandığı hakkında bilgiler içerir.",
                            },
                            {
                                col1: '_uetsid',
                                col2: 'bing.com',
                                col3: '30 dakika',
                                col4: "Bu çerez Bing tarafından, ziyaretçilerin web sitemizi nasıl kullandığı hakkında anonim bilgiler toplamak için kullanılır.",
                            },
                            {
                                col1: '_fbp',
                                col2: 'facebook.com',
                                col3: '90 gün',
                                col4: "Facebook'un ürün ve hizmetlerimizle ilgili reklam göstermesini sağlamak için kullanılır.",
                            },


                            
                        ]
                    }, {
                        title: 'Daha fazla bilgi almak için',
                        description: 'Çerezler ve tercihlerinizle ilgili politikamız hakkında herhangi bir sorunuz varsa, lütfen <a class="cc-link" href="https://biletinial.com/tr-tr/sayfa/gizlilik-bildirimi">gizlilik bildirimi</a> sayfamızı ziyaret edin. ',
                    }
                ]
            }
        },
        'en': {
            consent_modal: {
                title: cookie + 'Privacy Preferences',
                description: "We use cookies to make your experience better on Biletinial .  You can customize your cookie options <button type='button' data-cc='c-settings' class='cc-link'>here</button>.",
                primary_btn: {
                    text: 'Accept all',
                    role: 'accept_all' 
                },
                secondary_btn: {
                    text: 'Reject all',
                    role: 'accept_necessary'      
                }
            },
            settings_modal: {
                title: logo,
                save_settings_btn: 'Save Settings',
                accept_all_btn: 'Accept all',
                reject_all_btn: 'Reject all',
                close_btn_label: 'Close',
                cookie_table_headers: [
                    {col1: 'Cookie'},
                    {col2: 'Domain'},
                    {col3: 'Expiration'},
                    {col4: 'Description'}
                ],
                blocks: [
                    {
                        title: 'Manage Privacy Preferences 📢',
                        description: 'When you visit the Biletinial.com website, it uses cookies to improve the functionality and performance of the site. Cookies allow us to understand how our visitors use our site and provide you a better user experience. You can select each category to opt-in/opt-out at any time. For more details on cookies <a target="_blank" href="https://biletinial.com/tr-tr/sayfa/gizlilik-bildirimi" class="cc-link">Read Full text.</a>'
                    }, {
                        title: 'Essential Cookies',
                        description: 'These cookies are datas that are required for the website to function properly and cannot be deactivated in our systems. They are usually only assigned for your transactions. These actions include your requests for services, such as setting your privacy preferences, logging in or filling out forms. You can set your browser to block these cookies or receive alerts, but then some parts of the site may not function properly.',
                        toggle: {
                            value: 'tanimlama',
                            enabled: true,
                            readonly: true,
                                 
                        }
                    }, {
                        title: 'Performance Cookies',
                        description: 'These cookies allow us to track the number of visits and traffic sources so that we can evaluate and improve the performance of our website. They help us to learn which pages are most and least visited, how visitors navigate the site. When this information is collected, all datas are compiled anonymously. If you do not allow these cookies, we will not know when you visit our site.',
                        toggle: {
                            value: 'performans', 
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '^_ga',
                                col2: 'google.com',
                                col3: '2 year',
                                col4: 'It is used for Google Analytics to separate the guests who visit our website from each other.',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '24 hour',
                                col4: 'It is used for Google Analytics to separate the guests who visit our website from each other.',
                            },
                            {
                                col1: '_gat',
                                col2: 'google.com',
                                col3: '1 minute',
                                col4: "It allows Google to check for further page loads before sending new requests.",
                            },
                            {
                                col1: '_fbp',
                                col2: 'facebook.com',
                                col3: '3 month',
                                col4: "It is used by Facebook to deliver a range of advertising products from third-party advertisers, such as real-time bidding.",
                            },
                            {
                                col1: '_ga',
                                col2: 'google.com',
                                col3: '2 year',
                                col4: "It is used by Google to maintain session state.",
                            },

                        ]
                    }, {
                        title: 'Marketing Cookies',
                        description: 'When you visit a website, information such as cookies may be received or stored, usually through your browser. This information may be about you, your preferences or your device and is usually used to make the site work the way you expect it to. This information usually does not directly identify you, but may provide you with a more personalized web experience. You can choose not to allow certain types of cookies. You can get more information and change the default settings by clicking on the different category headings. However, when you block certain types of cookies, your site experience and the services we provide may be effected.',
                        toggle: {
                            value: 'pazarlama', 
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '__Secure',
                                col2: 'google.com',
                                col3: '2 year',
                                col4: "It functions as part of Google's advertising services and is used to provide users with better advertising experiences",
                                is_regex: true
                            },
                            {
                                col1: '_ttp',
                                col2: 'tiktok.com',
                                col3: '1 month',
                                col4: "It functions as part of Tiktok's advertising services and is used to provide users with better advertising experiences",
                            },
                            {
                                col1: '_gcl_au',
                                col2: 'tiktok.com',
                                col3: '3 month',
                                col4: "It functions as part of Google's advertising services and is used to provide users with better advertising experiences",
                            },
                            {
                                col1: 'guest_id_marketing',
                                col2: 'twitter.com',
                                col3: '1 year',
                                col4: "It functions as part of Twitter's advertising services and is used to provide users with better advertising experiences",
                            },
                            {
                                col1: '_gcl_au',
                                col2: 'google.com',
                                col3: '3 month',
                                col4: "Used by Google AdSense to measure advertising efficiency among websites that use its services.",
                            },
                            {
                                col1: '_gcl_aw',
                                col2: 'google.com',
                                col3: '3 month',
                                col4: "This cookie will be set if the user reaches our website after clicking on a Google Ad. It contains information about which ad was clicked on in order to be able to associate it with various conversion targets.",
                            },
                            {
                                col1: '_uetsid',
                                col2: 'bing.com',
                                col3: '30 minute',
                                col4: "This cookie is used by Bing to collect anonymous information about how visitors use our website.",
                            },
                            {
                                col1: '_fbp',
                                col2: 'facebook.com',
                                col3: '3 month',
                                col4: "It is used to allow Facebook to show advertisements about our products and services.",
                            },


                            
                        ]
                    }, {
                        title: 'For more information',
                        description: 'If you have any questions about our policy on cookies and your preferences, Please <a class="cc-link" href="https://biletinial.com/tr-tr/sayfa/gizlilik-bildirimi">visit our website.</a> ',
                    }
                ]
            }
        },
        'hr': {
            consent_modal: {
                title: cookie + 'Postavke privatnosti',
                description: "Koristimo kolačiće kako bismo poboljšali vaše iskustvo na Biletinialu. Možete prilagoditi svoje opcije kolačića <button type='button' data-cc='c-settings' class='cc-link'>ovdje</button>.",
                primary_btn: {
                    text: 'Prihvatiti sve',
                    role: 'accept_all' 
                },
                secondary_btn: {
                    text: 'Odbaci sve',
                    role: 'accept_necessary'      
                }
            },
            settings_modal: {
                title: logo,
                save_settings_btn: 'Save Settings',
                accept_all_btn: 'Prihvatiti sve',
                reject_all_btn: 'Odbaci sve',
                close_btn_label: 'Zatvoriti',
                cookie_table_headers: [
                    {col1: 'Kolačić'},
                    {col2: 'Domena'},
                    {col3: 'Izdisanje'},
                    {col4: 'Opis'}
                ],
                blocks: [
                    {
                        title: 'Upravljajte postavkama privatnosti📢',
                        description: 'Kada posjetite web stranicu Biletinial.com, ona koristi kolačiće za poboljšanje funkcionalnosti i performansi stranice. Kolačići nam omogućuju da razumijemo kako naši posjetitelji koriste našu stranicu i pružaju vam bolje korisničko iskustvo. U bilo kojem trenutku možete odabrati svaku kategoriju za uključivanje/isključivanje. Za više pojedinosti o kolačićima <a target="_blank" href="https://biletinial.com/tr-tr/sayfa/gizlilik-bildirimi" class="cc-link">Pročitajte cijeli tekst.</a>'
                    }, {
                        title: 'Osnovni kolačići',
                        description: 'Ovi kolačići su podaci koji su potrebni za ispravno funkcioniranje web stranice i ne mogu se deaktivirati u našim sustavima. Obično se dodjeljuju samo vašim transakcijama. Ove radnje uključuju vaše zahtjeve za uslugama, kao što su postavljanje vaših postavki privatnosti, prijava ili ispunjavanje obrazaca. Možete postaviti svoj preglednik da blokira ove kolačiće ili prima upozorenja, ali tada neki dijelovi stranice možda neće ispravno funkcionirati.',
                        toggle: {
                            value: 'tanimlama',
                            enabled: true,
                            readonly: true,
                                 
                        }
                    }, {
                        title: 'Kolačići izvedbe',
                        description: 'Ovi kolačići omogućuju nam praćenje broja posjeta i izvora prometa kako bismo mogli procijeniti i poboljšati izvedbu naše web stranice. Oni nam pomažu saznati koje su stranice najviše, a koje najmanje posjećene, kako se posjetitelji kreću web-stranicom. Kada se ove informacije prikupljaju, svi podaci se prikupljaju anonimno. Ako ne dopustite ove kolačiće, nećemo znati kada posjetite našu stranicu.',
                        toggle: {
                            value: 'performans', 
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '^_ga',
                                col2: 'google.com',
                                col3: '2 godina',
                                col4: 'Koristi se za Google Analytics za odvajanje gostiju koji posjećuju našu web stranicu jedne od drugih.',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '24 sat',
                                col4: 'Koristi se za Google Analytics za odvajanje gostiju koji posjećuju našu web stranicu jedne od drugih.',
                            },
                            {
                                col1: '_gat',
                                col2: 'google.com',
                                col3: '1 minuta',
                                col4: "Omogućuje Googleu provjeru daljnjih učitavanja stranica prije slanja novih zahtjeva.",
                            },
                            {
                                col1: '_fbp',
                                col2: 'facebook.com',
                                col3: '3 mjeseca',
                                col4: "Facebook ga koristi za isporuku niza reklamnih proizvoda oglašivača trećih strana, kao što je licitiranje u stvarnom vremenu.",
                            },
                            {
                                col1: '_ga',
                                col2: 'google.com',
                                col3: '2 godina',
                                col4: "Google ga koristi za održavanje stanja sesije.",
                            },

                        ]
                    }, {
                        title: 'Marketinški kolačići',
                        description: 'Kada posjetite web stranicu, informacije poput kolačića mogu biti primljene ili pohranjene, obično putem vašeg preglednika. Ove informacije mogu biti o vama, vašim preferencijama ili vašem uređaju i obično se koriste kako bi stranica radila onako kako očekujete. Ove vas informacije obično ne identificiraju izravno, ali vam mogu pružiti personaliziranije web iskustvo. Možete odabrati da ne dopustite određene vrste kolačića. Možete dobiti više informacija i promijeniti zadane postavke klikom na naslove različitih kategorija. Međutim, kada blokirate određene vrste kolačića, to može utjecati na vaše iskustvo na web stranici i usluge koje pružamo.',
                        toggle: {
                            value: 'pazarlama', 
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '__Secure',
                                col2: 'google.com',
                                col3: '2 godina',
                                col4: "Funkcionira kao dio Googleovih usluga oglašavanja i koristi se za pružanje boljih doživljaja oglašavanja korisnicima",
                                is_regex: true
                            },
                            {
                                col1: '_ttp',
                                col2: 'tiktok.com',
                                col3: '1 mjeseca',
                                col4: "Funkcionira kao dio Tiktokovih reklamnih usluga i koristi se za pružanje boljih reklamnih iskustava korisnicima",
                            },
                            {
                                col1: '_gcl_au',
                                col2: 'tiktok.com',
                                col3: '3 mjeseca',
                                col4: "Funkcionira kao dio Googleovih usluga oglašavanja i koristi se za pružanje boljih doživljaja oglašavanja korisnicima",
                            },
                            {
                                col1: 'guest_id_marketing',
                                col2: 'twitter.com',
                                col3: '1 godina',
                                col4: "Funkcionira kao dio Twitterovih reklamnih usluga i koristi se za pružanje boljih reklamnih iskustava korisnicima",
                            },
                            {
                                col1: '_gcl_au',
                                col2: 'google.com',
                                col3: '3 mjeseca',
                                col4: "Koristi ga Google AdSense za mjerenje učinkovitosti oglašavanja među web stranicama koje koriste njegove usluge.",
                            },
                            {
                                col1: '_gcl_aw',
                                col2: 'google.com',
                                col3: '3 mjeseca',
                                col4: "Ovaj kolačić će se postaviti ako korisnik dođe do naše web stranice nakon klika na Google oglas. Sadrži informacije o tome na koji je oglas kliknuto kako bi ga se moglo povezati s različitim ciljevima konverzije.",
                            },
                            {
                                col1: '_uetsid',
                                col2: 'bing.com',
                                col3: '30 minuta',
                                col4: "Ovaj kolačić koristi Bing za prikupljanje anonimnih informacija o tome kako posjetitelji koriste našu web stranicu.",
                            },
                            {
                                col1: '_fbp',
                                col2: 'facebook.com',
                                col3: '3 mjeseca',
                                col4: "Koristi se kako bi se Facebooku omogućilo prikazivanje oglasa o našim proizvodima i uslugama.",
                            },
                        ]
                    }, {
                        title: 'Za više informacija',
                        description: 'Ako imate bilo kakvih pitanja o našoj politici o kolačićima i vašim preferencijama, <a class="cc-link" href="https://biletinial.com/tr-tr/sayfa/gizlilik-bildirimi">posjetite našu web stranicu. </a> ',
                    }
                ]
            }
        },
        'sq': {
            consent_modal: {
                title: cookie + 'Kushtet e Privatësisë',
                description: "Ne përdorim cookie për të përmirësuar përvojën tuaj në Biletinial. Mund t'i personalizoni opsionet tuaja të kukive <button type='button' data-cc='c-settings' class='cc-link'>këtu</button>.",
                primary_btn: {
                    text: 'Prano gjithçka',
                    role: 'accept_all' 
                },
                secondary_btn: {
                    text: 'Hidheni të gjitha',
                    role: 'accept_necessary'      
                }
            },
            settings_modal: {
                title: logo,
                save_settings_btn: 'Save Settings',
                accept_all_btn: 'Prano gjithçka',
                reject_all_btn: 'Hidheni të gjitha',
                close_btn_label: 'Mbylle',
                cookie_table_headers: [
                    {col1: 'Biskotë'},
                    {col2: 'Domeni'},
                    {col3: 'Nxjerrja'},
                    {col4: 'Përshkrim'}
                ],
                blocks: [
                    {
                        title: 'Menaxhoni cilësimet tuaja të privatësisë📢',
                        description: 'Kur vizitoni faqen e internetit Biletinial.com, ai përdor cookie për të përmirësuar funksionalitetin dhe performancën e sajtit. Cookies na lejojnë të kuptojmë se si vizitorët tanë përdorin faqen tonë dhe ju ofrojnë një përvojë më të mirë të përdoruesit. Mund të zgjidhni çdo kategori për ta aktivizuar/çaktivizuar në çdo kohë. Për më shumë detaje rreth cookies <a target="_blank" href="https://biletinial.com/tr-tr/sayfa/gizlilik-bildirimi" class="cc-link">Lexo tekstin e plotë.</a>'
                    }, {
                        title: 'Biskota bazë',
                        description: 'Këto cookie janë të dhëna që janë të nevojshme për funksionimin e duhur të faqes në internet dhe nuk mund të çaktivizohen në sistemet tona. Ato zakonisht caktohen vetëm për transaksionet tuaja. Këto veprime përfshijnë kërkesat tuaja për shërbime, të tilla si vendosja e cilësimeve tuaja të privatësisë, identifikimi ose plotësimi i formularëve. Mund ta konfiguroni shfletuesin tuaj që të bllokojë këto cookie ose të marrë paralajmërime, por më pas disa pjesë të sajtit mund të mos funksionojnë siç duhet.',
                        toggle: {
                            value: 'tanimlama',
                            enabled: true,
                            readonly: true,
                                 
                        }
                    }, {
                        title: 'Kukit e performancës',
                        description: 'Këto cookie na lejojnë të gjurmojmë numrin e vizitave dhe burimet e trafikut në mënyrë që të vlerësojmë dhe përmirësojmë performancën e faqes sonë të internetit. Ato na ndihmojnë të zbulojmë se cilat faqe janë më shumë dhe cilat janë më pak të vizituara, si lundrojnë vizitorët në faqen e internetit. Kur mblidhet ky informacion, të gjitha të dhënat mblidhen në mënyrë anonime. Nëse nuk i lejoni këto cookie, ne nuk do ta dimë kur të vizitoni faqen tonë.',
                        toggle: {
                            value: 'performans', 
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '^_ga',
                                col2: 'google.com',
                                col3: '2 vit',
                                col4: 'Përdoret për Google Analytics për të ndarë të ftuarit që vizitojnë faqen tonë të internetit nga njëri-tjetri.',
                                is_regex: true
                            },
                            {
                                col1: '_gid',
                                col2: 'google.com',
                                col3: '24 një orë',
                                col4: 'Përdoret për Google Analytics për të ndarë të ftuarit që vizitojnë faqen tonë të internetit nga njëri-tjetri.',
                            },
                            {
                                col1: '_gat',
                                col2: 'google.com',
                                col3: '1 minutë',
                                col4: "Lejon Google të kontrollojë ngarkesat e mëtejshme të faqeve përpara se të dërgojë kërkesa të reja.",
                            },
                            {
                                col1: '_fbp',
                                col2: 'facebook.com',
                                col3: '3 muaj',
                                col4: "Facebook e përdor atë për të ofruar një sërë produktesh reklamimi te reklamuesit e palëve të treta, si oferta në kohë reale.",
                            },
                            {
                                col1: '_ga',
                                col2: 'google.com',
                                col3: '2 vit',
                                col4: "Google e përdor atë për të ruajtur gjendjen e sesionit.",
                            },

                        ]
                    }, {
                        title: 'Biskota marketingu',
                        description: "Kur vizitoni një faqe interneti, informacione të tilla si cookies mund të merren ose ruhen, zakonisht përmes shfletuesit tuaj. Ky informacion mund të jetë për ju, preferencat tuaja ose pajisjen tuaj dhe zakonisht përdoret për ta bërë sitin të funksionojë ashtu siç prisni. Ky informacion zakonisht nuk ju identifikon drejtpërdrejt, por mund t'ju ofrojë një përvojë më të personalizuar në internet. Ju mund të zgjidhni të mos lejoni disa lloje të cookie-ve. Mund të merrni më shumë informacion dhe të ndryshoni cilësimet e paracaktuara duke klikuar mbi titujt e kategorive të ndryshme. Megjithatë, kur bllokoni disa lloje të cookie-ve, kjo mund të ndikojë në përvojën tuaj në faqen e internetit dhe shërbimet që ne ofrojmë.",
                        toggle: {
                            value: 'pazarlama', 
                            enabled: false,
                            readonly: false
                        },
                        cookie_table: [
                            {
                                col1: '__Secure',
                                col2: 'google.com',
                                col3: '2 vit',
                                col4: "Funksionon si pjesë e shërbimeve të reklamimit të Google dhe përdoret për të ofruar përvoja më të mira reklamuese për përdoruesit",
                                is_regex: true
                            },
                            {
                                col1: '_ttp',
                                col2: 'tiktok.com',
                                col3: '1 muaj',
                                col4: "Ai funksionon si pjesë e shërbimeve reklamuese të Tiktok dhe përdoret për të ofruar përvoja më të mira reklamuese për përdoruesit",
                            },
                            {
                                col1: '_gcl_au',
                                col2: 'tiktok.com',
                                col3: '3 muaj',
                                col4: "Funksionon si pjesë e shërbimeve të reklamimit të Google dhe përdoret për të ofruar përvoja më të mira reklamuese për përdoruesit",
                            },
                            {
                                col1: 'guest_id_marketing',
                                col2: 'twitter.com',
                                col3: '1 vit',
                                col4: "Funksionon si pjesë e shërbimeve reklamuese të Twitter dhe përdoret për të ofruar përvoja më të mira reklamuese për përdoruesit",
                            },
                            {
                                col1: '_gcl_au',
                                col2: 'google.com',
                                col3: '3 muaj',
                                col4: "Përdoret nga Google AdSense për të matur efektivitetin e reklamimit midis faqeve të internetit që përdorin shërbimet e tij.",
                            },
                            {
                                col1: '_gcl_aw',
                                col2: 'google.com',
                                col3: '3 muaj',
                                col4: "Kjo cookie do të vendoset nëse përdoruesi arrin në faqen tonë të internetit pasi klikon në një reklamë të Google. Ai përmban informacione se cila reklamë është klikuar në mënyrë që të mund të lidhet me qëllime të ndryshme konvertimi.",
                            },
                            {
                                col1: '_uetsid',
                                col2: 'bing.com',
                                col3: '30 minutë',
                                col4: "Kjo cookie përdoret nga Bing për të mbledhur informacione anonime rreth mënyrës se si vizitorët përdorin faqen tonë të internetit.",
                            },
                            {
                                col1: '_fbp',
                                col2: 'facebook.com',
                                col3: '3 muaj',
                                col4: "Përdoret për të mundësuar Facebook të shfaqë reklama rreth produkteve dhe shërbimeve tona.",
                            },
                        ]
                    }, {
                        title: 'Për më shumë informacion',
                        description: 'Nëse keni ndonjë pyetje në lidhje me politikën tonë të kukive dhe preferencat tuaja, <a class="cc-link" href="https://biletinial.com/tr-tr/sayfa/gizlilik-bildirimi">vizitoni faqen tonë të internetit. </a> ',
                    }
                ]
            }
        }
    }

});

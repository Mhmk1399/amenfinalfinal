

const data = [
    {
        intj: {
            link: "https://www.16personalities.com/fa/intj-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "معمار شخصیت INTJ",
            description: "معماران به‌تنهایی در نوک قله قرار گرفته‌اند و یکی از کمیاب‌ترین و توانمندترین گونه‌های شخصیتی از حیث توانایی‌های استراتژیک هستند و به‌خوبی از این امر آگاهند. معماران تنها دو درصد جمعیت را تشکیل می‌دهند و زنان این گونه شخصیتی بسیار نادر هستند و فقط 0.8% جمعیت را تشکیل می‌دهند - به همین دلیل اغلب اوقات پیدا کردن افراد همفکر که قادر باشند با روشن‌اندیشی بی حد و حصر و مانورهای شطرنج‌وار آنها برابری کنند کار دشواری است. افراد دارای گونه شخصیتی معمار اهل تخیل و در عین حال قاطع، بلندپرواز و در عین حال گوشه‌گیر و به شکلی شگفت‌آور کنجکاو هستند، اما انرژی خود را بیهوده هدر نمی‌دهند.",
            names: ["Christopher Nolan","Elon Musk","Michelle Obama","Friedrich Nietzsche"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/analysts_INTJ_christopher_nolan.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/analysts_INTJ_elon_musk.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/analysts_INTJ_michelle_obama.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/analysts_INTJ_friedrich_nietzsche.svg?v=6"]
        },
        intp: {
            link: "https://www.16personalities.com/fa/intp-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "منطق‌دان شخصیت INTP",
            description: "گونه شخصیتی منطق‌دان نسبتاً نادر است و تنها سه درصد از جمعیت را شامل می‌شود که قطعاً خبر خوبی برای آنها است چرا که هیچ چیزی به اندازه  باعث نارضایتی آنها نمی‌شود. منطق‌دانان به نوآوری و خلاقیت، دیدگاه منحصر به فرد و عقل نیرومند خود مباهات می‌کنند. منطق‌دانان که معمولاً به‌عنوان فیلسوف، متفکر، یا استاد رؤیاپرداز شناخته می‌شوند، مسئول بسیاری از اکتشافات علمی در طول تاریخ بوده‌اند",
            names: ["Avicii","Albert Einstein","Kristen Stewart","Bill Gates"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/analysts_INTP_avicii.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/analysts_INTP_albert_einstein.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/analysts_INTP_kristen_stewart.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/analysts_INTP_bill_gates.svg?v=6"]
        },
        entp: {
            link: "https://www.16personalities.com/fa/entp-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "مجادله‌گر شخصیت ENTP",
            description: "گونه شخصیتی مجادله‌گر به‌راستی وکیل مدافع شیطان است، یعنی نابود کردن استدلال‌ها و اعتقادات و در معرض دید همگان قرار دادن حاصل این تلاش. مجادله‌گران بر خلاف شخصیت‌های مصمم‌تر، این کار را به این دلیل انجام نمی‌دهند که می‌خواهند به هدفی عمیق‌تر یا استراتژیک برسند، بلکه فقط به این دلیل ساده چنین کاری را می‌کنند که برایشان سرگرم‌کننده است. هیچ‌کس به اندازه مجادله‌گران نبرد ذهنی را دوست ندارد، چرا که این کار به آنها فرصتی برای به‌کار بستن شوخ طبعی خود بدون اینکه به زحمت بیفتند، نشان دادن دانش گسترده خود و ظرفیت ربط دادن ایده‌های پراکنده برای اثبات حرفشان را می‌دهد.",
            names: ["Mark Twain","Sarah Silverman","Adam Savage","Alfred “Weird Al” Yankovic"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTP_mark_twain.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTP_sarah_silverman.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTP_adam_savage.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTP_weird_al_yankovic.svg?v=6"]
        },
        entj: {
            link: "https://www.16personalities.com/fa/entj-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "فرمانده شخصیت ENTJ",
            description: "فرماندهان، رهبرانی بالفطره هستند. افراد دارای این گونه شخصیتی تجسم کاریزما و اعتماد به نفس هستند و قدرت را طوری به نمایش می‌گذارند که دیگران را برای هدفی مشترک گرد هم می‌آورند. اما فرماندهان برخلاف همتای حساس‌تر خود یعنی پیشگامان، سطح اغلب بی‌رحمانه‌ای از عقلانیت دارند و از انگیزه، اراده و ذهن تیز خود برای رسیدن به هر هدفی که برای خود تعیین کرده‌اند، استفاده می‌کنند. شاید خیلی خوب باشد که آنها تنها سه درصد از جمعیت را تشکیل می‌دهند تا مبادا به پایمال کردن سایر گونه‌های شخصیتی ترسوتر و حساس‌تر بپردازند که بقیه جمعیت جهان را تشکیل می‌دهند - اما باید به‌خاطر بسیاری از شرکت‌ها و مؤسساتی که هر روز با آنها مواجهیم باید قدردان فرماندهان باشیم.",
            names: ["Franklin D. Roosevelt","Margaret Thatcher","Gordon Ramsay","Steve Jobs"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTJ_franklin_d_roosevelt.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTJ_margaret_thatcher.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTJ_gordon_ramsay.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/analysts_ENTJ_steve_jobs.svg?v=6"]
        },
        infj: {
            link: "https://www.16personalities.com/fa/infj-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "حامی شخصیت INFJ",
            description: "گونه شخصیتی حامی بسیار نادر است و کمتر از یک درصد از جمعیت را تشکیل می‌دهد، با وجود این، آنها جای پای خود را در جهان باقی می‌گذارند. این افراد دارای حس ذاتی آرمان‌گرایی و اخلاق هستند، اما آنچه آنها را از سایر گونه‌های شخصیتی آرمان‌گرایانه جدا می‌کند قاطعیت و اراده آنها است - حامیان افرادی رؤیاپرداز و منفعل نیستند، بلکه کسانی هستند که قادر به برداشتن گام‌هایی عینی برای تحقق اهداف خود و ایجاد تأثیر مثبت پایدار هستند.",
            names: ["Marie Kondo","Mother Teresa","Nelson Mandela","Martin Luther King"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/diplomats_INFJ_marie_kondo.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/diplomats_INFJ_mother_teresa.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/diplomats_INFJ_nelson_mandela.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/diplomats_INFJ_martin_luther_king.svg?v=6"]
        },
        infp: {
            link: "https://www.16personalities.com/fa/infp-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "میانجی شخصیت INFP",
            description: "شخصیت‌های میانجی آرمانگرایانی واقعی هستند، همیشه به دنبال نشانه‌هایی از خوبی در حتی بدترین افراد و حوادث می‌گردند و در جستجوی راه‌هایی برای بهتر کردن اوضاع هستند. ممکن است میانجی‌گران را افرادی آرام، کم‌حرف یا حتی خجالتی تصور کرد، اما شعله‌ای درونی و شور و شوقی دارند که واقعاً می‌تواند بدرخشد. گونه شخصیتی میانجی فقط 4% جمعیت را تشکیل می‌دهد و متأسفانه خطر بروز سوءتفاهم برای آنها بالا است - اما وقتی افراد همفکر خود را پیدا می‌کنند تا وقتشان را با آنها بگذرانند، هماهنگی که احساس می‌کنند سرچشمه شادی و الهام‌بخشی است.",
            names: ["Alicia Keys","Björk","William Shakespeare","J.R.R. Tolkien"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/diplomats_INFP_alicia_keys.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/diplomats_INFP_bjork.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/diplomats_INFP_william_shakespeare.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/diplomats_INFP_j_r_r_tolkien.svg?v=6"]
        },
        enfj: {
            link: "https://www.16personalities.com/fa/enfj-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "قهرمان شخصیت ENFJ",
            description: "قهرمانان رهبرانی بالفطره و سرشار از عشق و شور و جذبه هستند. این شخصیت‌ها که حدود دو درصد از جمعیت را تشکیل می‌دهند اغلب سیاستمداران، مربیان و معلمان ما هستند که الهام‌بخشیدن دیگران برای برای موفقیت و انجام کارهای خوب در جهان هستند. قهرمانان به‌طور طبیعی دارای اعتماد به نفس هستند که موجب پدید آمدن نفوذ می‌شود، از هدایت کردن دیگران برای همکاری با یکدیگر و بهبود بخشیدن خود و جامعه‌شان دچار غرور و شادی می‌شوند.",
            names: ["Ben Affleck","John Cusack","Oprah Winfrey","Barack Obama"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/diplomats_ENFJ_ben_affleck.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/diplomats_ENFJ_john_cusack.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/diplomats_ENFJ_oprah_winfrey.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/diplomats_ENFJ_barack_obama.svg?v=6"]
        },
        enfp: {
            link: "https://www.16personalities.com/fa/enfp-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "پیکارگر شخصیت ENFP",
            description: "شخصیت پیکارگر یک روح به‌راستی آزاد است. آن‌ها اغلب به مهمانی‌ها جان می‌بخشند، اما کمتر به هیجان محض و لذت بردن از لحظه علاقه‌مند هستند تا بهره‌گیری از ارتباطات اجتماعی و عاطفی که با دیگران دارند. این افراد جذاب، مستقل، پرانرژی و دلسوز را که 7% درصد جمعیت را تشکیل می‌دهند مطمئناً می‌توان در هر جمعیتی شناخت.",
            names: ["RM (Kim Nam-joon)","Quentin Tarantino","Robin Williams","Robert Downey, Jr."],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/diplomats_ENFP_RM_Kim_Nam-joon.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/diplomats_ENFP_quentin_tarantino.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/diplomats_ENFP_robin_williams.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/diplomats_ENFP_robert_downey_jr.svg?v=6"]
        },
        istj: {
            link: "https://www.16personalities.com/fa/istj-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "تدارکاتچی شخصیت ISTJ",
            description: "تصور می‌شود که گونه شخصیتی تدارکچی فراوان‌ترین گونه بوده و حدود 13% از جمعیت را تشکیل دهد. ویژگی‌های معرف تدارکچیان یعنی صداقت، منطق عملی و تلاش‌های خستگی‌ناپذیر برای انجام وظیفه آنها را به هسته اصلی بسیاری از خانواده‌ها و همچنین سازمان‌هایی تبدیل می‌کند که حامی سنت‌ها، قوانین و استانداردها هستند، مانند سازمان‌های قضایی، نهادهای نظارتی و ارتش. افراد دارای گونه شخصیتی تدارکچی از برعهده گرفتن مسئولیت اعمال خود لذت می‌برند و به کاری که انجام می‌دهند افتخار می‌کنند - تدارکچیان در هنگام تلاش برای رسیدن به هدف از وقت و انرژی خود برای تمام کردن کار مربوط با دقت و صبر دریغ نمی‌کنند.",
            names: ["Natalie Portman","Angela Merkel","Denzel Washington","Sting"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/sentinels_ISTJ_natalie_portman.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/sentinels_ISTJ_angela_merkel.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/sentinels_ISTJ_denzel_washington.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/sentinels_ISTJ_sting.svg?v=6"]
        },
        isfj: {
            link: "https://www.16personalities.com/fa/isfj-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "مدافع شخصیت ISFJ",
            description: "گونه شخصیتی مدافع کاملاً منحصر به فرد است، زیرا بسیاری از کیفیت‌های آن از تعریف صفات فردی‌اش سرپیچی می‌کند. هرچند مدافعان اهل همدلی هستند، اما وقتی به محافظت از خانواده یا دوستان نیاز باشد خشن می‌شوند؛ هر چند آرام و کم‌حرف هستند، معمولاً افرادی با مهارت‌های به‌خوبی توسعه یافته و روابط اجتماعی قوی هستند؛ و هر چند به دنبال امنیت و ثبات هستند، ممکن است به میزان قابل ملاحظه‌ای دست به تغییر بزنند، البته تا زمانی که احساس کنند مورد درک و احترام هستند. افراد دارای گونه شخصیتی مدافع، همانند بسیاری از چیزهای دیگر، چیزی بیش از مجموع اجزای خود هستند، و شیوه استفاده آنها از این نقاط قوت است که تعریف می‌کند چه کسانی هستند.",
            names: ["Vin Diesel","Aretha Franklin","Queen Elizabeth II","Beyoncé"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/sentinels_ISFJ_vin_diesel.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/sentinels_ISFJ_aretha_franklin.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/sentinels_ISFJ_queen_elizabeth_II.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/sentinels_ISFJ_beyonce.svg?v=6"]
        },
        estj: {
            link: "https://www.16personalities.com/fa/estj-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "مجری شخصیت ESTJ",
            description: "مجریان نمایندگان سنت و نظم هستند و از درک خود در مورد امور درست، نادرست و قابل قبول اجتماع برای گردهم آوردن خانواده‌ها و جوامع استفاده می‌کنند. افراد دارای گونه شخصیتی مجری از ارزش‌های صداقت، فداکاری و کرامت استقبال می‌کنند و دیگران به‌خاطر مشاوره‌ها و راهنمایی‌های روشن آنها برایشان ارزش قائل هستند، و از اینکه در مسیرهای دشوار پیشرو باشند خرسندند. مجریان که از گردهم آوردن افراد در کنار هم احساس غرور می‌کنند، اغلب نقش سازمان‌دهندگان اجتماعی را ایفا می‌کنند و با سختکوشی همه افراد را برای شرکت در جشن رویدادهای محلی، یا در دفاع از ارزش‌های سنتی که خانواده‌ها و جوامع را در کنار هم نگه می‌دارد، گردهم می‌آورند.",
            names: ["Ella Baker","Judge Judy","John D. Rockefeller","Sonia Sotomayor"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/sentinels_ESTJ_ella_baker.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/sentinels_ESTJ_judge_judy.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/sentinels_ESTJ_john_d_rockefeller.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/sentinels_ESTJ_sonia_sotomayor.svg?v=6"]
        },
        esfj: {
            link: "https://www.16personalities.com/fa/esfj-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "سفیر شخصیت ESFJ",
            description: "باید گفت افراد دارای شخصیت مشاور پرطرفدار هستند - البته به این دلیل که کلمه بهتری نداریم - که از این بابت هم منطقی است که این گونه شخصیتی بسیار رایج است و تا دوازده درصد جمعیت را تشکیل می‌دهد. مشاوران در دبیرستان، سردسته تشویق‌کنندگان است که فضا را ایجاد می‌کنند خود را در معرض توجه قرار می‌دهند و تیم‌های خود را به سمت پیروزی و شهرت هدایت می‌کنند. مشاوران در ادامه زندگی خود همچنان از حمایت دوستان و عزیزانشان بهره می‌گیرند و به سازماندهی گردهمایی‌های اجتماعی می‌پردازند و هر کاری که بتوانند می‌کنند تا مطمئن شوند که همه راضی باشند.",
            names: ["Steve Harvey","Bill Clinton","Jennifer Garner","Taylor Swift"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/sentinels_ESFJ_steve_harvey.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/sentinels_ESFJ_bill_clinton.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/sentinels_ESFJ_jennifer_garner.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/sentinels_ESFJ_taylor_swift.svg?v=6"]
        },
        istp: {
            link: "https://www.16personalities.com/fa/istp-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "چیره‌دست شخصیت ISTP",
            description: "چیره‌دستان عاشق اکتشاف با دست و چشم خود، لمس کردن و بررسی کردن جهان اطراف با عقل محض و روحیه کنجکاوی هستند. افراد دارای این نوع شخصیت سازندگانی بالفطره هستند، در حال رفتن از یک پروژه به سراغ پروژه بعدی، ساختن چیزهای مفید و بیهوده برای لذت بردن از آن، و آموختن از محیط خود هستند. شخصیت‌های چیره‌دست اغلب مکانیک و مهندس هستند که هیچ چیزی برایشان شادی‌آورتر از کثیف کردن دستها و جدا کردن اجزا و سر هم کردن دوباره آنها نیست، به‌طوری که کمی از قبل بهتر باشد.",
            names: ["Clint Eastwood","Michael Jordan","Bear Grylls","Olivia Wilde"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/explorers_ISTP_clint_eastwood.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/explorers_ISTP_michael_jordan.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/explorers_ISTP_bear_grylls.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/explorers_ISTP_olivia_wilde.svg?v=6"]
        },
        isfp: {
            link: "https://www.16personalities.com/fa/isfp-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "ماجراجو شخصیت ISFP",
            description: "شخصیت ماجراجو هنرمندانی واقعی هستند، اما نه لزوماً به معنای متداول کلمه و اینکه در فضای باز به نقاشی درختانی کوچک مشغول باشند. اگرچه خیلی اوقات به‌خوبی می‌توانند چنین کاری را هم انجام بدهند. بلکه مسئله این است که آنها از زیبایی‌شناسی، طراحی و حتی انتخاب‌ها و اعمال خود برای فشار وارد کردن به محدودیت‌های قراردادهای اجتماعی بهره می‌گیرند. شخصیت‌های ماجراجو از پشت کردن به انتظارات سنتی با انجام آزمایش‌هایی در زمینه زیبایی و رفتار لذت می‌برند",
            names: ["Kevin Costner","Avril Lavigne","Jungkook (Jeon Jungkook)","Lana Del Rey"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/explorers_ISFP_kevin_costner.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/explorers_ISFP_avril_lavigne.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/explorers_ISFP_jungkook_bts.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/explorers_ISFP_lana_del_rey.svg?v=6"]
        },
        estp: {
            link: "https://www.16personalities.com/fa/estp-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "کارآفرین شخصیت ESTP",
            description: "گونه شخصیت کارآفرین همواره بر محیط بلافصل اطراف خود تأثیر دارد - بهترین راه برای تشخیص آنها در یک مهمانی است که دارند به‌سرعت از یک گروه به سراغ گروهی دیگر می‌روند. شخصیت‌های کارآفرین که با طنزی نافذ و زمینی موجبات خنده و سرگرمی را فراهم می‌کنند عاشق این هستند که در مرکز توجه باشند. اگر از یکی از حضار خواسته شود که به روی صحنه بیاید، کارآفرینان داوطلب می‌شوند - یا دوستان خجالتی خود را داوطلب می‌کنند.",
            names: ["Madonna","Eddie Murphy","Jack Nicholson","Ernest Hemingway"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/explorers_ESTP_madonna.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/explorers_ESTP_eddie_murphy.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/explorers_ESTP_jack_nicholson.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/explorers_ESTP_ernest_hemingway.svg?v=6"]
        },
        esfp: {
            link: "https://www.16personalities.com/fa/esfp-%D8%B4%D8%AE%D8%B5%DB%8C%D8%AA",
            typeinfo: "سرگرم‌کننده شخصیت ESFP",
            description: "گر کسی را بتوان یافت که خود به خود به رقص و آواز بپردازد، گونه شخصیتی وی سرگرم‌کننده است. سرگرم‌کنندگان در هیجان لحظه گرفتار می‌شوند و می‌خواهند بقیه نیز چنین احساسی داشته باشند. وقتی مسئله تشویق دیگران به میان می‌آید هیچ گونه شخصیتی دیگر به اندازه سرگرم‌کنندگان در بخشیدن زمان و انرژی خود سخاوتمند نیست، و هیچ گونه شخصیتی دیگری چنین سبک وسوسه‌انگیزی ندارد.",
            names: ["Adele","Jamie Oliver","Marilyn Monroe","Elton John"],
            imagesurls: ["https://www.16personalities.com/static/images/personality-types/famous/explorers_ESFP_adele.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/explorers_ESFP_jamie_oliver.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/explorers_ESFP_marilyn_monroe.svg?v=6","https://www.16personalities.com/static/images/personality-types/famous/explorers_ESFP_elton_john.svg?v=6"]
        }
    }
]

export default data;
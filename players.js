const players = [
    {
        firstName: 'White Lily',
        alt: 'whiteLily',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Ancient',
        photo: 'imgs/whiteLily.webp',
        info: `A solitary beam of moonlight shines in the twilight. Like a pale lily touched by the gentle drops of rain, a Cookie silently entered the world. Her petals might look soft, and her dough frail, but nothing could stop her steps as she explored every corner of Earthbread, seeking a safer and happier future for all Cookiekind. Alas, at the end of her journey, all she found was the dark truth of this world. That truth painted her faith and curiosity with despair and anger, awakening a terrifying darkness deep within. Will White Lily Cookie find her lost voice once again amidst the deafening silence? With a seed of hatred and despair in her heart, will she walk towards the light once more?`,
        type: 'Bomber',
    },
    {
        firstName: 'Dark Cacao',
        alt: 'darkCacao',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Ancient',
        photo: 'imgs/darkCacao.webp',
        info: `The last bean, devoid of any sweetness, fell down from a withered branch of a lonely cacao tree growing above the edge of a cliff. Lying there in frozen soil, enduring snow and wind, this bean wasn't aware of its destiny to become the main ingredient for the cold and reclusive Dark Cacao Cookie. A warrior of unheard strength, Dark Cacao Cookie wielded the Grapejam Chocoblade. This sword was so heavy it required three average Cookies to even budge it. With each swing, the skies erupted into thunder and lightning, avalanches tumbled down countless mountains. Dark Cacao Cookie was known as a Cookie of few words but great principle. After the Dark Flour War's sorrowful events, the warrior locked himself away in the solitude of his own castle... Will anything be able to melt his frozen soul once again?`,
        type: 'Charge',
    },
    {
        firstName: 'Pure Vanilla',
        alt: 'pureVanilla',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Ancient',
        photo: 'imgs/pureVanilla.webp',
        info: `There are not many Cookies on Earthbread who could inspire hope as Pure Vanilla Cookie did. Born from nature-blessed cream and a fragrant vanilla bean, he was the epitome of Cookie kindness and faithfulness. Pure Vanilla Cookie strived to forgive the wrongdoer and heal the wounds of Cookies and animals alike. Though a powerful wielder of magic, he would use his spells not for his own good, but for the good of everyone. The Cookie took an arduous pilgrimage down the Sugar-Free Road. What Pure Vanilla Cookie learned through the Trials is unknown, but crowned with a bright halo of light he returned to found the Vanilla Kingdom, a land of freedom and learning, and a beacon for those seeking love and peace. Pure Vanilla Cookie stood by his friends until the very end, warding off the Darkness with a heartfelt smile.`,
        type: 'Healing',
    },
    {
        firstName: 'Hollyberry',
        alt: 'hollyberry',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Ancient',
        photo: 'imgs/hollyberry.webp',
        info: `What else could result in such an overwhelming passion if not the reddest hollyberries, ripened under the hottest summer sunlight? Hollyberry Cookie believes that every friendship, like victory, should be triumphant. After all, there's nothing in the word as hard as trust! Not even the all-enduring Hollyberry Shield with which she swore to protect her beloved ones. It is said that Hollyberry Cookie leading a charge onto the battlefield is the most inspiring view. A view that inspires to repay with trust to those who put trust in you.`,
        type: 'Defense',
    },
    {
        firstName: 'Golden Cheese',
        alt: 'goldenCheese',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Ancient',
        photo: 'imgs/goldenCheese.webp',
        info: `Worship the Ever-Radiant Sovereign of the Golden City! Golden Cheese Cookie dwells in a gilded palace amidst the dunes of the Parmesan Desert. Cookies fall to their knees in exultation at the glimpse of her—body adorned with shining gold, godlike confidence, and magnificent wings. A mere flick of her wrist forms a golden mountain, another, a river—powers only a god can wield. Her greed knows no bounds, as this Cookie yearns for more to call her own, from treasures to even her faithful subjects. Following her desires, Golden Cheese Cookie filled the kingdom with riches, flowing freely like cheese fondue. She could’ve had it all: her eternal kingdom, the pinnacle of opulence and bliss. If it weren’t for that fated day, that is...`,
        type: 'Ranged',
    },
    {
        firstName: 'Shadow Milk',
        alt: 'shadowMilk',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Beast',
        photo: 'imgs/shadowMilk.webp',
        info: `"Ahh, welcome, welcome! Why the surprised look? Oh, but we've met before, or have you forgotten? For I am the shadow living in your soul—a lie!" What could have happened to this Cookie, once heralded as the Fount of Knowledge, that made him become the Master of Deceit. Eons ago, when Earthbread was still young, the radiance of Knowledge was born to bless all that was with meaning. Yet, in the shadow cast by this light, dwelled its twin, Deceit. With time, all those disenchanted with the bitter Truth turned their eyes to the alluring tapestry of lies spun by the silver-tongued trickster. Masterfully juggling truths and falsehoods on the scene of a whimsical shadowplay, Shadow Milk Cookie has perfected his craft of shattering beliefs of the most stoic in a myriad of treacherous reflections. Applause, applause! It is time to raise the curtain, for the show to plunge the world into never-ending chaos is about to begin...

`,
        type: 'Magic',
    },
    {
        firstName: 'Mystic Flour',
        alt: 'mysticFlour',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Beast',
        photo: 'imgs/mysticFlour.webp',
        info: `An absence of color. Pure, undistilled white flour that symbolizes freedom, enlightenment... and futility. When magic first blessed these lands, Mystic Flour Cookie was revered as a saint—capable of granting wishes both big and small. Yet, as the crowds faded away, she was left with only apathy. Her once radiant light tarnished, leading her to join forces with the fallen Beast Cookies. Despite everything, Mystic Flour Cookie neither feels anger nor sadness, as wishes are nothing but mere illusions, and all worldly desires are destined to disappear one day. A world of nothingness. A world where every Cookie is liberated from burden. That is the perfect world she envisions. Once reaching that enlightenment, one shall open their eyes to the blinding truth: Apathy.

`,
        type: 'Healing',
    },
    {
        firstName: 'Burning Spice',
        alt: 'burningSpice',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Beast',
        photo: 'imgs/burningSpice.webp',
        info: `While the losers are doomed to be swallowed whole by the Tide of Change, victors bend it to their will! Once known as the Herald of Change, Burning Spice Cookie shaped the course of history, when history itself was young. He was hailed as a hero, a leader who fought battle after battle to protect the faint light of civilization shining amidst the gloom. But as time marched on and kingdoms rose and fell in an endless cycle, he grew weary-bored by the monotony of it all. In his heart, the seeds of destruction began to take root. His name, once celebrated, was replaced by whispers of the Great Destroyer. But empty praises and worship from Cookies meant nothing to him, as only destruction could make his jam boil! During his long confinement, he cursed the chains that bound him, aching to unleash chaos. But now, Burning Spice Cookie is free, unchained, and ready to carve a path of havoc. The world will tremble as the Great Destroyer rises once more... and nothing will be spared.

`,
        type: 'Charge',
    },
    {
        firstName: 'Eternal Sugar',
        alt: 'eternalSugar',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Beast',
        photo: 'imgs/eternalSugar.webp',
        info: `Eons ago, there lived a Cookie, blessed with sweetness absolute. "Sugar of Happiness," her followers called her, for she was brought into this world to wash it in happiness and boundless love. Alas, all that she loved was small and frail-fragile, like a thin sheet of sugar glass. Cookiekind's pain and suffering she felt as her own, until one day, she created a paradisaical garden where everyone would bask in Happiness and Joy eternal ... so long as they accepted Sloth. Thus, Eternal Sugar Cookie became her name. Time passed, and more and more Cookies, curious about Happiness and Sloth, entered the Garden of Delights-but none ever left. Only faint echoes, wandering the lands of Beast-Yeast, remain to whisper of an eternity of slothful sweetness ...

`,
        type: 'Bomber',
    },
    {
        firstName: 'Pitaya Dragon',
        alt: 'pitayaDragon',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Dragon',
        photo: 'imgs/pitayaDragon.webp',
        info: `Eons ago, terrifying creatures roamed the land. Existing long before Cookies ran, there was a gargantuan Red Dragon with flames burning hotter than brimstone and scales shining brighter than rubies. Within the crater of a volcano, the dragon would wake with a thunderous roar that shook the heavens. Soaring the skies, this legendary behemoth terrorized the world with cataclysmic firestorms. Cookies of the past told tales of this tremendous creature meddling with mortal affairs and burning entire kingdoms down to the ground... until its powers suddenly began to wane. Could it be that one of the dragon's nefarious deals went awry...? After biding time behind a veil of smoke and lava, a smaller and crispier form emerged: Pitaya Dragon Cookie. Will the world witness the dreaded firestorms of legend once more?

`,
        type: 'Charge',
    },
    {
        firstName: 'Sea Fairy',
        alt: 'seaFairy',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Legendary',
        photo: 'imgs/seaFairy.webp',
        info: `Sea Fairy Cookie was frozen under a curse long ago. But perhaps because of her grieving heart, her soul was frozen beyond magic. If it weren't for the warm kindness of our Cookies, she might have chosen to stay frozen forever. Beyond her flowing hair, the twinkle in her eyes still states she is willing to fight her fate. Let's hope she does not let go of her sword, giving up hope and choosing to turn into sea foam.

`,
        type: 'Bomber',
    },
    {
        firstName: 'Frost Queen',
        alt: 'frostQueen',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Legendary',
        photo: 'imgs/frostQueen.webp',
        info: `Somewhere amidst endless snow stands the lone castle of ice. In its halls of perpetual twilight dwells Frost Queen Cookie, the sovereign of winter itself. Like a fairytale queen, she dazzles with regal magnificence, yet her icy gaze leaves your soul cold and dreary, like tundra after a relentless blizzard. Her Cookie heart with all its mortal hopes and passions is long but frozen, all but one: her adamant will to accomplish her mission. A mission of utmost importance to the existence of the world. Ages might pass, but the castle of ice will remain: and so will Frost Queen Cookie, the guide for the myriads of Life-bearing snowflakes.

`,
        type: 'Magic',
    },
    {
        firstName: 'Black Pearl',
        alt: 'blackPearl',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Legendary',
        photo: 'imgs/blackPearl.webp',
        info: `"There is something out there, hiding amidst the thick fog. Something ominous, capable of swirling all-consuming whirlpools and raising gigantic waves on a whim… The tale of Duskgloom Sea is true, you see, and its dark waters will reach every grain of sugar in your dough and silence your last scream…" It will be wise to avoid these treacherous waves—for their ruler can toss and wreck even the mightiest of ships as if they were mere toys. It is said that kind-hearted mermaids once served as the ocean's caregivers and protectors, but here in the Duskgloom Sea, you will find only dark grudge(sic). Nobody knows the reason behind Black Pearl Cookie's century-old wrath, but with her on the underwater throne of wreckage, the Duskgloom Sea has gained its notoriety as the abyssal graveyard. She does not seek affection nor understanding, but then what is it that Black Pearl Cookie is looking for? What can pacify her cries of desperation?

`,
        type: 'Ambush',
    },
    {
        firstName: 'Moonlight',
        alt: 'moonlight',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Legendary',
        photo: 'imgs/moonlight.webp',
        info: `Moonlight Cookie's graceful wavy hair shines under the night sky, elegant and mystical as ever. She was created by the ancient wizards and learned the secrets of the City of Wizards. Now, all the wizards are gone and she is the only one left to protect the city. She is strongest while in her dreams, therefore is able to protect the city from intruders. Whenever she feels sad, she falls asleep, where she is able to lean by her friend Moon and draw in the night sky with her Star friends to cheer up.

`,
        type: 'Magic',
    },
    {
        firstName: 'Stormbringer ',
        alt: 'stormbringer ',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Legendary',
        photo: 'imgs/stormbringer.webp',
        info: `Way up above, where clouds form and scatter, the Heaven-Splitter lies sheathed in the heaviest cloud. This divine weapon is the very essence of Stormbringer Cookie herself! Forged from the lightning that first struck Earthbread, legends tell that the Heaven-Splitter can cut anything into two. Its powers are so mystifying that it once split a huge tower and even created day and night by slashing through the skies! Then, Stormbringer Cookie gathered Life Powder and brought the Deities of Rain, Wind, and Clouds to life, thus creating the sacred cycle of Life Powder... This Cookie may sometimes laze around, munching on candied clouds, but whenever someone challenges her power, she wields her Heaven-Splitter high, ready to unleash her wrath! Be careful of what you pray to the skies, as even an inkling of arrogance will send Stormbringer Cookie to strike down with her lightning bolt!

`,
        type: 'Charge',
    },
    {
        firstName: 'Wind Archer',
        alt: 'windArcher',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Legendary',
        photo: 'imgs/windArcher.webp',
        info: `Originally, this Cookie was the wind who loved the green of the forest. This wind delightfully spent its day spreading fresh and sweet fragrances across the forest. In order to save the paradise in peril, a mysterious being granted it the power to purify the Darkness. This transformed the wind into Wind Archer Cookie, the protector of the forest. As long as Wind Archer Cookie's heart keeps hope, he will carry on his duty.

`,
        type: 'Ranged',
    },
    {
        firstName: 'Fire Spirit',
        alt: 'fireSpirit',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Legendary',
        photo: 'imgs/fireSpirit.webp',
        info: `Most Cookies merely adopted the flames of the Dragon's Valley, but this legendary Cookie was born in it, molded by it. This mysterious Cookie lives in both the Cookie World and the Dragon World. The Red Dragon's Bead that he carries is proof that he has either won the Red Dragon's favor or has escaped with some kind of mischievous trade.

`,
        type: 'Magic',
    },
    {
        firstName: 'Clotted Cream',
        alt: 'clottedCream',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Super Epic',
        photo: 'imgs/clottedCream.webp',
        info: `Impeccable posture, perfect necktie knot, and a charming smile! Add a generous amount of filling: a mixture of cream, ambition, and respectability, and you will get the Republic's youngest Consul ever. Clotted Cream Cookie's first achievement in office was the consolidation of the Republic's fractured society. Even the Elders, whose authority in the city-state is unquestionable, recognize the Consul's brilliance and eloquence. Indeed, Clotted Cream Cookie's approval rating and influence are growing by the day! But beware: each of his sweet smiles is thoroughly calculated. This Cookie is always on the winning side.

`,
        type: 'Magic',
    },
    {
        firstName: 'Oyster',
        alt: 'oyster',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Super Epic',
        photo: 'imgs/oyster.webp',
        info: `Massive merchant vessels with mermaid statues adorning the stemhead fill the docks of the Creme Republic, all waiting for Oyster Cookie's command. All it takes is one single wave to signal the giant ships to cross the ocean and create new tides. With her noble allure and eloquent words that can steer the conversation the way she wishes, one can't help but be in awe of Oyster Cookie's presence. Some Cookies wonder how a Cookie of the Sea could achieve such fame and prestige among the Republic's crème de la crème. One theory is that House Oyster is somehow connected to the underwater mermaids from the old legends, but no one knows the truth. Oyster Cookie is known to exert her power and influence to create a favorable tide whenever precious goods and valuable information are involved. Perhaps that's why the ambitious come knocking at Manor Oyster's doors. Because some offers are worth risking it all!

`,
        type: 'Support',
    },
    {
        firstName: 'Sherbet',
        alt: 'sherbet',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Super Epic',
        photo: 'imgs/sherbet.webp',
        info: `Here comes winter, where all life falls asleep under the soft blanket of snow. If you suddenly feel a gust of warm breeze on a chilly day, the frost spirit might have passed you by! Sherbet Cookie is always where the glistening first snow is falling gently on your windowsill. He takes the coldest and harshest winds with him, leaving you with the gift of cozy winter. No wonder everyone is waiting for this bright and friendly spirit’s arrival! Sherbet Cookie always dreamt of traveling the world, yet he was destined to become one with ice crystals. A single drop of warmness helped him turn into the freedom-loving sherbet snow spirit. Now, Sherbet Cookie never stays long in one place, traveling across the lands wherever the wind takes him. Still, there always will be a special memory that fills his heart with hope and warmth—a stubborn lantern light that will never stop waiting for his return!

`,
        type: 'Ranged',
    },
    {
        firstName: 'Stardust',
        alt: 'stardust',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Super Epic',
        photo: 'imgs/stardust.webp',
        info: `It is hard to say how long the lonesome speck of Cookie dough had been drifting in the vast emptiness of space before the radiance of nameless stars blessed it with the gift of life. Was it a mere coincidence...? For Stardust Cookie, the warmth of many suns was the heat of the oven, and the distant planets were his only companions in his light-speed journey across galaxies. Beckoned by shapeless, fleeting nebulae, guided by the whispering of the stars, Stardust Cookie headed to the City of Wizards to uncover the secret of his birth. Was he trying to find his long-lost purpose, or, on the contrary, escape his predetermined fate...? With a glint of a stray shooting star, this lonesome voyager crosses someone's sky tonight, seeking a place to call home.

`,
        type: 'Ambush',
    },
    {
        firstName: 'Capsaicin',
        alt: 'Capsaicin',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Super Epic',
        photo: 'imgs/Capsaicin.webp',
        info: `I'll show you the true meaning of SPICE!!! What is this voice, rumbling more intensely than an erupting volcano?! It's none other than Capsaicin Cookie! This Cookie is a product of a fiery mix of capsaicin, the essence of spice, and burning hot magma. Perhaps that's why Capsaicin Cookies's personality, behavior, and strength are all super explosive. It's no surprise that he gained a reputation as the strongest Cookie as soon as he enrolled in Scovillia, a school for only the spiciest of Cookies. Despite his wild exterior, this cookie has won the hearts of every cookie around him with the burning sincerity buried deep in his magma heart. The name Spice Overlord and his now-melted shackles were once a reminder of his pained past, but fear not! Capsaicin Cookie will never lose himself as long as he's able to face his own spice!

`,
        type: 'Charge',
    },
    {
        firstName: 'Shining Glitter',
        alt: 'shinningGlitter',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Super Epic',
        photo: 'imgs/shinningGlitter.webp',
        info: `In the morning, she is in a music show on TV. In the afternoon, smiling at you from a signed poster in a café. In the evening, dancing on a giant neon billboard! Not a day goes by without seeing Shining Glitter Cookie! Her songs are guaranteed instant hits, her live performance are unrivaled. At the peak of her pop stardom, she's ready to take on a new genre: ROCK! Turns out Shining Glitter Cookie was a fan of rock music all along. Haters will say there is no place for a fancy pop star in the world of rock, but that won't stop Shining Glitter Cookie! Get ready, Earthbread: Shining Glitter Cookie's Rock Spirit is about to dazzle you away!

`,
        type: 'Magic',
    },
    {
        firstName: 'Crimson Coral',
        alt: 'crimsonCoral',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Super Epic',
        photo: 'imgs/crimsonCoral.webp',
        info: `Hearken to me, Legion of Tearcrown! The echo of Crimson Coral Cookie's stern voice rolls above the crashing waves, summoning a great host of seahorses, marlins, and whales to protect the treasured kingdom of the Gem Mermaids. Born with a crimson coral, this Cookie has vowed to protect her homewaters, and all denizens of the ocean, even the Almighty Sea herself, bowed in respect. In every battle, Crimson Coral Cookie is at the forefront, bravely wielding her spear from the back of her trusty seahorse companion. The Gem Mermaid's heart softens only when she is with her beloved sisters. Some even say they have seen a faint shadow of a smile on the face of Tearcrown's most stalwart protector!

`,
        type: 'Defense',
    },
    {
        firstName: 'Elder Faerie',
        alt: 'elderFaerie',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Super Epic',
        photo: 'imgs/elderFaerie.webp',
        info: `Somewhere in Beast-Yeast, hidden behind a shimmering veil, stands the Faerie Kingdom—a kingdom that began with but one Cookie. Elder Faerie Cookie has walked this Earthbread for eons, standing at the very core of countless cycles of birth and destruction that have shaped this world. Only hushed whispers of his origins are passed down as legends. His sole purpose is to contain the ancient and malevolent forces that threaten to escape at any moment. His will and power are imbued within the seal—a vital source of life for the Silver Tree to grow. Little do Cookies know that the age of peace and prosperity they enjoy is owed to Elder Faerie Cookie's tireless effort. But the stern monarch's adamant will remains unbothered, for it has been ages since he embraced the stoic path of the Guardian of the Seal.

`,
        type: 'Defense',
    },
    {
        firstName: 'Camellia ',
        alt: 'Camellia',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Super Epic',
        photo: 'imgs/camellia.webp',
        info: `When the camellia flag flutters in the wind, it signals the arrival of Camellia Cookie’s caravan, renowned for trading rare and expensive tea leaves across the continent! The master of this successful enterprise is none other than Camellia Cookie himself. While many assume his extensive background is the key to his success, those close to him know the real secret: his messenger pigeons. These feathered couriers play a crucial role in managing his complex system of trade routes, ensuring that Cookies far and wide can sip the finest brews of tea. Even when Cookies of great fortune seek him out at his Teahouse to win him over, he declines, claiming to be busy admiring paintings. Brushing aside rumors that his trade business is merely a means to gain information and knowledge, Camellia Cookie carefully archives messages brought by his pigeons, for no piece of information is too small — it will all become useful someday.

`,
        type: 'Charge',
    },
    //blank
    {
        firstName: '',
        alt: '',
        lastName: 'Cookie',
        position: '',
        rarity: '',
        photo: '',
        info: ``,
        type: '',
    },
]
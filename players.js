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
    {
        firstName: 'Chili Pepper',
        alt: 'chiliPepper',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Epic',
        photo: 'imgs/Chili_pepper_illustration.webp',
        info: `Chili Pepper Cookie's dough contained much more chili pepper than allowed by the law. This is probably why she doesn't care much about rules at all! Chili Pepper Cookie is a notorious treasure hunter. She never misses a chance to snatch everything valuable she can get her hands on, leaving only chaos and havoc behind. The Cookies know better than to cross her path, and so should you. Good news: you can easily identify this path by a trail of fiery red chili sauce...

`,
        type: 'Ambush',
    },
    {
        firstName: 'Rye',
        alt: 'rye',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Epic',
        photo: 'imgs/Ryebase.webp',
        info: `On the sunset of a hard day's work, the saloon door bangs open. "As usual, boss!" she yells. Yup, it's Rye Cookie again, so better get her order straight. She's a bounty hunter in these here parts, sporting a shiny badge and all that. The Wild Gun, they call'er. Maybe she's here on a job, or maybe she's just moseying through town. Last time, there been rumors of a brazen heist: someone wiped the wheat silo clean as a whistle, not a single grain left. Wonder who coulda down that? Anyway, better to be careful 'round that one. It's safer to be nice and quiet 'round her, lest ya wanna feel the full barrel from her wholegrain-caliber.

`,
        type: 'Ranged',
    },
    {
        firstName: 'Pumpkin Pie',
        alt: 'pumpkinPie',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Epic',
        photo: 'imgs/Pumpkinpiebase.webp',
        info: `It's Halloween, a time of spooky fun for all ghosts and Cookies. And amidst the Jack-o'-lanterns adorning the streets, stands Pumpkin Pie Cookie watching others dressed up in their costumes. Perhaps it's because she was made of a pumpkin that grew in the shade of an abandoned house, untouched by the sun, but she seems... distant, even though she has a smile on her face. One might try to escape this Cookie's uncanny presence, but there is something eerily captivating in the way she slowly bats her eyelashes... Pumpkin Pie Cookie's favorite things on Earthbread are her fluffy and poofy dress that resembles a pumpkin and the old, tattered doll she always carries around. This Cookie will hold your hand and drag you to play with her whenever there's an exciting festival. Surprisingly, no one has ever said no. You can only wonder if it's because of Pumpkin Pie Cookie's doll that looks almost alive or the giant wavering shadow behind her...

`,
        type: 'Magic',
    },
    {
        firstName: 'Crème Brûlée',
        alt: 'cremeBrulee',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Epic',
        photo: 'imgs/cremeBrulee.webp',
        info: `Get ready to welcome the star of the night, Crème Brûlée Cookie, famous for his unique reinterpretations of timeless pieces and masterful technique. Having crossed the firmament of academic music like a bright comet, this talented pianist is known for getting extremely sensitive before a performance and leaving the stage as soon as the final note fades away. Such traits have brought forth rumors of Crème Brûlée Cookie's arrogant nature, and yet he doesn't seem to pay them any thought. For all he cares for is music! A notorious perfectionist, Crème Brûlée Cookie keeps practicing feverishly until his inner critic is satisfied. Tonight, the excited audience showers the maestro with generous applause as he appears on stage and sits in front of the grand piano. He lays his hands on the keyboard, and, after a brief moment of tense, sincere silence... all worldly notions surrounding Crème Brûlée Cookie vanish, and the mesmerizing sounds of his music resonate through the hall and beyond, touching the very souls of the listeners.

`,
        type: 'Ranged',
    },
    {
        firstName: 'Almond',
        alt: 'almond',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Epic',
        photo: 'imgs/Almond_illustration.webp',
        info: `Pristine coat. Perfect shirt. Combed hair. He always starts his day fresh, prim, and proper. But it never lasts long... After being dispatched to spells gone awry from alley to alley, it looks as if Almond Cookie has been on the job for days on end without a single break. If it isn't an enchanted grimoire moving on its own, it's some magical cauldron spewing Jellies without pause. Despite the chaos on every scene, the veteran detective solves each case by the book with pinpoint precision. The almonds in his dough give him a hardy, rough and tough crisp that can withstand just about anything thrown at him, but he's overworked to the point that his dough no longer contains the rich scent of almonds. "Can't even get a coffee break," he sighs as another magical mishap needs his attention. With his coat fluttering in the wind, Almond Cookie looks upon his city and vows to keep going at it until he can finally relax with a decent coffee.

`,
        type: 'Support',
    },
    {
        firstName: 'Cream Puff',
        alt: 'creamPuff',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Epic',
        photo: 'imgs/Cream_puff_default.webp',
        info: `Sweet Cream Puff Cookie makes you feel delighted just by looking at her. Made of soft and delicate cream puff, this cookie is as fragile as can be. Something always makes you worry about her, but it's certain that great power sleeps within her. Cream Puff Cookie used to study magic on her own, but now she is a graduate of a prestigious Magic Academy! Will Cream Puff Cookie be able to become a famous wizard? Let's find out!

`,
        type: 'Support',
    },
    {
        firstName: 'Parfait',
        alt: 'parfait',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Epic',
        photo: 'imgs/Parfait_illustration.webp',
        info: `In a time when there's never a day without a new hot celebrity idol, this singer-songwriter Cookie desperately tries to stick out with sweet toppings in vivid colors! Parfait Cookie's distinct style involves layers of chocolate and candy, topped with dripping syrup. Despite still being a rookie, this Cookie already has dozens of self-written songs. Parfait Cookie's melodies may be just as creative and unique as her colorful mixture of toppings, but her lyrics are always as pure and honest as vanilla ice cream. "It doesn't matter if the audition goes bad, if no one recognizes me, or even if my toppings melt in the summer rain! I keep playing my guitar and sing about the truth in my heart."

`,
        type: 'Support',
    },
    {
        firstName: 'Lilac',
        alt: 'lilac',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Epic',
        photo: 'imgs/Lilac_Cookie.webp',
        info: `Lilac petals are known as one of the core ingredients of the love potion. Finely sliced fragments of these petals were sprinkled into the dough and baked under the scorching desert sun. Lilac Cookie treads behind the veil of darkness only to appear with a gust of petals, mere moments before his unsuspecting foes take their final breath. Luring his targets with an irresistible fragrance, Lilac Cookie swiftly sends them to their end with his razor-sharp chakrams, leaving neither footprints nor a sound. The only remnants of his presence are but a few purple petals on the ground... and the lingering, yet soothing scent of lilac in the air.

`,
        type: 'Support',
    },
    {
        firstName: 'Tea Knight',
        alt: 'teaKnight',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Epic',
        photo: 'imgs/TeaKnight.webp',
        info: `There was a time when dreadful dragons ruled the skies. Their fire ravaged entire kingdoms, and their claws crumbled countless Cookies. An order of knight in shiny silver armor, infused with courage and battle prowess, swore to put an end to this threat. Led by Tea Knight Cookie, the knights courageously opposed the gargantuan monsters through fire and jam an remained in history. But even the most fragrant tea loses its aroma--with time, the glorious tale of the knight became a legend, a mere echo of the past. Tea Knight Cookie, the fearless hero, was forgotten by those he strove to protect. Now sadness and regret shadow his scar-ridden face. Perhaps he wanted to be forgotten...? Yet... when he reminisces the battles he fought side by side with his comrades of old, a spark lights up in his eyes: the flame within him still burns bright!

`,
        type: 'Charge',
    },
    {
        firstName: 'Prophet',
        alt: 'prophet',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Epic',
        photo: 'imgs/prophet.webp',
        info: `This wizened Cookie is often called "Fortune Cookie" for his ability to know what's coming before it happens. His Scroll of Prophecy guides his path, even if it isn't always right. Some say the source of his foresight is his mysterious purple Crystal Ball, but in reality, it is his majestic beard!

`,
        type: 'Support',
    },
    {
        firstName: 'Latte',
        alt: 'latte',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Epic',
        photo: 'imgs/latte.webp',
        info: `Coffee or milk... that is the question. Why not both? Latte Cookie's dough was formed with coffee most bitter and acrid, balanced with the creamiest and smoothest blend of milk. With her etched staff in hand, she gracefully draws beautifully patterned Latte Glyphs in the air while daydreaming. But watch out! By chance, one of these Glyphs could be a powerful sigil for a grand spell! During her years as a student, she spearheaded research on the development of Coffee Magic with a rather eccentric aficionado of coffee. Thanks to her efforts, Latte Cookie was granted a professorship at the Parfaedia Magic Institute. You'd think that a professor would be more punctual, especially with their own lectures. But not Latte Cookie! She's more invested in savoring a warm latte before class. Though far from achieving the Professor of the Year Reward, she knows a thing or two about inspiring her students. With her genuine compliments and encouraging smile, Latte Cookie is the favorite professor of many.

`,
        type: 'Magic',
    },
    {
        firstName: 'Espresso',
        alt: 'espresso',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Epic',
        photo: 'imgs/Espresso_default.webp',
        info: `Precise temperature, precise quantity of coffee beans, precise roasting time! Everything must be in an impeccably precise order for the plan to work. Always busy, always on the go—such is the lifestyle of the founder of the Coffee Magic school, Espresso Cookie. Despite being frequently mistaken for a black mage (yes, sometimes things burn and smoke), Espresso Cookie can't afford to waste a precious second on meaningless explanations. Night after night, this pioneer of magic works on perfecting his grind and brew. "Isn't that too much coffee?" one might wonder. Well, at least there's always the delightful coffee fragrance in the air!

`,
        type: 'Magic',
    },
    {
        firstName: 'Carol',
        alt: 'carol',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Epic',
        photo: 'imgs/carol.webp',
        info: `This gentle Cookie believes that the song is stronger than the sword! She knows how to exert great power with beautiful poetry and melodies only. "No matter what happens, I will always have my songs. My Song of Love will always be around, my Song of Peace will cast darkness away, and my Song of Comfort will bring a smile to a tired face!"

`,
        type: 'Healing',
    },
    {
        firstName: 'Macaron',
        alt: 'macaron',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Epic',
        photo: 'imgs/macaron.webp',
        info: `Did you think this Cookie was made with artificial food coloring? Guess again! She is made with 100% all-natural ingredients. Even her long, gorgeous eyelashes are completely organic. Cookies are drawn to her friendly smile and gentle voice. In fact, cute little Macaron Animals love to gather around her too. Once she starts playing on her macaron drum, the Macaron Animals start a tiny parade. At times, the parade can get out of hand, but Macaron Cookie still enjoys the company anyway. When she gets really excited, Macaron Cookie may demonstrate her most festive performance for you.

`,
        type: 'Magic',
    },
    {
        firstName: 'Pastry',
        alt: 'pastry',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Epic',
        photo: 'imgs/Pastry_illustration.webp',
        info: `"In the name of the Dough, the Oven, and the Witches, I shall fulfil my sacred duty!" Pastry Cookie left her name and her past behind on the day of her Sacred Brining when she was rebaked as a devoted sister of the Holy Pastry Order. "... like a rolling pin flattening the many layers of pastry dough into uniformity, hardships and suffering produce the endurance to conquer the temptations of our crumbly bodies and souls." Now, looking from under the golden phyllo veil, these eyes see nothing else but a turbulent world to be rebuilt in the Order's image. Wielding the Fork of Judgement, her consecrated crossbow, Pastry Cookie has set on her next mission to investigate a tainted shrine. And you would be wise not to stand in her way: the cruel cold metal hungers to deliver judgement.

`,
        type: 'Ranged',
    },
    {
        firstName: 'Red Velvet',
        alt: 'redVelvet',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Epic',
        photo: 'imgs/RedVelvetBase.webp',
        info: `"OBEY ME, MY BEASTS!" Red Velvet Cookie's order, like a thunderbolt, rolls over the battlefield. "FALL IN!" And the horde of snarling Cake Monsters obediently assumes a dreadful battle formation. The crimson general personally leads his legion into battle, sowing fear with his clenched cake fist and his black eye gleaming with the dark fire of battle fervor. The battle-hardened warrior will see his mission to its end with precision and relentlessness. "UNLEASH CHAOS, MY BEASTS!" he roars as the battle begins. Adding silently: "But please, come back alive..."

`,
        type: 'Charge',
    },
    {
        firstName: 'Mango',
        alt: 'mango',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Epic',
        photo: 'imgs/Mangobase.webp',
        info: `The sun glistens above the serene palm trees of the Tropical Soda Archipelago. Once you arrive, Mango Cookie will give you a cheerful, hearty welcome making you feel right at home! With ripe mangoes mixed straight into the dough, Mango Cookie is pure-spirited and tenderhearted. Whether it's spending time along the emerald coasts or exploring the islands with his canoe, Mango Cookie makes sure to enjoy life to the fullest. When the sun reaches its peak, sometimes he'll hang up his hammock underneath the shade of the palm trees and take a relaxing nap. When Cookies visit the archipelago, Mango Cookie can't help becoming a hyper chatterbox. Mangoes will ripen by the time he runs out of stories to tell!

`,
        type: 'Magic',
    },
    {
        firstName: 'Sorbet Shark',
        alt: 'sorbetShark',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Epic',
        photo: 'imgs/Sorbetsharkbase.webp',
        info: `Once upon a time, there was a shark that lived in the deep blue sea. This curious swimmer often popped up to the surface to watch the pirates party on their ships. The shark yearned to join the Cookies for these parties, but they always ran away. Saddened, the shark disappeared into the sea for ages. Until suddenly... Sorbet Shark Cookie burst forth from the depths! This Cookie is, frankly, not the fastest runner, can only make bubbly noises instead of words, and gets soggy in the water just like everyone else. But even so, Sorbet Shark Cookie is always wearing a bright smile! After all, the world above the sea is vast and there's so many things to see!

`,
        type: 'Ambush',
    },
    {
        firstName: 'Milky Way',
        alt: 'milkyWay',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Epic',
        photo: 'imgs/milkyWay.webp',
        info: `Take a handful of star powder gathered from all over the Milky Way Galaxy, illuminate it with delicate moonlight—and voila! Meet Milky Way Cookie, the Slumbering Moon's faithful servant and the conductor of the Sugarcloud Express that will take you to your sweetest dreams and back. Don't be afraid and hop on: one sprinkle of Milky Way Cookie's star powder is enough for a colorful, vibrant dream-just like reality but better! Everything is possible in the World of Dreams, and accidents happen, too: every now and then, the train's floor disappears, and cars reshuffle randomly, leaving crowds of passengers in utter confusion. And right in the middle of the conductor's scheduled nap time! But professionalism never betrays, and there is no problem Milky Way Cookie can't sort out. Colorful hair neatly tied with a Star Jelly, conductor's hat on, and choo choo! The Sugarcloud Express will deliver you to your dreamy destination according to the schedule. Just make a wish upon a twinkling star...!

`,
        type: 'Charge',
    },
    {
        firstName: 'Black Lemonade',
        alt: 'blackLemonade',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Epic',
        photo: 'imgs/blackLemonade.webp',
        info: `If you happen to pass by a dark basement and hear electrifying guitar sounds along with a fresh citrus scent, you might've just stumbled onto Black Lemonade Cookie's studio! She may look distant and aloof at times, but once she gets on stage, she's a whole new Cookie! With her signature two-tone lemon icing and energizing sound, every Cookie is bound to shake to the rhythm of her music. Some Cookies find Black Lemonade Cookie's music hard to follow, but everyone agrees that all of her songs are a labor of love and passion. and that's what matters to Black Lemonade Cookie, after all. No mater how dark and and small the stage, she'll always continue to sing and give her everything for her dedicated fans!

`,
        type: 'Bomber',
    },
    {
        firstName: 'Rockstar',
        alt: 'rockstar',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Epic',
        photo: 'imgs/rockstar.webp',
        info: `Whaaaaam! Wacka wow! Inside the sizzling oven, Rockstar Cookie discovered the sound of rock 'n' roll. He realized that to move the audience, one must not only be talented but also feel the true Rock Spirit within! Many legendary hits were created with that philosophy in mind. Every Cookie who has seen Rockstar Cookie perform was changed forever. The blazing sound! The overwhelming charisma! The legend might have taken a path different from his earlier days filled with experimentation, but his Rock Spirit still resonates with everyone!

`,
        type: 'Healing',
    },
    {
        firstName: 'Burnt Cheese',
        alt: 'burntCheese',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Epic',
        photo: 'imgs/burntCheese.webp',
        info: `To gain entry to the Ever-Gleaming Golden Paradise, you must pass the trials of the Gatekeeper—Burnt Cheese Cookie. Eternally devoted to the Goddess of the Golden City, this Cookie has warded off countless trespassers at the gates of the Golden Cheese Kingdom. Though many have tried, none have managed to proceed past Burnt Cheese Cookie's fearsome jackals and the gatekeeper himself, clad in his jackal mask. When asked, "Why do you work tirelessly day and night?" He is reminded of the sacred vow he made to Her Radiance—to protect her kingdom from darkness. So, once again, Burnt Cheese Cookie heads to the gates to serve and protect, to fulfill his duties.

`,
        type: 'Charge',
    },
    {
        firstName: 'Smoked Cheese',
        alt: 'smokedCheese',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Epic',
        photo: 'imgs/smokedCheese.webp',
        info: `Don't worry, it's under Smoked Cheese Cookie's control! As the General of the Golden Cheese Kingdom, he has kept the kingdom safe for years, taming monsters with his smoky powers to protect the city walls. But after the Dark Flour War, something changed within him. He began planning something that, if revealed, would surely get him to the Colosseum until one day... he finally crossed the line. Now, the Golden Cheese Kingdom is in peril once again, and Smoked Cheese Cookie has got a chance to redeem himself. He stands, facing his past mistakes, his queen, and his former allies. The question is: which way will he point his staff this time?

`,
        type: 'Magic',
    },
    {
        firstName: 'Fettuccine',
        alt: 'fettuccine',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Epic',
        photo: 'imgs/fettuccine.webp',
        info: `Woo... In the vibrant domain of the Golden Cheese Kingdom, one Cookie stands out from the usual crowd—Fettuccine Cookie! While the residents of the Golden City adorn themselves in sparkling gold and jewels, Fettuccine Cookie is wrapped in stale pasta noodles. Then again... considering her instinctive attraction to precious metals, there's no doubt she hails from the Kingdom of Gold. One look at this Cookie slowly trudging the kingdom's dark alleys, unaware of her origin or purpose, will send a chill down some Cookies dough. Who knows: you might end up transported to a hidden corner of the Golden Cheese Kingdom. Some even say that Fettuccine Cookie herself might be the error... Whether she knows about this theory is unclear, as her only interest seems to be gazing at her reflection in the waters to see if her pasta noodle is wrapped tight.

`,
        type: 'Defense',
    },
    {
        firstName: 'Olive',
        alt: 'olive',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Epic',
        photo: 'imgs/olive.webp',
        info: `From long, winding canyons and dense rainforests to scorching Parmasands! Olive Cookie the archaeologist seeks out remote locations veiled from the world! This Cookie owes her wits and smarts to all the ripe, oily olives in her dough. She's always busy researching and recording historical facts and important stories of ancient kingdoms. Is that a relic?! A trickle of olive oil runs down her face in the long-awaited moment of excitement...! But there's no time to celebrate: time to pay respects by publishing the details in a research paper! Olive Cookie will do anything to unearth the secrets of history—like running headfirst into a cave full of bats! Once again, she fixes her glasses, tightens her backpack straps, and ventures toward her next discovery!

`,
        type: 'Support',
    },
    {
        firstName: 'Cream Ferret',
        alt: 'creamFerret',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Special',
        photo: 'imgs/creamFerret.webp',
        info: `"Hush now, wipe those tears, little baby dough! I've got you!" At the very moment the fluffy, twinkle-eyed Cream Ferret met the baby dough, for the first time ever they were able to transform into a Cookie and give a big fuzzy-wuzzy hug! Cream Ferret Cookie was something of a late bloomer for a Cream Critter: finding a way to unlock their Creamcraft wasn't easy at all... But no worries: now that they have finally met their very special friend, everything is a-okay. It may be Cream Ferret Cookie's first time babysitting, but they know that no matter what happens, the magic of friendship can overcome everything and all!

`,
        type: 'Support',
    },
    {
        firstName: 'Icicle Yeti',
        alt: 'icicleYeti',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Special',
        photo: 'imgs/icicleYeti.webp',
        info: `Is there a friend this Yeti can share this perfect morning with? Icicle Yeti's song echoes and breaks the chilly dawn, signaling the start of another day. This adorable Yeti used to be an icicle in a cave, but one day, a powerful being of frost was born... And along with them, this creature too was imbued with life! In legends, Yetis are depicted as ferocious and dangerous, but this particular one only wanted a friend to call their own. Melting and softening their spikes here and there turned them into an adorable Cookie! Small yet mighty—Icicle Yeti Cookie can pick up a Cookie like they weigh nothing, and fight off enemies with one hand! What excites this Cookie the most is making snowmen and having snowball fights with their new buddy! Cold to the touch, but warm at heart—this friendly Cookie is always ready to make new friends!

`,
        type: 'Healing',
    },
    {
        firstName: 'Snapdragon',
        alt: 'snapdragon',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Special',
        photo: 'imgs/snapdragon.webp',
        info: `Dragon City, once a dwelling place for ancient draconic power, has a particular legend passed down from generation to generation. "On the day the world is engulfed in a sea of fire, a dragon that will plunge the world into chaos shall awaken." After a horrendous night when the Red Dragon from the Dragon's Valley burned the city to a crisp, a creature opened its eyes for the first time in the Dragon City Square... A baby with flowers for a tail, Snapdragon! Could this playful hatchling with eyes full of curiosity be the dragon from the legend? No one can be sure just yet, but the way the little creature imitates Pitaya Dragon Cookie speaking Dragontongue or transforms into their Cookie form at will show that they're no regular dragon. Abwubu! Abwaba! The small and cute baby dragon babbles on endlessly, excited to explore its new surroundings. But... who knows what kind of creature Snapdragon Cookie will grow to be?!

`,
        type: 'Support',
    },
    {
        firstName: 'Custard',
        alt: 'custardCookie',
        lastName: 'Cookie III',
        position: 'Rear',
        rarity: 'Rare',
        photo: 'imgs/Custard-cookie.webp',
        info: `Even before the custard on his head started to take shape, this little Cookie dreamed of becoming a glorious king, worth of the title borne by the greatest rulers of the past. Custard Cookie III, as he prefers to call himself, may not rule anything yet, but looking at how active he is at waving his scepter and giving orders, it is only a matter of time before he sits on a real throne. And his determination is remarkable! Made of simple colored paper, his royal regalia looked so realistic that even the notorious Chili Pepper Cookie got confused once! These days, Custard Cookie III is busy recruiting supporters to witness his future crowning. Perhaps you could become one of them?

`,
        type: 'Healing',
    },
    {
        firstName: 'Devil',
        alt: 'devil',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Rare',
        photo: 'imgs/Devil_cookie.webp',
        info: `Devil Cookie is mysterious in many ways. This Cookie might look hot and spicy but tastes like fizzy cola. According to a trustworthy source, they are made of bat extract and a few drops of carbonated beverage. Little trickster's ultrasonic powers allow them to see Cookie souls invisible to the others. Devil Cookie is also capable of summoning the horribly powerful and tremendously sugary Devilish Rune straight from the fiery lower trays of existence.

`,
        type: 'Magic',
    },
    {
        firstName: 'Blackberry',
        alt: 'blackberry',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Rare',
        photo: 'imgs/Blackberry_cookie.webp',
        info: `Blackberry Cookie always wears a reserved look, but it would be hard to find a more caring and devoted Cookie. She has been working at one prestigious household for a long time, and is praised for her miraculous ability to do a multitude of tasks in virtually no time! Despite Blackberry Cookie's tightest schedule, she always finds the time to save the life of her venturesome employer. Perhaps, this is her main duty these days.

`,
        type: 'Magic',
    },
    {
        firstName: 'Adventurer',
        alt: 'adventurer',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Rare',
        photo: 'imgs/Adventurer_default.webp',
        info: `For a long time, there have been only rumors of Adventurer Cookie's travels far and wide beyond the Witch's island, but now he's back and ready to guide the other Cookies into uncharted territories of a new exciting world. Adventurer Cookie had got quite a lot of stories to tell: about legendary dragons, kingdoms in ruins, but... So little time! His thirst for the unknown is unquenchable, and he will continue to roam the wide world as long as possible.

`,
        type: 'Ambush',
    },
    {
        firstName: 'Onion',
        alt: 'onion',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Rare',
        photo: 'imgs/Onionbase2.webp',
        info: `Your eyes will start to water if you get too close to this onion-based Cookie! And once she starts crying, she cannot stop. Mainly because her tears consist of onion juice that makes her cry even more. Poor thing, she is terrified of ghosts and weeps when scared. Perhaps one day, she'll realize why her surroundings sometimes become ghostly, and clocks suddenly start ticking backwards.

`,
        type: 'Support',
    },
    {
        firstName: 'Pancake',
        alt: 'pancake',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Rare',
        photo: 'imgs/Pancake_cookie.webp',
        info: `Browned to perfection, the ever-energetic Pancake Cookie is cute to the extreme. And he knows it! He even added a piece of butter on top of his head to look even more adorable. This sweet and innocent Cookie's favorite thing in the world is Acorn Jellies. When he sees one, he'll use the full extent of his cuteness to get his hands on it. You may try to resist his charms, but he'll get that Acorn Jelly from you one way or another!

`,
        type: 'Ambush',
    },
    {
        firstName: 'Princess',
        alt: 'princess',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Rare',
        photo: 'imgs/Princess_illustration.webp',
        info: `Don't be fooled by her adorable smile and cute hairdo. She's not the graceful and regal princess you're looking for! Trouble follows the ever-curious Princess Cookie everywhere she goes, but somehow she manages to sort things out. After all, it's hard not to fall for Her Majesty's charm!

`,
        type: 'Charge',
    },
    {
        firstName: 'Knight',
        alt: 'knight',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Rare',
        photo: 'imgs/Knight_cookie.webp',
        info: `Knight Cookie, a noble warrior in shiny white chocolate armor decorated with milky foam. You can always count on this devoted Cookie, for he will never let you down. If only he could express his true feelings as freely as he wields his lance.

`,
        type: 'Defense',
    },
    {
        firstName: 'Cherry',
        alt: 'cherry',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Rare',
        photo: 'imgs/Cherry_cookie.webp',
        info: `Behind her endearing smile and adorable looks, Cherry Cookie hides a destructive nature. A real troublemaker decorated with bright red cherry syrup, she enjoys pulling destructive pranks. She especially enjoys throwing her Cherry Bombs, which explode like fireworks. Believe it or not, the sweet, invigorating smell of cherry black powder in the air can blow any stress away!

`,
        type: 'Bomber',
    },
    {
        firstName: 'Carrot',
        alt: 'carrot',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Rare',
        photo: 'imgs/Carrot_cookie.webp',
        info: `The sun is burning! Lumps of rich black soil are being tossed right and left! Sweat is flowing! Carrot Cookie is having yet another pleasant day of working in the fields! This genius farmer knows the secret of growing delicious giant vegetables out of the smallest seeds. She even had to fix the roof of her house after one of her green giants had grown a bit too big. But for Carrot Cookie there's no such thing as "too big!" And when it's harvest season, the Cookie forgets about everything but her farm! Come rain or shine, her crops always flourish!

`,
        type: 'Support',
    },
    {
        firstName: 'Avocado',
        alt: 'avocado',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Rare',
        photo: 'imgs/Avocado_cookie.webp',
        info: `Gather some avocados (the more, the better!) ripened under the hot sun (the more ripe, the better!), then mash, mash, MASH! That's how you can make a healthy and nutritious Avocado Cookie! But you know what terribly lacked nutrients growing up? Her sense of humor! And you will soon know why. Avocado Cookie is a famous master smith. She spends days and nights at the smithy making this and that. It is said that Avocado Cookie can create just about anything! Except for a decent joke, ahem.

`,
        type: 'Defense',
    },
    {
        firstName: 'Gumball',
        alt: 'gumball',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Rare',
        photo: 'imgs/Gumball_cookie.webp',
        info: `The hard outside and soft inside of a gumball were separated, then evenly mixed into the batter and—ta-da!—Gumball Cookie was born! If you smell a sweet and sour aroma, Gumball Cookie is nearby! He is out on a mission to transform the dull world into a fun and colorful playground with his gumball cannon! Walls? Ceiling? Obstacles? Everything is a canvas for this mischievous cookie! It is said that he angered the Witch by coloring her oven the day after he was born. He is frowned upon sometimes for his turbulent nature, but he will stop at nothing to share his art with the world.

`,
        type: 'Bomber',
    },
    {
        firstName: 'GingerBrave',
        alt: 'GingerBrave',
        lastName: '',
        position: 'Front',
        rarity: 'Common',
        photo: 'imgs/gingerBrave.webp',
        info: `GingerBrave was the first Cookie to escape from the Witch's oven. It is unknown how this Cookie came to life, but rumor has it that the Witch accidentally used magic powder instead of ginger powder.

`,
        type: 'Charge',
    },
    {
        firstName: 'Strawberry',
        alt: 'strawberry',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Common',
        photo: 'imgs/Strawberry-cookie.webp',
        info: `Shyness can be quite advantageous. Why? Strawberry Cookie contains no real strawberries, only the flavoring. Were she as active and energetic as other cookies, her artificial strawberry fragrance would have worn off in no time! Strawberry Cookie feels so ashamed of her main ingredient, she'd never want the truth to come out. If only she understood that this yummy strawberry scent is one of the many reasons other Cookies love her!

`,
        type: 'Defense',
    },
    {
        firstName: 'Wizard',
        alt: 'wizard',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Common',
        photo: 'imgs/Wizard-cookie.webp',
        info: `Wizard Cookie came to possess the Witch's Candy Wand by accident (or not?). Within it, he discovered unique magical powers. His popping candy ice cream cone hat is the finishing touch to his wizard look. Frequently used spells include the festive Hocus-Party-Pocus and Abra-Cookie-Cadabra, which brings unexpected luck and fun.

`,
        type: 'Magic',
    },
    {
        firstName: 'Muscle',
        alt: 'muscle',
        lastName: 'Cookie',
        position: 'Front',
        rarity: 'Common',
        photo: 'imgs/muscle.webp',
        info: `Muscle Cookie's recipe requires large quantities of protein powder and about three weeks of intensive kneading. Only after that, the taste of raw muscle power comes to life. Such a rigorous cooking process has made Muscle Cookie a bit short-tempered. He tends to throw exercise equipment when angry. But don't be afraid: once he's done dealing with Cake Monsters, he's as cool as a cucumber.
`,
        type: 'Charge',
    },
    {
        firstName: 'Angel',
        alt: 'Angel',
        lastName: 'Cookie',
        position: 'Rear',
        rarity: 'Common',
        photo: 'imgs/Angel_default.webp',
        info: `Angel Cookie is trying to master the art of flying but can't rise higher than a teeny tiny bit above the ground just yet! Angel Cookie's favorite animals are penguins, ostriches, and baby chicks. Can you guess why? The Cookie's shiny golden curls are truly special. Not only do they grant their owner healing powers, they are remarkably lovely to look at!

`,
        type: 'Healing',
    },
    {
        firstName: 'Ninja',
        alt: 'ninja',
        lastName: 'Cookie',
        position: 'Middle',
        rarity: 'Common',
        photo: 'imgs/Ninja_cookie.webp',
        info: `Just as making perfect dough demands diligent kneading, tireless training is of equal importance on the path of the ninja. The flavor and ingredients of the mysterious Ninja Cookie remain unknown. He is the only Cookie who can jump that many times. Some say he steps on the air itself, others claim he is using some sort of a shadow clone technique... And with training, he can jump even higher! Sky's the limit, literally.

`,
        type: 'Ambush',
    },
]
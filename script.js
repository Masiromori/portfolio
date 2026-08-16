const portfolioItems = [
  {
    id: 'revive-system',
    title: '트릭컬 리바이브 차원대충돌 RE:VIVE 개편 기획서',
    summary: '기존 콘텐츠의 구조적 문제를 분석하고, 선택권과 변별력을 강화하는 방향으로 재설계한 엔드 콘텐츠 개편 기획서',
    category: 'system',
    categories: ['content', 'system'],
    categoryLabel: 'CONTENT · SYSTEM',
    tags: ['엔드콘텐츠', '보스설정', '랭킹시스템'],
    cover: '',
    pdf: './assets/pdfs/revive-system-design.pdf'
  },
  {
    id: 'admiral-office-system',
    title: '미소녀 수집형 RPG 집무실 시스템 기획서',
    summary: '조사원과의 교류와 관계 형성을 중심으로 성장·항해 콘텐츠를 연결한 교감 시스템 기획서',
    category: 'content',
    categories: ['content'],
    categoryLabel: 'CONTENT',
    tags: ['관계시스템', '교감콘텐츠', '콘텐츠연계'],
    cover: '',
    pdf: 'assets/pdfs/admiral-office-system-design.pdf'
  },
  {
    id: 'afk-popuru-character',
    title: 'AFK 새로운 여정 신규 캐릭터 기획서',
    summary: '신규 레오프론 캐릭터 ‘포푸르’의 컨셉부터 스킬까지 설계한 캐릭터 기획서',
    category: 'content',
    categories: ['content'],
    categoryLabel: 'CONTENT',
    tags: ['캐릭터', '스킬설계', '세계관확장'],
    cover: '',
    pdf: 'assets/pdfs/afk-popuru-character-design.pdf'
  },
  {
    id: 'zzz-roguelike-system',
    title: '젠레스 존 제로 로그라이크 시스템 기획서',
    summary: '유저의 선택이 실제 전투 방식의 변화로 이어지도록 설계한 로그라이크 콘텐츠 시스템 기획서',
    category: 'system',
    categories: ['content', 'system'],
    categoryLabel: 'CONTENT · SYSTEM',
    tags: ['로그라이크', '전투기믹', '스테이지설계'],
    cover: '',
    pdf: 'assets/pdfs/zzz-roguelike-system-design.pdf'
  },
  {
    id: 'mass-effect-dialogue',
    title: '매스 이펙트 1 대화 시스템 역기획서',
    summary: '선택지와 조건에 따라 분기되는 매스 이펙트 1의 대화 구조와 데이터 흐름을 분석한 시스템 역기획서',
    category: 'system',
    categories: ['system'],
    categoryLabel: 'SYSTEM',
    tags: ['대화시스템', '데이터구조'],
    cover: '',
    pdf: 'assets/pdfs/mass-effect-dialogue-reverse-design.pdf'
  }
];

const playedGameItems = [
  {
    "id": "league-of-legends",
    "title": "리그 오브 레전드",
    "progress": "5200시간 이상 / 플래티넘 IV",
    "categories": [
      "pc"
    ],
    "genre": "AOS",
    "recent": false,
    "description": "라이엇 게임즈에서 개발한 5대5 팀 기반의 MOBA 게임으로, 각기 다른 능력을 가진 챔피언을 조종해 전략과 협동으로 상대팀의 넥서스를 파괴하는 것이 목표입니다.",
    "image": "assets/images/games/LeagueofLegends.webp"
  },
  {
    "id": "genshin-impact",
    "title": "원신",
    "progress": "3730시간 / 레벨 60",
    "categories": [
      "pc",
      "mobile"
    ],
    "genre": "오픈 월드 액션 어드벤처 RPG",
    "recent": false,
    "description": "호요버스가 개발한 오픈월드 액션 RPG로 불, 물, 얼음, 바람, 번개, 바위, 풀 총 일곱 가지의 속성을 기반으로 한 각기 다양한 국가 및 지역을 여행하며 그들의 이야기를 쫓는 게임입니다.",
    "image": "assets/images/games/GenshinImpact.webp"
  },
  {
    "id": "arknights",
    "title": "명일방주",
    "progress": "2110시간 / 레벨 120",
    "categories": [
      "mobile"
    ],
    "genre": "타워 디펜스 RPG",
    "recent": false,
    "description": "하이퍼그리프가 개발한 유니티 기반 어반 판타지 타워 디펜스 서브컬처 모바일 게임. 플레이어는 다양한 오퍼레이터를 조합하여 전략적인 배치를 통해 적의 침공을 막아내는 것이 핵심입니다.",
    "image": "assets/images/games/Arknights.webp"
  },
  {
    "id": "girls-frontline",
    "title": "소녀전선",
    "progress": "1870시간",
    "categories": [
      "mobile"
    ],
    "genre": "턴제 전략 시뮬레이션, 미소녀 수집형 RPG",
    "recent": false,
    "description": "미카 팀이 개발한 모바일 전략 RPG. 실제 총기를 모티브로 한 개성 있는 인형들로 구성된 부대를 지휘하는 수집과 육성, 전략적인 전투 시스템이 주요 특징인 게임입니다.",
    "image": "assets/images/games/DollsFrontline.webp"
  },
  {
    "id": "sdorica",
    "title": "스도리카",
    "progress": "1580시간 / 레벨 80",
    "categories": [
      "mobile"
    ],
    "genre": "판타지 전략 수집형 RPG",
    "recent": false,
    "description": "레이아크가 제작, 유통하는 판타지 전략 수집형 RPG. 2D 그래픽 횡스크롤 형태로 진행하며 퍼즐 인터페이스로 스킬을 발동해 전투하는 전략형 게임입니다.",
    "image": "assets/images/games/Sdorica.webp"
  },
  {
    "id": "mabinogi",
    "title": "마비노기",
    "progress": "1440시간",
    "categories": [
      "pc"
    ],
    "genre": "MMORPG",
    "recent": false,
    "description": "데브캣 스튜디오에서 개발한 판타지 라이프를 테마로 한 MMORPG로, 전투뿐만 아니라 요리, 음악, 연금술 등 다양한 생활 콘텐츠를 자유롭게 즐길 수 있는 게임입니다.",
    "image": "assets/images/games/Mabinogi.webp"
  },
  {
    "id": "trickcal-revive",
    "title": "트릭컬 리바이브",
    "progress": "856시간 / 레벨 110, 전투력 54,123,753",
    "categories": [
      "mobile"
    ],
    "genre": "볼따구 수집형 RPG",
    "recent": true,
    "description": "에피드게임즈에서 개발한 미소녀 수집형 RPG로, 각기 다른 스킬과 속성을 가진 캐릭터들을 조합해 전투를 펼치며, 볼이 매력적인 캐릭터 디자인과 톡톡 튀는 시나리오와 연출이 강점인 게임입니다.",
    "image": "assets/images/games/Trickcal.webp"
  },
  {
    "id": "destiny-child",
    "title": "데스티니 차일드",
    "progress": "550시간",
    "categories": [
      "mobile"
    ],
    "genre": "미소녀 수집형 RPG",
    "recent": false,
    "description": "시프트업에서 개발한 모바일 수집형 RPG로 마왕 후보생이 되어 다양한 차일드를 수집하고 성장시키는 게임입니다. 생동감 있는 Live2D와 감각적인 일러스트가 특징입니다.",
    "image": "assets/images/games/DestinyChild.webp"
  },
  {
    "id": "blue-archive",
    "title": "블루 아카이브",
    "progress": "495시간 / 레벨 90",
    "categories": [
      "mobile"
    ],
    "genre": "미소녀 수집형 RPG",
    "recent": false,
    "description": "넥슨게임즈가 개발한 모바일 수집형 RPG로, 플레이어는 학원도시 ‘키보토스’의 선생님이 되어 다양한 매력적인 학생들과 교류하고 그들과 한 팀이 되어 전투를 이끌어 나갑니다.",
    "image": "assets/images/games/BlueArchive.webp"
  },
  {
    "id": "alicia",
    "title": "말과 나의 이야기, 앨리샤",
    "progress": "468시간",
    "categories": [
      "pc"
    ],
    "genre": "레이싱",
    "recent": false,
    "description": "엔트리브에서 개발한 말과의 교감을 중심으로 한 멀티플레이 레이싱 게임으로, 다양한 외형의 말을 키우고 훈련시키며 다른 플레이어와 경주를 펼치는 게임입니다.",
    "image": "assets/images/games/Alicia.webp"
  },
  {
    "id": "zelda-botw",
    "title": "젤다의 전설 야생의 숨결",
    "progress": "408시간",
    "categories": [
      "console"
    ],
    "genre": "3인칭 오픈 월드 액션 어드벤처",
    "recent": false,
    "description": "닌텐도에서 개발한 오픈월드 액션 어드벤처 게임으로, ‘이게 될까?’라는 의문이 ‘이게 되네’라는 놀라움으로 바뀌는 높은 자유도와, 현실적인 물리 기반 세계 속 퍼즐 요소가 인상적인 작품입니다.",
    "image": "assets/images/games/ZeldaBOTW.webp"
  },
  {
    "id": "zelda-totk",
    "title": "젤다의 전설 왕국의 눈물",
    "progress": "223시간",
    "categories": [
      "console"
    ],
    "genre": "3인칭 오픈 월드 액션 어드벤처",
    "recent": false,
    "description": "닌텐도에서 개발한 오픈월드 액션 어드벤처 게임으로, 전작의 자유도를 계승하면서 울트라핸드와 스크래빌드를 활용한 크래프팅 시스템을 통해 상상을 현실로 구현할 수 있는 것이 특징입니다.",
    "image": "assets/images/games/ZeldaTOTK.webp"
  },
  {
    "id": "devil-maker-tokyo",
    "title": "데빌 메이커 도쿄",
    "progress": "220시간",
    "categories": [
      "mobile"
    ],
    "genre": "미소녀 수집형 RPG",
    "recent": false,
    "description": "팜플에서 개발한 모바일 카드 배틀 RPG. 현대 도쿄를 배경으로 인간과 악마의 계약을 중심으로 펼쳐지는 스토리, 매력적인 일러스트 카드 및 전략적인 덱 구성으로 많은 인기를 끌었습니다.",
    "image": "assets/images/games/DevilMaker.webp"
  },
  {
    "id": "red-dead-redemption-2",
    "title": "레드 데드 리뎀션 2",
    "progress": "185시간",
    "categories": [
      "console"
    ],
    "genre": "3인칭 오픈 월드 액션 어드벤처",
    "recent": false,
    "description": "락스타게임즈에서 개발한 레드 데드 리뎀션 1의 프리퀄. 1899년 미국을 배경으로 반 더 린드 갱단의 일원인 아서 모건의 이야기를 그립니다. 사실적인 세계 구현과 몰입감 있는 스토리텔링이 특징입니다.",
    "image": "assets/images/games/RDR2.webp"
  },
  {
    "id": "halo-series",
    "title": "헤일로 시리즈 (1~4, 리치)",
    "progress": "140시간",
    "categories": [
      "console"
    ],
    "genre": "액션 어드벤처 FPS",
    "recent": false,
    "description": "외계 종족 코버넌트와 인류 간의 전쟁을 배경으로 한 SF 슈팅 게임 시리즈로, 주인공 ‘마스터 치프’와 AI ‘코타나’의 이야기를 중심으로 방대한 세계관과 몰입감 있는 스토리를 자랑하는 FPS 게임입니다.",
    "image": "assets/images/games/Halo.webp"
  },
  {
    "id": "afk-journey",
    "title": "AFK 새로운 여정",
    "progress": "132시간 / 공명 레벨 341, 전투력 21,838,000",
    "categories": [
      "mobile"
    ],
    "genre": "방치형 게임",
    "recent": false,
    "description": "오픈필드 방치형 RPG로, 아름다운 동화풍 그래픽과 전략적인 전투 시스템, 그리고 풍부한 스토리텔링을 통해 몰입감 있는 게임 경험을 제공합니다.",
    "image": "assets/images/games/AFKJourney.webp"
  },
  {
    "id": "zenless-zone-zero",
    "title": "젠레스 존 제로",
    "progress": "110시간",
    "categories": [
      "pc",
      "mobile"
    ],
    "genre": "어반 판타지 로그라이트 ARPG",
    "recent": false,
    "description": "호요버스가 개발한 어반 판타지 액션 롤플레잉 게임. 세련된 애니메이션 스타일의 그래픽과 매력적인 캐릭터, 그리고 호쾌하고 빠른 전투 시스템이 특징입니다.",
    "image": "assets/images/games/ZZZ.webp"
  },
  {
    "id": "djmax-respect-v",
    "title": "디제이맥스 리스펙트 V",
    "progress": "67시간",
    "categories": [
      "pc"
    ],
    "genre": "리듬 게임",
    "recent": false,
    "description": "로키 스튜디오에서 개발한 리듬 게임. 다양하고 매력적인 곡들이 수록되어 있으며, 입맛에 맞는 키 설정과 난이도를 통해 초보자부터 숙련자까지 폭넓게 즐길 수 있습니다.",
    "image": "assets/images/games/DJMaxRespect.webp"
  },
  {
    "id": "portal-series",
    "title": "포탈 1,2",
    "progress": "60시간",
    "categories": [
      "pc"
    ],
    "genre": "1인칭 퍼즐 FPS",
    "recent": false,
    "description": "밸브에서 개발한 1인칭 퍼즐 어드벤처 게임으로, 공간을 잇는 포탈을 활용한 기발한 퍼즐 기믹 및 애피처 사이언스 안의 AI 캐릭터들이 이끌어 나가는 스토리 전개가 인상적입니다.",
    "image": "assets/images/games/Portal2.webp"
  },
  {
    "id": "princess-connect",
    "title": "프린세스 커넥트! Re:Dive",
    "progress": "55시간",
    "categories": [
      "mobile"
    ],
    "genre": "미소녀 수집형 RPG",
    "recent": false,
    "description": "사이게임즈가 개발한 애니메이션 스타일의 모바일 RPG로, 화려한 스킬 연출과 매력적인 캐릭터들, 그리고 일본 유명 성우진의 풀보이스 스토리로 깊은 몰입감을 제공합니다.",
    "image": "assets/images/games/PrincessConnect.webp"
  },
  {
    "id": "papers-please",
    "title": "페이퍼 플리즈",
    "progress": "50시간",
    "categories": [
      "pc"
    ],
    "genre": "디스토피아 서류 스릴러",
    "recent": false,
    "description": "1인 개발자 루카스 포프가 개발한 게임으로, 가상의 공산국가에서 입국 심사관이 되어 서류를 확인하고 사람들의 출입을 통제하는 게임입니다.",
    "image": "assets/images/games/PapersPlease.webp"
  },
  {
    "id": "bioshock-series",
    "title": "바이오쇼크 시리즈",
    "progress": "20시간",
    "categories": [
      "pc"
    ],
    "genre": "액션 어드벤처 FPS",
    "recent": false,
    "description": "2K에서 개발한 액션 어드벤처 FPS로, 해저 도시 랩처와 공중 도시 콜롬비아를 무대로 철학적·사회 비판적 군상극을 밀도 높은 세계관 속에 녹여낸 작품입니다.",
    "image": "assets/images/games/Bioshock.webp"
  },
  {
    "id": "inscryption",
    "title": "인스크립션",
    "progress": "18시간",
    "categories": [
      "pc"
    ],
    "genre": "로그라이크 호러 퍼즐 게임",
    "recent": false,
    "description": "Daniel Mullins Games에서 개발한 카드 배틀, 방 탈출, 로그라이크 요소가 결합된 독특한 심리 스릴러 게임. 테이블 게임 시스템을 기반으로 게임 이면에 숨겨진 진실을 파헤치는 게임입니다.",
    "image": "assets/images/games/Inscryption.webp"
  },
  {
    "id": "outer-wilds",
    "title": "아우터 와일즈",
    "progress": "18시간",
    "categories": [
      "pc"
    ],
    "genre": "액션 어드벤처 게임",
    "recent": false,
    "description": "Mobius Digital에서 개발한 미스터리 우주 어드벤처 게임. 태양계를 자유롭게 탐험하면서 우주의 미스터리를 파헤쳐 나가는 게임입니다.",
    "image": "assets/images/games/OuterWilds.webp"
  },
  {
    "id": "stardew-valley",
    "title": "스타듀밸리",
    "progress": "18시간",
    "categories": [
      "pc"
    ],
    "genre": "농장 경영 시뮬레이션",
    "recent": false,
    "description": "1인 개발자 ConcernedApe가 개발한 농장 경영 시뮬레이션 게임으로, 시골 농장으로 이주해 작물 재배, 동물 돌보기, 광산 탐험, 마을 사람들과의 교류를 통해 자립해나가는 게임입니다.",
    "image": "assets/images/games/StardewValley.webp"
  },
  {
    "id": "muse-dash",
    "title": "뮤즈 대쉬",
    "progress": "16시간",
    "categories": [
      "pc"
    ],
    "genre": "리듬 게임",
    "recent": false,
    "description": "peropero에서 개발한 2D 횡스크롤 리듬 액션 게임. 개성 넘치는 '뮤즈(Muse)' 캐릭터를 조작하여 음악의 비트에 맞춰 적을 공격하고 장애물을 피하며 스테이지를 클리어합니다.",
    "image": "assets/images/games/MuseDash.webp"
  },
  {
    "id": "ori-will-of-the-wisps",
    "title": "오리와 도깨비불",
    "progress": "16시간",
    "categories": [
      "pc"
    ],
    "genre": "메트로배니아",
    "recent": false,
    "description": "문 스튜디오에서 개발한 메트로배니아 스타일 2D 액션 플랫포머 게임. 손으로 직접 그린 아트 스타일이 인상적이며, 주인공 오리로 플레이하며 다양한 퍼즐과 보스전을 통해 성장해 나갑니다.",
    "image": "assets/images/games/OriWilloftheWisps.webp"
  },
  {
    "id": "superliminal",
    "title": "슈퍼리미널",
    "progress": "14시간",
    "categories": [
      "pc"
    ],
    "genre": "1인칭 퍼즐",
    "recent": false,
    "description": "Pillow Castle에서 개발한 시각적 착시와 강제 원근법을 활용한 1인칭 퍼즐 게임으로, 꿈속에서 현실을 왜곡시키는 퍼즐을 풀어나가는 창의성이 돋보이는 게임입니다.",
    "image": "assets/images/games/Superliminal.webp"
  },
  {
    "id": "return-of-the-obra-dinn",
    "title": "오브라 딘 호의 귀환",
    "progress": "13시간",
    "categories": [
      "pc"
    ],
    "genre": "1인칭 미스테리 어드벤처",
    "recent": false,
    "description": "1인 개발자 루카스 포프가 개발한 게임으로, 플레이어는 보험조사원이 되어 유령선이 된 채 표류해 온 선박 '오브라 딘'에 탑승해 당시 선박에 탑승했던 인원 전원의 보험 처리를 위해 그들의 사망 및 실종 경위를 밝혀내는 게임입니다.",
    "image": "assets/images/games/ObraDinn.webp"
  },
  {
    "id": "it-takes-two",
    "title": "It Takes Two",
    "progress": "12시간",
    "categories": [
      "pc"
    ],
    "genre": "코옵 액션 어드벤처",
    "recent": false,
    "description": "헤이즈라이트 스튜디오가 개발한 협동을 중심으로 한 액션 어드벤처 게임으로, 부부가 인형으로 변해 다양한 퍼즐과 장애물을 함께 해결하며 관계를 회복해가는 이야기를 담고 있습니다.",
    "image": "assets/images/games/ItTakesTwo.webp"
  },
  {
    "id": "undertale",
    "title": "언더테일",
    "progress": "10시간",
    "categories": [
      "pc"
    ],
    "genre": "인디 RPG",
    "recent": false,
    "description": "개인 개발자 토비 폭스가 개발한 인디 RPG로, 지하 세계에 떨어진 인간 아이가 몬스터들과의 만남을 통해 지상으로 돌아가기 위한 여정을 그립니다.",
    "image": "assets/images/games/Undertale.webp"
  },
  {
    "id": "sanabi",
    "title": "산나비",
    "progress": "9시간",
    "categories": [
      "pc"
    ],
    "genre": "2D 액션 플랫포머 게임",
    "recent": false,
    "description": "원더포션이 개발한 조선풍 사이버펑크 액션 플랫포머 게임. 딸을 잃은 퇴역 군인이 '마고 그룹'의 음모를 파헤치며 복수를 수행하는 이야기를 담고 있습니다. 도트 그래픽과 감성적인 연출이 인상적입니다.",
    "image": "assets/images/games/Sanabi.webp"
  },
  {
    "id": "momodora",
    "title": "모모도라: 달 아래의 진혼곡",
    "progress": "9시간",
    "categories": [
      "pc"
    ],
    "genre": "메트로배니아",
    "recent": false,
    "description": "Bombservice에서 개발한 인디 2D 횡스크롤 액션 어드벤처 게임. 부드러운 픽셀 아트와 정교한 애니메이션을 바탕으로 다양한 아이템과 스펠 조합을 통한 전략적인 플레이가 특징입니다.",
    "image": "assets/images/games/Momodora.webp"
  },
  {
    "id": "maid-lady",
    "title": "메이드 아가씨",
    "progress": "8시간",
    "categories": [
      "mobile"
    ],
    "genre": "미소녀 연애 시뮬레이션 게임",
    "recent": false,
    "description": "루나세븐과 애플민트가 개발한 모바일 미연시 게임으로, 귀여운 신입 메이드 아이리와의 알콩달콩한 연애 이야기를 그립니다. 풀보이스 더빙, 멀티 엔딩 시스템을 통해 몰입감 있는 플레이를 제공합니다.",
    "image": "assets/images/games/MaidOjo.webp"
  },
  {
    "id": "to-the-moon",
    "title": "투 더 문",
    "progress": "7시간",
    "categories": [
      "pc"
    ],
    "genre": "어드벤처 롤플레잉 게임",
    "recent": false,
    "description": "프리버드 게임즈가 개발한 어드벤처 게임으로, 한 노인의 마지막 소원을 둘러싼 미스터리를 풀어가는 서사에 중점을 둔 감성적인 작품입니다.",
    "image": "assets/images/games/TotheMoon.webp"
  },
  {
    "id": "deltarune",
    "title": "델타룬",
    "progress": "8시간 / 챕터2 클리어",
    "categories": [
      "pc"
    ],
    "genre": "인디 RPG",
    "recent": false,
    "description": "토비 폭스가 개발한 「언더테일」의 평행 세계를 다룬 RPG로, 개성적인 캐릭터들과 함께 세계를 탐험하며 적과 싸우거나 자비를 베푸는 선택을 통해 이야기를 진행합니다. 탄막 회피를 결합한 독특한 전투 시스템과 챕터별로 전개되는 스토리가 특징입니다.",
    "image": "assets/images/games/Deltarune.webp"
  },
  {
    "id": "dispatch",
    "title": "디스패치",
    "progress": "11시간",
    "categories": [
      "pc"
    ],
    "genre": "선택형 내러티브 어드벤처",
    "recent": false,
    "description": "애드혹 스튜디오에서 개발한 슈퍼히어로 직장 코미디 어드벤처 게임. 은퇴한 슈퍼히어로가 파견 관리자가 되어 개성 강한 영웅들을 사건 현장에 배치하며, 대화와 선택에 따라 인물 관계와 이야기가 변화하는 것이 특징입니다.",
    "image": "assets/images/games/Dispatch.webp"
  },
  {
    "id": "imposter-factory",
    "title": "임포스터 팩토리",
    "progress": "3시간",
    "categories": [
      "pc"
    ],
    "genre": "스토리 중심 어드벤처 RPG",
    "recent": false,
    "description": "프리버드 게임즈에서 개발한 「투 더 문」 시리즈의 작품으로, 수상한 저택에서 벌어지는 살인 사건과 반복되는 시간 속에서 숨겨진 진실을 파헤쳐 나가는 스토리 중심의 어드벤처",
    "image": "assets/images/games/ImposterFactory.webp"
  },
  {
    "id": "lets-go-legends",
    "title": "렛츠고 레전드",
    "progress": "160시간 / 레벨 359, 전투력 1558억 9240만",
    "categories": [
      "mobile"
    ],
    "genre": "방치형 어드벤처 RPG",
    "recent": true,
    "description": "GEAR2에서 개발한 모바일 방치형 RPG로, 자동 전투와 장비·스킬 조합을 통한 성장 및 전략적인 세팅이 주요 특징입니다.",
    "image": "assets/images/games/LetsGoLegends.webp"
  },
  {
    "id": "limbus-company",
    "title": "림버스 컴퍼니",
    "progress": "레벨 7",
    "categories": [
      "pc",
      "mobile"
    ],
    "genre": "턴제 전략 수집형 RPG",
    "recent": true,
    "description": "프로젝트 문에서 개발한 수집형 RPG로, 열두 명의 수감자를 이끌고 로보토미 코퍼레이션의 폐시설을 탐험하며 황금가지를 수집하는 이야기를 다룹니다. 서로의 스킬이 충돌하는 ‘합’과 스킬 연결을 중심으로 한 독특한 전투 시스템이 특징입니다.",
    "image": "assets/images/games/LimbusCompany.webp"
  },
  {
    "id": "meccha-chameleon",
    "title": "멧차 카멜레온",
    "progress": "33시간",
    "categories": [
      "pc"
    ],
    "genre": "멀티플레이 숨바꼭질 게임",
    "recent": false,
    "description": "lemorion_1224가 개발한 멀티플레이 숨바꼭질 게임으로, 캐릭터의 몸을 직접 색칠해 주변 배경에 위장하고 술래의 눈을 피하는 게임입니다.",
    "image": "assets/images/games/MecchaChameleon.webp"
  },
  {
    "id": "the-last-of-us",
    "title": "더 라스트 오브 어스 파트 1,2",
    "progress": "26시간",
    "categories": [
      "console"
    ],
    "genre": "3인칭 액션 어드벤처",
    "recent": false,
    "description": "너티 독에서 개발한 포스트 아포칼립스 액션 어드벤처 시리즈로, 감염병으로 붕괴한 미국을 배경으로 한 잠입과 전투, 자원 관리가 결합된 게임플레이와 조엘과 엘리의 감정과 선택을 깊이 있게 다루는 서사가 특징입니다.",
    "image": "assets/images/games/TheLastofUs.webp"
  },
  {
    "id": "slay-the-spire-2",
    "title": "슬레이 더 스파이어 2",
    "progress": "16시간",
    "categories": [
      "pc"
    ],
    "genre": "로그라이크 덱빌딩 카드 게임",
    "recent": false,
    "description": "Mega Crit에서 개발한 로그라이크 덱빌딩 게임으로, 다양한 카드와 유물을 조합해 매번 달라지는 첨탑을 공략합니다. 전작의 전략적인 카드 전투를 계승하면서 새로운 캐릭터와 카드, 온라인 협동 플레이 등이 추가된 작품입니다.",
    "image": "assets/images/games/SlaytheSpire2.webp"
  },
  {
    "id": "supermarket-chaos",
    "title": "슈퍼마켓 카오스",
    "progress": "13시간",
    "categories": [
      "pc"
    ],
    "genre": "정리 시뮬레이션",
    "recent": false,
    "description": "BunnyHop에서 개발한 정리 시뮬레이션 게임으로, 시간 제한이나 게임 오버 없이 매장이 점차 정돈되는 과정 자체에서 만족감을 느끼도록 설계된 것이 특징입니다.",
    "image": "assets/images/games/SupermarketChaos.webp"
  }
];

// 핵심 역량 편집 영역: category는 program/ai/other, percent는 0~100입니다.
// 제목·설명·아이콘은 label, description, icon 값으로 교체하면 됩니다.
const profileSkillItems = [
  { id: 'figma', category: 'program', label: 'Figma', description: '상세페이지·배너·프레젠테이션 등 다양한 디지털 콘텐츠의 디자인 및 레이아웃 설계에 활용하고 있습니다.', icon: 'assets/icons/profile-skills/icon_Figma.webp', percent: 90 },
  { id: 'photoshop', category: 'program', label: 'Adobe Photoshop', description: '이미지 보정·합성, 디지털 드로잉 등 정교한 이미지 편집 및 그래픽 제작에 활용합니다.', icon: 'assets/icons/profile-skills/icon_Photoshop.svg', percent: 90 },
  { id: 'illustrator', category: 'program', label: 'Adobe Illustrator', description: '아이콘·그래픽 요소 등 디지털 환경에 필요한 벡터 기반 에셋을 제작합니다.', icon: 'assets/icons/profile-skills/icon_Illustrator.svg', percent: 80 },
  { id: 'premiere', category: 'program', label: 'Adobe Premiere', description: '컷 편집과 자막·그래픽 구성을 중심으로 영상 콘텐츠를 제작합니다.', icon: 'assets/icons/profile-skills/icon_Premiere.svg', percent: 80 },
  { id: 'clip-studio-paint', category: 'program', label: 'Clip Studio Paint', description: '디지털 드로잉을 기반으로 일러스트와 간단한 프레임 애니메이션을 제작합니다.', icon: 'assets/icons/profile-skills/icon_Clipstudiopaint_w.webp', percent: 75 },
  { id: 'excel', category: 'program', label: 'Microsoft Excel', description: '함수와 참조 구조를 활용해 기획 데이터를 정리하고 반복 작업을 자동화합니다.', icon: 'assets/icons/profile-skills/icon_Excel.webp', percent: 75 },
  { id: 'powerpoint', category: 'program', label: 'Microsoft PowerPoint', description: '도형·애니메이션·하이퍼링크를 활용한 인터랙티브 프레젠테이션을 제작합니다.', icon: 'assets/icons/profile-skills/icon_Powerpoint.webp', percent: 70 },
  { id: 'word', category: 'program', label: 'Microsoft Word', description: '문서의 정보 구조와 가독성을 고려한 서식 및 레이아웃 구성이 가능합니다.', icon: 'assets/icons/profile-skills/icon_Word.webp', percent: 70 },
  { id: 'chatgpt', category: 'ai', label: 'ChatGPT', description: '기획 검토와 문서 정리부터 데이터 작업까지 활용하며, 프로젝트 지침을 통해 반복 업무의 일관성과 효율을 높입니다.', icon: 'assets/icons/profile-skills/icon_Chatgpt_w.svg', percent: 80 },
  { id: 'codex', category: 'ai', label: 'Codex', description: 'AI 기반 코딩 환경을 활용해 웹사이트와 인터랙티브 프로토타입을 구현합니다.', icon: 'assets/icons/profile-skills/icon_Codex_w.svg', percent: 80 },
  { id: 'nanobanana', category: 'ai', label: 'Nanobanana', description: '프롬프트 설계를 통해 목적에 맞는 이미지를 생성하고 영상 콘텐츠 제작에 활용합니다.', icon: 'assets/icons/profile-skills/icon_Nanobanana_w.png', percent: 75 },
  { id: 'claude', category: 'ai', label: 'Claude', description: '문맥과 표현을 검토하고, 목적에 맞게 자연스러운 문장으로 다듬는 데 활용합니다.', icon: 'assets/icons/profile-skills/icon_Claude_w.svg', percent: 70 },
  { id: 'jlpt', category: 'other', label: '일본어능력시험(JLPT)\n1급', description: '2018.08', icon: 'assets/icons/profile-skills/icon_Jlpt_w.svg', percent: 0, largeIcon: true },
  { id: 'sheep', category: 'other', label: '자작보드게임월드\n기획 경연 우승', description: '2017.10', icon: 'assets/icons/profile-skills/icon_Sheep.svg', percent: 0, largeIcon: true }
];

// 경력·학력 타임라인 편집 영역: 날짜는 YYYY.MM 형식을 유지하면 선 길이가 월 단위로 계산됩니다.
const careerTimelineItems = [
  {
    company: '스페이드 컴퍼니',
    start: '2014.07',
    end: '2015.06',
    groups: [
      {
        title: '덱스토어 운영',
        period: '2014.07 - 2015.06',
        details: [
          '트럼프 카드 쇼핑몰 온라인 마케팅, 제품 수입 및 판매',
          '제품 홍보 사진 촬영 및 보정 작업',
          '제품 수입부터 배송까지 제품 마진율 엑셀 프로세스 자동화 작업'
        ]
      }
    ]
  },
  {
    company: '에이트 스튜디오',
    start: '2017.10',
    end: '2019.04',
    groups: [
      {
        title: '프로젝트 소서리테일',
        period: '2017.10 - 2018.12',
        details: [
          '모바일 수집형 RPG 게임',
          '게임 메인, 전투 시스템 기획 및 던전 레벨 디자인',
          '캐릭터 컨셉, 세계관 및 시나리오, 대화 스크립트 집필',
          '캐릭터 장비 선택창, 스킬트리, 커뮤니티 UI 디자인'
        ]
      },
      {
        title: '프로젝트 팬텀',
        period: '2019.01 - 2019.04',
        details: [
          '모바일 수집형 RPG 게임',
          '캐릭터 컨셉, 세계관 및 시나리오 기획 전담',
          '전투 시스템 기획 기반 몬스터 공격 패턴 레벨 디자인',
          'HP 게이지바, 잠금 패턴 애니메이션 구현 등 기획 보조'
        ]
      }
    ]
  },
  {
    company: '뉴룩스',
    start: '2021.04',
    end: '2023.09',
    groups: [
      {
        title: '국방과학연구소',
        period: '2022.03 - 2023.09',
        details: [
          "22년도 사보 '무내미' 표지 디자인 전담 및 콘텐츠 구성",
          '22, 23년도 국방과학연구소 달력 일러스트 제작',
          "'무기체계소요연감' 콘텐츠 구성 및 서적 출판"
        ]
      },
      {
        title: 'DGIST',
        period: '2021.10 - 2022.11',
        details: [
          '23년도 달력 일러스트 전담 및 22, 23년도 콘텐츠 구성'
        ]
      }
    ],
    notes: [
      '그 외 입찰 참여를 통해 한국원자력환경공단, 한국부동산원, 부산대학교, 대구테크노파크 등 약 10여 건의 과업 낙찰'
    ]
  },
  {
    company: '일성(유)',
    start: '2023.12',
    end: '2026.05',
    groups: [
      {
        title: '청미정, 반코르 브랜드 담당',
        period: '2023.12 - 현재',
        details: [
          '청미정, 반코르 화장품 브랜드 쇼핑몰 운영 및 상품 관리',
          '약 50여 개의 신제품 및 리뉴얼 상품 판매 페이지 제작',
          '올리브영 상품 진열 디자인 및 7건의 홍보 영상 제작'
        ]
      },
      {
        title: 'Collabify, Liliheal 앱 UI/UX 디자인',
        period: '2024.10 - 2025.02',
        details: [
          'COLLABIFY : 코스메틱 인플루언서 커뮤니티 앱 기획 및 디자인',
          'LILIHEAL : 리리힐 미용기기 사용 보조, 커뮤니티 앱 기획 및 디자인'
        ]
      },
      {
        title: '일본 큐텐 메가데뷔 이벤트 진행',
        period: '2025.03 - 2025.04',
        details: [
          '제품 상품 페이지 및 썸네일, 브랜드 홍보 영상 제작'
        ]
      }
    ]
  }
];

const educationTimelineItems = [
  {
    company: '국민대학교',
    start: '2010.03',
    end: '2017.02',
    hideHeaderPeriod: true,
    groups: [
      {
        title: '시각디자인 전공',
        period: '2010.03 - 2017.02',
        details: ['국민대학교 4년제 졸업', '서울, 학점 4.12/4.5']
      }
    ]
  },
  {
    company: '덕원고등학교',
    start: '2007.03',
    end: '2009.02',
    hideHeaderPeriod: true,
    groups: [
      {
        title: '이과 전공',
        period: '2007.03 - 2009.02',
        details: ['덕원고등학교 졸업', '대구']
      }
    ]
  }
];

const root = document.documentElement;
const snapContainer = document.querySelector('.snap-container');
const sections = document.querySelectorAll('.snap-section');
const heroSection = document.querySelector('#main');
const topNavLinks = document.querySelectorAll('.top-nav a[data-target]');
const brandButton = document.querySelector('.brand');
const brandIcon = document.querySelector('.brand-icon');
const easterEggCharacter = document.querySelector('.easter-egg-character');
const globalNextArrow = document.querySelector('#globalNextArrow');
const documentScrollShell = document.querySelector('#documentScrollShell');
const documentList = document.querySelector('#documentList');
const portfolioCarousel = document.querySelector('#portfolioCarousel');
const portfolioCarouselTrack = document.querySelector('#portfolioCarouselTrack');
const portfolioSwipeHint = document.querySelector('#portfolioSwipeHint');
const portfolioMenuButton = document.querySelector('.portfolio-menu-button');
const portfolioIndexMenu = document.querySelector('#portfolioIndexMenu');
const portfolioViewerPanel = document.querySelector('#portfolioViewerPanel');
const filterButtons = document.querySelectorAll('.filter-button');
const gameFilterButtons = document.querySelectorAll('.game-filter-button');
const gameCardGrid = document.querySelector('#gameCardGrid');
const gamesScrollShell = document.querySelector('#gamesScrollShell');
const gameMotionLayer = document.querySelector('#gameMotionLayer');
const profileSkillGrid = document.querySelector('#profileSkillGrid');
const profileSkillFilterButtons = document.querySelectorAll('[data-skill-filter]');
const careerTimeline = document.querySelector('#careerTimeline');
const careerTimelineViewport = document.querySelector('#careerTimelineViewport');
const timelineFilterButtons = document.querySelectorAll('[data-timeline-filter]');
const viewerTitle = document.querySelector('#viewerTitle');
const openPdf = document.querySelector('#openPdf');
const pdfCanvas = document.querySelector('#pdfCanvas');
const viewerGuide = document.querySelector('#viewerGuide');
const prevPageButton = document.querySelector('#prevPage');
const nextPageButton = document.querySelector('#nextPage');
const pageStatus = document.querySelector('#pageStatus');
const pageControls = document.querySelector('#pageControls');
const pageNumberMenu = document.querySelector('#pageNumberMenu');
const pageNumberList = document.querySelector('#pageNumberList');
const pdfJsScriptUrl = './assets/vendor/pdfjs/pdf.min.js';
const pdfJsWorkerUrl = './assets/vendor/pdfjs/pdf.worker.min.js';

if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

let activePdfDoc = null;
let activePageNumber = 1;
let activeRenderTask = null;
let activePdfLoadingTask = null;
let renderRequestId = 0;
let pdfLoadRequestId = 0;
let pdfFallbackMode = false;
let activeDocumentId = '';
let currentDocumentFilter = 'all';
let documentButtons = new Map();
let hasPortfolioIntroPlayed = false;
let portfolioAnimationToken = 0;
let portfolioSwipeHintToken = 0;
let portfolioMenuJumpToken = 0;
let isPortfolioMenuOpen = false;
let activeCarouselIndex = 0;
let isCarouselAnimating = false;
let portfolioViewerRevealTimer = 0;
let portfolioViewerCleanupTimer = 0;
let currentGameFilter = 'all';
let gameCards = new Map();
let hasGameIntroPlayed = false;
let gameAnimationToken = 0;
let gameScrollbarTrack = null;
let gameScrollbarThumb = null;
let gameScrollbarRaf = 0;
let gameMasonryRaf = 0;
let gameAutoScrollRaf = 0;
let gameAutoScrollLastTime = 0;
let gameAutoScrollDirection = 1;
let gameAutoScrollPosition = 0;
let gameAutoScrollPausedUntil = 0;
let gameAutoScrollWriteUntil = 0;
let hasGameAutoScrollStarted = false;
let lastGameScrollRatio = 0;
let activeSkillFilter = 'program';
let hasShownCodexSkillNote = false;
let easterEggClickCount = 0;
let activeTimelineFilter = 'career';
let requestedTimelineFilter = 'career';
let timelineSwitchToken = 0;
let timelineSwitchTimer = 0;
let pdfLibraryPromise = null;
let isProfileContentInitialized = false;
let isPortfolioContentInitialized = false;
let isGameContentInitialized = false;
let parallaxRaf = 0;
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

function configurePdfLibrary() {
  if (!window.pdfjsLib) return false;
  window.pdfjsLib.GlobalWorkerOptions.workerSrc = pdfJsWorkerUrl;
  return true;
}

function ensurePdfLibrary() {
  if (configurePdfLibrary()) return Promise.resolve(window.pdfjsLib);
  if (pdfLibraryPromise) return pdfLibraryPromise;

  pdfLibraryPromise = new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = pdfJsScriptUrl;
    script.async = true;
    script.addEventListener('load', () => {
      if (configurePdfLibrary()) {
        resolve(window.pdfjsLib);
      } else {
        reject(new Error('PDF.js loaded without exposing pdfjsLib.'));
      }
    }, { once: true });
    script.addEventListener('error', () => {
      pdfLibraryPromise = null;
      reject(new Error('PDF.js script could not be loaded.'));
    }, { once: true });
    document.head.appendChild(script);
  });

  return pdfLibraryPromise;
}

function getFilteredPortfolioItems(filter = 'all') {
  return filter === 'all'
    ? [...portfolioItems]
    : portfolioItems.filter((item) => (item.categories || [item.category]).includes(filter));
}

function getPortfolioItemNumber(id) {
  const index = portfolioItems.findIndex((item) => item.id === id);
  return String(index + 1).padStart(2, '0');
}

function getDocumentButton(item) {
  if (documentButtons.has(item.id)) return documentButtons.get(item.id);

  const button = document.createElement('button');
  button.className = 'document-button';
  button.type = 'button';
  button.dataset.id = item.id;
  button.innerHTML = `
    <span class="number">${getPortfolioItemNumber(item.id)}</span>
    <span>
      <strong>${item.title}</strong>
      <small>${item.summary}</small>
    </span>
    <span class="tags">${item.tags.map((tag) => `<span>${tag}</span>`).join('')}</span>
  `;
  button.addEventListener('click', () => selectDocument(item.id));
  documentButtons.set(item.id, button);
  return button;
}

function updateDocumentButtonState() {
  documentButtons.forEach((button, id) => {
    button.classList.toggle('active', id === activeDocumentId);
  });
}

function updateDocumentListScrollbar() {
  if (!documentList) return;

  requestAnimationFrame(() => {
    const isScrollable = documentList.scrollHeight > documentList.clientHeight + 2;
    documentList.classList.toggle('is-scrollable', isScrollable);
    documentScrollShell?.classList.toggle('is-scrollable', isScrollable);
    documentCustomScrollbar?.update();
  });
}

function cancelDocumentButtonAnimations(button, options = {}) {
  const shouldCommit = options.commit === true;

  button.getAnimations({ subtree: true }).forEach((animation) => {
    try {
      if (shouldCommit && typeof animation.commitStyles === 'function') {
        animation.commitStyles();
      }
    } catch (error) {}

    try { animation.cancel(); } catch (error) {}
  });
}

function clearDocumentButtonAnimationState(button) {
  cancelDocumentButtonAnimations(button);
  button.classList.remove(
    'is-intro-card',
    'is-filter-animating',
    'is-entering',
    'is-exiting',
    'is-hidden',
    'is-moving'
  );
  button.style.removeProperty('--intro-delay');
  button.style.removeProperty('opacity');
  button.style.removeProperty('transform');
  button.style.removeProperty('visibility');
  button.style.removeProperty('pointer-events');
  button.style.removeProperty('transition');
  button.style.removeProperty('transition-delay');
  button.style.removeProperty('will-change');
  button.style.removeProperty('display');
  delete button.dataset.exitToken;
  delete button.dataset.enterToken;
  delete button.dataset.enterStartX;
  delete button.dataset.enterStartY;
  delete button.dataset.enterRotate;
}

function makeDocumentButtonFinal(button, token = portfolioAnimationToken) {
  if (!button || !button.isConnected) return;

  cancelDocumentButtonAnimations(button);
  button.classList.remove(
    'is-intro-card',
    'is-filter-animating',
    'is-entering',
    'is-exiting',
    'is-hidden',
    'is-moving'
  );
  button.style.transition = 'none';
  button.style.removeProperty('--intro-delay');
  button.style.removeProperty('transition-delay');
  button.style.removeProperty('will-change');
  button.style.removeProperty('display');
  button.style.opacity = '1';
  button.style.visibility = 'visible';
  button.style.pointerEvents = 'auto';
  button.style.transform = 'none';
  void button.offsetHeight;

  requestAnimationFrame(() => {
    if (token !== portfolioAnimationToken) return;
    if (!button.isConnected) return;
    button.style.removeProperty('transition');
    button.style.removeProperty('opacity');
    button.style.removeProperty('visibility');
    button.style.removeProperty('pointer-events');
    button.style.removeProperty('transform');
  });
}

function renderDocuments(filter = 'all') {
  const filteredItems = getFilteredPortfolioItems(filter);
  const fragment = document.createDocumentFragment();

  currentDocumentFilter = filter;
  filteredItems.forEach((item) => {
    const button = getDocumentButton(item);
    clearDocumentButtonAnimationState(button);
    fragment.appendChild(button);
  });

  documentList.replaceChildren(fragment);
  updateDocumentButtonState();

  if (!hasPortfolioIntroPlayed && filter === 'all') {
    documentList.classList.add('is-awaiting-intro');
  } else {
    documentList.classList.remove('is-awaiting-intro');
  }

  updateDocumentListScrollbar();
}

function playPortfolioIntro() {
  if (!documentList || hasPortfolioIntroPlayed) return;

  hasPortfolioIntroPlayed = true;
  documentList.classList.remove('is-awaiting-intro');
  const carouselCards = [...(portfolioCarouselTrack?.querySelectorAll('.portfolio-carousel-card') || [])];

  if (prefersReducedMotion) {
    updateDocumentListScrollbar();
    return;
  }

  const carouselDelayByPosition = { center: 20, left: 50, right: 80 };
  carouselCards.forEach((card) => {
    const delay = carouselDelayByPosition[card.dataset.position] ?? 20;
    card.style.setProperty('--carousel-intro-delay', `${delay}ms`);
    card.classList.add('is-carousel-intro-card');
  });

  schedulePortfolioSwipeHint(440);

  const visibleButtons = [...documentList.querySelectorAll('.document-button')];
  visibleButtons.forEach((button, index) => {
    clearDocumentButtonAnimationState(button);
    button.style.setProperty('--intro-delay', `${index * 72}ms`);
    button.classList.add('is-intro-card');
  });

  const cleanupDelay = 560 + Math.max(0, visibleButtons.length - 1) * 72;
  window.setTimeout(() => {
    visibleButtons.forEach((button) => clearDocumentButtonAnimationState(button));
    carouselCards.forEach((card) => {
      card.classList.remove('is-carousel-intro-card');
      card.style.removeProperty('--carousel-intro-delay');
    });
    updateDocumentListScrollbar();
  }, Math.max(cleanupDelay, 460));
}

function schedulePortfolioSwipeHint(delay = 440) {
  if (!portfolioSwipeHint || prefersReducedMotion) return;

  const token = ++portfolioSwipeHintToken;
  portfolioSwipeHint.classList.remove('is-active');

  window.setTimeout(() => {
    if (token !== portfolioSwipeHintToken) return;
    portfolioSwipeHint.classList.add('is-active');
  }, delay);
}

function waitForPortfolioAnimations(animations) {
  if (!animations.length) return Promise.resolve();
  return Promise.allSettled(animations.map((animation) => animation.finished));
}

function freezeConnectedDocumentButtonsForFilter(buttons) {
  buttons.forEach((button) => {
    cancelDocumentButtonAnimations(button);
    button.classList.remove(
      'is-intro-card',
      'is-filter-animating',
      'is-entering',
      'is-exiting',
      'is-hidden',
      'is-moving'
    );
    button.style.removeProperty('--intro-delay');
    button.style.removeProperty('transition-delay');
    button.style.removeProperty('will-change');
    button.style.removeProperty('display');
    button.style.transition = 'none';
    button.style.opacity = '1';
    button.style.visibility = 'visible';
    button.style.pointerEvents = 'auto';
    button.style.transform = 'none';
  });

  if (buttons.length) {
    void documentList.offsetHeight;
  }
}

function prepareDocumentButtonFinalForAtomicFilter(button) {
  cancelDocumentButtonAnimations(button);
  button.classList.remove(
    'is-intro-card',
    'is-filter-animating',
    'is-entering',
    'is-exiting',
    'is-hidden',
    'is-moving'
  );
  button.style.removeProperty('--intro-delay');
  button.style.removeProperty('transition-delay');
  button.style.removeProperty('will-change');
  button.style.removeProperty('display');
  button.style.transition = 'none';
  button.style.opacity = '1';
  button.style.visibility = 'visible';
  button.style.pointerEvents = 'auto';
  button.style.transform = 'none';
  delete button.dataset.exitToken;
  delete button.dataset.enterToken;
  delete button.dataset.enterStartX;
  delete button.dataset.enterStartY;
  delete button.dataset.enterRotate;
}

async function animatePortfolioFilter(filter = 'all') {
  if (!documentList) return;
  if (filter === currentDocumentFilter) return;

  const token = ++portfolioAnimationToken;
  documentList.classList.remove('is-awaiting-intro');

  const nextItems = getFilteredPortfolioItems(filter);
  const nextIds = nextItems.map((item) => item.id);
  const nextIdSet = new Set(nextIds);

  if (activeDocumentId && !nextIdSet.has(activeDocumentId)) {
    resetViewerToInitialState();
  } else {
    updateDocumentButtonState();
  }

  if (prefersReducedMotion) {
    renderDocuments(filter);
    updateDocumentListScrollbar();
    return;
  }

  const connectedButtons = [...documentList.querySelectorAll('.document-button')];
  freezeConnectedDocumentButtonsForFilter(connectedButtons);

  const firstRects = new Map();
  connectedButtons.forEach((button) => {
    const id = button.dataset.id;
    if (!id || !nextIdSet.has(id)) return;

    const rect = button.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0) {
      firstRects.set(id, rect);
    }
  });

  const currentIdSet = new Set(connectedButtons.map((button) => button.dataset.id).filter(Boolean));
  const enteringIds = nextIds.filter((id) => !currentIdSet.has(id));
  const enteringIdSet = new Set(enteringIds);
  const fragment = document.createDocumentFragment();

  nextItems.forEach((item) => {
    const button = getDocumentButton(item);
    prepareDocumentButtonFinalForAtomicFilter(button);

    if (enteringIdSet.has(item.id)) {
      const finalIndex = nextIds.indexOf(item.id);
      const hasPreviousVisibleNeighbor = nextIds.slice(0, finalIndex).some((nextId) => firstRects.has(nextId));
      const hasNextVisibleNeighbor = nextIds.slice(finalIndex + 1).some((nextId) => firstRects.has(nextId));
      const startY = hasPreviousVisibleNeighbor || hasNextVisibleNeighbor ? 16 : -16;
      const startX = finalIndex % 2 === 0 ? -6 : 6;
      const rotate = finalIndex % 2 === 0 ? -1.8 : 1.8;

      button.dataset.enterToken = String(token);
      button.dataset.enterStartX = String(startX);
      button.dataset.enterStartY = String(startY);
      button.dataset.enterRotate = String(rotate);
      button.style.opacity = '0';
      button.style.visibility = 'visible';
      button.style.pointerEvents = 'none';
      button.style.transform = `translate(${startX}px, ${startY}px) rotate(${rotate}deg)`;
      button.style.willChange = 'opacity, transform';
      button.classList.add('is-filter-animating', 'is-entering');
    }

    fragment.appendChild(button);
  });

  documentList.replaceChildren(fragment);
  documentList.scrollTop = 0;
  currentDocumentFilter = filter;
  updateDocumentButtonState();

  const movingAnimations = [];
  const enteringAnimations = [];

  nextIds.forEach((id) => {
    const button = documentButtons.get(id);
    const firstRect = firstRects.get(id);
    if (!button || !button.isConnected || !firstRect || enteringIdSet.has(id)) return;

    const lastRect = button.getBoundingClientRect();
    const deltaX = firstRect.left - lastRect.left;
    const deltaY = firstRect.top - lastRect.top;

    if (Math.abs(deltaX) < 0.5 && Math.abs(deltaY) < 0.5) {
      makeDocumentButtonFinal(button, token);
      return;
    }

    button.classList.add('is-filter-animating', 'is-moving');
    button.style.transition = 'none';
    button.style.pointerEvents = 'none';
    button.style.willChange = 'transform';

    const moveAnimation = button.animate([
      { opacity: 1, visibility: 'visible', transform: `translate(${deltaX}px, ${deltaY}px) rotate(0deg)` },
      { opacity: 1, visibility: 'visible', transform: 'translate(0, 0) rotate(0deg)' }
    ], {
      duration: 280,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'none'
    });

    moveAnimation.finished.then(() => {
      if (token !== portfolioAnimationToken) return;
      makeDocumentButtonFinal(button, token);
    }).catch(() => {});

    movingAnimations.push(moveAnimation);
  });

  enteringIds.forEach((id, index) => {
    const button = documentButtons.get(id);
    if (!button || !button.isConnected || button.dataset.enterToken !== String(token)) return;

    const startX = Number.parseFloat(button.dataset.enterStartX || '0');
    const startY = Number.parseFloat(button.dataset.enterStartY || '16');
    const rotate = Number.parseFloat(button.dataset.enterRotate || '0');

    const enterAnimation = button.animate([
      { opacity: 0, visibility: 'visible', transform: `translate(${startX}px, ${startY}px) rotate(${rotate}deg)` },
      { opacity: 0.86, visibility: 'visible', transform: `translate(${startX * 0.28}px, ${startY * 0.28}px) rotate(${rotate * 0.28}deg)`, offset: 0.62 },
      { opacity: 1, visibility: 'visible', transform: 'translate(0, 0) rotate(0deg)' }
    ], {
      duration: 340,
      delay: Math.min(42 + index * 34, 120),
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'forwards'
    });

    enterAnimation.finished.then(() => {
      if (token !== portfolioAnimationToken) return;
      if (!button.isConnected || button.dataset.enterToken !== String(token)) return;

      delete button.dataset.enterToken;
      delete button.dataset.enterStartX;
      delete button.dataset.enterStartY;
      delete button.dataset.enterRotate;
      makeDocumentButtonFinal(button, token);
    }).catch(() => {});

    enteringAnimations.push(enterAnimation);
  });

  updateDocumentListScrollbar();

  await waitForPortfolioAnimations([...movingAnimations, ...enteringAnimations]);
  if (token !== portfolioAnimationToken) return;

  nextIds.forEach((id) => {
    const button = documentButtons.get(id);
    if (!button || !button.isConnected) return;
    delete button.dataset.enterToken;
    delete button.dataset.enterStartX;
    delete button.dataset.enterStartY;
    delete button.dataset.enterRotate;
    makeDocumentButtonFinal(button, token);
  });

  updateDocumentListScrollbar();
}

function getGamePlayHours(item) {
  if (Number.isFinite(item.playHours)) return item.playHours;

  const match = String(item.progress || '').match(/([0-9][0-9,]*)\s*시간/);
  return match ? Number.parseInt(match[1].replace(/,/g, ''), 10) : 0;
}

function getFilteredGameItems(filter = 'all') {
  const filteredItems = filter === 'all'
    ? [...playedGameItems]
    : playedGameItems.filter((item) => item.categories.includes(filter));

  return filteredItems.sort((a, b) => {
    const hourDiff = getGamePlayHours(b) - getGamePlayHours(a);
    if (hourDiff !== 0) return hourDiff;
    return playedGameItems.indexOf(a) - playedGameItems.indexOf(b);
  });
}

function renderProfileSkills(filter = activeSkillFilter) {
  if (!profileSkillGrid) return;

  const circumference = 2 * Math.PI * 138;
  const fragment = document.createDocumentFragment();
  const filteredItems = profileSkillItems
    .filter((item) => item.category === filter)
    .sort((a, b) => Number(b.percent) - Number(a.percent));

  activeSkillFilter = filter;
  filteredItems.forEach((item, index) => {
    const level = clampNumber(Number(item.percent) / 100);
    const baseColor = [170, 169, 173];
    const progressColor = baseColor.map((channel) => Math.round(channel + (255 - channel) * level));
    const progressAlpha = 0.6 + 0.4 * level;
    const skillItem = document.createElement('article');
    const safeIconPath = String(item.icon || '').replace(/["\\\n\r]/g, '');
    const labelText = String(item.label || '');
    const labelHtml = labelText
      .split('\n')
      .map((line) => line.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;'))
      .join('<br>');
    const descriptionHtml = String(item.description || '')
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;');
    skillItem.className = 'profile-skill-item';
    skillItem.classList.toggle('is-large-icon', Boolean(item.largeIcon));
    skillItem.dataset.skillIndex = String(index);
    skillItem.dataset.skillId = String(item.id || '');
    skillItem.setAttribute('aria-label', `${labelText.replace(/\n+/g, ' ')} 활용 역량 ${Math.round(level * 100)}%`);
    skillItem.innerHTML = `
      <div class="profile-skill-meter" aria-hidden="true">
        <svg class="profile-skill-ring" viewBox="0 0 300 300">
          <circle class="profile-skill-ring-base" cx="150" cy="150" r="138"></circle>
          <circle
            class="profile-skill-ring-progress"
            cx="150"
            cy="150"
            r="138"
            style="--skill-ring-length:${circumference};--skill-ring-end:${circumference * (1 - level)};--skill-ring-color:rgba(${progressColor.join(',')},${progressAlpha.toFixed(3)})"
          ></circle>
        </svg>
        <img class="profile-skill-icon" src="${safeIconPath}" alt="" />
      </div>
      <div class="profile-skill-copy">
        <h4>${labelHtml}</h4>
        <p>${descriptionHtml}</p>
      </div>
      ${item.id === 'codex' && !hasShownCodexSkillNote ? '<button class="profile-skill-note" type="button" aria-label="Codex 제작 안내 닫기">이 웹사이트도 Codex를 통해 만들었어요!</button>' : ''}
    `;
    fragment.appendChild(skillItem);
  });

  profileSkillGrid.replaceChildren(fragment);
}

function parseCareerMonth(value) {
  const match = /^(\d{4})\.(\d{2})$/.exec(String(value).trim());
  if (!match) return Number.NaN;

  const year = Number(match[1]);
  const month = Number(match[2]);
  if (month < 1 || month > 12) return Number.NaN;
  return year * 12 + month - 1;
}

function renderCareerTimeline(filter = activeTimelineFilter) {
  const sourceItems = filter === 'education' ? educationTimelineItems : careerTimelineItems;
  if (!careerTimeline || sourceItems.length === 0) return;

  const careers = sourceItems
    .map((item) => ({
      ...item,
      startMonth: parseCareerMonth(item.start),
      endMonth: parseCareerMonth(item.end)
    }))
    .filter((item) => Number.isFinite(item.startMonth) && Number.isFinite(item.endMonth) && item.endMonth >= item.startMonth)
    .sort((a, b) => b.endMonth - a.endMonth);

  if (careers.length === 0) return;

  const monthHeight = filter === 'education' ? 4 : 8;
  const careerLayouts = careers.map((item) => {
    const rangeHeight = Math.max(16, (item.endMonth - item.startMonth) * monthHeight);
    return {
      ...item,
      height: rangeHeight
    };
  });
  const careerStagger = 180;
  const firstPointDelay = 560;
  const endpointGap = 140;
  const rangeAfterPoint = 280;
  const bubbleAfterRange = 380;

  const rail = document.createElement('div');
  rail.className = 'career-timeline-rail';
  rail.innerHTML = '<span class="career-timeline-base" aria-hidden="true"></span>';

  careerLayouts.forEach((item, index) => {
    const range = document.createElement('div');
    const endPointDelay = firstPointDelay + index * careerStagger;
    const startPointDelay = endPointDelay + endpointGap;
    const rangeDelay = startPointDelay + rangeAfterPoint;
    const bubbleDelay = rangeDelay + bubbleAfterRange;
    range.className = 'career-timeline-range';
    range.style.setProperty('--career-range-height', `${item.height}px`);
    range.style.setProperty('--career-range-delay', `${rangeDelay}ms`);
    range.style.setProperty('--career-bubble-delay', `${bubbleDelay}ms`);
    const groups = (item.groups || []).map((group) => `
      <section class="career-timeline-detail-group">
        <div class="career-timeline-detail-heading">
          <h5>${group.title}</h5>
          <p class="career-timeline-detail-period">${group.period}</p>
        </div>
        <ul>${(group.details || []).map((detail) => `<li>${detail}</li>`).join('')}</ul>
      </section>
    `).join('');
    const notes = item.notes?.length
      ? `<ul class="career-timeline-note-list">${item.notes.map((note) => `<li>${note}</li>`).join('')}</ul>`
      : '';
    range.innerHTML = `
      <span class="career-timeline-range-line" aria-hidden="true"></span>
      <span class="career-timeline-marker is-end" style="--career-point-delay:${endPointDelay}ms">
        <span class="career-timeline-dot" aria-hidden="true"></span>
        <span class="career-timeline-date">${item.end}</span>
      </span>
      <span class="career-timeline-marker is-start" style="--career-point-delay:${startPointDelay}ms">
        <span class="career-timeline-dot" aria-hidden="true"></span>
        <span class="career-timeline-date">${item.start}</span>
      </span>
      <article class="career-timeline-bubble">
        <header class="career-timeline-bubble-header">
          <h4>${item.company}</h4>
          ${item.hideHeaderPeriod ? '' : `<p>${item.start} — ${item.end}</p>`}
        </header>
        <div class="career-timeline-details">${groups}${notes}</div>
      </article>
    `;
    rail.appendChild(range);
  });

  careerTimeline.replaceChildren(rail);
  activeTimelineFilter = filter;
  careerTimeline.dataset.timelineFilter = filter;
}

function updateCareerTimelineFadeState() {
  if (!careerTimelineViewport) return;

  const isScrolled = careerTimelineViewport.scrollTop > 2;
  const isAtBottom = careerTimelineViewport.scrollTop + careerTimelineViewport.clientHeight >= careerTimelineViewport.scrollHeight - 2;
  careerTimelineViewport.classList.toggle('is-scrolled', isScrolled);
  careerTimelineViewport.classList.toggle('is-at-bottom', isAtBottom);
}

function playProfileSkillMeters() {
  if (!profileSkillGrid) return;

  profileSkillGrid.querySelectorAll('.profile-skill-item').forEach((skillItem, index) => {
    const progress = skillItem.querySelector('.profile-skill-ring-progress');
    const delay = 150 + index * 70;

    const itemAnimation = skillItem.animate([
      { opacity: 0, transform: 'translateY(22px)' },
      { opacity: 1, transform: 'translateY(0)' }
    ], {
      duration: 520,
      delay,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'both'
    });

    let progressAnimation = null;
    if (progress) {
      const ringLength = progress.style.getPropertyValue('--skill-ring-length');
      const ringEnd = progress.style.getPropertyValue('--skill-ring-end');
      progressAnimation = progress.animate([
        { strokeDashoffset: ringLength },
        { strokeDashoffset: ringEnd }
      ], {
        duration: 1050,
        delay,
        easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
        fill: 'both'
      });
    }

    const note = skillItem.querySelector('.profile-skill-note');
    if (note) {
      hasShownCodexSkillNote = true;
      note.style.visibility = 'visible';
      note.addEventListener('click', () => dismissCodexSkillNote(), { once: true });
      const precedingAnimations = [itemAnimation.finished];
      if (progressAnimation) precedingAnimations.push(progressAnimation.finished);
      Promise.all(precedingAnimations).then(() => {
        const revealAnimation = note.animate([
          { opacity: 0, transform: 'translateY(-12px)' },
          { opacity: 1, transform: 'translateY(0)' }
        ], {
          duration: 480,
          delay: 90,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'none'
        });
        revealAnimation.finished.then(() => {
          if (!note.isConnected) return;
          note.style.opacity = '1';
          note.style.transform = 'translateY(0)';
          note.classList.add('is-floating');
        }).catch(() => {});
      }).catch(() => {});
    }
  });

  window.setTimeout(() => updateProfilePanelScrollbar(getActiveProfilePanel()), 1280);
}

function dismissCodexSkillNote({ immediate = false } = {}) {
  const note = profileSkillGrid?.querySelector('.profile-skill-note');
  if (!note) return;

  note.classList.remove('is-floating');
  note.getAnimations().forEach((animation) => animation.cancel());
  if (immediate) {
    note.remove();
    return;
  }

  const dismissAnimation = note.animate([
    { opacity: Number.parseFloat(getComputedStyle(note).opacity) || 1, transform: 'translateY(0)' },
    { opacity: 0, transform: 'translateY(-10px)' }
  ], {
    duration: 260,
    easing: 'ease-out',
    fill: 'forwards'
  });
  dismissAnimation.finished.then(() => note.remove()).catch(() => note.remove());
}

function getGameCard(item) {
  if (gameCards.has(item.id)) return gameCards.get(item.id);

  const card = document.createElement('article');
  card.className = 'game-card';
  card.classList.toggle('has-game-image', Boolean(item.image));
  card.dataset.id = item.id;
  card.dataset.categories = item.categories.join(' ');
  card.innerHTML = `
    <div class="game-card-image">
      ${item.image ? `<img src="${item.image}" alt="${item.title} 배경 이미지" loading="lazy" decoding="async" />` : ''}
    </div>
    <div class="game-card-body">
      <div class="game-card-title-row">
        <h3 class="game-card-title">${item.title}</h3>
        ${item.recent ? '<span class="game-tag recent">최근 플레이 중</span>' : ''}
      </div>
      <p class="game-card-genre">${item.genre}</p>
      ${item.progress ? `<p class="game-card-progress">${item.progress}</p>` : ''}
      <p class="game-card-description">${item.description}</p>
    </div>
  `;
  gameCards.set(item.id, card);
  return card;
}

function cancelGameCardAnimations(card) {
  if (!card) return;
  card.getAnimations({ subtree: true }).forEach((animation) => {
    try { animation.cancel(); } catch (error) {}
  });
}

function clearGameCardMotionState(card) {
  if (!card) return;
  cancelGameCardAnimations(card);
  card.classList.remove('is-intro-card', 'is-awaiting-intro', 'is-game-filter-animating', 'is-game-entering', 'is-game-moving');
  card.style.removeProperty('--game-intro-delay');
  card.style.removeProperty('opacity');
  card.style.removeProperty('transform');
  card.style.removeProperty('visibility');
  card.style.removeProperty('pointer-events');
  card.style.removeProperty('transition');
  card.style.removeProperty('transition-delay');
  card.style.removeProperty('will-change');
  card.style.removeProperty('display');
  delete card.dataset.enterToken;
  delete card.dataset.enterStartX;
  delete card.dataset.enterStartY;
  delete card.dataset.enterRotate;
}

function makeGameCardFinal(card, token = gameAnimationToken) {
  if (!card || !card.isConnected) return;

  cancelGameCardAnimations(card);
  card.classList.remove('is-intro-card', 'is-awaiting-intro', 'is-game-filter-animating', 'is-game-entering', 'is-game-moving');
  card.style.transition = 'none';
  card.style.removeProperty('--game-intro-delay');
  card.style.removeProperty('transition-delay');
  card.style.removeProperty('will-change');
  card.style.removeProperty('display');
  card.style.opacity = '1';
  card.style.visibility = 'visible';
  card.style.pointerEvents = 'auto';
  card.style.transform = 'none';
  void card.offsetHeight;

  requestAnimationFrame(() => {
    if (token !== gameAnimationToken) return;
    if (!card.isConnected) return;
    card.style.removeProperty('transition');
    card.style.removeProperty('opacity');
    card.style.removeProperty('visibility');
    card.style.removeProperty('pointer-events');
    card.style.removeProperty('transform');
  });
}

function clampNumber(value, min = 0, max = 1) {
  return Math.min(max, Math.max(min, value));
}

const scrollActivityTimers = new WeakMap();

function markScrollActivity(element) {
  if (!element) return;
  element.classList.add('is-scroll-active');

  const previousTimer = scrollActivityTimers.get(element);
  if (previousTimer) window.clearTimeout(previousTimer);

  const nextTimer = window.setTimeout(() => {
    element.classList.remove('is-scroll-active');
    scrollActivityTimers.delete(element);
  }, 1000);

  scrollActivityTimers.set(element, nextTimer);
}

function bindScrollActivity(element) {
  if (!element || element.dataset.scrollActivityBound === 'true') return;
  element.dataset.scrollActivityBound = 'true';
  element.addEventListener('scroll', () => markScrollActivity(element), { passive: true });
  element.addEventListener('wheel', () => markScrollActivity(element), { passive: true });
  element.addEventListener('pointerdown', () => markScrollActivity(element));
}

function createCustomScrollbar(shell, getScroller) {
  if (!shell || typeof getScroller !== 'function') {
    return { update() {}, bindScroller() {} };
  }

  const track = document.createElement('div');
  track.className = 'custom-scrollbar-track';
  track.setAttribute('aria-hidden', 'true');

  const thumb = document.createElement('div');
  thumb.className = 'custom-scrollbar-thumb';
  track.appendChild(thumb);
  shell.appendChild(track);

  const boundScrollers = new WeakSet();
  let dragStartY = 0;
  let dragStartScrollTop = 0;
  let rafId = 0;

  function getScrollableState(scroller = getScroller()) {
    if (!scroller) return { scroller: null, maxScroll: 0, isScrollable: false };
    const maxScroll = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
    return {
      scroller,
      maxScroll,
      isScrollable: maxScroll > 2
    };
  }

  function updateNow() {
    rafId = 0;
    const { scroller, maxScroll, isScrollable } = getScrollableState();
    shell.classList.toggle('is-scrollable', isScrollable);

    if (!scroller) {
      shell.classList.add('is-scroll-at-bottom');
      return;
    }

    const isAtBottom = !isScrollable || scroller.scrollTop + scroller.clientHeight >= scroller.scrollHeight - 4;
    shell.classList.toggle('is-scroll-at-bottom', isAtBottom);

    const trackHeight = track.getBoundingClientRect().height;
    if (trackHeight <= 0) return;

    if (!isScrollable) {
      thumb.style.height = `${trackHeight}px`;
      thumb.style.transform = 'translateY(0)';
      return;
    }

    const ratio = clampNumber(scroller.scrollTop / Math.max(1, maxScroll));
    const thumbHeight = Math.max(36, (scroller.clientHeight / scroller.scrollHeight) * trackHeight);
    const thumbTop = ratio * Math.max(0, trackHeight - thumbHeight);
    thumb.style.height = `${thumbHeight}px`;
    thumb.style.transform = `translateY(${thumbTop}px)`;
  }

  function update() {
    const { scroller } = getScrollableState();
    bindScroller(scroller);
    if (rafId) cancelAnimationFrame(rafId);
    rafId = requestAnimationFrame(updateNow);
  }

  function bindScroller(scroller) {
    if (!scroller || boundScrollers.has(scroller)) return;
    boundScrollers.add(scroller);
    scroller.addEventListener('scroll', () => {
      markScrollActivity(shell);
      update();
    }, { passive: true });
    scroller.addEventListener('wheel', () => markScrollActivity(shell), { passive: true });
    scroller.addEventListener('pointerdown', () => markScrollActivity(shell));
  }

  function getTravel() {
    const trackHeight = track.getBoundingClientRect().height;
    const thumbHeight = thumb.getBoundingClientRect().height;
    return Math.max(1, trackHeight - thumbHeight);
  }

  const onPointerMove = (event) => {
    const { scroller, maxScroll, isScrollable } = getScrollableState();
    markScrollActivity(shell);
    if (!scroller || !isScrollable) return;
    const deltaY = event.clientY - dragStartY;
    scroller.scrollTop = dragStartScrollTop + (deltaY / getTravel()) * maxScroll;
    update();
  };

  const onPointerUp = () => {
    shell.classList.remove('is-scroll-dragging');
    markScrollActivity(shell);
    document.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('pointerup', onPointerUp);
    try { thumb.releasePointerCapture?.(Number(thumb.dataset.pointerId || 0)); } catch (error) {}
    delete thumb.dataset.pointerId;
  };

  thumb.addEventListener('pointerdown', (event) => {
    const { scroller, isScrollable } = getScrollableState();
    if (!scroller || !isScrollable) return;
    event.preventDefault();
    shell.classList.add('is-scroll-dragging');
    markScrollActivity(shell);
    thumb.dataset.pointerId = String(event.pointerId);
    thumb.setPointerCapture?.(event.pointerId);
    dragStartY = event.clientY;
    dragStartScrollTop = scroller.scrollTop;
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp, { once: true });
  });

  track.addEventListener('pointerdown', (event) => {
    if (event.target === thumb) return;
    const { scroller, maxScroll, isScrollable } = getScrollableState();
    markScrollActivity(shell);
    if (!scroller || !isScrollable) return;
    const trackRect = track.getBoundingClientRect();
    const thumbHeight = thumb.getBoundingClientRect().height;
    const maxThumbTop = Math.max(1, trackRect.height - thumbHeight);
    const targetTop = clampNumber(event.clientY - trackRect.top - thumbHeight / 2, 0, maxThumbTop);
    scroller.scrollTop = (targetTop / maxThumbTop) * maxScroll;
    update();
  });

  bindScroller(getScroller());
  update();
  return { update, bindScroller };
}

function ensureGameScrollbar() {
  if (!gamesScrollShell || !gameCardGrid) return;
  if (gameScrollbarTrack && gameScrollbarThumb) return;

  gameScrollbarTrack = document.createElement('div');
  gameScrollbarTrack.className = 'game-scrollbar-track';
  gameScrollbarTrack.setAttribute('aria-hidden', 'true');

  gameScrollbarThumb = document.createElement('div');
  gameScrollbarThumb.className = 'game-scrollbar-thumb';
  gameScrollbarTrack.appendChild(gameScrollbarThumb);
  gamesScrollShell.appendChild(gameScrollbarTrack);

  let dragStartY = 0;
  let dragStartScrollTop = 0;

  const getTravel = () => {
    const trackHeight = gameScrollbarTrack.getBoundingClientRect().height;
    const thumbHeight = gameScrollbarThumb.getBoundingClientRect().height;
    return Math.max(1, trackHeight - thumbHeight);
  };

  const onPointerMove = (event) => {
    markScrollActivity(gamesScrollShell);
    const maxScroll = Math.max(0, gameCardGrid.scrollHeight - gameCardGrid.clientHeight);
    if (!maxScroll) return;
    const deltaY = event.clientY - dragStartY;
    gameCardGrid.scrollTop = dragStartScrollTop + (deltaY / getTravel()) * maxScroll;
  };

  const onPointerUp = () => {
    gamesScrollShell?.classList.remove('is-scroll-dragging');
    pauseGameAutoScroll();
    markScrollActivity(gamesScrollShell);
    document.removeEventListener('pointermove', onPointerMove);
    document.removeEventListener('pointerup', onPointerUp);
    gameScrollbarThumb.releasePointerCapture?.(Number(gameScrollbarThumb.dataset.pointerId || 0));
    delete gameScrollbarThumb.dataset.pointerId;
  };

  gameScrollbarThumb.addEventListener('pointerdown', (event) => {
    if (!gamesScrollShell.classList.contains('is-scrollable')) return;
    event.preventDefault();
    pauseGameAutoScroll();
    gamesScrollShell.classList.add('is-scroll-dragging');
    markScrollActivity(gamesScrollShell);
    gameScrollbarThumb.dataset.pointerId = String(event.pointerId);
    gameScrollbarThumb.setPointerCapture?.(event.pointerId);
    dragStartY = event.clientY;
    dragStartScrollTop = gameCardGrid.scrollTop;
    document.addEventListener('pointermove', onPointerMove);
    document.addEventListener('pointerup', onPointerUp, { once: true });
  });

  gameScrollbarTrack.addEventListener('pointerdown', (event) => {
    pauseGameAutoScroll();
    markScrollActivity(gamesScrollShell);
    if (event.target === gameScrollbarThumb) return;
    const maxScroll = Math.max(0, gameCardGrid.scrollHeight - gameCardGrid.clientHeight);
    if (!maxScroll) return;
    const trackRect = gameScrollbarTrack.getBoundingClientRect();
    const thumbHeight = gameScrollbarThumb.getBoundingClientRect().height;
    const maxThumbTop = Math.max(1, trackRect.height - thumbHeight);
    const targetTop = clampNumber(event.clientY - trackRect.top - thumbHeight / 2, 0, maxThumbTop);
    gameCardGrid.scrollTop = (targetTop / maxThumbTop) * maxScroll;
  });
}

function captureGameScrollRatio() {
  if (!gameCardGrid) return lastGameScrollRatio;
  const maxScroll = Math.max(0, gameCardGrid.scrollHeight - gameCardGrid.clientHeight);
  if (maxScroll <= 0) return lastGameScrollRatio;
  lastGameScrollRatio = clampNumber(gameCardGrid.scrollTop / maxScroll);
  return lastGameScrollRatio;
}

function restoreGameScrollRatio(ratio = lastGameScrollRatio) {
  if (!gameCardGrid) return;
  const maxScroll = Math.max(0, gameCardGrid.scrollHeight - gameCardGrid.clientHeight);
  gameCardGrid.scrollTop = maxScroll > 0 ? clampNumber(ratio) * maxScroll : 0;
}

function updateGameCustomScrollbar(isScrollable) {
  ensureGameScrollbar();
  if (!gameScrollbarTrack || !gameScrollbarThumb || !gameCardGrid) return;

  const trackHeight = gameScrollbarTrack.getBoundingClientRect().height;
  if (trackHeight <= 0) return;

  if (!isScrollable) {
    gameScrollbarThumb.style.height = `${trackHeight}px`;
    gameScrollbarThumb.style.transform = 'translateY(0)';
    return;
  }

  const maxScroll = Math.max(1, gameCardGrid.scrollHeight - gameCardGrid.clientHeight);
  const ratio = clampNumber(gameCardGrid.scrollTop / maxScroll);
  lastGameScrollRatio = ratio;

  const thumbHeight = Math.max(36, (gameCardGrid.clientHeight / gameCardGrid.scrollHeight) * trackHeight);
  const thumbTop = ratio * Math.max(0, trackHeight - thumbHeight);
  gameScrollbarThumb.style.height = `${thumbHeight}px`;
  gameScrollbarThumb.style.transform = `translateY(${thumbTop}px)`;
}

function updateGameGridState() {
  if (!gameCardGrid || !gamesScrollShell) return;

  if (gameScrollbarRaf) cancelAnimationFrame(gameScrollbarRaf);
  gameScrollbarRaf = requestAnimationFrame(() => {
    gameScrollbarRaf = 0;
    const isScrollable = gameCardGrid.scrollHeight > gameCardGrid.clientHeight + 2;
    const isAtTop = !isScrollable || gameCardGrid.scrollTop <= 4;
    const isAtBottom = !isScrollable || gameCardGrid.scrollTop + gameCardGrid.clientHeight >= gameCardGrid.scrollHeight - 4;
    gamesScrollShell.classList.toggle('is-scrollable', isScrollable);
    gamesScrollShell.classList.toggle('is-at-top', isAtTop);
    gamesScrollShell.classList.toggle('is-at-bottom', isAtBottom);
    updateGameCustomScrollbar(isScrollable);
  });
}

function pauseGameAutoScroll(duration = 2400) {
  gameAutoScrollPausedUntil = Math.max(gameAutoScrollPausedUntil, performance.now() + duration);
}

function stepGameAutoScroll(timestamp) {
  if (!gameCardGrid || !gamesScrollShell) {
    gameAutoScrollRaf = 0;
    return;
  }

  const deltaTime = gameAutoScrollLastTime
    ? Math.min(40, timestamp - gameAutoScrollLastTime)
    : 0;
  gameAutoScrollLastTime = timestamp;

  const maxScroll = Math.max(0, gameCardGrid.scrollHeight - gameCardGrid.clientHeight);
  const canMove = hasGameAutoScrollStarted
    && !document.hidden
    && !prefersReducedMotion
    && maxScroll > 0
    && timestamp >= gameAutoScrollPausedUntil
    && !gamesScrollShell.classList.contains('is-scroll-dragging');

  if (canMove && deltaTime > 0) {
    if (gameAutoScrollPosition >= maxScroll - 1) gameAutoScrollDirection = -1;
    if (gameAutoScrollPosition <= 1) gameAutoScrollDirection = 1;

    gameAutoScrollPosition += gameAutoScrollDirection * 14 * (deltaTime / 1000);
    if (gameAutoScrollPosition >= maxScroll) {
      gameAutoScrollPosition = maxScroll;
      gameAutoScrollDirection = -1;
    } else if (gameAutoScrollPosition <= 0) {
      gameAutoScrollPosition = 0;
      gameAutoScrollDirection = 1;
    }

    gameAutoScrollWriteUntil = timestamp + 80;
    gameCardGrid.scrollTop = gameAutoScrollPosition;
    updateGameGridState();
  } else {
    gameAutoScrollPosition = gameCardGrid.scrollTop;
  }

  gameAutoScrollRaf = requestAnimationFrame(stepGameAutoScroll);
}

function startGameAutoScroll() {
  if (gameAutoScrollRaf || !gameCardGrid) return;
  gameAutoScrollLastTime = 0;
  gameAutoScrollRaf = requestAnimationFrame(stepGameAutoScroll);
}

function setPlayedGamesInView(isInView) {
  if (!isInView || hasGameAutoScrollStarted) return;
  hasGameAutoScrollStarted = true;
  gameAutoScrollLastTime = 0;
  gameAutoScrollPosition = gameCardGrid?.scrollTop || 0;
  pauseGameAutoScroll(900);
  startGameAutoScroll();
}

function updateGameMasonryLayout() {
  if (!gameCardGrid) return;
  [...gameCardGrid.querySelectorAll('.game-card')].forEach((card) => {
    card.style.removeProperty('grid-row-end');
  });
}

function scheduleGameMasonryLayout() {
  if (!gameCardGrid) return;
  if (gameMasonryRaf) cancelAnimationFrame(gameMasonryRaf);
  gameMasonryRaf = requestAnimationFrame(() => {
    gameMasonryRaf = 0;
    updateGameMasonryLayout();
    updateGameGridState();
  });
}

function renderGameCards(filter = 'all', options = {}) {
  if (!gameCardGrid) return;

  const filteredItems = getFilteredGameItems(filter);
  const fragment = document.createDocumentFragment();
  const scrollRatio = options.preserveScroll ? captureGameScrollRatio() : 0;

  currentGameFilter = filter;
  filteredItems.forEach((item) => {
    const card = getGameCard(item);
    clearGameCardMotionState(card);
    if (!hasGameIntroPlayed && filter === 'all') {
      card.classList.add('is-awaiting-intro');
    }
    fragment.appendChild(card);
  });

  gameCardGrid.replaceChildren(fragment);
  updateGameMasonryLayout();
  restoreGameScrollRatio(scrollRatio);
  updateGameGridState();
}

function playGameIntro() {
  if (!gameCardGrid || hasGameIntroPlayed) return;

  hasGameIntroPlayed = true;
  if (prefersReducedMotion) {
    [...gameCardGrid.querySelectorAll('.game-card')].forEach((card) => clearGameCardMotionState(card));
    updateGameGridState();
    return;
  }

  const visibleCards = [...gameCardGrid.querySelectorAll('.game-card')];
  visibleCards.forEach((card, index) => {
    clearGameCardMotionState(card);
    const rowDelay = Math.floor(index / 4) * 90;
    const columnDelay = (index % 4) * 26;
    card.style.setProperty('--game-intro-delay', `${rowDelay + columnDelay}ms`);
    card.classList.add('is-intro-card');
  });

  const cleanupDelay = 680 + Math.max(0, Math.ceil(visibleCards.length / 4) - 1) * 90;
  window.setTimeout(() => {
    visibleCards.forEach((card) => clearGameCardMotionState(card));
    updateGameGridState();
  }, cleanupDelay);
}

function createLeavingGameClone(card, shellRect, token) {
  if (!gameMotionLayer || !card) return null;

  const rect = card.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return null;

  const clone = card.cloneNode(true);
  clone.className = `${card.className} game-card-clone`;
  clone.style.width = `${rect.width}px`;
  clone.style.height = `${rect.height}px`;
  clone.style.left = `${rect.left - shellRect.left}px`;
  clone.style.top = `${rect.top - shellRect.top}px`;
  clone.style.opacity = '1';
  clone.style.visibility = 'visible';
  clone.style.transform = 'translateY(0)';
  clone.style.transition = 'none';
  clone.dataset.cloneToken = String(token);
  gameMotionLayer.appendChild(clone);
  return clone;
}

async function animateGameFilter(filter = 'all') {
  if (!gameCardGrid || filter === currentGameFilter) return;

  const token = ++gameAnimationToken;
  const scrollRatio = captureGameScrollRatio();
  const nextItems = getFilteredGameItems(filter);
  const nextIds = nextItems.map((item) => item.id);
  const nextIdSet = new Set(nextIds);

  gameMotionLayer?.replaceChildren();
  [...gameCardGrid.querySelectorAll('.game-card')].forEach((card) => clearGameCardMotionState(card));

  if (prefersReducedMotion) {
    renderGameCards(filter, { preserveScroll: true });
    return;
  }

  const connectedCards = [...gameCardGrid.querySelectorAll('.game-card')];
  const currentIdSet = new Set(connectedCards.map((card) => card.dataset.id).filter(Boolean));
  const firstRects = new Map();
  const shellRect = gamesScrollShell?.getBoundingClientRect() || gameCardGrid.getBoundingClientRect();
  const leavingAnimations = [];

  connectedCards.forEach((card) => {
    const id = card.dataset.id;
    if (!id) return;

    const rect = card.getBoundingClientRect();
    if (rect.width > 0 && rect.height > 0 && nextIdSet.has(id)) {
      firstRects.set(id, rect);
    }

    if (!nextIdSet.has(id)) {
      const clone = createLeavingGameClone(card, shellRect, token);
      if (!clone) return;
      const leavingAnimation = clone.animate([
        { opacity: 1, transform: 'translateY(0) scale(1)' },
        { opacity: 0, transform: 'translateY(-10px) scale(0.985)' }
      ], {
        duration: 220,
        easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
        fill: 'forwards'
      });
      leavingAnimation.finished.then(() => {
        if (clone.isConnected) clone.remove();
      }).catch(() => {
        if (clone.isConnected) clone.remove();
      });
      leavingAnimations.push(leavingAnimation);
    }
  });

  const enteringIds = nextIds.filter((id) => !currentIdSet.has(id));
  const enteringIdSet = new Set(enteringIds);
  const fragment = document.createDocumentFragment();

  nextItems.forEach((item) => {
    const card = getGameCard(item);
    clearGameCardMotionState(card);

    if (enteringIdSet.has(item.id)) {
      const finalIndex = nextIds.indexOf(item.id);
      const startY = 18;
      const startX = finalIndex % 2 === 0 ? -7 : 7;
      const rotate = finalIndex % 2 === 0 ? -1.6 : 1.6;
      card.dataset.enterToken = String(token);
      card.dataset.enterStartX = String(startX);
      card.dataset.enterStartY = String(startY);
      card.dataset.enterRotate = String(rotate);
      card.style.opacity = '0';
      card.style.visibility = 'visible';
      card.style.pointerEvents = 'none';
      card.style.transform = `translate(${startX}px, ${startY}px) rotate(${rotate}deg)`;
      card.style.willChange = 'opacity, transform';
      card.classList.add('is-game-filter-animating', 'is-game-entering');
    }

    fragment.appendChild(card);
  });

  gameCardGrid.replaceChildren(fragment);
  updateGameMasonryLayout();
  restoreGameScrollRatio(scrollRatio);
  currentGameFilter = filter;

  const movingAnimations = [];
  const enteringAnimations = [];

  nextIds.forEach((id) => {
    const card = gameCards.get(id);
    const firstRect = firstRects.get(id);
    if (!card || !card.isConnected || !firstRect || enteringIdSet.has(id)) return;

    const lastRect = card.getBoundingClientRect();
    const deltaX = firstRect.left - lastRect.left;
    const deltaY = firstRect.top - lastRect.top;

    if (Math.abs(deltaX) < 0.5 && Math.abs(deltaY) < 0.5) {
      makeGameCardFinal(card, token);
      return;
    }

    card.classList.add('is-game-filter-animating', 'is-game-moving');
    card.style.transition = 'none';
    card.style.pointerEvents = 'none';
    card.style.willChange = 'transform';

    const moveAnimation = card.animate([
      { opacity: 1, visibility: 'visible', transform: `translate(${deltaX}px, ${deltaY}px) rotate(0deg)` },
      { opacity: 1, visibility: 'visible', transform: 'translate(0, 0) rotate(0deg)' }
    ], {
      duration: 300,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'none'
    });

    moveAnimation.finished.then(() => {
      if (token !== gameAnimationToken) return;
      makeGameCardFinal(card, token);
    }).catch(() => {});

    movingAnimations.push(moveAnimation);
  });

  enteringIds.forEach((id, index) => {
    const card = gameCards.get(id);
    if (!card || !card.isConnected || card.dataset.enterToken !== String(token)) return;

    const startX = Number.parseFloat(card.dataset.enterStartX || '0');
    const startY = Number.parseFloat(card.dataset.enterStartY || '18');
    const rotate = Number.parseFloat(card.dataset.enterRotate || '0');
    const enterAnimation = card.animate([
      { opacity: 0, visibility: 'visible', transform: `translate(${startX}px, ${startY}px) rotate(${rotate}deg)` },
      { opacity: 0.88, visibility: 'visible', transform: `translate(${startX * 0.24}px, ${startY * 0.24}px) rotate(${rotate * 0.24}deg)`, offset: 0.62 },
      { opacity: 1, visibility: 'visible', transform: 'translate(0, 0) rotate(0deg)' }
    ], {
      duration: 360,
      delay: Math.min(40 + index * 28, 140),
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'forwards'
    });

    enterAnimation.finished.then(() => {
      if (token !== gameAnimationToken) return;
      if (!card.isConnected || card.dataset.enterToken !== String(token)) return;
      delete card.dataset.enterToken;
      delete card.dataset.enterStartX;
      delete card.dataset.enterStartY;
      delete card.dataset.enterRotate;
      makeGameCardFinal(card, token);
    }).catch(() => {});

    enteringAnimations.push(enterAnimation);
  });

  // Keep the previous custom scrollbar geometry during card motion and update it once
  // after the filtered layout settles. This prevents the thumb from resizing in two steps.

  await waitForPortfolioAnimations([...movingAnimations, ...enteringAnimations, ...leavingAnimations]);
  if (token !== gameAnimationToken) return;

  nextIds.forEach((id) => {
    const card = gameCards.get(id);
    if (!card || !card.isConnected) return;
    delete card.dataset.enterToken;
    delete card.dataset.enterStartX;
    delete card.dataset.enterStartY;
    delete card.dataset.enterRotate;
    makeGameCardFinal(card, token);
  });

  gameMotionLayer?.replaceChildren();
  updateGameGridState();
}

function setPageNumberMenuOpen(isOpen) {
  const canOpen = Boolean(activePdfDoc) && !pdfFallbackMode;
  const shouldOpen = Boolean(isOpen) && canOpen;
  pageStatus?.setAttribute('aria-expanded', String(shouldOpen));
  if (pageNumberMenu) pageNumberMenu.hidden = !shouldOpen;

  if (shouldOpen) {
    requestAnimationFrame(() => {
      pageNumberMenu?.querySelector('.page-number-button.active')?.scrollIntoView({ block: 'nearest' });
      pageNumberCustomScrollbar.update();
    });
  }
}

function renderPageNumberMenu(pageCount) {
  if (!pageNumberList) return;
  const fragment = document.createDocumentFragment();

  for (let pageNumber = 1; pageNumber <= pageCount; pageNumber += 1) {
    const button = document.createElement('button');
    const isActive = pageNumber === activePageNumber;
    button.className = `page-number-button${isActive ? ' active' : ''}`;
    button.type = 'button';
    button.dataset.page = String(pageNumber);
    button.setAttribute('role', 'option');
    button.setAttribute('aria-selected', String(isActive));
    button.setAttribute('aria-label', `${pageNumber}페이지로 이동`);
    button.textContent = String(pageNumber);
    fragment.appendChild(button);
  }

  pageNumberList.replaceChildren(fragment);
  pageNumberCustomScrollbar.update();
}

function setPageControls() {
  const hasPdf = Boolean(activePdfDoc);
  const pageCount = hasPdf ? activePdfDoc.numPages : 0;

  if (pageControls) {
    pageControls.classList.remove('is-hidden');
  }

  if (pdfFallbackMode) {
    prevPageButton.disabled = true;
    nextPageButton.disabled = true;
    pageStatus.disabled = true;
    pageStatus.textContent = '0 / 0';
    renderPageNumberMenu(0);
    setPageNumberMenuOpen(false);
    return;
  }

  prevPageButton.disabled = !hasPdf || activePageNumber <= 1;
  nextPageButton.disabled = !hasPdf || activePageNumber >= pageCount;
  pageStatus.disabled = !hasPdf;
  pageStatus.textContent = hasPdf ? `${activePageNumber} / ${pageCount}` : '0 / 0';
  pageStatus.setAttribute('aria-label', hasPdf
    ? `현재 ${activePageNumber}페이지, 전체 ${pageCount}페이지. 페이지 목록 열기`
    : '페이지 목록을 사용할 수 없음');
  renderPageNumberMenu(pageCount);
  if (!hasPdf) setPageNumberMenuOpen(false);
}

function resetViewerToInitialState() {
  pdfLoadRequestId += 1;
  activePdfDoc = null;
  activePageNumber = 1;
  pdfFallbackMode = false;
  activeDocumentId = '';
  renderRequestId += 1;

  if (activeRenderTask) {
    try { activeRenderTask.cancel(); } catch (error) {}
    activeRenderTask = null;
  }

  if (activePdfLoadingTask) {
    try { activePdfLoadingTask.destroy(); } catch (error) {}
    activePdfLoadingTask = null;
  }

  if (pdfCanvas) {
    const context = pdfCanvas.getContext('2d');
    if (context) context.clearRect(0, 0, pdfCanvas.width, pdfCanvas.height);
    pdfCanvas.classList.remove('active');
    pdfCanvas.removeAttribute('style');
  }

  if (viewerTitle) viewerTitle.textContent = '문서를 선택해 주세요';

  if (openPdf) {
    openPdf.href = '#';
    openPdf.classList.add('disabled');
  }

  if (viewerGuide) {
    viewerGuide.classList.remove('hidden');
    const guideTitle = viewerGuide.querySelector('strong');
    const guideText = viewerGuide.querySelector('p');
    if (guideTitle) guideTitle.textContent = '';
    if (guideText) guideText.textContent = '목록에서 포트폴리오 문서를 선택하면 이 영역에 표시됩니다.';
  }

  setPageControls();
  updateDocumentButtonState();
}

async function renderPdfPage() {
  if (!activePdfDoc || !pdfCanvas) return;

  const requestId = ++renderRequestId;
  const page = await activePdfDoc.getPage(activePageNumber);
  if (requestId !== renderRequestId) return;

  const stage = document.querySelector('.pdf-stage');
  const baseViewport = page.getViewport({ scale: 1 });
  const activeCard = stage.closest('.portfolio-carousel-card');
  const toolbar = activeCard?.querySelector('.viewer-toolbar');

  if (activeCard && toolbar && window.innerWidth > 980) {
    const borderWidth = Math.max(0, activeCard.offsetWidth - activeCard.clientWidth);
    const stageHeight = Math.max(1, parseFloat(getComputedStyle(stage).height));
    const pageRatio = baseViewport.width / baseViewport.height;
    const exactCardWidth = stageHeight * pageRatio + borderWidth;
    portfolioCarouselTrack?.style.setProperty('--portfolio-card-width', `${exactCardWidth}px`);
    void stage.offsetWidth;
  }

  const stageStyles = getComputedStyle(stage);
  const horizontalPadding = parseFloat(stageStyles.paddingLeft) + parseFloat(stageStyles.paddingRight);
  const verticalPadding = parseFloat(stageStyles.paddingTop) + parseFloat(stageStyles.paddingBottom);
  const availableWidth = Math.max(1, stage.clientWidth - horizontalPadding);
  const availableHeight = Math.max(1, stage.clientHeight - verticalPadding);
  const fitScale = Math.min(availableWidth / baseViewport.width, availableHeight / baseViewport.height);
  const viewport = page.getViewport({ scale: fitScale });
  const ratio = window.devicePixelRatio || 1;
  const context = pdfCanvas.getContext('2d');

  if (activeRenderTask) {
    try { activeRenderTask.cancel(); } catch (error) {}
  }

  pdfCanvas.width = Math.floor(viewport.width * ratio);
  pdfCanvas.height = Math.floor(viewport.height * ratio);
  pdfCanvas.style.width = `${viewport.width}px`;
  pdfCanvas.style.height = `${viewport.height}px`;

  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  context.clearRect(0, 0, viewport.width, viewport.height);

  activeRenderTask = page.render({ canvasContext: context, viewport });

  try {
    await activeRenderTask.promise;
    pdfCanvas.classList.add('active');
    viewerGuide.classList.add('hidden');
  } catch (error) {
    if (error?.name !== 'RenderingCancelledException') {
      console.error(error);
    }
  } finally {
    activeRenderTask = null;
  }

  setPageControls();
}

async function loadPdf(url) {
  const loadRequestId = ++pdfLoadRequestId;
  activePdfDoc = null;
  activePageNumber = 1;
  pdfFallbackMode = false;
  renderRequestId += 1;

  if (activePdfLoadingTask) {
    try { activePdfLoadingTask.destroy(); } catch (error) {}
    activePdfLoadingTask = null;
  }

  if (activeRenderTask) {
    try { activeRenderTask.cancel(); } catch (error) {}
    activeRenderTask = null;
  }
  pdfCanvas.classList.remove('active');
  viewerGuide.classList.remove('hidden');
  viewerGuide.querySelector('strong').textContent = 'PDF Loading';
  viewerGuide.querySelector('p').textContent = '포트폴리오 문서를 불러오는 중입니다.';
  setPageControls();

  try {
    const pdfLibrary = await ensurePdfLibrary();
    if (loadRequestId !== pdfLoadRequestId) return;

    try {
      activePdfLoadingTask = pdfLibrary.getDocument(url);
      activePdfDoc = await activePdfLoadingTask.promise;
    } catch (urlLoadError) {
      if (loadRequestId !== pdfLoadRequestId) return;

      const response = await fetch(url, { cache: 'no-store' });
      if (!response.ok) throw new Error(`PDF request failed: ${response.status}`);

      const pdfData = new Uint8Array(await response.arrayBuffer());
      if (loadRequestId !== pdfLoadRequestId) return;

      activePdfLoadingTask = pdfLibrary.getDocument({
        data: pdfData,
        disableRange: true,
        disableStream: true
      });
      activePdfDoc = await activePdfLoadingTask.promise;
    }

    if (loadRequestId !== pdfLoadRequestId) {
      try { activePdfDoc?.destroy(); } catch (error) {}
      return;
    }

    activePdfLoadingTask = null;
    await renderPdfPage();
  } catch (error) {
    if (loadRequestId !== pdfLoadRequestId) return;
    console.error(error);
    activePdfLoadingTask = null;
    showPdfError();
  }
}

function showPdfError() {
  pdfFallbackMode = true;
  activePdfDoc = null;
  pdfCanvas.classList.remove('active');
  viewerGuide.classList.remove('hidden');
  viewerGuide.querySelector('strong').textContent = 'PDF Error';
  viewerGuide.querySelector('p').textContent = 'PDF 파일을 불러올 수 없습니다. 파일 경로와 형식을 확인해 주세요.';
  setPageControls();
}

function selectDocument(id) {
  const item = portfolioItems.find((entry) => entry.id === id);
  if (!item) return;

  activeDocumentId = id;
  updateDocumentButtonState();

  viewerTitle.textContent = item.title;
  openPdf.href = item.pdf;
  openPdf.classList.remove('disabled');
  loadPdf(item.pdf);
}

function normalizeCarouselIndex(index) {
  const itemCount = portfolioItems.length;
  if (!itemCount) return 0;
  return ((index % itemCount) + itemCount) % itemCount;
}

function getCarouselItem(index) {
  return portfolioItems[normalizeCarouselIndex(index)];
}

function updatePortfolioIndexMenuState() {
  if (!portfolioIndexMenu) return;
  const activeItem = getCarouselItem(activeCarouselIndex);
  portfolioIndexMenu.querySelectorAll('.portfolio-index-item').forEach((button) => {
    const isActive = button.dataset.id === activeItem?.id;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-current', isActive ? 'true' : 'false');
  });
}

function setPortfolioMenuOpen(isOpen) {
  isPortfolioMenuOpen = Boolean(isOpen);
  document.body.classList.toggle('is-portfolio-menu-open', isPortfolioMenuOpen);
  portfolioMenuButton?.classList.toggle('is-open', isPortfolioMenuOpen);
  portfolioMenuButton?.setAttribute('aria-expanded', String(isPortfolioMenuOpen));
  portfolioIndexMenu?.classList.toggle('is-open', isPortfolioMenuOpen);
  portfolioIndexMenu?.setAttribute('aria-hidden', String(!isPortfolioMenuOpen));
  if (isPortfolioMenuOpen) updatePortfolioIndexMenuState();
}

function animatePortfolioMenuStep(direction, duration, isFinalStep, token) {
  return new Promise((resolve) => {
    if (!portfolioCarouselTrack || token !== portfolioMenuJumpToken) {
      resolve(false);
      return;
    }

    const leftCard = portfolioCarouselTrack.querySelector('[data-position="left"]');
    const centerCard = portfolioCarouselTrack.querySelector('[data-position="center"]');
    const rightCard = portfolioCarouselTrack.querySelector('[data-position="right"]');
    const targetCard = direction > 0 ? rightCard : leftCard;
    if (!leftCard || !centerCard || !rightCard || !targetCard) {
      resolve(false);
      return;
    }

    const incomingCard = createPortfolioCarouselCard(
      getCarouselItem(activeCarouselIndex + direction * 2),
      direction > 0 ? 'right-out' : 'left-out',
      direction
    );
    portfolioCarouselTrack.appendChild(incomingCard);
    portfolioCarouselTrack.classList.toggle('is-menu-final-step', isFinalStep);
    portfolioCarouselTrack.style.setProperty('--portfolio-menu-step-duration', `${duration}ms`);
    void incomingCard.offsetWidth;

    if (direction > 0) {
      leftCard.dataset.position = 'left-out';
      centerCard.dataset.position = 'left';
      targetCard.dataset.position = 'center';
      incomingCard.dataset.position = 'right';
    } else {
      rightCard.dataset.position = 'right-out';
      centerCard.dataset.position = 'right';
      targetCard.dataset.position = 'center';
      incomingCard.dataset.position = 'left';
    }

    window.setTimeout(() => {
      if (token !== portfolioMenuJumpToken) {
        resolve(false);
        return;
      }

      portfolioCarouselTrack.querySelectorAll('[data-position="left-out"], [data-position="right-out"]')
        .forEach((card) => card.remove());
      activeCarouselIndex = normalizeCarouselIndex(activeCarouselIndex + direction);
      resolve(true);
    }, duration);
  });
}

async function jumpPortfolioCarouselToIndex(targetIndex) {
  if (!portfolioCarouselTrack || !portfolioItems.length || isCarouselAnimating) return;

  const normalizedTarget = normalizeCarouselIndex(targetIndex);
  if (normalizedTarget === activeCarouselIndex) {
    setPortfolioMenuOpen(false);
    return;
  }

  const token = ++portfolioMenuJumpToken;
  const direction = normalizedTarget > activeCarouselIndex ? 1 : -1;
  const stepCount = Math.abs(normalizedTarget - activeCarouselIndex);
  isCarouselAnimating = true;
  setPortfolioMenuOpen(false);
  portfolioCarouselTrack.classList.add('is-animating', 'is-menu-jumping');

  for (let step = 0; step < stepCount; step += 1) {
    const isFinalStep = step === stepCount - 1;
    const duration = isFinalStep ? 725 : 120;
    const didFinish = await animatePortfolioMenuStep(direction, duration, isFinalStep, token);
    if (!didFinish) return;
  }

  if (token !== portfolioMenuJumpToken) return;
  isCarouselAnimating = false;
  portfolioCarouselTrack.classList.remove('is-animating', 'is-menu-jumping', 'is-menu-final-step');
  portfolioCarouselTrack.style.removeProperty('--portfolio-menu-step-duration');
  renderPortfolioCarousel();
  updatePortfolioIndexMenuState();
}

function renderPortfolioIndexMenu() {
  if (!portfolioIndexMenu) return;
  const fragment = document.createDocumentFragment();

  portfolioItems.forEach((item, index) => {
    const button = document.createElement('button');
    button.className = 'portfolio-index-item';
    button.type = 'button';
    button.dataset.id = item.id;
    button.style.setProperty('--portfolio-menu-index', String(index));
    button.textContent = item.title;
    button.addEventListener('click', () => jumpPortfolioCarouselToIndex(index));
    fragment.appendChild(button);
  });

  portfolioIndexMenu.replaceChildren(fragment);
  updatePortfolioIndexMenuState();
}

function createPortfolioCarouselCard(item, position, direction = 0) {
  const card = document.createElement('article');
  card.className = 'portfolio-carousel-card';
  card.dataset.position = position;
  card.dataset.id = item.id;
  if (item.cover) {
    const safeCoverPath = String(item.cover).replace(/["\\\n\r]/g, '');
    card.style.setProperty('--portfolio-card-cover-image', `url("${safeCoverPath}")`);
    card.classList.add('has-cover-image');
  }
  card.innerHTML = `
    <div class="portfolio-card-preview" aria-hidden="true">
      <span class="portfolio-card-category">${item.categoryLabel || item.category}</span>
      <div class="portfolio-card-sheet">
        <strong>${item.title}</strong>
        <p>${item.summary}</p>
        <div class="portfolio-card-tags">${item.tags.slice(0, 3).map((tag) => `<span>${tag}</span>`).join('')}</div>
      </div>
    </div>
  `;

  if (direction && portfolioItems.length > 1) {
    card.classList.add('is-selectable');
    card.tabIndex = 0;
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `${item.title} 문서를 가운데로 이동`);
    card.addEventListener('click', () => movePortfolioCarousel(direction));
    card.addEventListener('keydown', (event) => {
      if (event.key !== 'Enter' && event.key !== ' ') return;
      event.preventDefault();
      movePortfolioCarousel(direction);
    });
  } else {
    card.setAttribute('aria-hidden', position === 'center' ? 'false' : 'true');
  }

  return card;
}

function clearPortfolioViewerReveal() {
  window.clearTimeout(portfolioViewerRevealTimer);
  window.clearTimeout(portfolioViewerCleanupTimer);
  portfolioViewerRevealTimer = 0;
  portfolioViewerCleanupTimer = 0;
  portfolioViewerPanel?.classList.remove('is-crossfade-layer', 'is-crossfade-exit-layer');
  portfolioViewerPanel?.removeAttribute('aria-hidden');
}

function preparePortfolioViewerExit(card) {
  if (!card || !portfolioViewerPanel || prefersReducedMotion) return;

  const activeItem = getCarouselItem(activeCarouselIndex);
  const previewSource = createPortfolioCarouselCard(activeItem, 'center');
  const preview = previewSource.querySelector('.portfolio-card-preview');
  if (!preview) return;

  card.classList.add('has-viewer-exit-transition');
  portfolioViewerPanel.classList.add('is-crossfade-exit-layer');
  card.appendChild(preview);
  void preview.offsetWidth;

  requestAnimationFrame(() => card.classList.add('is-viewer-crossfading-out'));
}

function mountPortfolioViewer(card, { crossfade = false } = {}) {
  if (!card || !portfolioViewerPanel) return;
  clearPortfolioViewerReveal();

  if (!crossfade || prefersReducedMotion) {
    card.replaceChildren(portfolioViewerPanel);
  } else {
    card.classList.add('has-viewer-transition');
    portfolioViewerPanel.classList.add('is-crossfade-layer');
    portfolioViewerPanel.setAttribute('aria-hidden', 'true');
    card.appendChild(portfolioViewerPanel);

    portfolioViewerRevealTimer = window.setTimeout(() => {
      if (!card.isConnected || !card.contains(portfolioViewerPanel)) return;
      card.classList.add('is-viewer-crossfading');
      portfolioViewerPanel.removeAttribute('aria-hidden');

      portfolioViewerCleanupTimer = window.setTimeout(() => {
        if (!card.isConnected || !card.contains(portfolioViewerPanel)) return;
        card.querySelector('.portfolio-card-preview')?.remove();
        card.classList.remove('has-viewer-transition', 'is-viewer-crossfading');
        portfolioViewerPanel.classList.remove('is-crossfade-layer');
        portfolioViewerRevealTimer = 0;
        portfolioViewerCleanupTimer = 0;
      }, 460);
    }, 600);
  }

  card.classList.add('has-live-viewer');
  card.removeAttribute('role');
  card.removeAttribute('tabindex');
  card.removeAttribute('aria-label');
  card.setAttribute('aria-current', 'true');
}

function renderPortfolioCarousel({ selectActive = true, revealViewer = false } = {}) {
  if (!portfolioCarouselTrack || !portfolioViewerPanel || !portfolioItems.length) return;

  const previousItem = getCarouselItem(activeCarouselIndex - 1);
  const activeItem = getCarouselItem(activeCarouselIndex);
  const nextItem = getCarouselItem(activeCarouselIndex + 1);
  const previousCard = createPortfolioCarouselCard(previousItem, 'left', -1);
  const activeCard = createPortfolioCarouselCard(activeItem, 'center');
  const nextCard = createPortfolioCarouselCard(nextItem, 'right', 1);

  mountPortfolioViewer(activeCard, { crossfade: revealViewer });
  portfolioCarouselTrack.replaceChildren(previousCard, activeCard, nextCard);
  portfolioCarousel?.style.setProperty('--carousel-count', String(portfolioItems.length));
  updatePortfolioIndexMenuState();

  if (selectActive && activeDocumentId !== activeItem.id) {
    selectDocument(activeItem.id);
  }
}

portfolioMenuButton?.addEventListener('click', (event) => {
  event.stopPropagation();
  setPortfolioMenuOpen(!isPortfolioMenuOpen);
});

document.addEventListener('click', (event) => {
  if (!isPortfolioMenuOpen) return;
  if (event.target.closest('.portfolio-index-menu')) return;
  setPortfolioMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && isPortfolioMenuOpen) {
    setPortfolioMenuOpen(false);
    portfolioMenuButton?.focus();
  }
});

function finalizePortfolioCarouselMove(direction) {
  activeCarouselIndex = normalizeCarouselIndex(activeCarouselIndex + direction);
  isCarouselAnimating = false;
  portfolioCarouselTrack?.classList.remove('is-animating');
  renderPortfolioCarousel({ revealViewer: true });
}

function movePortfolioCarousel(direction) {
  if (!portfolioCarouselTrack || isCarouselAnimating || portfolioItems.length < 2) return;

  const normalizedDirection = direction > 0 ? 1 : -1;
  const leftCard = portfolioCarouselTrack.querySelector('[data-position="left"]');
  const centerCard = portfolioCarouselTrack.querySelector('[data-position="center"]');
  const rightCard = portfolioCarouselTrack.querySelector('[data-position="right"]');
  const targetCard = normalizedDirection > 0 ? rightCard : leftCard;
  if (!leftCard || !centerCard || !rightCard || !targetCard) return;

  isCarouselAnimating = true;
  portfolioCarouselTrack.classList.add('is-animating');

  if (prefersReducedMotion) {
    finalizePortfolioCarouselMove(normalizedDirection);
    return;
  }

  const incomingIndex = activeCarouselIndex + normalizedDirection * 2;
  const incomingPosition = normalizedDirection > 0 ? 'right-out' : 'left-out';
  const incomingCard = createPortfolioCarouselCard(
    getCarouselItem(incomingIndex),
    incomingPosition,
    normalizedDirection
  );
  portfolioCarouselTrack.appendChild(incomingCard);
  preparePortfolioViewerExit(centerCard);
  void incomingCard.offsetWidth;

  requestAnimationFrame(() => {
    if (normalizedDirection > 0) {
      leftCard.dataset.position = 'left-out';
      centerCard.dataset.position = 'left';
      targetCard.dataset.position = 'center';
      incomingCard.dataset.position = 'right';
    } else {
      rightCard.dataset.position = 'right-out';
      centerCard.dataset.position = 'right';
      targetCard.dataset.position = 'center';
      incomingCard.dataset.position = 'left';
    }
  });

  window.setTimeout(() => finalizePortfolioCarouselMove(normalizedDirection), 460);
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    filterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    animatePortfolioFilter(button.dataset.filter);
  });
});

gameFilterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    gameFilterButtons.forEach((item) => item.classList.remove('active'));
    button.classList.add('active');
    animateGameFilter(button.dataset.gameFilter);
  });
});

if (gameCardGrid) {
  ensureGameScrollbar();
  gameCardGrid.addEventListener('scroll', () => {
    if (performance.now() > gameAutoScrollWriteUntil) {
      gameAutoScrollPosition = gameCardGrid.scrollTop;
      pauseGameAutoScroll();
      markScrollActivity(gamesScrollShell);
    }
    captureGameScrollRatio();
    updateGameGridState();
  }, { passive: true });

  ['wheel', 'pointerdown', 'touchstart'].forEach((eventName) => {
    gameCardGrid.addEventListener(eventName, () => {
      pauseGameAutoScroll();
      markScrollActivity(gamesScrollShell);
    }, { passive: true });
  });
}

[snapContainer].forEach((element) => bindScrollActivity(element));

prevPageButton.addEventListener('click', () => {
  if (!activePdfDoc || activePageNumber <= 1) return;
  setPageNumberMenuOpen(false);
  activePageNumber -= 1;
  renderPdfPage();
});

nextPageButton.addEventListener('click', () => {
  if (!activePdfDoc || activePageNumber >= activePdfDoc.numPages) return;
  setPageNumberMenuOpen(false);
  activePageNumber += 1;
  renderPdfPage();
});

pageStatus?.addEventListener('click', (event) => {
  event.stopPropagation();
  setPageNumberMenuOpen(pageStatus.getAttribute('aria-expanded') !== 'true');
});

pageNumberMenu?.addEventListener('click', (event) => {
  const button = event.target.closest('.page-number-button');
  if (!button || !activePdfDoc) return;

  const pageNumber = Number(button.dataset.page);
  if (!Number.isInteger(pageNumber) || pageNumber < 1 || pageNumber > activePdfDoc.numPages) return;

  activePageNumber = pageNumber;
  setPageNumberMenuOpen(false);
  setPageControls();
  renderPdfPage();
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.page-jump')) setPageNumberMenuOpen(false);
});

document.addEventListener('keydown', (event) => {
  if (event.key !== 'Escape' || pageStatus?.getAttribute('aria-expanded') !== 'true') return;
  setPageNumberMenuOpen(false);
  pageStatus?.focus();
});

let resizeTimer;
window.addEventListener('resize', () => {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(() => {
    if (activePdfDoc) renderPdfPage();
    updateDocumentListScrollbar();
    updateProfilePanelScrollbar();
    updateGameGridState();
  }, 120);
});

document.addEventListener('contextmenu', (event) => {
  event.preventDefault();
});

document.addEventListener('dragstart', (event) => {
  if (event.target.closest('input, textarea, [contenteditable="true"]')) return;
  event.preventDefault();
});

function updateActiveSection(id) {
  const nextActiveLink = [...topNavLinks].find((link) => link.dataset.target === id);

  topNavLinks.forEach((link) => {
    const isActive = link === nextActiveLink;
    link.classList.toggle('active', isActive);

    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });

  if (globalNextArrow) {
    const sectionList = [...sections];
    const activeIndex = sectionList.findIndex((section) => section.dataset.section === id);
    const nextSection = activeIndex >= 0 ? sectionList[activeIndex + 1] : null;

    globalNextArrow.classList.toggle('is-hidden', !nextSection);
    globalNextArrow.setAttribute('aria-hidden', String(!nextSection));
    globalNextArrow.tabIndex = nextSection ? 0 : -1;

    if (nextSection) {
      globalNextArrow.href = `#${nextSection.id}`;
    } else {
      globalNextArrow.removeAttribute('href');
    }
  }
}

function getSettledSectionId() {
  const containerStyles = getComputedStyle(snapContainer);
  const isContainerScroller = ['auto', 'scroll'].includes(containerStyles.overflowY)
    && snapContainer.scrollHeight > snapContainer.clientHeight;
  const containerRect = snapContainer.getBoundingClientRect();
  const viewportTop = isContainerScroller ? containerRect.top : 0;
  const viewportHeight = isContainerScroller ? snapContainer.clientHeight : window.innerHeight;
  const focusY = viewportTop + viewportHeight * 0.5;
  const sectionList = [...sections];
  const focusedSection = sectionList.find((section) => {
    const rect = section.getBoundingClientRect();
    return rect.top <= focusY && rect.bottom > focusY;
  });

  if (focusedSection) return focusedSection.dataset.section;

  return sectionList.reduce((nearest, section) => {
    const rect = section.getBoundingClientRect();
    const distance = Math.abs((rect.top + rect.bottom) * 0.5 - focusY);
    return !nearest || distance < nearest.distance
      ? { id: section.dataset.section, distance }
      : nearest;
  }, null)?.id;
}

let sectionSettleTimer;
let explicitNavigationTarget = null;
let isSectionTraveling = false;
let lastContainerScrollTop = snapContainer.scrollTop;

function commitSettledSection() {
  clearTimeout(sectionSettleTimer);
  explicitNavigationTarget = null;
  isSectionTraveling = false;
  const sectionId = getSettledSectionId();
  if (sectionId) {
    updateActiveSection(sectionId);
    if (sectionId === 'portfolio') ensurePortfolioPdfLoaded();
  }
}

function scheduleSettledSectionUpdate() {
  clearTimeout(sectionSettleTimer);
  sectionSettleTimer = setTimeout(commitSettledSection, 110);
}

function getTravelSectionId(direction) {
  const sectionList = [...sections];
  const scrollTop = snapContainer.scrollTop;

  if (direction > 0) {
    return (sectionList.find((section) => section.offsetTop > scrollTop + 1)
      || sectionList.at(-1))?.dataset.section;
  }

  return ([...sectionList].reverse().find((section) => section.offsetTop < scrollTop - 1)
    || sectionList[0])?.dataset.section;
}

function activateTravelSection(direction) {
  if (!direction || explicitNavigationTarget) return;
  const sectionId = getTravelSectionId(direction);
  if (sectionId) {
    updateActiveSection(sectionId);
    prepareSectionForNavigation(sectionId);
  }
  isSectionTraveling = true;
}

snapContainer.addEventListener('wheel', () => {
  explicitNavigationTarget = null;
  isSectionTraveling = false;
}, { passive: true });

snapContainer.addEventListener('touchstart', () => {
  explicitNavigationTarget = null;
  isSectionTraveling = false;
}, { passive: true });

snapContainer.addEventListener('scroll', () => {
  const currentScrollTop = snapContainer.scrollTop;
  const direction = Math.sign(currentScrollTop - lastContainerScrollTop);

  if (!isSectionTraveling) activateTravelSection(direction);
  lastContainerScrollTop = currentScrollTop;
  scheduleSettledSectionUpdate();
}, { passive: true });

window.addEventListener('scroll', () => {
  if (getComputedStyle(snapContainer).overflowY === 'visible') {
    const sectionId = getSettledSectionId();
    if (sectionId) updateActiveSection(sectionId);
  }
  scheduleSettledSectionUpdate();
}, { passive: true });

document.addEventListener('click', (event) => {
  const anchor = event.target.closest('a[href^="#"]');
  if (!anchor) return;

  const targetId = anchor.getAttribute('href')?.slice(1);
  const targetSection = targetId
    ? document.querySelector(`.snap-section#${CSS.escape(targetId)}`)
    : null;
  if (!targetId || !targetSection) return;

  explicitNavigationTarget = targetId;
  isSectionTraveling = true;
  updateActiveSection(targetId);
  prepareSectionForNavigation(targetId);

  if (anchor === globalNextArrow) {
    event.preventDefault();
    history.pushState(null, '', `#${targetId}`);
    targetSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }
});

snapContainer.addEventListener('scrollend', commitSettledSection);
window.addEventListener('scrollend', commitSettledSection);

let hasHeroIntroPlayed = false;
const heroTypingLines = [...document.querySelectorAll('.hero-typing-line')];
const heroTypingTimers = [];
const heroTypingStartDelay = 170;
const heroTypingCharacterDelay = 68;
const heroTypingLineDelay = 140;
const heroFollowupPause = 1000;

function prepareHeroTyping() {
  if (prefersReducedMotion) return;

  heroTypingLines.forEach((line) => {
    line.dataset.typingText = line.textContent || '';
    line.textContent = '';
  });

  const typingDuration = heroTypingLines.reduce((duration, line, lineIndex) => (
    duration
    + Array.from(line.dataset.typingText || '').length * heroTypingCharacterDelay
    + (lineIndex < heroTypingLines.length - 1 ? heroTypingLineDelay : 0)
  ), heroTypingStartDelay);
  heroSection?.style.setProperty('--hero-followup-delay', `${typingDuration + heroFollowupPause}ms`);
  heroSection?.style.setProperty('--hero-actions-delay', `${typingDuration + heroFollowupPause + 160}ms`);
  heroSection?.style.setProperty('--hero-copyright-delay', `${typingDuration + heroFollowupPause + 320}ms`);
}

function playHeroTyping() {
  if (prefersReducedMotion || !heroTypingLines.length) return;

  let elapsed = heroTypingStartDelay;
  heroTypingLines.forEach((line, lineIndex) => {
    const characters = Array.from(line.dataset.typingText || '');
    heroTypingTimers.push(window.setTimeout(() => line.classList.add('is-typing'), elapsed));

    characters.forEach((character, characterIndex) => {
      heroTypingTimers.push(window.setTimeout(() => {
        line.textContent = characters.slice(0, characterIndex + 1).join('');
        line.classList.add('is-typing');
      }, elapsed + characterIndex * heroTypingCharacterDelay));
    });

    elapsed += characters.length * heroTypingCharacterDelay
      + (lineIndex < heroTypingLines.length - 1 ? heroTypingLineDelay : 0);
    heroTypingTimers.push(window.setTimeout(() => line.classList.remove('is-typing'), elapsed));
  });
}

prepareHeroTyping();

function playHeroIntro() {
  if (!heroSection || hasHeroIntroPlayed) return;
  hasHeroIntroPlayed = true;
  heroSection.classList.add('is-intro-active');
  playHeroTyping();
}

const contactIntroElements = [
  document.querySelector('.contact-inner h2'),
  document.querySelector('.contact-inner p'),
  ...document.querySelectorAll('.contact-actions .contact-button')
].filter(Boolean);
let hasContactIntroPlayed = false;

function prepareContactIntro() {
  if (prefersReducedMotion) return;
  contactIntroElements.forEach((element) => {
    element.style.opacity = '0';
    element.style.transform = 'translateY(16px)';
    element.style.visibility = 'hidden';
    element.style.willChange = 'opacity, transform';
  });
}

function playContactIntro() {
  if (hasContactIntroPlayed) return;
  hasContactIntroPlayed = true;

  if (prefersReducedMotion) {
    contactIntroElements.forEach(clearProfileElementMotionState);
    return;
  }

  contactIntroElements.forEach((element, index) => {
    element.style.visibility = 'visible';
    const animation = element.animate([
      { opacity: 0, transform: 'translateY(16px)', visibility: 'visible' },
      { opacity: 1, transform: 'translateY(0)', visibility: 'visible' }
    ], {
      duration: 560,
      delay: 50 + index * 130,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'forwards'
    });

    animation.finished.then(() => {
      try { animation.commitStyles(); } catch (error) {}
      try { animation.cancel(); } catch (error) {}
      element.style.removeProperty('opacity');
      element.style.removeProperty('transform');
      element.style.removeProperty('visibility');
      element.style.removeProperty('will-change');
    }).catch(() => {});
  });
}

prepareContactIntro();

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    const sectionId = entry.target.dataset.section;

    if (sectionId === 'profile' && !entry.isIntersecting) {
      prepareProfileIntroAfterTransit();
      handleProfileSectionExit();
    }

    if (sectionId === 'portfolio' && !entry.isIntersecting && isPortfolioMenuOpen) {
      setPortfolioMenuOpen(false);
    }

    if (entry.isIntersecting) {
      if (sectionId === 'main') playHeroIntro();
      if (sectionId === 'profile') {
        initializeProfileContent();
        const isPassingProfile = isSectionTraveling
          && explicitNavigationTarget
          && explicitNavigationTarget !== 'profile';
        if (isPassingProfile) {
          revealProfileForTransit();
        } else {
          handleProfileSectionEntry();
        }
      }
      if (sectionId === 'portfolio') {
        initializePortfolioContent();
        playPortfolioIntro();
      }
      if (sectionId === 'played-games') {
        initializeGameContent();
        setPlayedGamesInView(true);
        playGameIntro();
      }
      if (sectionId === 'contact') playContactIntro();
    }
  });
}, { root: snapContainer, threshold: 0.58 });
sections.forEach((section) => observer.observe(section));

function updateParallax() {
  if (parallaxRaf) return;

  parallaxRaf = requestAnimationFrame(() => {
    parallaxRaf = 0;
    const maxScroll = Math.max(1, snapContainer.scrollHeight - snapContainer.clientHeight);
    const progress = Math.min(1, Math.max(0, snapContainer.scrollTop / maxScroll));
    const firstSectionProgress = Math.min(1, Math.max(0, snapContainer.scrollTop / Math.max(1, snapContainer.clientHeight)));

    const ambientGlowX = Math.sin(progress * Math.PI * 1.35) * 16;
    const ambientGlowY = -10 + progress * 92;
    const ambientGlowOpacity = 0.18 + Math.sin(progress * Math.PI) * 0.10;

    root.style.setProperty('--scroll-progress', progress.toFixed(4));
    root.style.setProperty('--hero-bg-y', `${(-64 * firstSectionProgress).toFixed(2)}vh`);
    root.style.setProperty('--hero-bg-opacity', String(Math.max(0, 1 - firstSectionProgress * 1.65).toFixed(3)));
    root.style.setProperty('--ambient-glow-x', `${ambientGlowX.toFixed(2)}vw`);
    root.style.setProperty('--ambient-glow-y', `${ambientGlowY.toFixed(2)}vh`);
    root.style.setProperty('--ambient-glow-opacity', ambientGlowOpacity.toFixed(3));
  });
}

snapContainer.addEventListener('scroll', updateParallax, { passive: true });
window.addEventListener('resize', updateParallax);

snapContainer.addEventListener('keydown', (event) => {
  const keys = ['ArrowDown', 'ArrowUp', 'PageDown', 'PageUp'];
  if (!keys.includes(event.key)) return;

  const activeIndex = [...sections].findIndex((section) => {
    const rect = section.getBoundingClientRect();
    return Math.abs(rect.top) < window.innerHeight * 0.35;
  });
  if (activeIndex === -1) return;

  event.preventDefault();
  const nextIndex = event.key === 'ArrowDown' || event.key === 'PageDown'
    ? Math.min(activeIndex + 1, sections.length - 1)
    : Math.max(activeIndex - 1, 0);
  explicitNavigationTarget = sections[nextIndex].dataset.section;
  isSectionTraveling = true;
  updateActiveSection(explicitNavigationTarget);
  prepareSectionForNavigation(explicitNavigationTarget);
  sections[nextIndex].scrollIntoView({ behavior: 'smooth' });
});

const profileTabButtons = document.querySelectorAll('.profile-tab-button');
const profilePanels = document.querySelectorAll('.profile-a-panel');
const profileHeading = document.querySelector('.profile-section .profile-heading');
const profileAreaA = document.querySelector('.profile-area-a');
const profileAreaB = document.querySelector('.profile-area-b');
const profileTabList = document.querySelector('.profile-tab-list');
const documentCustomScrollbar = createCustomScrollbar(documentScrollShell, () => documentList);
const profileCustomScrollbar = createCustomScrollbar(profileAreaA, () => getActiveProfilePanel());
const careerCustomScrollbar = createCustomScrollbar(document.querySelector('.career-timeline-frame'), () => careerTimelineViewport);
const pageNumberCustomScrollbar = createCustomScrollbar(pageNumberMenu, () => pageNumberList);
let hasProfileIntroPlayed = false;
let isProfileSectionInView = false;
let profilePanelAnimationToken = 0;
let profilePanelSwitchTimer = 0;
let hasProfileSkillIntroPlayed = false;
let hasCareerTimelineIntroPlayed = false;
let careerTimelineAnimationTimer = 0;
let profileInfoAnimationStartTimer = 0;
let profileInfoAnimationCleanupTimer = 0;
const profilePanelDetailedIntroPlayed = new Set();
let hasProfileTransitReveal = false;

function prepareProfileIntroChrome() {
  if (prefersReducedMotion) return;

  [profileHeading, profileAreaB].forEach((element) => {
    if (!element) return;
    element.style.opacity = '0';
    element.style.transform = 'translateY(14px)';
    element.style.visibility = 'hidden';
    element.style.willChange = 'opacity, transform';
  });
}

function playProfileIntroChrome() {
  if (prefersReducedMotion) return;

  [
    { element: profileHeading, delay: 40 },
    { element: profileAreaB, delay: 170 }
  ].forEach(({ element, delay }) => {
    if (!element) return;
    element.style.visibility = 'visible';
    const animation = element.animate([
      { opacity: 0, transform: 'translateY(14px)', visibility: 'visible' },
      { opacity: 1, transform: 'translateY(0)', visibility: 'visible' }
    ], {
      duration: 520,
      delay,
      easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
      fill: 'forwards'
    });

    animation.finished.then(() => {
      try { animation.commitStyles(); } catch (error) {}
      try { animation.cancel(); } catch (error) {}
      element.style.removeProperty('opacity');
      element.style.removeProperty('transform');
      element.style.removeProperty('visibility');
      element.style.removeProperty('will-change');
    }).catch(() => {});
  });
}

prepareProfileIntroChrome();
if (!prefersReducedMotion) {
  prepareProfilePanelMotion(getActiveProfilePanel());
}

[documentList, profileAreaA, profileTabList].forEach((element) => bindScrollActivity(element));

function getActiveProfilePanel() {
  return [...profilePanels].find((panel) => panel.classList.contains('active')) || null;
}

function getProfilePanelContentGroups(panel) {
  if (!panel) return { heading: [], body: [] };

  const label = panel.querySelector(':scope > .content-label');
  const title = panel.querySelector(':scope > .profile-panel-title-row, :scope > h3');
  const heading = [label, title].filter(Boolean);
  const body = [...panel.children].filter((child) => !heading.includes(child));

  return { heading, body };
}

function cancelProfilePanelAnimations(panel) {
  if (!panel) return;

  panel.getAnimations({ subtree: true }).forEach((animation) => {
    try { animation.cancel(); } catch (error) {}
  });
}

function clearProfileElementMotionState(element) {
  if (!element) return;

  element.style.removeProperty('animation');
  element.style.removeProperty('transition');
  element.style.removeProperty('opacity');
  element.style.removeProperty('transform');
  element.style.removeProperty('visibility');
  element.style.removeProperty('will-change');
}

function clearProfilePanelMotionState(panel) {
  if (!panel) return;

  if (panel.dataset.profilePanel === 'info') {
    window.clearTimeout(profileInfoAnimationStartTimer);
    window.clearTimeout(profileInfoAnimationCleanupTimer);
    profileInfoAnimationStartTimer = 0;
    profileInfoAnimationCleanupTimer = 0;
    panel.classList.remove('is-info-animating');
  }

  cancelProfilePanelAnimations(panel);
  panel.classList.remove('is-motion-preparing');
  clearProfileElementMotionState(panel);

  [...panel.children].forEach((child) => {
    clearProfileElementMotionState(child);
  });
}

function prepareProfilePanelMotion(panel) {
  if (!panel) return;

  clearProfilePanelMotionState(panel);
  panel.classList.add('is-motion-preparing');
  panel.style.visibility = 'hidden';

  [...panel.children].forEach((child) => {
    child.style.transition = 'none';
    child.style.animation = 'none';
    child.style.opacity = '0';
    child.style.transform = 'translateY(14px)';
    child.style.visibility = 'hidden';
    child.style.willChange = 'opacity, transform';
  });
}

function resetInactiveProfilePanel(panel) {
  if (!panel) return;

  if (panel.dataset.profilePanel === 'strength') {
    dismissCodexSkillNote({ immediate: true });
  }

  clearProfilePanelMotionState(panel);
  if (panel.dataset.profilePanel === 'career') {
    careerTimeline?.classList.remove('is-animating', 'is-timeline-switch-animation', 'is-timeline-switching-out');
  }
  panel.classList.remove('active', 'is-motion-preparing', 'is-scrollable');
  panel.style.display = 'none';
}

function getProfilePanelDisplay(panel) {
  return panel?.dataset.profilePanel === 'career' ? 'flex' : 'block';
}

function playCareerTimeline({ animateBase = true } = {}) {
  if (!careerTimeline || prefersReducedMotion) return;

  window.clearTimeout(careerTimelineAnimationTimer);
  careerTimeline.classList.remove('is-animating', 'is-timeline-switch-animation', 'is-timeline-switching-out');
  careerTimeline.classList.toggle('is-timeline-switch-animation', !animateBase);
  careerTimeline.offsetHeight;
  careerTimeline.classList.add('is-animating');
  careerTimelineAnimationTimer = window.setTimeout(() => {
    careerTimeline.classList.remove('is-animating', 'is-timeline-switch-animation');
    careerTimelineAnimationTimer = 0;
  }, 2700);
}

function updateProfileFilterButtonState(buttons, dataKey, activeFilter) {
  buttons.forEach((button) => {
    const isActive = button.dataset[dataKey] === activeFilter;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-pressed', String(isActive));
  });
}

function switchSkillFilter(filter) {
  if (!filter || filter === activeSkillFilter) return;
  updateProfileFilterButtonState(profileSkillFilterButtons, 'skillFilter', filter);
  renderProfileSkills(filter);
  requestAnimationFrame(() => {
    playProfileSkillMeters();
    updateProfilePanelScrollbar(getActiveProfilePanel());
  });
}

function freezeCareerTimelineAnimations() {
  careerTimeline?.getAnimations({ subtree: true }).forEach((animation) => {
    try { animation.commitStyles(); } catch (error) {}
    try { animation.cancel(); } catch (error) {}
  });
  window.clearTimeout(careerTimelineAnimationTimer);
  careerTimelineAnimationTimer = 0;
  careerTimeline?.classList.remove('is-animating', 'is-timeline-switch-animation');
  const baseLine = careerTimeline?.querySelector('.career-timeline-base');
  if (baseLine) baseLine.style.transform = 'scaleY(1)';
}

function switchTimelineFilter(filter) {
  if (!filter || filter === requestedTimelineFilter || !careerTimeline) return;

  requestedTimelineFilter = filter;
  const token = ++timelineSwitchToken;
  window.clearTimeout(timelineSwitchTimer);
  updateProfileFilterButtonState(timelineFilterButtons, 'timelineFilter', filter);
  freezeCareerTimelineAnimations();
  careerTimeline.classList.add('is-timeline-switching-out');

  timelineSwitchTimer = window.setTimeout(() => {
    if (token !== timelineSwitchToken) return;

    careerTimeline.classList.remove('is-timeline-switching-out');
    renderCareerTimeline(filter);
    careerTimelineViewport.scrollTop = 0;
    updateCareerTimelineFadeState();
    careerCustomScrollbar.update();
    requestAnimationFrame(() => playCareerTimeline({ animateBase: false }));
    timelineSwitchTimer = 0;
  }, 280);
}

function settleActiveProfilePanel(panel) {
  if (!panel) return;

  clearProfilePanelMotionState(panel);
  panel.classList.add('active');
  panel.style.display = getProfilePanelDisplay(panel);
  [...panel.children].forEach((child) => {
    child.style.removeProperty('display');
  });
}

function stabilizeProfilePanelsForIdleState() {
  const activePanel = getActiveProfilePanel() || profilePanels[0];
  if (!activePanel) return;

  profilePanelAnimationToken += 1;

  profilePanels.forEach((panel) => {
    if (panel === activePanel) {
      settleActiveProfilePanel(panel);
    } else {
      resetInactiveProfilePanel(panel);
    }
  });

  syncProfilePanelScrollbar(activePanel);
}

function normalizeProfilePanelsForReentry() {
  stabilizeProfilePanelsForIdleState();
  scheduleProfileMenuFadeStateUpdate();
}

function handleProfileSectionEntry() {
  if (isProfileSectionInView) return;

  isProfileSectionInView = true;

  if (!hasProfileIntroPlayed) {
    hasProfileIntroPlayed = true;
    const activePanel = getActiveProfilePanel();
    if (activePanel) profilePanelDetailedIntroPlayed.add(activePanel.dataset.profilePanel);
    playProfileIntroChrome();
    playProfilePanelMotion(activePanel, 130);
    return;
  }

  normalizeProfilePanelsForReentry();
  scheduleProfileMenuFadeStateUpdate();
}

function handleProfileSectionExit() {
  if (!isProfileSectionInView) return;

  isProfileSectionInView = false;
  if (!hasProfileIntroPlayed) return;

  dismissCodexSkillNote({ immediate: true });
  stabilizeProfilePanelsForIdleState();
  scheduleProfileMenuFadeStateUpdate();
}

function syncProfilePanelScrollbar(panel = getActiveProfilePanel()) {
  if (!panel) return;

  const usesInnerCareerScroller = panel.dataset.profilePanel === 'career';
  const keepsInfoInOneFrame = panel.dataset.profilePanel === 'info';
  const skillGrid = panel.dataset.profilePanel === 'strength'
    ? panel.querySelector('.profile-skill-grid')
    : null;
  const keepsSkillsInOneFrame = Boolean(skillGrid)
    && skillGrid.getBoundingClientRect().bottom <= panel.getBoundingClientRect().bottom + 2;
  const isScrollable = !usesInnerCareerScroller
    && !keepsInfoInOneFrame
    && !keepsSkillsInOneFrame
    && panel.scrollHeight > panel.clientHeight + 2;
  panel.classList.toggle('is-scrollable', isScrollable);
  profileAreaA?.classList.toggle('is-scrollable', isScrollable);
  if (usesInnerCareerScroller || keepsInfoInOneFrame || keepsSkillsInOneFrame) return;
  profileCustomScrollbar?.bindScroller(panel);
  profileCustomScrollbar?.update();
}

function updateProfilePanelScrollbar(panel = getActiveProfilePanel()) {
  if (!panel) return;
  requestAnimationFrame(() => syncProfilePanelScrollbar(panel));
}

function updateProfileMenuFadeState() {
  const menuScroller = profileTabList || profileAreaB;
  if (!menuScroller || !profileAreaB) return;

  const isScrollable = menuScroller.scrollHeight > menuScroller.clientHeight + 2;
  const isAtBottom = !isScrollable || menuScroller.scrollTop + menuScroller.clientHeight >= menuScroller.scrollHeight - 4;
  profileAreaB.classList.toggle('is-menu-scrollable', isScrollable);
  profileAreaB.classList.toggle('is-menu-at-bottom', isAtBottom);
  profileTabList?.classList.toggle('is-menu-scrollable', isScrollable);
  profileTabList?.classList.toggle('is-menu-at-bottom', isAtBottom);
}

function scheduleProfileMenuFadeStateUpdate() {
  requestAnimationFrame(updateProfileMenuFadeState);
}

function playPreparedProfileInfoMotion(panel, token, delayOffset = 0) {
  const layout = panel?.querySelector(':scope > .profile-info-layout');
  if (!panel || !layout) return;

  const startAnimation = () => {
    profileInfoAnimationStartTimer = 0;
    if (token !== profilePanelAnimationToken) return;

    panel.style.removeProperty('visibility');
    panel.classList.remove('is-motion-preparing');
    clearProfileElementMotionState(layout);
    layout.style.visibility = 'visible';
    panel.classList.remove('is-info-animating');
    void panel.offsetHeight;
    panel.classList.add('is-info-animating');
    updateProfilePanelScrollbar(panel);

    profileInfoAnimationCleanupTimer = window.setTimeout(() => {
      if (token !== profilePanelAnimationToken) return;
      panel.classList.remove('is-info-animating');
      layout.style.removeProperty('visibility');
      profileInfoAnimationCleanupTimer = 0;
    }, 1520);
  };

  if (delayOffset > 0) {
    profileInfoAnimationStartTimer = window.setTimeout(startAnimation, delayOffset);
  } else {
    requestAnimationFrame(startAnimation);
  }
}

function playPreparedProfilePanelMotion(panel, token, delayOffset = 0, { uniform = false } = {}) {
  if (!panel) return;

  syncProfilePanelScrollbar(panel);

  if (prefersReducedMotion) {
    clearProfilePanelMotionState(panel);
    return;
  }

  if (panel.dataset.profilePanel === 'info' && !uniform) {
    playPreparedProfileInfoMotion(panel, token, delayOffset);
    return;
  }

  const { heading, body } = getProfilePanelContentGroups(panel);
  const groups = uniform
    ? [[...panel.children]]
    : [heading, body].filter((group) => group.length > 0);

  requestAnimationFrame(() => {
    if (token !== profilePanelAnimationToken) return;

    panel.style.removeProperty('visibility');
    panel.classList.remove('is-motion-preparing');

    groups.forEach((group, index) => {
      group.forEach((element) => {
        element.style.removeProperty('transition');
        element.style.removeProperty('animation');
        element.style.visibility = 'visible';

        const animation = element.animate([
          { opacity: 0, transform: 'translateY(14px)', visibility: 'visible' },
          { opacity: 1, transform: 'translateY(0)', visibility: 'visible' }
        ], {
          duration: 520,
          delay: (uniform ? 40 : (index === 0 ? 40 : 170)) + delayOffset,
          easing: 'cubic-bezier(0.22, 1, 0.36, 1)',
          fill: 'forwards'
        });

        animation.finished.then(() => {
          if (token !== profilePanelAnimationToken) return;
          element.style.opacity = '1';
          element.style.transform = 'none';
          element.style.visibility = 'visible';
          element.style.removeProperty('will-change');
          try { animation.cancel(); } catch (error) {}
          element.style.removeProperty('opacity');
          element.style.removeProperty('transform');
          element.style.removeProperty('visibility');
          updateProfilePanelScrollbar(panel);
        }).catch(() => {});
      });
    });
  });
}

function playProfilePanelMotion(panel = getActiveProfilePanel(), delayOffset = 0) {
  if (!panel) return;

  const token = ++profilePanelAnimationToken;
  if (!panel.classList.contains('is-motion-preparing')) {
    prepareProfilePanelMotion(panel);
  }
  panel.classList.add('active');
  panel.offsetHeight;
  playPreparedProfilePanelMotion(panel, token, delayOffset);
}

function activateProfilePanel(target) {
  const nextPanel = [...profilePanels].find((panel) => panel.dataset.profilePanel === target);
  if (!nextPanel) return;

  const token = ++profilePanelAnimationToken;
  const shouldPlayDetailedIntro = !profilePanelDetailedIntroPlayed.has(target);
  window.clearTimeout(profilePanelSwitchTimer);
  profileAreaA?.classList.add('is-switching-panel');

  profileTabButtons.forEach((item) => {
    const isActive = item.dataset.profileTab === target;
    item.classList.toggle('active', isActive);
    item.setAttribute('aria-selected', String(isActive));
  });

  prepareProfilePanelMotion(nextPanel);

  profilePanels.forEach((panel) => {
    if (panel === nextPanel) return;
    resetInactiveProfilePanel(panel);
  });

  nextPanel.classList.add('active');
  nextPanel.style.display = getProfilePanelDisplay(nextPanel);
  nextPanel.scrollTop = 0;
  nextPanel.offsetHeight;
  if (target === 'career') {
    requestAnimationFrame(() => {
      updateCareerTimelineFadeState();
      careerCustomScrollbar.update();
    });
  }
  playPreparedProfilePanelMotion(nextPanel, token, 0, { uniform: !shouldPlayDetailedIntro });
  profilePanelDetailedIntroPlayed.add(target);
  if (target === 'strength' && !hasProfileSkillIntroPlayed) {
    hasProfileSkillIntroPlayed = true;
    requestAnimationFrame(playProfileSkillMeters);
  }
  if (target === 'career' && !hasCareerTimelineIntroPlayed) {
    hasCareerTimelineIntroPlayed = true;
    requestAnimationFrame(playCareerTimeline);
  }
  scheduleProfileMenuFadeStateUpdate();

  profilePanelSwitchTimer = window.setTimeout(() => {
    profileAreaA?.classList.remove('is-switching-panel', 'is-scroll-active');
    profilePanelSwitchTimer = 0;
  }, 620);
}

function selectProfilePanelForNavigation(target) {
  const nextPanel = [...profilePanels].find((panel) => panel.dataset.profilePanel === target);
  if (!nextPanel || nextPanel === getActiveProfilePanel()) return;

  profilePanelAnimationToken += 1;
  window.clearTimeout(profilePanelSwitchTimer);
  profileAreaA?.classList.remove('is-switching-panel', 'is-scroll-active');

  profileTabButtons.forEach((button) => {
    const isActive = button.dataset.profileTab === target;
    button.classList.toggle('active', isActive);
    button.setAttribute('aria-selected', String(isActive));
  });

  profilePanels.forEach((panel) => {
    if (panel === nextPanel) return;
    resetInactiveProfilePanel(panel);
  });

  settleActiveProfilePanel(nextPanel);
  nextPanel.scrollTop = 0;
  syncProfilePanelScrollbar(nextPanel);
  scheduleProfileMenuFadeStateUpdate();
}

document.querySelector('[data-profile-entry="info"]')?.addEventListener('click', () => {
  selectProfilePanelForNavigation('info');
});

profileTabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    const target = button.dataset.profileTab;
    const currentPanel = getActiveProfilePanel();
    if (currentPanel?.dataset.profilePanel === target) return;
    activateProfilePanel(target);
  });
});

profileSkillFilterButtons.forEach((button) => {
  button.addEventListener('click', () => switchSkillFilter(button.dataset.skillFilter));
});

timelineFilterButtons.forEach((button) => {
  button.addEventListener('click', () => switchTimelineFilter(button.dataset.timelineFilter));
});

profileTabList?.addEventListener('scroll', updateProfileMenuFadeState, { passive: true });
careerTimelineViewport?.addEventListener('scroll', updateCareerTimelineFadeState, { passive: true });
window.addEventListener('resize', () => {
  updateProfilePanelScrollbar(getActiveProfilePanel());
  scheduleProfileMenuFadeStateUpdate();
  scheduleGameMasonryLayout();
  updateCareerTimelineFadeState();
  careerCustomScrollbar.update();
});

function initializeProfileContent() {
  if (isProfileContentInitialized) return;
  isProfileContentInitialized = true;
  renderProfileSkills();
  renderCareerTimeline();
  profilePanels.forEach((panel) => updateProfilePanelScrollbar(panel));
  updateProfilePanelScrollbar(getActiveProfilePanel());
  scheduleProfileMenuFadeStateUpdate();
  careerCustomScrollbar.update();
}

function initializePortfolioContent() {
  if (isPortfolioContentInitialized) return;
  isPortfolioContentInitialized = true;
  renderDocuments();
  renderPortfolioIndexMenu();
  renderPortfolioCarousel({ selectActive: false });
}

function initializeGameContent() {
  if (isGameContentInitialized) return;
  isGameContentInitialized = true;
  renderGameCards();
}

function ensurePortfolioPdfLoaded() {
  initializePortfolioContent();
  if (activeDocumentId) return;

  const activeItem = getCarouselItem(activeCarouselIndex);
  if (activeItem) selectDocument(activeItem.id);
}

function initializeSectionContent(sectionId) {
  if (sectionId === 'profile') initializeProfileContent();
  if (sectionId === 'portfolio') initializePortfolioContent();
  if (sectionId === 'played-games') initializeGameContent();
}

function revealProfileForTransit() {
  if (hasProfileIntroPlayed) return;

  [profileHeading, profileAreaB].forEach((element) => {
    if (!element) return;
    element.getAnimations({ subtree: true }).forEach((animation) => {
      try { animation.cancel(); } catch (error) {}
    });
    clearProfileElementMotionState(element);
  });
  stabilizeProfilePanelsForIdleState();
  hasProfileTransitReveal = true;
}

function prepareProfileIntroAfterTransit() {
  if (!hasProfileTransitReveal || hasProfileIntroPlayed) return;

  prepareProfileIntroChrome();
  if (!prefersReducedMotion) prepareProfilePanelMotion(getActiveProfilePanel());
  hasProfileTransitReveal = false;
}

function prepareSectionForNavigation(sectionId) {
  if (sectionId !== 'profile') revealProfileForTransit();
  requestAnimationFrame(() => initializeSectionContent(sectionId));
}

function scheduleDeferredContentWarmup() {
  const tasks = [
    initializeProfileContent,
    initializePortfolioContent,
    initializeGameContent
  ];

  const scheduleNext = () => {
    const task = tasks.shift();
    if (!task) return;

    const run = () => {
      task();
      scheduleNext();
    };

    if ('requestIdleCallback' in window) {
      window.requestIdleCallback(run, { timeout: 1600 });
    } else {
      window.setTimeout(run, 120);
    }
  };

  requestAnimationFrame(() => requestAnimationFrame(scheduleNext));
}

function restoreInitialSectionPosition() {
  const targetId = decodeURIComponent(window.location.hash.slice(1));
  const targetSection = [...sections].find((section) => section.id === targetId) || sections[0];
  if (!targetSection) return;

  const previousScrollBehavior = snapContainer.style.scrollBehavior;
  snapContainer.style.scrollBehavior = 'auto';
  snapContainer.scrollTop = targetSection.offsetTop;
  void snapContainer.offsetHeight;
  snapContainer.style.scrollBehavior = previousScrollBehavior;
  lastContainerScrollTop = snapContainer.scrollTop;
  updateActiveSection(targetSection.dataset.section);
}

function restartClassAnimation(element, className) {
  if (!element) return;
  element.classList.remove(className);
  void element.offsetWidth;
  element.classList.add(className);
}

brandButton?.addEventListener('click', () => {
  restartClassAnimation(brandIcon, 'is-shaking');

  if (easterEggCharacter?.classList.contains('is-active')) return;
  easterEggClickCount += 1;

  if (easterEggClickCount < 20) return;
  easterEggClickCount = 0;
  brandButton?.classList.add('is-easter-egg-locked');
  restartClassAnimation(easterEggCharacter, 'is-active');
});

brandIcon?.addEventListener('animationend', (event) => {
  if (event.animationName === 'brandLeafShake') {
    brandIcon.classList.remove('is-shaking');
  }
});

easterEggCharacter?.addEventListener('animationend', (event) => {
  if (event.animationName === 'butterEasterEgg') {
    easterEggCharacter.classList.remove('is-active');
    brandButton?.classList.remove('is-easter-egg-locked');
  }
});

setPageControls();
restoreInitialSectionPosition();
updateParallax();
requestAnimationFrame(() => {
  commitSettledSection();
  scheduleDeferredContentWarmup();
});

window.addEventListener('pageshow', (event) => {
  if (event.persisted) return;
  restoreInitialSectionPosition();
  requestAnimationFrame(commitSettledSection);
});

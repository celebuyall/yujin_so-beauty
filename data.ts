import { DashboardData } from './types';

export const dashboardData: DashboardData = {
  meta: {
    lastUpdated: '2026-01-14',
  },
  fandom: {
    profile: {
      displayName: '소유진',
      tags: [
        { label: 'Premium Lifestyle', tone: 'purple' },
        { label: 'Smart Curator', tone: 'brand' },
      ],
      platform: 'Instagram',
      handle: '@yujin_so',
      profileUrl: 'https://www.instagram.com/yujin_so/',
      stats: {
        followers: '92.9만',
        avgViews: '10.8만',
      },
      commerceDNA: {
        subtitleLines: [
          '신뢰 기반의 프리미엄 큐레이터',
          '전 세대 아우르는 라이프스타일 멘토',
        ],
        cards: [
          {
            label: 'Identity',
            title: 'Life Artist',
            subtitle: '미적 감각과 프로의 결합',
            tone: 'brand',
            icon: 'Sparkles',
          },
          {
            label: 'Action',
            title: 'Silent Searching',
            subtitle: '조용한 저장과 검색 위주',
            tone: 'blue',
            icon: 'MousePointerClick',
          },
          {
            label: 'Trigger',
            title: 'Wannabe & Relatable',
            subtitle: '동경과 공감의 교차점',
            tone: 'pink',
            icon: 'Heart',
          },
        ],
      },
    },
    kpi: {
      scaleAndReach: [
        {
          label: '총 팔로워 수',
          value: '92.9만 명',
          sub: '메가 인플루언서 규모',
          tone: 'brand',
        },
        {
          label: '유효 타깃 팔로워',
          value: '54.6만 명',
          sub: '유효 비율 58.8%',
          highlight: true,
          tone: 'emerald',
        },
        {
          label: '평균 도달(전체)',
          value: '5.1만 회',
          sub: '콘텐츠 기본 노출력',
        },
        {
          label: '평균 영상 조회수',
          value: '10.8만 회',
          sub: '릴스 파워 Very High',
          highlight: true,
          tone: 'purple',
        },
        {
          label: '콘텐츠당 유효 도달',
          value: '약 6.3만 명',
          sub: '구매 전환 잠재군',
        },
        {
          label: '구독자 대비 조회율',
          value: '11.6%',
          sub: 'TV 시청률 상회 수준',
        },
      ],
      audienceFit: {
        distribution: [
          { label: '여성', value: 50 },
          { label: '남성', value: 50 },
        ],
        mainTarget: { label: '18-24세 여성', percent: '18.9%' },
        coreSegment: { label: '남성 팔로워', percent: '50%' },
        notes: [
          '가구 구매 결정권자 타깃',
          '뷰티/식품/가전 전방위 영향력',
        ],
      },
      engagement: {
        avgLikes: { value: '2,409개', rate: 'Normal' },
        avgComments: { value: '43개', rate: '0.04%' },
        commentLikeRatio: '1:56',
        engagementRate: { value: '0.26%', note: '유사 그룹 평균(0.28%)과 비슷함' },
        formatShare: { value: '숏폼 45% / 피드 54%', note: '피드 좋아요 효율 상위 9%' },
      },
    },
    coreDefinition: {
      headline: '프리미엄 라이프스타일 백화점',
      badgeLabel: 'Authority & Utility',
      description:
        "이 채널은 단순한 인플루언서 계정을 넘어, **'TV 방송인의 신뢰도(Authority)'**와 **'살림/육아/뷰티를 아우르는 전문성(Utility)'**이 결합된 강력한 커머스 플랫폼입니다. 대중적 신뢰와 심미적 큐레이션이 결합되어 있어, 뷰티 제품뿐만 아니라 가전, 식품, 리빙 등 가족 단위의 소비 결정에 강력한 영향력을 미칩니다. 특히 **10.8만 회의 영상 조회수**와 상위 9%의 피드 좋아요 효율은 이 채널이 '보여주는 것'만으로도 구매 욕구를 자극하는 '비주얼 세일즈' 파워를 갖췄음을 증명합니다.",
    },
    evidence: [
      {
        title: '압도적인 영상 도달력',
        subtitle: 'Avg Views 10.8k',
        description:
          "구독자 대비 약 11.6%가 영상을 시청하며, 이는 일반적인 TV 프로그램 시청률을 상회하는 수치입니다. 제품 시연(Demonstration)이 필수적인 뷰티/식품 카테고리에서 **'홈쇼핑급 파급력'**을 가지며, 릴스 하나로 최소 10만 명에게 제품 효능을 시각적으로 증명할 수 있습니다.",
        icon: 'PlayCircle',
      },
      {
        title: '피드(이미지) 고관여 효율',
        subtitle: 'Top 9.24% Likes',
        description:
          "동영상보다 피드(이미지)의 좋아요 성과가 월등히 높습니다(상위 9.24%). 이는 팔로워들이 소유진의 **'스타일, 분위기, 안목'**을 적극적으로 소비하고 있음을 의미합니다. 공구 시 단순 링크 공유를 넘어 '화보 같은 제품 컷'을 게시했을 때 전환율이 극대화될 것입니다.",
        icon: 'Image',
      },
    ],
    deepDive: [
      {
        id: 1,
        icon: 'Video',
        title: '평균 영상 조회수',
        mainValue: '10.8만 회',
        subValue: 'Awareness',
        reasonTitle: '지표 선정 이유',
        reason:
          "커머스 전환의 첫 단계인 '인지(Awareness)'를 보장하는 가장 확실한 지표입니다. 구독자 10명 중 1명 이상이 영상을 반드시 시청한다는 것은 **메가 인플루언서로서 준수한 도달력**을 의미하며, 시연 중심의 숏폼 커머스 전략이 유효함을 시사합니다.",
        insightTitle: '커머스 해석',
        insight:
          "보고서의 전략(쿨링 패치, 멀티 밤 시연) 실행 시, 최소 10만 명의 잠재 고객에게 제품의 효능을 **'시각적'으로 즉각 증명**할 수 있습니다. 이는 초기 오픈 3시간 내 매출을 견인하는 '오픈런' 트래픽의 핵심 동력이 됩니다.",
      },
      {
        id: 2,
        icon: 'Heart',
        title: '평균 피드 좋아요',
        mainValue: '3,541개',
        subValue: 'Top 9.24%',
        reasonTitle: '지표 선정 이유',
        reason:
          "단순 눈팅(Viewing)이 아니라, 유저가 콘텐츠의 '미적 가치'나 '정보'에 적극적으로 반응(Like)하고 있음을 보여주는 지표입니다. 갤러리/예술 관련 포스팅으로 다져진 **'고급스러운 톤앤매너'**가 브랜드 이미지를 격상시키고 있음을 증명합니다.",
        insightTitle: '커머스 해석',
        insight:
          "팔로워들은 그녀의 안목을 신뢰합니다. 상세페이지 링크만 던지는 것이 아니라, **'오브제처럼 연출된 제품 화보'**를 피드에 게시하여 소장 욕구를 자극해야 합니다. 이는 제품을 단순 생필품이 아닌 '워너비 아이템'으로 포지셔닝하는 핵심 열쇠입니다.",
      },
      {
        id: 3,
        icon: 'Users',
        title: '성별/연령 분포',
        mainValue: '남녀 50:50',
        subValue: 'Mass Target',
        reasonTitle: '지표 선정 이유',
        reason:
          "특정 성별/연령에 치우치지 않은 '매스(Mass) 타깃' 보유 여부를 판단하는 핵심 지표입니다. 뷰티 채널임에도 남성 비율이 50%에 달하고 전 연령대가 고르게 분포한 것은 **'가구 단위 구매 결정권'**을 가진 채널임을 의미합니다.",
        insightTitle: '커머스 해석',
        insight:
          "뷰티 제품을 팔더라도 '나를 위한 선물'뿐만 아니라 **'아내/남편/부모님 선물' 소구 포인트**가 통하는 희소한 채널입니다. 시장 사이즈(TAM)를 2배로 넓힐 수 있으며, 특히 가족형 스킨케어 제품의 경우 폭발적인 전환을 기대할 수 있습니다.",
      },
    ],
    funnel: {
      title: "The 'So-Curated' Funnel",
      subtitle: '영상으로 유입되고, 이미지로 설득되어, 신뢰로 구매한다',
      steps: [
        {
          step: '01',
          title: '발견 (Discovery)',
          subtitle: '릴스 노출 (10.8만)',
          description:
            "요리, 운동, 방송 비하인드 등 **'움직이는 일상'**을 통해 자연스럽게 제품이 노출됩니다. 요리 중 땀을 닦거나 촬영장에서 수정 화장을 하는 모습 등이 시청자의 시선을 사로잡습니다.",
          icon: 'Eye',
        },
        {
          step: '02',
          title: '매혹 (Attraction)',
          subtitle: '피드 탐색 (Top 9%)',
          description:
            "갤러리 투어 등으로 다져진 감각적인 사진을 통해 제품을 단순한 상품이 아닌 **'오브제'처럼 인식**시킵니다. 높은 피드 좋아요 수는 팔로워들이 그녀의 미적 안목에 동의하고 있음을 보여줍니다.",
          icon: 'Heart',
        },
        {
          step: '03',
          title: '검증 (Verification)',
          subtitle: 'Authority & Trust',
          description:
            "**'소유진쇼 1000억 달성'**, **'똑순이 살림꾼'**이라는 타이틀이 제품력에 대한 의심을 제거합니다. 프로페셔널한 권위(Authority)가 제품의 신뢰도를 보증수표처럼 뒷받침합니다.",
          icon: 'BadgeCheck',
        },
        {
          step: '04',
          title: '구매 (Purchase)',
          subtitle: '신뢰 기반 전환',
          description:
            "실패 없는 소비를 원하는 대중들이 최종적으로 구매 버튼을 클릭합니다. **'그 바쁜 소유진이 쓰는 거라면'**이라는 맹목적 신뢰가 구매의 결정적 트리거로 작용합니다.",
          icon: 'ShoppingBag',
          highlight: true,
        },
      ],
    },
    buyingTriggers: {
      relationship: {
        title: 'Silent Trust',
        icon: 'Lock',
        quote: '"그 바쁜 소유진이 쓰는 거라면, 진짜 효율적이겠지?"',
        description:
          "팬들이 지갑을 여는 핵심 심리는 **'동경(Wannabe)'과 '공감(Relatable)'의 교차점**입니다. 화려한 여배우도 육아와 살림 앞에서는 땀 흘린다는 점에서 깊은 유대감을 느끼며, 그녀가 선택한 솔루션에 대해 무한한 신뢰를 보냅니다.",
        tags: ['동경과 공감', '맹목적 신뢰', '효율성 추구'],
      },
      motivation: {
        title: 'Wannabe & Relatable',
        icon: 'Sparkles',
        points: [
          {
            label: 'Wannabe (동경)',
            quote: '"나도 저렇게 우아하고 능력 있는 여성이 되고 싶다" (예술, 뷰티 제품 구매 동기)',
          },
          {
            label: 'Relatable (공감)',
            quote: '"저 화려한 사람도 요리할 땐 덥고 힘들구나" (쿨링, 간편템 구매 동기)',
          },
        ],
        keyTrigger: 'Efficiency & Aesthetics',
      },
    },
    swot: {
      opportunity: {
        badge: 'Opportunity Boosting',
        title: 'Dramatic Demo Strategy',
        tone: 'brand',
        observation: {
          label: 'Hero Metric',
          text: '평균 영상 조회수 10.8만 회 (압도적 도달력)',
          icon: 'TrendingUp',
        },
        strategyName: {
          title: '드라마틱 시연 (Dramatic Demo)',
          subtitle: '숏폼 드라마로 시각적 효능 증명',
        },
        logic:
          "릴스 파워가 강력하므로 정적인 리뷰 대신 **'Before & After'가 확실한 상황극**을 연출해야 합니다. 요리 중 얼굴이 빨개진 상황(Problem)에서 쿨링 아이템 사용 후 우아하게 식사하는 모습(Solution)을 보여주어 10만 회 이상의 조회수를 구매 페이지 유입으로 직결시킵니다.",
        actionPlan: [
          {
            title: '숏폼 드라마 기획',
            description:
              "요리/운동 후 붉어진 피부 -> 쿨링 패치 부착 -> 즉각 진정의 과정을 **'3분 상황극'**으로 연출하여 시각적 몰입도 극대화.",
            icon: 'Clapperboard',
          },
          {
            title: '오픈런 유도',
            description:
              "영상 업로드 직후 구매 링크를 오픈하여, 높아진 트래픽을 즉시 매출로 전환. **'초기 3시간 매출 50% 달성'** 목표.",
            icon: 'Zap',
          },
        ],
        expectedEffect: '시각적 효능 증명을 통한 신규 유입 확대 및 단기 매출 폭발 (Volume Sales)',
      },
      risk: {
        badge: 'Risk Management',
        title: 'Silent Buyer Nudge',
        tone: 'slate',
        observation: {
          label: 'Weakness',
          text: '낮은 댓글 참여율 (0.04%) 및 소극적 인터랙션',
          icon: 'MessageCircle',
        },
        strategyName: {
          title: '사일런트 바이어 넛지',
          subtitle: '저장과 검색을 유도하는 우회 전략',
        },
        logic:
          "구매력 있는 3040 침묵하는 다수는 댓글 대신 **'저장'과 '검색'**에 익숙합니다. 참여를 강요하기보다 '정보 소장' 욕구를 자극하고, '네이버 검색'이나 '카카오톡 채널' 등 폐쇄형 알림으로 유도하여 실질적인 구매 전환율을 높여야 합니다.",
        actionPlan: [
          {
            title: '행동 유도 문구 변경',
            description:
              '"댓글 달아주세요" 대신 **"나중에 보시려면 저장"** 또는 **"네이버에 소유진 쿨링패치 검색"**으로 넛지 메시지 변경.',
            icon: 'MousePointer2',
          },
          {
            title: '폐쇄형 알림 확보',
            description:
              "알고리즘 의존도를 낮추기 위해 **'카카오톡 채널 추가'** 시 알림 발송 등 확실한 도달 경로(Retention) 확보.",
            icon: 'Bell',
          },
        ],
        expectedEffect: '댓글 수는 적더라도 저장 수와 구매 전환율(CVR) 급상승 및 실속 있는 매출 확보',
      },
    },
    executiveSummary: [
      {
        title: 'Market Dominance',
        subtitle: "실패할 수 없는 '대중 픽(Pick)' 채널",
        description:
          "yujin_so는 특정 마니아층에 갇히지 않고 **18세부터 54세까지, 남녀 모두를 아우르는 '광역 커버리지'**를 보유하고 있습니다. 평균 영상 조회수 10.8만 회는 이 채널이 단순한 홍보 창구를 넘어 하나의 '방송 매체' 역할을 수행함을 증명하며, 타깃이 넓은 생활소비재와 기능성 뷰티 브랜드에게 대체 불가능한 파급력을 제공합니다.",
        tag: 'Mass Coverage',
        tone: 'purple',
        icon: 'Globe',
      },
      {
        title: 'Data Confidence',
        subtitle: "검증된 '비주얼 세일즈' 파워",
        description:
          "피드 게시물의 좋아요가 **상위 9.24%**에 달한다는 데이터는 그녀의 '라이프스타일 큐레이션'에 대한 대중의 신뢰가 매우 높음을 의미합니다. '프로페셔널한 자기관리'와 '현실적인 육아/살림 고충'의 조화는 팬들에게 제품을 구매해야 할 명분(명품 같은 이미지 + 실용적인 효능)을 완벽하게 제공합니다.",
        tag: 'High Trust',
        tone: 'brand',
        icon: 'BadgeCheck',
      },
      {
        title: 'Winning Strategy',
        subtitle: "시각적 효능 중심의 '매스 타깃팅'",
        description:
          "브랜드는 이 채널을 **'전 국민 인지도 확산 및 대량 판매 채널'**로 활용해야 합니다. 미세한 성분 설명보다는 릴스를 통해 **'즉각적인 시각적 변화(쿨링, 진정)'**를 보여주고, 피드에서는 감도 높은 이미지로 소장 욕구를 자극하십시오. 댓글보다는 '저장'과 '검색'을 유도하는 넛지 전략이 매출 성공의 열쇠입니다.",
        tag: 'Visual Sales',
        tone: 'emerald',
        icon: 'TrendingUp',
      },
    ],
  },
  content: {
    hero: {
      badgeLabel: 'Strategy Report',
      confidentialLabel: 'Confidential',
      displayName: '소유진',
      mainTitle: 'Life Artist Branding',
      subTitle: '초개인화 브랜딩 전략 심층 보고서',
      subjectBadge: {
        label: 'Target Profile',
        initials: 'YS',
        handle: '@yujin_so',
      },
    },
    intro: {
      title: '전략 수립의 배경 및 핵심 논리',
      paragraphs: [
        "yujin_so는 단순한 방송인을 넘어, 깊이 있는 **예술적 심미안**과 **프로페셔널한 자기 관리**가 결합된 독보적인 정체성을 보유하고 있습니다. 갤러리 방문에서 드러나는 섬세한 미적 기준은 뷰티 제품의 심미적 가치를 판별하며, '소유진쇼 1000억 매출'로 증명된 프로의 삶은 고효능 스마트 뷰티 솔루션에 대한 진정성 있는 니즈를 생성합니다.",
        "본 전략 보고서는 그녀의 내재적 특성(Why)이 실제적 결핍(Pain Point)을 해결하기 위한 솔루션(What)과 만났을 때 발생하는 시너지를 증명합니다. 이는 유행을 따르는 것이 아니라, **'Life Artist'**라는 인물 자체에서 출발하여 시장의 기회와 필연적으로 결합하는 '초개인화 브랜딩'의 성공 공식을 제시합니다.",
      ],
    },
    coreLogic: [
      {
        label: 'Background',
        title: '다면적 매력의 통합',
        subTitle: 'Why She is Special',
        description:
          "미술관에서 영감을 얻는 **'예술적 감성'**과 1000억 매출을 이끄는 **'프로페셔널'**, 그리고 텃밭을 가꾸고 요리하는 **'생활인'**의 면모가 공존합니다. 이 다면적 특성은 '아름답지만 비현실적인 인플루언서'가 아닌 '현실적인 솔루션을 제시하는 워너비 전문가'라는 독보적 캐릭터를 완성합니다.",
        tone: 'purple',
        icon: 'Layers',
      },
      {
        label: 'Persona',
        title: 'Life Artist',
        subTitle: 'Identity Definition',
        description:
          "그녀의 브랜드 정체성은 **\"일상의 모든 순간을 예술적 감성과 지적인 효율성으로 큐레이팅하는 '라이프 아티스트(Life Artist)'\"**로 정의됩니다. 그녀에게 뷰티는 단순한 꾸밈이 아니라, 바쁜 일상 속에서도 자신을 최상의 상태로 유지하는 '예술적 자기관리'의 일환입니다.",
        tone: 'brand',
        icon: 'Sparkles',
      },
      {
        label: 'Core Strategy',
        title: 'Need for Efficiency',
        subTitle: 'Pain Point & Solution',
        description:
          "바쁜 스케줄 속에서도 완벽함을 추구하는 그녀에게 **'효율성(Efficiency)'**은 선택이 아닌 필수입니다. 시간과 노력을 절약해주면서도 확실한 효과를 주는 '고효능 압축 케어'와 '즉각적 컨디션 회복' 아이템이 그녀의 라이프스타일과 완벽하게 매칭됩니다.",
        tone: 'emerald',
        icon: 'Zap',
      },
    ],
    requirements: {
      title: '성공을 위한 최소 충족 요건',
      subtitle: 'Minimum Requirements for Branding Success',
      items: [
        {
          id: 1,
          patternLabel: 'Pattern 01',
          statusBadge: 'Condition Met',
          statusTone: 'brand',
          title: '예술적 심미안의 내재화',
          subTitle: 'Aesthetic Standard',
          description:
            "전체 분석 중 7건에서 갤러리/미술관 방문이 관찰될 만큼 예술에 대한 조예가 깊습니다. 이는 뷰티를 단순 기능이 아닌 **'감각적 만족과 예술적 표현'**의 대상으로 접근할 수 있는 독보적인 자격 요건이 됩니다.",
          footer: { type: 'quotes', items: ['"갤러리 방문 빈도 High"', '"섬세한 미적 기준 보유"'] },
          icon: 'Palette',
          iconTone: 'purple',
        },
        {
          id: 2,
          patternLabel: 'Pattern 02',
          statusBadge: 'Verified',
          statusTone: 'emerald',
          title: '프로페셔널 라이프스타일',
          subTitle: 'Professional Needs',
          description:
            "홈쇼핑 1000억 매출 달성 및 다수의 방송 활동은 그녀가 장시간 조명과 메이크업에 노출되는 전문가임을 증명합니다. 이는 **'피부 컨디션 회복'**을 위한 고효능 솔루션의 필요성을 진정성 있게 전달하는 배경이 됩니다.",
          footer: { type: 'checks', items: ['장시간 조명 노출', '잦은 메이크업', '피부 스트레스'] },
          icon: 'Briefcase',
          iconTone: 'emerald',
        },
        {
          id: 3,
          patternLabel: 'Pattern 03',
          statusBadge: 'Confirmed',
          statusTone: 'blue',
          title: '건강과 효율성의 동시 추구',
          subTitle: 'Health & Efficiency',
          description:
            "직접 요리하고 활력 음료를 챙겨 마시는 모습은 **'이너뷰티'**와 **'간편 고효능 스킨케어'**에 대한 니즈로 확장됩니다. 바쁜 일상 속에서 건강과 아름다움을 동시에 챙기려는 그녀의 노력은 팬들에게 강력한 동기부여가 됩니다.",
          footer: { type: 'quotes', items: ['"활력 증진 음료 선호"', '"효율적 조리 방식 활용"'] },
          icon: 'Activity',
          iconTone: 'blue',
        },
      ],
    },
    strategies: [
      {
        id: 1,
        title: 'Instant Skin Reset',
        subTitle: '프로페셔널을 위한 즉각적 피부 회복',
        icon: 'ThermometerSnowflake',
        tone: 'blue',
        keyItem: '국소 부위용 쿨링 진정 젤리 패치',
        context:
          "바쁜 스케줄과 운동 후 발생하는 **피부 열감, 땀, 자극**은 그녀의 필연적인 고민입니다. 촬영장 조명 아래서나 운동 직후, 빨개진 볼을 즉각적으로 진정시켜야 하는 상황은 '프로 방송인'으로서 피할 수 없는 현실입니다. 이는 단순 미용을 넘어 '최상의 컨디션 유지'를 위한 필수 생존 전략입니다.",
        dataProof:
          "그녀는 '활력 증진, 기력 보충'을 위해 음료를 마신다고 언급할 만큼(DST-BPEkn1Y) 에너지 관리에 철저합니다. 시장 데이터 역시 '운동 후 열감이 사라지지 않는 고민'을 주요 트렌드로 지목하고 있어, 자극 없는 **'도토리 젤리 쿨 다운 패치'** 같은 저자극 솔루션이 그녀의 니즈(자연 유래 성분 선호)와 완벽히 부합합니다.",
        spec:
          "멘톨의 자극적인 화함 대신, 도토리 추출물 등 자연 유래 성분으로 **'순하고 깊은 쿨링감'**을 제공해야 합니다. 겔 타입으로 부착 후에도 활동이 자유로워야 하며, 메이크업 전 사용 시 화장 밀착력을 높여주는 부가 기능이 필수적입니다.",
        guide: {
          concept: '#촬영장_퀵쿨링 #운동후_필수템 #3분_RESET',
          intro: '운동 후 숨을 고르거나 촬영장 한 켠에서 붉어진 볼을 보여주며 고민 토로.',
          action: '파우치에서 젤리 패치를 꺼내 양 볼에 부착하고 스트레칭이나 대본 연습.',
          ment: '"그냥 붙여두기만 하면 피부 온도가 싹 내려가요. 멘톨처럼 따갑지 않아서 정말 순하고요."',
        },
      },
      {
        id: 2,
        title: 'Thermal Control Skincare',
        subTitle: '요리열과 생활열을 다스리는 케어',
        icon: 'Flame',
        tone: 'brand',
        keyItem: '오일프리 수분 젤 & 쿨링 미스트',
        context:
          "요리는 그녀의 시그니처 활동이지만, **'집에서 요리하면 땀나고 덥다'**는 고충(DPnJpXQku0w)이 명확합니다. 주방의 열기와 여름철 습도는 피지 폭발과 속건조를 유발하는 최악의 조건입니다. 요리하는 동안 피부를 산뜻하게 지켜줄 '써멀 컨트롤(Thermal Control)' 솔루션이 절실합니다.",
        dataProof:
          "데이터는 덥고 습한 날씨가 피지선을 자극하고 유분 생성을 증가시킨다고 지적합니다. 그녀의 '땀나고 덥고'라는 발언은 이러한 시장 분석과 정확히 일치하며, 수많은 '요리하는 주부'와 '여름철 지성 피부' 타깃의 깊은 공감을 이끌어낼 수 있는 확실한 소구 포인트입니다.",
        spec:
          "유분감 없이 수분만 공급하는 **'오일프리 젤'**과 즉각적으로 열을 식혀주는 **'쿨링 페이셜 미스트'** 조합이 최적입니다. 요리 중에도 손대지 않고 뿌릴 수 있는 미스트와, 요리 후 번들거림 없이 수분을 채워주는 젤 제형이 '주방용 스킨케어'로 포지셔닝됩니다.",
        guide: {
          concept: '#요리열_격파템 #주방용_스킨케어 #산뜻한_요리',
          intro: '요리 시작 전, 주방의 열기 때문에 피부가 답답할 것을 걱정하는 모습.',
          action: '요리 중간중간 쿨링 미스트를 뿌리고, 마무리 후 수분 젤로 산뜻하게 케어.',
          ment: '"요리할 때 열기 때문에 피부 상하잖아요? 이렇게 한 번씩 식혀주면 요리가 훨씬 즐거워져요."',
        },
      },
      {
        id: 3,
        title: 'Compressed Care (On-the-go)',
        subTitle: '이동 중 초간편 케어: 스틱 멀티 밤',
        icon: 'Car',
        tone: 'purple',
        keyItem: '스틱형 멀티 밤 (Stick Balm)',
        context:
          "잦은 방송 스케줄과 이동 시간은 그녀에게 '틈새 관리'를 요구합니다. 차 안이나 대기실에서 손에 묻히지 않고 간편하게 건조함을 해결해야 합니다. **'바쁜 스케줄 속 퀵 & 이지 케어'**는 효율성을 중시하는 그녀의 페르소나에 부합하는 가장 현실적인 뷰티 루틴입니다.",
        dataProof:
          "8건의 영상에서 관찰된 네일아트 등 철저한 자기관리 성향은 이동 중에도 피부를 방치하지 않을 것임을 시사합니다. 보톡스 라이크 성분 등이 함유된 고기능성 멀티 밤은 **'손댈 필요 없이 언제 어디서나'** 주름과 보습을 관리하고 싶은 니즈를 완벽하게 충족시킵니다.",
        spec:
          "휴대성이 극대화된 스틱 타입이어야 하며, 메이크업 위에 덧발라도 밀리지 않는 제형이 중요합니다. 눈가, 팔자주름 등 국소 부위를 집중 타깃팅할 수 있어야 하며, 즉각적인 광채 효과로 화면발을 잘 받게 하는 기능이 추가되면 금상첨화입니다.",
        guide: {
          concept: '#차안에서_쓱 #파우치_만능템 #10초_뷰티',
          intro: '차 안에서 이동 중, 파우치에서 스틱을 꺼내는 모습.',
          action: '눈가와 목주름에 쓱쓱 바르고 거울을 보며 만족스러운 표정.',
          ment: '"건조할 틈을 주면 안 돼요. 손에 묻힐 필요도 없이 이렇게 발라주면 끝! 바쁠수록 똑똑하게 관리해야죠."',
        },
      },
      {
        id: 4,
        title: 'Compressed Care (At-home)',
        subTitle: '홈케어의 극대화: 갈바닉 부스터',
        icon: 'Zap',
        tone: 'emerald',
        keyItem: '고효능 흡수 촉진 갈바닉 부스터',
        context:
          "좋은 앰플이나 세럼을 사용하더라도 그 효과를 100% 흡수시키는 것은 어렵습니다. '1000억의 여자'로서 비용 대비 효과(ROI)를 중시하는 그녀에게, 고가의 스킨케어 효율을 극대화해주는 디바이스는 매력적입니다. **'최소한의 시간으로 최대의 효과'**를 내는 홈케어 비밀병기입니다.",
        dataProof:
          "휴롬 찌꺼기로 쌈장을 만드는 등 자원 활용의 효율성을 보여준(DOqN9fIkiha) 그녀는 뷰티에서도 '낭비 없는 흡수'를 원할 것입니다. 시장에서 주목받는 PDRN 등 고효능 성분의 흡수를 돕는 부스터는 그녀의 **'스마트한 살림꾼'** 이미지와 결합하여 강력한 설득력을 가집니다.",
        spec:
          "립스틱 사이즈로 작고 가벼워야 하며, 복잡한 버튼 없이 피부에 닿으면 작동하는 직관적인 사용성이 필요합니다. 앰플의 유효 성분을 피부 깊숙이 밀어넣어주는 갈바닉 기능과 미세 진동 마사지 기능이 포함되어야 합니다.",
        guide: {
          concept: '#비싼앰플_200%활용 #홈에스테틱 #흡수왕',
          intro: '저녁 스킨케어 루틴, 고농축 앰플을 얼굴에 도포하는 모습.',
          action: '작은 부스터 기기로 얼굴을 마사지하며 앰플을 남김없이 흡수시킴.',
          ment: '"같은 앰플을 써도 이걸로 마무리하면 다음 날 피부가 달라요. 흡수 자체가 다르거든요. 아까운 앰플, 겉돌게 하지 마세요."',
        },
      },
    ],
    conclusion: {
      title: '종합 결론',
      subtitle: 'yujin_so Comprehensive Identity',
      identityBanner: {
        quote:
          '"일상의 모든 순간을 예술적 감성과 지적인 효율성으로 큐레이팅하는 Life Artist"',
        tagline: 'Premium Smart Beauty Solution Curator',
      },
      personaCards: [
        {
          title: 'Life Artist',
          subtitle: '예술적 심미안',
          description:
            "미술관에서 영감을 얻고 일상을 예술처럼 가꾸는 감각적인 멘토. 뷰티 제품의 **'심미적 가치'**를 판별하고 제안합니다.",
          tone: 'purple',
          icon: 'Palette',
        },
        {
          title: 'Smart Professional',
          subtitle: '지적인 효율성',
          description:
            "1000억 매출 신화의 주역이자 현명한 살림꾼. 데이터와 효능에 기반한 **'가장 확실하고 효율적인 솔루션'**만을 선택합니다.",
          tone: 'brand',
          icon: 'Briefcase',
        },
      ],
      winningFormula: [
        {
          label: 'Trigger',
          title: 'Aspiration & Relatability',
          description:
            "높은 심미적 기준(동경)과 현실적인 육아/살림의 고충(공감)을 동시에 자극하여 심리적 거리감을 좁힙니다.",
          tag: '공감 형성',
          tone: 'pink',
        },
        {
          label: 'Solution',
          title: 'Smart & Efficient',
          description:
            "단순 추천이 아닌, 라이프스타일의 문제(열감, 건조, 시간 부족)를 해결하는 '데이터 기반의 스마트 솔루션'을 시연합니다.",
          tag: '문제 해결',
          tone: 'blue',
        },
        {
          label: 'Action',
          title: 'Instant Benefit',
          description:
            "팬덤에게 즉각적인 효용감(시원함, 촉촉함, 간편함)을 제공하여 구매 전환과 신뢰 강화를 이끌어냅니다.",
          tag: '구매 전환',
          tone: 'emerald',
        },
      ],
      strategicVision: {
        label: 'Strategic Outlook',
        headline: '대체 불가능한 프리미엄 큐레이터로의 도약',
        description:
          "본 전략 실행 시, yujin_so는 포화 상태인 뷰티 시장에서 **'프리미엄 스마트 뷰티 솔루션 큐레이터'**라는 독보적 위치를 점유하게 됩니다. 가격 경쟁이나 일회성 유행에 흔들리지 않고, '나의 라이프스타일 문제를 가장 감각적이고 효율적으로 해결해 주는 전문가'로서 지속 가능한 브랜드 자산을 구축할 것입니다. 이는 뷰티를 넘어 라이프스타일 전반을 아우르는 고관여 시장 장악의 교두보가 될 것입니다.",
      },
    },
  },
};

import BLOG from '@/blog.config'

const lang = {
  en: {
    NAV: {
      INDEX: 'Index',
      RSS: 'RSS',
      SEARCH: 'Search',
      ABOUT: 'About'
    },
    PAGINATION: {
      PREV: 'Prev',
      NEXT: 'Next'
    },
    POST: {
      BACK: 'Back',
      TOP: 'Top'
    },
    PAGE: {
      ERROR_404: {
        MESSAGE: 'Nothing here'
      }
    }
  },
  'zh-CN': {
    NAV: {
      INDEX: '索引',
      RSS: '订阅',
      SEARCH: '搜索',
      ABOUT: '关于'
    },
    PAGINATION: {
      PREV: '上一页',
      NEXT: '下一页'
    },
    POST: {
      BACK: '返回',
      TOP: '回到顶部'
    },
    PAGE: {
      ERROR_404: {
        MESSAGE: '什么也没有'
      }
    }
  },
  'zh-HK': {
    NAV: {
      INDEX: '網誌',
      RSS: '訂閱',
      SEARCH: '搜尋',
      ABOUT: '關於'
    },
    PAGINATION: {
      PREV: '上一頁',
      NEXT: '下一頁'
    },
    POST: {
      BACK: '返回',
      TOP: '回到頂端'
    },
    PAGE: {
      ERROR_404: {
        MESSAGE: '呢度乜都冇'
      }
    }
  },
  'zh-TW': {
    NAV: {
      INDEX: '部落格',
      RSS: '訂閱',
      SEARCH: '搜尋',
      ABOUT: '關於'
    },
    PAGINATION: {
      PREV: '上一頁',
      NEXT: '下一頁'
    },
    POST: {
      BACK: '返回',
      TOP: '回到頂端'
    },
    PAGE: {
      ERROR_404: {
        MESSAGE: '這裡什麼都沒有'
      }
    }
  },
  ja: {
    NAV: {
      INDEX: 'ブログ',
      RSS: '購読',
      SEARCH: '検索',
      ABOUT: 'このサイトについて'
    },
    PAGINATION: {
      PREV: '前ページ',
      NEXT: '次ページ'
    },
    POST: {
      BACK: '戻る',
      TOP: 'トップに戻る'
    },
    PAGE: {
      ERROR_404: {
        MESSAGE: 'ここにはいない'
      }
    }
  },
  es: {
    NAV: {
      INDEX: 'Blog',
      RSS: 'RSS',
      SEARCH: 'Buscar',
      ABOUT: 'Acerca de mí'
    },
    PAGINATION: {
      PREV: 'Anterior',
      NEXT: 'Siguiente'
    },
    POST: {
      BACK: 'Atrás',
      TOP: 'Arriba'
    },
    PAGE: {
      ERROR_404: {
        MESSAGE: 'No hay nada aquí'
      }
    }
  }
}

export const fetchLocaleLang = () => {
  switch (BLOG.lang.toLowerCase()) {
    case 'zh-cn':
    case 'zh-sg':
      return lang['zh-CN']
    case 'zh-hk':
      return lang['zh-HK']
    case 'zh-tw':
      return lang['zh-TW']
    case 'ja':
    case 'ja-jp':
      return lang.ja
    case 'es':
    case 'es-ES':
      return lang.es
    case 'en':
    case 'en-us':
    default:
      return lang.en
  }
}

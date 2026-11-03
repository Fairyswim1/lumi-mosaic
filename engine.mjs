export const sum=a=>a.reduce((x,y)=>x+y,0);
export const levels=[
  {
    "id": 1,
    "title": "골라 쓰는 첫 빛",
    "packs": [
      [
        1,
        1,
        0
      ],
      [
        0,
        2,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        0,
        2,
        0
      ],
      [
        2,
        0,
        0
      ]
    ],
    "windows": [
      {
        "name": "A 창",
        "target": [
          2,
          2,
          0
        ]
      },
      {
        "name": "B 창",
        "target": [
          1,
          3,
          0
        ]
      }
    ],
    "budget": 10,
    "decision": "모두 쓸 필요 없어요",
    "hint": "전체 칸 수에 목표 비율을 곱해 필요한 색 개수를 생각해요. 남는 꾸러미는 그대로 두세요."
  },
  {
    "id": 2,
    "title": "크기가 다른 두 창",
    "packs": [
      [
        2,
        2,
        0
      ],
      [
        1,
        3,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        3,
        1,
        0
      ]
    ],
    "windows": [
      {
        "name": "A 창",
        "target": [
          2,
          2,
          0
        ]
      },
      {
        "name": "B 창",
        "target": [
          4,
          4,
          0
        ]
      }
    ],
    "budget": 9,
    "decision": "같은 비율, 다른 개수",
    "hint": "같은 0.5라도 전체가 다르면 필요한 개수가 달라요."
  },
  {
    "id": 3,
    "title": "개수의 착시",
    "packs": [
      [
        1,
        3,
        0
      ],
      [
        0,
        2,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        1,
        3,
        0
      ],
      [
        0,
        1,
        0
      ]
    ],
    "windows": [
      {
        "name": "A 창",
        "target": [
          2,
          2,
          0
        ]
      },
      {
        "name": "B 창",
        "target": [
          2,
          6,
          0
        ]
      }
    ],
    "budget": 10,
    "decision": "같은 개수, 다른 비율",
    "hint": "청록 2개가 두 창에서 차지하는 비율을 비교해요."
  },
  {
    "id": 4,
    "title": "맞는 창, 다른 선택",
    "packs": [
      [
        0,
        1,
        0
      ],
      [
        1,
        0,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        2,
        1,
        0
      ],
      [
        0,
        2,
        0
      ]
    ],
    "windows": [
      {
        "name": "A 창",
        "target": [
          2,
          2,
          0
        ]
      },
      {
        "name": "B 창",
        "target": [
          3,
          1,
          0
        ]
      }
    ],
    "budget": 8,
    "decision": "A창이 맞아도 끝이 아니에요",
    "hint": "A창의 청록 비율은 0.5, B창은 0.75예요. B창에 필요한 혼합 꾸러미를 먼저 생각해요."
  },
  {
    "id": 5,
    "title": "엇갈린 빛",
    "packs": [
      [
        1,
        1,
        0
      ],
      [
        0,
        3,
        0
      ],
      [
        1,
        2,
        0
      ],
      [
        2,
        0,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        3,
        0,
        0
      ]
    ],
    "windows": [
      {
        "name": "A 창",
        "target": [
          3,
          1,
          0
        ]
      },
      {
        "name": "B 창",
        "target": [
          2,
          6,
          0
        ]
      }
    ],
    "budget": 9,
    "decision": "한쪽만 보지 않기",
    "hint": "두 창의 목표를 함께 보고 꾸러미를 남겨요."
  },
  {
    "id": 6,
    "title": "남겨 둔 한 조각",
    "packs": [
      [
        2,
        1,
        0
      ],
      [
        1,
        2,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        0,
        2,
        0
      ],
      [
        1,
        0,
        0
      ]
    ],
    "windows": [
      {
        "name": "A 창",
        "target": [
          2,
          2,
          0
        ]
      },
      {
        "name": "B 창",
        "target": [
          3,
          4,
          0
        ]
      }
    ],
    "budget": 9,
    "decision": "나눌 수 없는 묶음",
    "hint": "한 개짜리 꾸러미가 꼭 필요한 곳을 찾아요."
  },
  {
    "id": 7,
    "title": "장밋빛 첫 등장",
    "packs": [
      [
        2,
        0,
        0
      ],
      [
        0,
        1,
        1
      ],
      [
        1,
        0,
        1
      ],
      [
        0,
        1,
        1
      ],
      [
        1,
        1,
        0
      ]
    ],
    "windows": [
      {
        "name": "A 창",
        "target": [
          2,
          1,
          1
        ]
      },
      {
        "name": "B 창",
        "target": [
          1,
          2,
          1
        ]
      }
    ],
    "budget": 8,
    "decision": "세 색 중 남겨야 할 묶음",
    "hint": "같은 비율을 만드는 조합도 남기는 색이 달라요. 두 창의 장미 몫을 비교해요."
  },
  {
    "id": 8,
    "title": "장미를 남겨요",
    "packs": [
      [
        0,
        0,
        2
      ],
      [
        2,
        1,
        1
      ],
      [
        0,
        3,
        0
      ],
      [
        1,
        2,
        0
      ],
      [
        0,
        1,
        1
      ],
      [
        0,
        1,
        1
      ],
      [
        1,
        0,
        1
      ]
    ],
    "windows": [
      {
        "name": "A 창",
        "target": [
          1,
          3,
          1
        ]
      },
      {
        "name": "B 창",
        "target": [
          3,
          2,
          3
        ]
      }
    ],
    "budget": 9,
    "decision": "희소한 색 배분",
    "hint": "장미가 든 꾸러미를 두 창에 어떻게 나눌까요?"
  },
  {
    "id": 9,
    "title": "세 창의 약속",
    "packs": [
      [
        0,
        0,
        2
      ],
      [
        0,
        2,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        0,
        1,
        1
      ],
      [
        2,
        0,
        1
      ],
      [
        0,
        1,
        1
      ],
      [
        1,
        0,
        1
      ]
    ],
    "windows": [
      {
        "name": "A 창",
        "target": [
          2,
          1,
          1
        ]
      },
      {
        "name": "B 창",
        "target": [
          0,
          3,
          1
        ]
      },
      {
        "name": "C 창",
        "target": [
          2,
          1,
          2
        ]
      }
    ],
    "budget": 8,
    "decision": "세 목표 연결",
    "hint": "한 창을 완성하면서 다른 두 창의 몫을 남겨요."
  },
  {
    "id": 10,
    "title": "같은 빛 다른 창",
    "packs": [
      [
        2,
        2,
        2
      ],
      [
        2,
        0,
        2
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        0,
        1
      ],
      [
        0,
        2,
        0
      ],
      [
        1,
        0,
        1
      ],
      [
        1,
        1,
        1
      ]
    ],
    "windows": [
      {
        "name": "A 창",
        "target": [
          2,
          2,
          2
        ]
      },
      {
        "name": "B 창",
        "target": [
          4,
          4,
          4
        ]
      }
    ],
    "budget": 8,
    "decision": "분모가 다른 비교",
    "hint": "같은 분포를 크기가 다른 창에 만들어요."
  },
  {
    "id": 11,
    "title": "고요한 마지막 틈",
    "packs": [
      [
        0,
        0,
        2
      ],
      [
        1,
        0,
        0
      ],
      [
        0,
        2,
        1
      ],
      [
        1,
        1,
        0
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        1,
        0,
        2
      ],
      [
        0,
        1,
        1
      ],
      [
        3,
        1,
        1
      ]
    ],
    "windows": [
      {
        "name": "A 창",
        "target": [
          1,
          2,
          1
        ]
      },
      {
        "name": "B 창",
        "target": [
          2,
          1,
          2
        ]
      },
      {
        "name": "C 창",
        "target": [
          4,
          3,
          2
        ]
      }
    ],
    "budget": 9,
    "decision": "빈칸과 비율을 함께",
    "hint": "작은 꾸러미를 큰 창에 먼저 쓰면 다른 창을 못 채울 수 있어요."
  },
  {
    "id": 12,
    "title": "온실이 깨어나는 밤",
    "packs": [
      [
        0,
        2,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        0,
        2,
        1
      ],
      [
        1,
        2,
        0
      ],
      [
        1,
        1,
        0
      ],
      [
        0,
        1,
        2
      ],
      [
        2,
        1,
        1
      ],
      [
        2,
        0,
        1
      ],
      [
        0,
        1,
        0
      ],
      [
        1,
        0,
        1
      ]
    ],
    "windows": [
      {
        "name": "A 창",
        "target": [
          3,
          2,
          1
        ]
      },
      {
        "name": "B 창",
        "target": [
          2,
          2,
          3
        ]
      },
      {
        "name": "C 창",
        "target": [
          3,
          4,
          2
        ]
      }
    ],
    "budget": 10,
    "decision": "세 판단의 결합",
    "hint": "전체·비율·남길 꾸러미를 함께 생각해 온실을 밝혀요."
  }
];
export const practice={id:0,title:'작은 창에 첫 빛을',packs:[[1,0,0],[0,1,0],[2,0,0]],windows:[{name:'연습 창',target:[1,1,0]}],budget:6,hint:'청록과 금빛을 하나씩 놓아요.'};
export function start(l){return{level:l.id,placements:[],spent:0,undos:0,hints:0,message:'꾸러미를 고르고, 놓을 창을 누르세요.'};}
export function counts(l,s,w){return s.placements.filter(x=>x.w===w).reduce((a,x)=>a.map((v,k)=>v+l.packs[x.p][k]),[0,0,0]);}
export function won(l,s){return l.windows.every((win,w)=>counts(l,s,w).every((v,k)=>v===win.target[k]));}
export function canPlace(l,s,p,w){return Number.isInteger(p)&&Number.isInteger(w)&&l.packs[p]&&l.windows[w]&&!s.placements.some(x=>x.p===p)&&sum(counts(l,s,w))+sum(l.packs[p])<=sum(l.windows[w].target);}
export function place(l,s,p,w){if(won(l,s)||s.spent>=l.budget)return s;if(!canPlace(l,s,p,w))return{...s,message:'빈칸이 모자라요. 다른 창이나 꾸러미를 골라 보세요.'};const n={...s,placements:[...s.placements,{p,w}],spent:s.spent+1,message:'빛을 놓았어요. 남은 창의 몫도 살펴보세요.'};if(won(l,n))n.message='모든 창을 밝혔어요! 쓰지 않은 꾸러미 '+(l.packs.length-n.placements.length)+'개는 남겨 두어요.';else if(l.windows.every((w,i)=>sum(counts(l,n,i))===sum(w.target))||n.spent>=l.budget)n.message='목표와 다른 창이 있어요. 한 수 전으로 가거나 다시 시작해 보세요.';return n;}
export function undo(l,s){if(!s.placements.length||s.spent>=l.budget||won(l,s))return s;return{...s,placements:s.placements.slice(0,-1),spent:s.spent+1,undos:s.undos+1,message:'한 수를 되돌렸어요. 손길 하나를 사용했어요.'};}
export function solve(l,s){
 const used=new Set(s.placements.map(x=>x.p)),remaining=l.packs.map((_,p)=>p).filter(p=>!used.has(p)),bins=l.windows.map((_,w)=>counts(l,s,w));
 if(bins.some((b,w)=>b.some((n,k)=>n>l.windows[w].target[k])))return null;
 const path=[],memo=new Set(),done=()=>bins.every((b,w)=>b.every((n,k)=>n===l.windows[w].target[k]));
 function dfs(i){if(done())return true;if(i===remaining.length||s.spent+path.length>=l.budget)return false;const key=i+':'+bins.flat().join(',')+':'+path.length;if(memo.has(key))return false;memo.add(key);const p=remaining[i];for(let w=0;w<bins.length;w++){if(l.packs[p].some((n,k)=>bins[w][k]+n>l.windows[w].target[k]))continue;l.packs[p].forEach((n,k)=>bins[w][k]+=n);path.push({p,w});if(dfs(i+1))return true;path.pop();l.packs[p].forEach((n,k)=>bins[w][k]-=n);}return dfs(i+1);}
 return dfs(0)?[...path]:null;
}
export function restoreProgress(current,legacy){
 try{if(current){const v=JSON.parse(current);if(v.version===2)return {version:2,current:1,completed:{},drafts:{},legacyCompleted:0,...v};}}catch{}
 let previous=0;try{previous=Object.keys(JSON.parse(legacy||'{}').completed||{}).length;}catch{}
 return {version:2,current:1,completed:{},drafts:{},legacyCompleted:previous};
}
export function stars(l,s){return won(l,s)?s.hints?1:s.undos?2:3:0;}

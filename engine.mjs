export const sum=a=>a.reduce((x,y)=>x+y,0);
// Each chapter changes the allocation decision, not the controls.
const specs=[
 ['첫 빛의 창',[[2,0,0],[0,2,0],[1,1,0],[0,2,0]],[0,0,1,1],'반씩 나누는 창','같은 전체에서 절반을 채워요.'],
 ['크기가 다른 두 창',[[2,2,0],[3,1,0],[1,3,0]],[0,1,1],'같은 비율, 다른 개수','같은 0.5라도 전체가 다르면 필요한 개수가 달라요.'],
 ['개수의 착시',[[2,0,0],[0,2,0],[1,3,0],[1,3,0]],[0,0,1,1],'같은 개수, 다른 비율','청록 2개가 두 창에서 차지하는 비율을 비교해요.'],
 ['가장 큰 꾸러미',[[3,1,0],[2,0,0],[0,2,0],[1,3,0]],[1,0,0,1],'작은 창을 남기기','큰 꾸러미를 먼저 작은 창에 쓰면 나머지가 막힐 수 있어요.'],
 ['엇갈린 빛',[[3,0,0],[0,1,0],[1,2,0],[0,3,0],[1,1,0]],[0,0,1,1,1],'한쪽만 보지 않기','두 창의 목표를 함께 보고 꾸러미를 남겨요.'],
 ['남겨 둔 한 조각',[[2,1,0],[1,0,0],[1,2,0],[0,2,0],[1,1,0]],[1,0,0,1,1],'나눌 수 없는 묶음','한 개짜리 꾸러미가 꼭 필요한 곳을 찾아요.'],
 ['장밋빛 첫 등장',[[2,0,1],[0,2,1],[1,1,2],[1,1,0]],[0,0,1,1],'세 범주의 합','세 색의 상대도수를 합하면 1이에요.'],
 ['장미를 남겨요',[[2,1,1],[0,1,1],[1,2,0],[1,0,1],[0,1,1]],[1,0,0,1,1],'희소한 색 배분','장미가 든 꾸러미를 두 창에 어떻게 나눌까요?'],
 ['세 창의 약속',[[1,1,0],[1,0,1],[0,2,0],[0,1,1],[2,0,1],[0,1,1]],[0,0,1,1,2,2],'세 목표 연결','한 창을 완성하면서 다른 두 창의 몫을 남겨요.'],
 ['같은 빛 다른 창',[[1,1,1],[2,2,2],[1,0,1],[0,1,0],[2,0,2],[0,2,0]],[0,1,0,0,1,1],'분모가 다른 비교','같은 분포를 크기가 다른 창에 만들어요.'],
 ['고요한 마지막 틈',[[3,1,1],[1,0,0],[0,2,1],[1,1,0],[1,0,2],[0,1,1],[1,1,0]],[2,0,0,1,1,2,2],'빈칸과 비율을 함께','작은 꾸러미를 큰 창에 먼저 쓰면 다른 창을 못 채울 수 있어요.'],
 ['온실이 깨어나는 밤',[[2,1,1],[1,2,0],[0,1,2],[2,0,1],[1,1,0],[0,2,1],[1,0,1],[1,1,0]],[2,0,1,0,1,2,1,2],'세 판단의 결합','전체·비율·남길 꾸러미를 함께 생각해 온실을 밝혀요.']
];
export const levels=specs.map(([title,packs,solution,decision,hint],i)=>{const windows=Array.from({length:Math.max(...solution)+1},(_,w)=>({name:'ABC'[w]+' 창',target:packs.reduce((a,p,j)=>a.map((v,k)=>v+(solution[j]===w?p[k]:0)),[0,0,0])}));return{id:i+1,title,packs,windows,budget:packs.length+(i<4?6:i<8?4:2),decision,hint};});
export const practice={id:0,title:'작은 창에 첫 빛을',packs:[[1,0,0],[0,1,0]],windows:[{name:'연습 창',target:[1,1,0]}],budget:6,hint:'청록과 금빛을 하나씩 놓아요.'};
export function start(l){return{level:l.id,placements:[],spent:0,undos:0,hints:0,message:'꾸러미를 고르고, 놓을 창을 누르세요.'};}
export function counts(l,s,w){return s.placements.filter(x=>x.w===w).reduce((a,x)=>a.map((v,k)=>v+l.packs[x.p][k]),[0,0,0]);}
export function won(l,s){return s.placements.length===l.packs.length&&l.windows.every((win,w)=>counts(l,s,w).every((v,k)=>v===win.target[k]));}
export function canPlace(l,s,p,w){return Number.isInteger(p)&&Number.isInteger(w)&&l.packs[p]&&l.windows[w]&&!s.placements.some(x=>x.p===p)&&sum(counts(l,s,w))+sum(l.packs[p])<=sum(l.windows[w].target);}
export function place(l,s,p,w){if(won(l,s)||s.spent>=l.budget)return s;if(!canPlace(l,s,p,w))return{...s,message:'빈칸이 모자라요. 다른 창이나 꾸러미를 골라 보세요.'};const n={...s,placements:[...s.placements,{p,w}],spent:s.spent+1,message:'빛을 놓았어요. 남은 창의 몫도 살펴보세요.'};if(won(l,n))n.message='모든 비율을 맞췄어요! 온실에 불빛이 돌아왔어요.';else if(n.placements.length===l.packs.length||n.spent>=l.budget)n.message='목표와 다른 창이 있어요. 한 수 전으로 가거나 다시 시작해 보세요.';return n;}
export function undo(l,s){if(!s.placements.length||s.spent>=l.budget||won(l,s))return s;return{...s,placements:s.placements.slice(0,-1),spent:s.spent+1,undos:s.undos+1,message:'한 수를 되돌렸어요. 손길 하나를 사용했어요.'};}
export function solve(l,s){const used=new Set(s.placements.map(x=>x.p)),remaining=l.packs.map((_,p)=>p).filter(p=>!used.has(p));const bins=l.windows.map((_,w)=>counts(l,s,w));if(bins.some((b,w)=>b.some((n,k)=>n>l.windows[w].target[k])))return null;const path=[];function dfs(i){if(i===remaining.length)return bins.every((b,w)=>b.every((n,k)=>n===l.windows[w].target[k]));const p=remaining[i];for(let w=0;w<bins.length;w++){if(l.packs[p].some((n,k)=>bins[w][k]+n>l.windows[w].target[k]))continue;l.packs[p].forEach((n,k)=>bins[w][k]+=n);path.push({p,w});if(dfs(i+1))return true;path.pop();l.packs[p].forEach((n,k)=>bins[w][k]-=n);}return false;}return dfs(0)?[...path]:null;}
export function stars(l,s){return won(l,s)?s.hints?1:s.undos?2:3:0;}

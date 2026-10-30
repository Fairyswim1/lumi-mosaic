export const tasks=[
{id:'c1',skill:'compute',title:'도서관에 머문 시간',prompt:'학생 20명의 이용 시간입니다. 각 계급의 상대도수를 소수로 완성하세요.',counts:[4,10,6],expected:[.2,.5,.3],kind:'table'},
{id:'c2',skill:'compute',title:'정원에서 관찰한 길이',prompt:'새싹 25개의 길이입니다. 각 계급의 상대도수를 소수로 완성하세요.',counts:[5,5,15],expected:[.2,.2,.6],kind:'table'},
{id:'r1',skill:'represent',title:'산책 시간의 그래프',prompt:'10명의 산책 시간입니다. 막대 높이를 입력해 상대도수 히스토그램을 만드세요.',counts:[2,3,5],expected:[.2,.3,.5],kind:'draw'},
{id:'r2',skill:'represent',title:'연습 시간의 그래프',prompt:'40명의 연습 시간입니다. 막대 높이를 입력해 상대도수 히스토그램을 만드세요.',counts:[12,20,8],expected:[.3,.5,.2],kind:'draw'},
{id:'i1',skill:'interpret',title:'긴 산책의 비율',prompt:'상대도수 그래프에서 10분 이상 산책한 비율을 소수로 쓰세요.',values:[.2,.5,.3],expected:[.8],kind:'read'},
{id:'i2',skill:'interpret',title:'짧은 연습과 긴 연습',prompt:'상대도수 그래프에서 20분 미만 연습한 비율을 소수로 쓰세요.',values:[.4,.35,.25],expected:[.75],kind:'read'},
{id:'x1',skill:'compare',title:'개수와 비율은 달라요',prompt:'20분 이상 머문 학생은 A반 30명 중 6명, B반 20명 중 5명입니다. 이 비율이 더 큰 반을 고르고, 두 상대도수를 근거로 설명하세요.',expected:['B'],kind:'compare'},
{id:'x2',skill:'compare',title:'다른 크기의 두 모임',prompt:'20분 이상 산책한 사람은 A모임 40명 중 12명, B모임 25명 중 10명입니다. 이 비율이 더 큰 모임을 고르고, 두 상대도수를 근거로 설명하세요.',expected:['B'],kind:'compare'}
];
export function check(task,answers){return answers.length===task.expected.length&&answers.every((v,i)=>String(v).trim()!==''&&(typeof task.expected[i]==='number'?Number.isFinite(Number(v))&&Math.abs(Number(v)-task.expected[i])<1e-9:v===task.expected[i]));}
export function submit(log,task,answers,explanation,helped){const previous=log.filter(x=>x.task===task.id);const correct=check(task,answers);return{task:task.id,skill:task.skill,answers:[...answers],explanation,helped:Boolean(helped),attempt:previous.length+1,first:previous.length===0,correct,independent:previous.length===0&&!helped&&correct,at:new Date().toISOString()};}
export function summary(log,skill){const rows=log.filter(x=>x.skill===skill),distinct=new Set(rows.filter(x=>x.independent).map(x=>x.task));return{independent:distinct.size,needsExplanation:rows.filter(x=>x.correct&&!x.explanation.trim()).length};}

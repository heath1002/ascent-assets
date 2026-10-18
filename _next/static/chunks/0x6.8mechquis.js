(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,531278,717521,e=>{"use strict";let t=(0,e.i(475254).default)("loader-circle",[["path",{d:"M21 12a9 9 0 1 1-6.219-8.56",key:"13zald"}]]);e.s(["default",0,t],717521),e.s(["Loader2",0,t],531278)},107233,e=>{"use strict";let t=(0,e.i(475254).default)("plus",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"M12 5v14",key:"s699le"}]]);e.s(["Plus",0,t],107233)},178583,e=>{"use strict";let t=(0,e.i(475254).default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",0,t],178583)},569074,e=>{"use strict";let t=(0,e.i(475254).default)("upload",[["path",{d:"M12 3v12",key:"1x0j5s"}],["path",{d:"m17 8-5-5-5 5",key:"7q97r8"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}]]);e.s(["Upload",0,t],569074)},564123,172136,e=>{"use strict";var t=e.i(932844);let r="/api";async function a(e){if(!e.ok){let t=await e.text().catch(()=>"");throw Error(`Request failed (${e.status}): ${t||e.statusText}`)}return e.json()}async function s(){let e=await (0,t.apiFetch)((0,t.apiUrl)(`${r}/documents`),{cache:"no-store"}),s=await a(e);return Array.isArray(s?.documents)?s.documents:[]}async function n(e){return a(await (0,t.apiFetch)((0,t.apiUrl)(`${r}/documents`),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e?.title??null,content:e?.content??""})}))}async function o(e){return a(await (0,t.apiFetch)((0,t.apiUrl)(`${r}/documents/${encodeURIComponent(e)}`),{cache:"no-store"}))}async function i(e,s){return a(await (0,t.apiFetch)((0,t.apiUrl)(`${r}/documents/${encodeURIComponent(e)}`),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:s.title??null,content:s.content??null})}))}async function l(e){let s=await (0,t.apiFetch)((0,t.apiUrl)(`${r}/documents/${encodeURIComponent(e)}`),{method:"DELETE"}),n=await a(s);return!!n?.deleted}async function c(e){let s=new FormData;return s.append("file",e),a(await (0,t.apiFetch)((0,t.apiUrl)(`${r}/documents/import/docx`),{method:"POST",body:s}))}async function d(e){let a=await (0,t.apiFetch)((0,t.apiUrl)(`${r}/documents/export/docx`),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e.title??"",content:e.content??""})});if(!a.ok){let e=await a.text().catch(()=>"");throw Error(`Request failed (${a.status}): ${e||a.statusText}`)}return a.blob()}e.s(["createCoWriterDocument",0,n,"deleteCoWriterDocument",0,l,"exportCoWriterDocx",0,d,"getCoWriterDocument",0,o,"importCoWriterDocx",0,c,"listCoWriterDocuments",0,s,"updateCoWriterDocument",0,i],564123),e.s(["notifyCoWriterChanged",0,function(){let e=window;e&&e.dispatchEvent(new Event("co-writer:changed"))}],172136)},421872,e=>{"use strict";let t=`# Ascent Class 공동 작성

> Ascent Class의 내장 작성 도구로, 노트, 보고서, 튜토리얼 및 AI 지원 초안을 작성할 수 있습니다.

### 기능

- 일상적인 작성에 표준 Markdown / CommonMark / GFM 지원
- 제목, 표, 코드, 수식, 순서도, 시퀀스 다이어그램 실시간 미리보기
- 다시쓰기, 축소, 확장을 위한 AI 편집 워크플로우
- <sub>, <sup>, <abbr>, <mark> 등의 HTML 태그 디코딩
- Ascent Class 제품 문서 및 학습 콘텐츠를 위한 실용적인 시작 템플릿

## 제목 (밑줄 스타일)

Ascent Class 학습 노트
=============

Ascent Class 학습 개요
-------------

### 문자 서식

----

~~삭제된 동작~~ <s>레거시 포맷 경로</s>
*기울임* _기울임_
**굵게** __굵게__
***기울임 굵게*** ___기울임 굵게___

위 첨자: X<sup>2</sup>, 아래 첨자: O<sub>2</sub>

**약어 (HTML abbr 태그 링크)**

<abbr title="Large Language Model">LLM</abbr> 계층이 Ascent Class를 구동하며, <abbr title="Retrieval Augmented Generation">RAG</abbr> 계층이 근거 기반 지식 지원을 제공합니다.

### 인용구

> Ascent Class는 학생들이 질문을 구조화된 이해로 전환하도록 돕습니다.
>
> "깊이 배우고, 명확하게 쓰세요.", [Ascent Class](#ascent-class-co-writer)

### 링크

[Ascent Class 공동 작성](#ascent-class-co-writer "공동 작성 섹션")

[Ascent Class 학습 노트](#ascent-class-learning-note)

[Ascent Class 웹사이트](https://ascentclass.kr)

[참조 링크][ac-doc]

[ac-doc]: #ascent-class-learning-note

### 코드 블록

#### 인라인 코드

\`ascent chat --once "이 섹션 요약해줘"\`

#### 코드 블록 (들여쓰기 스타일)

    from ascent_class.orchestrator import ChatOrchestrator
    orchestrator = ChatOrchestrator()
    print("Ascent Class 준비 완료.")

#### Python

\`\`\`python
from ascent_class.orchestrator import ChatOrchestrator
from ascent_class.context import UnifiedContext


async def run_demo() -> str:
    orchestrator = ChatOrchestrator()
    context = UnifiedContext(
        사용자_질문="뉴턴의 제2법칙 설명해줘",
        역량="chat",
    )
    결과 = await orchestrator.run(context)
    return 결과.get("response", "")
\`\`\`

#### JSON 설정

\`\`\`json
{
  "app_name": "Ascent Class",
  "default_capability": "chat",
  "enabled_tools": ["rag", "web_search", "code_execution", "reason"],
  "ui": {
    "co_writer_template": true
  }
}
\`\`\`

#### HTML 코드

\`\`\`html
<section class="ascent-class-card">
  <h1>Ascent Class</h1>
  <p>AI와 함께 학습 콘텐츠를 작성, 수정, 정리하세요.</p>
</section>
\`\`\`

### 이미지

![](/logo.png)

> 공동 작성 템플릿에 사용된 Ascent Class 브랜드 마크.

### 목록

- Ascent Class 채팅
- Ascent Class 공동 작성
- Ascent Class 연구

1. 개념 노트 초안 작성
2. AI에게 수정 요청
3. 완성된 마크다운 내보내기

### 표

기능           | 설명
------------- | -------------
공동 작성     | 마크다운 콘텐츠 초안 작성 및 수정
채팅          | 질문하고 아이디어 발전시키기
연구          | 구조화된 다단계 보고서 작성

| 역량           | 주요 사용 사례                     |
| ------------- | ------------------------------------ |
| \`chat\`       | 일반 튜터링 및 안내        |
| \`deep_solve\` | 구조화된 문제 해결           |
| \`deep_question\` | 문제 생성 및 검증 |

### 마크다운 추가 기능

- [x] Ascent Class 제품 노트 초안 작성
- [x] 참조 및 구조 추가
- [ ] 최종 설명 다듬기
  - [ ] 제목 확인
  - [ ] 인용 확인

### TeX (LaTeX)

$$ E=mc^2 $$

인라인 $$E=mc^2$$는 물리 노트에, 인라인 $$a^2+b^2=c^2$$는 기하 노트에 나타납니다.

$$sqrt{3x-1}+(1+x)^2$$

$$ sin(alpha)^{	heta}=sum_{i=0}^{n}(x^i + cos(f))$$

### 순서도

\`\`\`flow
st=>start: 학생이 질문합니다
op=>operation: Ascent Class가 의도를 분석합니다
cond=>condition: 심층 워크플로우 필요?
chat=>operation: 채팅 역량으로 답변
solve=>operation: 심층 해결로 라우팅
e=>end: 구조화된 응답 반환

st->op->cond
cond(no)->chat
cond(yes)->solve
chat->e
solve->e
\`\`\`

### 시퀀스 다이어그램

\`\`\`seq
학생->Ascent Class: 도움 요청
Ascent Class->지식베이스: 컨텍스트 로드
Note right of Ascent Class: 메모리 및
관련 지식 수집
Ascent Class-->학생: 안내 응답 반환
학생->>Ascent Class: 공동 작성에서 재작성 요청
\`\`\`

### 끝
`;e.s(["CO_WRITER_SAMPLE_TEMPLATE",0,t])},265178,e=>{"use strict";var t=e.i(843476),r=e.i(271645),a=e.i(618566);e.i(785269);var s=e.i(322831),n=e.i(178583),o=e.i(531278),i=e.i(674558),l=e.i(107233),c=e.i(727612),d=e.i(569074),u=e.i(564123),p=e.i(172136),m=e.i(421872),x=e.i(522739);e.s(["default",0,function(){let e=(0,a.useRouter)(),{t:h}=(0,s.useTranslation)(),[f,b]=(0,r.useState)([]),[g,y]=(0,r.useState)(!0),[v,C]=(0,r.useState)(!1),[j,w]=(0,r.useState)(!1),k=(0,r.useRef)(null),[N,$]=(0,r.useState)(null),[A,_]=(0,r.useState)(null),[T,M]=(0,r.useState)(""),E=(0,r.useCallback)(async()=>{y(!0),M("");try{let e=await (0,u.listCoWriterDocuments)();b(e)}catch(e){M(e instanceof Error?e.message:String(e))}finally{y(!1)}},[]);(0,r.useEffect)(()=>{E()},[E]);let S=(0,r.useCallback)(async t=>{if(!v){C(!0),M("");try{let r=await (0,u.createCoWriterDocument)({content:t?m.CO_WRITER_SAMPLE_TEMPLATE:""});(0,p.notifyCoWriterChanged)(),e.push(`/co-writer/${r.id}`)}catch(e){M(e instanceof Error?e.message:String(e)),C(!1)}}},[v,e]),L=(0,r.useCallback)(async t=>{if(t&&!v&&!j){w(!0),M("");try{let r=await (0,u.importCoWriterDocx)(t);(0,p.notifyCoWriterChanged)(),e.push(`/co-writer/${r.id}`)}catch(e){M(e instanceof Error?e.message:String(e)),w(!1)}}},[v,j,e]),U=(0,r.useCallback)(async e=>{if(!A){_(e),M("");try{await (0,u.deleteCoWriterDocument)(e),b(t=>t.filter(t=>t.id!==e)),$(null),(0,p.notifyCoWriterChanged)()}catch(e){M(e instanceof Error?e.message:String(e))}finally{_(null)}}},[A]);return(0,t.jsxs)("div",{className:"h-full overflow-y-auto bg-[var(--background)]",children:[(0,t.jsx)("input",{ref:k,type:"file",accept:".docx,application/vnd.openxmlformats-officedocument.wordprocessingml.document",className:"hidden",onChange:e=>{let t=e.target.files?.[0];e.target.value="",L(t)}}),(0,t.jsxs)("div",{className:"mx-auto max-w-5xl px-6 py-8",children:[(0,t.jsxs)("header",{className:"mb-7 flex items-end justify-between gap-4",children:[(0,t.jsxs)("div",{children:[(0,t.jsx)("h1",{className:"text-[21px] font-semibold tracking-tight text-[var(--foreground)]",children:h("Co-Writer")}),(0,t.jsx)("p",{className:"mt-1 text-[14.5px] text-[var(--muted-foreground)]",children:h("Manage your markdown drafts and projects.")})]}),(0,t.jsxs)("div",{className:"flex shrink-0 items-center gap-2",children:[(0,t.jsxs)("button",{type:"button",onClick:()=>k.current?.click(),disabled:v||j,className:"inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3.5 py-2 text-[14.5px] font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--muted)] disabled:opacity-60",children:[j?(0,t.jsx)(o.Loader2,{size:14,className:"animate-spin"}):(0,t.jsx)(d.Upload,{size:14}),h("Import Word")]}),(0,t.jsxs)("button",{type:"button",onClick:()=>S(!0),disabled:v||j,className:"inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3.5 py-2 text-[14.5px] font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--muted)] disabled:opacity-60",children:[(0,t.jsx)(n.FileText,{size:14}),h("From template")]}),(0,t.jsxs)("button",{type:"button",onClick:()=>S(!1),disabled:v||j,className:"inline-flex items-center gap-1.5 rounded-lg bg-[var(--primary)] px-3.5 py-2 text-[14.5px] font-medium text-[var(--primary-foreground)] transition-opacity hover:opacity-90 disabled:opacity-60",children:[v?(0,t.jsx)(o.Loader2,{size:14,className:"animate-spin"}):(0,t.jsx)(l.Plus,{size:14}),h("New draft")]})]})]}),T?(0,t.jsx)("div",{className:"mb-4 rounded-lg border border-rose-300/30 bg-rose-50/40 px-3 py-2 text-[14px] text-rose-700 dark:bg-rose-950/30 dark:text-rose-300",children:T}):null,g?(0,t.jsxs)("div",{className:"flex items-center justify-center gap-2 py-20 text-[14.5px] text-[var(--muted-foreground)]",children:[(0,t.jsx)(o.Loader2,{size:16,className:"animate-spin"}),h("Loading drafts…")]}):0===f.length?(0,t.jsxs)("div",{className:"flex min-h-[360px] flex-col items-center justify-center rounded-2xl border border-dashed border-[var(--border)] px-8 text-center",children:[(0,t.jsx)(i.PenLine,{size:30,strokeWidth:1.5,className:"mb-3 text-[var(--muted-foreground)]"}),(0,t.jsx)("p",{className:"text-[16px] font-medium text-[var(--foreground)]",children:h("No drafts yet")}),(0,t.jsx)("p",{className:"mt-1.5 max-w-sm text-[14.5px] leading-relaxed text-[var(--muted-foreground)]",children:h("Start a new markdown draft to begin writing.")}),(0,t.jsxs)("div",{className:"mt-4 flex items-center gap-2",children:[(0,t.jsxs)("button",{type:"button",onClick:()=>S(!1),disabled:v||j,className:"inline-flex items-center gap-1.5 rounded-lg bg-[var(--primary)] px-3.5 py-2 text-[14.5px] font-medium text-[var(--primary-foreground)] transition-opacity hover:opacity-90 disabled:opacity-60",children:[v?(0,t.jsx)(o.Loader2,{size:14,className:"animate-spin"}):(0,t.jsx)(l.Plus,{size:14}),h("New draft")]}),(0,t.jsxs)("button",{type:"button",onClick:()=>S(!0),disabled:v||j,className:"inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3.5 py-2 text-[14.5px] font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--muted)] disabled:opacity-60",children:[(0,t.jsx)(n.FileText,{size:14}),h("Start from template")]}),(0,t.jsxs)("button",{type:"button",onClick:()=>k.current?.click(),disabled:v||j,className:"inline-flex items-center gap-1.5 rounded-lg border border-[var(--border)] px-3.5 py-2 text-[14.5px] font-medium text-[var(--foreground)] transition-colors hover:bg-[var(--muted)] disabled:opacity-60",children:[j?(0,t.jsx)(o.Loader2,{size:14,className:"animate-spin"}):(0,t.jsx)(d.Upload,{size:14}),h("Import Word")]})]})]}):(0,t.jsx)("div",{className:"grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3",children:f.map(r=>{let a=N===r.id,s=A===r.id;return(0,t.jsxs)("div",{role:"button",tabIndex:0,onClick:()=>e.push(`/co-writer/${r.id}`),onKeyDown:t=>{("Enter"===t.key||" "===t.key)&&(t.preventDefault(),e.push(`/co-writer/${r.id}`))},className:"group relative flex h-44 cursor-pointer flex-col rounded-2xl border border-[var(--border)] p-4 text-left transition-colors hover:border-[var(--ring)]",children:[(0,t.jsxs)("div",{className:"flex items-start justify-between gap-2",children:[(0,t.jsxs)("div",{className:"flex min-w-0 items-start gap-2",children:[(0,t.jsx)(n.FileText,{size:15,className:"mt-0.5 shrink-0 text-[var(--muted-foreground)]"}),(0,t.jsxs)("div",{className:"min-w-0",children:[(0,t.jsx)("div",{className:"truncate text-[16px] font-medium text-[var(--foreground)]",title:r.title||h("Untitled draft"),children:r.title||h("Untitled draft")}),(0,t.jsxs)("div",{className:"mt-0.5 text-[13px] text-[var(--muted-foreground)]/70",children:[h("Updated")," ",function(e){if(!e||Number.isNaN(e))return"";let t=Date.now()/1e3-e;if(t<60)return"1m";let r=Math.floor(t/60);if(r<60)return`${r}m`;let a=Math.floor(r/60);if(a<24)return`${a}h`;let s=Math.floor(a/24);if(s<30)return`${s}d`;let n=Math.floor(s/30);return n<12?`${n}mo`:`${Math.floor(n/12)}y`}(r.updated_at)," ",h("ago")]})]})]}),(0,t.jsx)(x.default,{label:a?h("Click again to confirm"):h("Delete draft"),children:(0,t.jsx)("button",{type:"button",onClick:e=>{e.stopPropagation(),a?U(r.id):$(r.id)},disabled:s,"aria-label":a?h("Click again to confirm"):h("Delete draft"),className:`shrink-0 rounded-md p-1 transition-colors disabled:opacity-50 ${a?"bg-rose-500/15 text-rose-600 dark:text-rose-400":"text-[var(--muted-foreground)]/60 hover:bg-rose-500/10 hover:text-rose-600 dark:hover:text-rose-400"}`,children:s?(0,t.jsx)(o.Loader2,{size:13,className:"animate-spin"}):(0,t.jsx)(c.Trash2,{size:13})})})]}),(0,t.jsx)("p",{className:"mt-2.5 line-clamp-4 flex-1 text-[14px] leading-relaxed text-[var(--muted-foreground)]",children:r.preview||h("Empty draft")})]},r.id)})})]})]})}])}]);
(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,972520,e=>{"use strict";let t=(0,e.i(475254).default)("arrow-right",[["path",{d:"M5 12h14",key:"1ays0h"}],["path",{d:"m12 5 7 7-7 7",key:"xquz4c"}]]);e.s(["ArrowRight",0,t],972520)},178583,e=>{"use strict";let t=(0,e.i(475254).default)("file-text",[["path",{d:"M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z",key:"1oefj6"}],["path",{d:"M14 2v5a1 1 0 0 0 1 1h5",key:"wfsgrz"}],["path",{d:"M10 9H8",key:"b1mrlr"}],["path",{d:"M16 13H8",key:"t4e002"}],["path",{d:"M16 17H8",key:"z1uh3a"}]]);e.s(["FileText",0,t],178583)},138399,e=>{"use strict";let t=(0,e.i(475254).default)("braces",[["path",{d:"M8 3H7a2 2 0 0 0-2 2v5a2 2 0 0 1-2 2 2 2 0 0 1 2 2v5c0 1.1.9 2 2 2h1",key:"ezmyqa"}],["path",{d:"M16 21h1a2 2 0 0 0 2-2v-5c0-1.1.9-2 2-2a2 2 0 0 1-2-2V5a2 2 0 0 0-2-2h-1",key:"e1hn23"}]]);e.s(["Braces",0,t],138399)},440160,e=>{"use strict";let t=(0,e.i(475254).default)("download",[["path",{d:"M12 15V3",key:"m9g1x1"}],["path",{d:"M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4",key:"ih7n3h"}],["path",{d:"m7 10 5 5 5-5",key:"brsn70"}]]);e.s(["Download",0,t],440160)},473708,e=>{"use strict";let t=(0,e.i(475254).default)("image",[["rect",{width:"18",height:"18",x:"3",y:"3",rx:"2",ry:"2",key:"1m3agn"}],["circle",{cx:"9",cy:"9",r:"2",key:"af1f0g"}],["path",{d:"m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21",key:"1xmnt7"}]]);e.s(["Image",0,t],473708)},997625,e=>{"use strict";let t=(0,e.i(475254).default)("code-xml",[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]]);e.s(["Code2",0,t],997625)},341853,e=>{"use strict";let t={pageindex:[".pdf",".md",".markdown",".txt",".docx",".doc",".pptx",".ppt",".xlsx",".xls",".csv"],"pageindex-oss":[".pdf"]},a=e=>e>=0x40000000?`${(e/0x40000000).toFixed(1)} GB`:e>=1048576?`${(e/1048576).toFixed(1)} MB`:e>=1024?`${(e/1024).toFixed(1)} KB`:`${e} B`,s=e=>`${e.name}:${e.size}:${e.lastModified}`,r="marginnote4",i=e=>e.metadata?.type===r,n=["files","add","folders","github","web","versions","devices","kiwix","settings"],o=e=>e.metadata?.type==="obsidian"?"obsidian":i(e)?r:e.metadata?.type==="kiwix"?"kiwix":e.statistics?.rag_provider||e.metadata?.rag_provider||"llamaindex",l=e=>e.status??e.statistics?.status??"unknown",c=e=>!!e.statistics?.needs_reindex||"needs_reindex"===l(e),d=e=>"lightrag"===o(e)&&(e.metadata?.indexing_policy?.policy==="legacy_unpinned"||!!e.metadata?.embedding_mismatch),u=e=>["missing","changed","unconfigured"].includes(e.metadata?.embedding_status||""),p=new Set(["initializing","starting","processing_documents","processing_file"]),h=e=>{let t=l(e);if("ready"===t||"error"===t||"needs_reindex"===t)return!1;let a=e.progress?.stage;return!!a&&"completed"!==a&&"error"!==a&&p.has(a)};e.s(["DEFAULT_UPLOAD_POLICY",0,{extensions:[],accept:"",max_file_size_bytes:0xc800000,allow_any_extension:!1},"SUBAGENT_KB_TYPE",0,"subagent","currentLightRagBuildCandidate",0,function(e,t){if(t)return e.find(e=>!0!==e.ready)},"formatFileSize",0,a,"formatKnowledgeTimestamp",0,e=>{let t=(e=>{if(!e)return null;let t=new Date(e.includes("T")?e:e.replace(" ","T"));return Number.isNaN(t.getTime())?null:t})(e);return t?t.toLocaleString():e||null},"isMarginNoteKb",0,i,"kbCanReindex",0,e=>{if(e.read_only)return!1;let t=l(e);return!!("number"!=typeof e.statistics?.raw_documents||e.statistics.raw_documents>0)&&("error"===t||(["llamaindex","lightrag","graphrag"].includes(o(e))?!h(e):!!e.statistics?.needs_reindex||e.statistics?.active_match===!1))},"kbCanUploadDocuments",0,(e,t)=>"ready"===l(e)&&!u(e)&&!c(e)&&!e.metadata?.indexing_model_unavailable&&!d(e)||"error"===l(e)&&!u(e)&&!t&&!e.metadata?.indexing_model_unavailable&&!d(e),"kbDetailSections",0,e=>i(e)?["devices","settings"]:e.metadata?.type==="kiwix"?["kiwix","settings"]:n.filter(t=>"devices"!==t&&"kiwix"!==t&&("folders"!==t||!e.metadata?.type)),"kbDocCount",0,e=>{if(e.metadata?.type==="kiwix")return null;let t=e.statistics?.raw_documents;if("number"==typeof t)return t;let a=e.metadata?.last_indexed_count;return"number"==typeof a?a:null},"kbEmbeddingUnavailable",0,u,"kbHasLiveProgress",0,h,"kbNeedsReindex",0,c,"kbProvider",0,o,"kbRequiresLightRagRebuildBeforeAppend",0,d,"knowledgeBaseRef",0,function(e){return e.assigned&&e.id||e.id?.startsWith("account:kb:")||e.id?.startsWith("workspace:")?e.id:e.name},"lightRagVersionDisplayState",0,function(e,t){return t.published?"published":t.legacy||e.legacy?"legacy":e.ready?"inactive":t.rebuildActive?"building":t.kbError||e.failure_summary?"failed":"inactive"},"mergeSelectedFiles",0,(e,t)=>{let a=new Map;return[...e,...t].forEach(e=>{a.set(s(e),e)}),Array.from(a.values())},"progressMessage",0,function(e,t){return e.message_key?t(e.message_key,e.message_params??{}):e.message},"providerConnectionStatus",0,e=>e.setup_required?"needs_setup":e.requires_api_key&&!1===e.configured?"needs_key":!1===e.configured?"unavailable":"ready","providerUsesEmbeddingMetadata",0,e=>"pageindex"!==e&&"pageindex-oss"!==e,"resolveKbStatus",0,l,"resolveKnowledgeIndexFailure",0,e=>{if("error"!==l(e))return null;let t=e.progress,a=e.statistics?.progress,s=t?.error_code?.trim()||a?.error_code?.trim()||void 0,r=t?.error?.trim()||a?.error?.trim()||t?.message?.trim()||a?.message?.trim()||void 0,i=new Set(["graphrag_embedding_authentication_failed","graphrag_embedding_dimension_mismatch","graphrag_embedding_endpoint_failed","graphrag_embedding_incompatible","graphrag_embedding_provider_unsupported"]),n=new Set(["graphrag_model_incompatible","indexing_model_unavailable","reindex_required","graphrag_provider_unsupported","graphrag_model_authentication_failed","graphrag_model_endpoint_failed"]),o=i.has(s??""),c=n.has(s??"");return{code:s,message:r,retryable:t?.retryable??a?.retryable,requiresModelChange:o||c,settingsHref:o?"/settings#embedding":c?"/settings#models":void 0}},"resolveProgressPercent",0,e=>{let t=e?.progress_percent??e?.percent;if("number"==typeof t)return t;let a=e?.current??0,s=e?.total??0;return a&&s?Math.round(a/s*100):0},"selectionFileId",0,s,"taskFailureMessage",0,e=>e.detail?.trim()||"Task failed","uploadPolicyForProvider",0,function(e,a){let s=t[a||""];return s?{...e,extensions:s,accept:s.join(","),allow_any_extension:!1}:e},"validateFiles",0,function(e,t,r){let i=new Set(t.extensions.map(e=>e.toLowerCase())),n=e.map(e=>{let n=((e,t=[])=>{let a=e.toLowerCase(),s=Array.from(t,e=>e.toLowerCase()).filter(e=>a.endsWith(e));if(s.length>0)return s.reduce((e,t)=>t.length>e.length?t:e);let r=e.lastIndexOf(".");return r>=0?e.slice(r).toLowerCase():""})(e.name,i),o=null;return t.allow_any_extension||!(i.size>0)||i.has(n)?e.size>t.max_file_size_bytes&&(o=r("This file exceeds the maximum size of {{size}}.",{size:a(t.max_file_size_bytes)})):o=r("Unsupported file type"),{id:s(e),file:e,extension:n||r("No extension"),sizeLabel:a(e.size),valid:!o,error:o}});return{items:n,validFiles:n.filter(e=>e.valid).map(e=>e.file),invalidFiles:n.filter(e=>!e.valid),totalBytes:e.reduce((e,t)=>e+t.size,0)}}])},373375,e=>{"use strict";let t=(0,e.i(475254).default)("chevron-left",[["path",{d:"m15 18-6-6 6-6",key:"1wnfg3"}]]);e.s(["ChevronLeft",0,t],373375)},115057,e=>{"use strict";let t=(0,e.i(475254).default)("arrow-up-right",[["path",{d:"M7 7h10v10",key:"1tivn9"}],["path",{d:"M7 17 17 7",key:"1vkiza"}]]);e.s(["ArrowUpRight",0,t],115057)},927619,e=>{"use strict";var t=e.i(271645),a=e.i(689458);let s={options:[],activeDefault:null,status:"loading"};function r(e,t){switch(t.type){case"refresh-started":return t.background?e:{...e,status:"loading"};case"refresh-succeeded":return{options:t.payload.options,activeDefault:t.payload.active,status:"ready"};case"refresh-failed":return e.options.length>0?{...e,status:"ready"}:{...e,status:"error"}}}e.s(["useLLMOptions",0,function(e=a.listLLMOptions){let[i,n]=(0,t.useReducer)(r,s),o=(0,t.useRef)(0),[l]=(0,t.useState)(()=>{let t;return t=null,(...a)=>{if(t)return t;let s=e(...a);t=s;let r=()=>{t===s&&(t=null)};return s.then(r,r),s}}),c=(0,t.useRef)(!0);(0,t.useEffect)(()=>(c.current=!0,()=>{c.current=!1}),[]);let d=(0,t.useCallback)(async e=>{let t=++o.current;n({type:"refresh-started",background:e?.background??!1});try{let a=await l({force:e?.force});if(!c.current||t!==o.current)return;n({type:"refresh-succeeded",payload:a})}catch{if(!c.current||t!==o.current)return;n({type:"refresh-failed"})}},[l]);return(0,t.useEffect)(()=>{d()},[d]),{options:i.options,activeDefault:i.activeDefault,loading:"loading"===i.status,error:"error"===i.status,refresh:d}}],927619)},640524,e=>{"use strict";let t=(0,e.i(475254).default)("workflow",[["rect",{width:"8",height:"8",x:"3",y:"3",rx:"2",key:"by2w9f"}],["path",{d:"M7 11v4a2 2 0 0 0 2 2h4",key:"xkn7yn"}],["rect",{width:"8",height:"8",x:"13",y:"13",rx:"2",key:"1cgmvn"}]]);e.s(["Workflow",0,t],640524)},837647,e=>{"use strict";let t=(0,e.i(475254).default)("undo-2",[["path",{d:"M9 14 4 9l5-5",key:"102s5s"}],["path",{d:"M4 9h10.5a5.5 5.5 0 0 1 5.5 5.5a5.5 5.5 0 0 1-5.5 5.5H11",key:"f3b9sd"}]]);e.s(["Undo2",0,t],837647)},347919,448876,e=>{"use strict";var t=e.i(475254);let a=(0,t.default)("highlighter",[["path",{d:"m9 11-6 6v3h9l3-3",key:"1a3l36"}],["path",{d:"m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4",key:"14a9rk"}]]);e.s(["Highlighter",0,a],347919);let s=(0,t.default)("list-ordered",[["path",{d:"M11 5h10",key:"1cz7ny"}],["path",{d:"M11 12h10",key:"1438ji"}],["path",{d:"M11 19h10",key:"11t30w"}],["path",{d:"M4 4h1v5",key:"10yrso"}],["path",{d:"M4 9h2",key:"r1h2o0"}],["path",{d:"M6.5 20H3.4c0-1 2.6-1.925 2.6-3.5a1.5 1.5 0 0 0-2.6-1.02",key:"xtkcd5"}]]);e.s(["ListOrdered",0,s],448876)},370956,e=>{"use strict";let t=(0,e.i(475254).default)("list",[["path",{d:"M3 5h.01",key:"18ugdj"}],["path",{d:"M3 12h.01",key:"nlz23k"}],["path",{d:"M3 19h.01",key:"noohij"}],["path",{d:"M8 5h13",key:"1pao27"}],["path",{d:"M8 12h13",key:"1za7za"}],["path",{d:"M8 19h13",key:"m83p4d"}]]);e.s(["List",0,t],370956)},564123,172136,e=>{"use strict";var t=e.i(932844);let a="/api";async function s(e){if(!e.ok){let t=await e.text().catch(()=>"");throw Error(`Request failed (${e.status}): ${t||e.statusText}`)}return e.json()}async function r(){let e=await (0,t.apiFetch)((0,t.apiUrl)(`${a}/documents`),{cache:"no-store"}),r=await s(e);return Array.isArray(r?.documents)?r.documents:[]}async function i(e){return s(await (0,t.apiFetch)((0,t.apiUrl)(`${a}/documents`),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e?.title??null,content:e?.content??""})}))}async function n(e){return s(await (0,t.apiFetch)((0,t.apiUrl)(`${a}/documents/${encodeURIComponent(e)}`),{cache:"no-store"}))}async function o(e,r){return s(await (0,t.apiFetch)((0,t.apiUrl)(`${a}/documents/${encodeURIComponent(e)}`),{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:r.title??null,content:r.content??null})}))}async function l(e){let r=await (0,t.apiFetch)((0,t.apiUrl)(`${a}/documents/${encodeURIComponent(e)}`),{method:"DELETE"}),i=await s(r);return!!i?.deleted}async function c(e){let r=new FormData;return r.append("file",e),s(await (0,t.apiFetch)((0,t.apiUrl)(`${a}/documents/import/docx`),{method:"POST",body:r}))}async function d(e){let s=await (0,t.apiFetch)((0,t.apiUrl)(`${a}/documents/export/docx`),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({title:e.title??"",content:e.content??""})});if(!s.ok){let e=await s.text().catch(()=>"");throw Error(`Request failed (${s.status}): ${e||s.statusText}`)}return s.blob()}e.s(["createCoWriterDocument",0,i,"deleteCoWriterDocument",0,l,"exportCoWriterDocx",0,d,"getCoWriterDocument",0,n,"importCoWriterDocx",0,c,"listCoWriterDocuments",0,r,"updateCoWriterDocument",0,o],564123),e.s(["notifyCoWriterChanged",0,function(){let e=window;e&&e.dispatchEvent(new Event("co-writer:changed"))}],172136)},421872,e=>{"use strict";let t=`# Ascent Class 공동 작성

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
`;e.s(["CO_WRITER_SAMPLE_TEMPLATE",0,t])},601742,e=>{e.v(t=>Promise.all(["static/chunks/0vleuzt2_3paq.js","static/chunks/0iw_rwau1u6v3.js","static/chunks/08fllmhhzkvll.js","static/chunks/0j2p~4zzu-g4..js"].map(t=>e.l(t))).then(()=>t(468366)))},610089,e=>{e.v(t=>Promise.all(["static/chunks/0t-zb9mu1y~tk.js","static/chunks/0e0brvx92g7j0.js"].map(t=>e.l(t))).then(()=>t(459868)))}]);
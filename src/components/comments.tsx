'use client'
import Giscus from "@giscus/react";

export default function Comments() {
  return (
    <div className="my-10">
      <Giscus
        repo="mitrasurya7/newportofolio"
        repoId="R_kgDOOv2pDg"
        category="Q&A"
        categoryId="DIC_kwDOOv2pDs4Cqju4"
        mapping="pathname"
        reactionsEnabled="1"
        emitMetadata="0"
        inputPosition="bottom"
        theme="transparent_dark"
        lang="en"
        loading="lazy"
      />
    </div>
  );
}

'use client';

import React from 'react';
import { useParams } from 'next/navigation';

export default function AdvisorDetail() {
  const { id } = useParams();

  const advisors = [
    {
      id: 1,
      name: 'Dr. Nazmun N. Ratna',
      title: 'Associate Professor, Lincoln University',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735313976/Nazmunratnacloud_bzwbmn.png',
      description: `Dr. Nazmun N. Ratna is an Associate Professor in Economics of Development at the Department of Global Value Chain and Trade, Faculty of Agribusiness and Commerce, Lincoln University. Nazmun is a development economist by training and joined Lincoln University in 2007 after completing her Ph.D. degree from the Crawford School of Public Policy, The Australian National University. She has dedicated much of her recent time to researching the institutions-economic development-gender nexus in South Asia (Bangladesh, Nepal, and India), and supervised students’ projects in Southeast Asia (Vietnam), North America (Costa Rica), and Africa (Nigeria, Ghana, and Malawi). Until recently, Nazmun worked as the Associate Dean, Research for the faculty, and represented the faculty at the University-wide Research Committee developing guidance for the strategic development, governance, and quality assurance matters related to the University’s research environment.

Nazmun’s research specializes in empirical development economics, focusing on the economics of social capital and diversity, conflict, food security-gender nexus, and sustainable economic development. Her applied econometrics papers have been published in high-ranked journals, among others, from disciplinary journals (Australian Journal of Resource and Agricultural Economics, European Review of Agricultural Economics, Agricultural and Resource Economics Review, and Food Policy) to applied economics/ policy journals (Economic Papers, Development in Practice, and Asia and the Pacific Policy Studies). She has worked in multidisciplinary research teams for externally funded projects and has been publishing in leading interdisciplinary journals like Agricultural Systems, World Development, Ecological Modelling, and Journal of Sustainable Tourism. Currently, she is leading a paper on Women Empowerment in Migration Index (WEMI), for a project funded by FCDO, on safe migration of domestic and readymade garments workers from Bangladesh and Nepal to the Middle East.

In her teaching, she wishes to provide students with learning experiences which encourage them to explore more, enable them to ask the ‘right’ questions, and guide them to think about the greater goal of their contribution to society. She has been teaching for more than 25 years, in four different universities in three countries. For a large part of this journey, she finds herself as a learner, traversing across the different educational systems, social norms, and students’ approaches to learning. Her teaching philosophy hence has been an evolving one.`,
    },
    {
      id: 2,
      name: 'Anirban Bhowmik',
      title: 'Development Expert',
      imgSrc: 'https://res.cloudinary.com/db5yniogx/image/upload/v1735314046/Anirbanbhowmikcloud_qvfqjx.png',
      description: `For more than a decade, Anirban has been working on international development. He has worked on private sector development, inclusive economic participation of local people in various countries in Asia, Africa, and Eastern Europe. He has worked at the UK government’s international development agency as a consultant, including in Bangladesh and other countries in South Asia. He has led as a national representative in the International Development Agency. Currently, he is working as a regional manager for East Africa in an international development agency. His commitment to establishing gender equality in technology and emphasizing the importance of social entrepreneurship is unparalleled – keeping this idea in mind, he has joined as an advisor with Shantibari.`,
    },
  ];

  const advisor = advisors.find((advisor) => advisor.id === parseInt(id));

  if (!advisor) {
    return <p className="text-center text-red-500">Advisor not found.</p>;
  }

  return (
    <div className="bg-gray-100 p-12">
      <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
        <img
          className="h-60 w-60 object-cover rounded-full mx-auto"
          src={advisor.imgSrc}
          alt={advisor.name}
        />
        <h2 className="text-3xl font-bold text-center mt-6 text-gray-900">{advisor.name}</h2>
        <p className="text-center text-gray-600">{advisor.title}</p>
        <p className="mt-4 text-lg text-gray-700 whitespace-pre-line">{advisor.description}</p>
      </div>
    </div>
  );
}

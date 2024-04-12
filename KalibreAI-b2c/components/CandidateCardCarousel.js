import { Typography, Box, Card, Stack, Button } from "@mui/material";
import React from "react";

function CandidateCardCarousel(props) {
  const {companyCategory} = props;
  // const data = [
  //   {
  //     company_type: "Product companies",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_46_i3aixd.svg",
  //         company_name: "Apple Inc.",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_47_fbigjz.svg",
  //         company_name: "Microsoft",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_48_mofc6n.svg",
  //         company_name: "Google",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_49_q2vsyx.svg",
  //         company_name: "Samsung",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_50_txvzbc.svg",
  //         company_name: "Amazon",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },

  //   {
  //     company_type: "Service Companies",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_51_kpz37h.svg",
  //         company_name: "Accenture",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_ffdufl.svg",
  //         company_name: "IBM",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image-1_kua7qz.svg",
  //         company_name: "Infosys",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_54_dhaalr.svg",
  //         company_name: "TCS",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_55_fdxphu.svg",
  //         company_name: "Congnizant",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },

  //   {
  //     company_type: "Cybersecurity",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_46_i3aixd.svg",
  //         company_name: "Apple Inc.",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_47_fbigjz.svg",
  //         company_name: "Microsoft",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_48_mofc6n.svg",
  //         company_name: "Google",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_49_q2vsyx.svg",
  //         company_name: "Samsung",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_50_txvzbc.svg",
  //         company_name: "Amazon",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },

  //   {
  //     company_type: "Internet of Things (IoT)",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_51_kpz37h.svg",
  //         company_name: "Accenture",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_ffdufl.svg",
  //         company_name: "IBM",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image-1_kua7qz.svg",
  //         company_name: "Infosys",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_54_dhaalr.svg",
  //         company_name: "TCS",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_55_fdxphu.svg",
  //         company_name: "Congnizant",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },

  //   {
  //     company_type: "FinTech",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_46_i3aixd.svg",
  //         company_name: "Apple Inc.",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_47_fbigjz.svg",
  //         company_name: "Microsoft",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_48_mofc6n.svg",
  //         company_name: "Google",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_49_q2vsyx.svg",
  //         company_name: "Samsung",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_50_txvzbc.svg",
  //         company_name: "Amazon",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },
  //   {
  //     company_type: "Startup companies ",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_51_kpz37h.svg",
  //         company_name: "Accenture",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_ffdufl.svg",
  //         company_name: "IBM",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image-1_kua7qz.svg",
  //         company_name: "Infosys",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_54_dhaalr.svg",
  //         company_name: "TCS",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_55_fdxphu.svg",
  //         company_name: "Congnizant",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },

  //   {
  //     company_type: "Cloud Computing",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_46_i3aixd.svg",
  //         company_name: "Apple Inc.",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_47_fbigjz.svg",
  //         company_name: "Microsoft",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_48_mofc6n.svg",
  //         company_name: "Google",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_49_q2vsyx.svg",
  //         company_name: "Samsung",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_50_txvzbc.svg",
  //         company_name: "Amazon",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },
  //   {
  //     company_type: "Service Companies",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_51_kpz37h.svg",
  //         company_name: "Accenture",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_ffdufl.svg",
  //         company_name: "IBM",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image-1_kua7qz.svg",
  //         company_name: "Infosys",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_54_dhaalr.svg",
  //         company_name: "TCS",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_55_fdxphu.svg",
  //         company_name: "Congnizant",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },
  //   {
  //     company_type: "Product companies",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_46_i3aixd.svg",
  //         company_name: "Apple Inc.",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_47_fbigjz.svg",
  //         company_name: "Microsoft",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_48_mofc6n.svg",
  //         company_name: "Google",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_49_q2vsyx.svg",
  //         company_name: "Samsung",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_50_txvzbc.svg",
  //         company_name: "Amazon",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },
  //   {
  //     company_type: "Service Companies",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_51_kpz37h.svg",
  //         company_name: "Accenture",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_ffdufl.svg",
  //         company_name: "IBM",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image-1_kua7qz.svg",
  //         company_name: "Infosys",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_54_dhaalr.svg",
  //         company_name: "TCS",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_55_fdxphu.svg",
  //         company_name: "Congnizant",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },
  //   {
  //     company_type: "Product companies",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_46_i3aixd.svg",
  //         company_name: "Apple Inc.",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_47_fbigjz.svg",
  //         company_name: "Microsoft",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_48_mofc6n.svg",
  //         company_name: "Google",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_49_q2vsyx.svg",
  //         company_name: "Samsung",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_50_txvzbc.svg",
  //         company_name: "Amazon",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },
  //   {
  //     company_type: "Service Companies",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_51_kpz37h.svg",
  //         company_name: "Accenture",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_ffdufl.svg",
  //         company_name: "IBM",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image-1_kua7qz.svg",
  //         company_name: "Infosys",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_54_dhaalr.svg",
  //         company_name: "TCS",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_55_fdxphu.svg",
  //         company_name: "Congnizant",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },
  //   {
  //     company_type: "Product companies",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_46_i3aixd.svg",
  //         company_name: "Apple Inc.",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_47_fbigjz.svg",
  //         company_name: "Microsoft",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_48_mofc6n.svg",
  //         company_name: "Google",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_49_q2vsyx.svg",
  //         company_name: "Samsung",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_50_txvzbc.svg",
  //         company_name: "Amazon",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },

  //   {
  //     company_type: "Service Companies",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_51_kpz37h.svg",
  //         company_name: "Accenture",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_ffdufl.svg",
  //         company_name: "IBM",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image-1_kua7qz.svg",
  //         company_name: "Infosys",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_54_dhaalr.svg",
  //         company_name: "TCS",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_55_fdxphu.svg",
  //         company_name: "Congnizant",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },

  //   {
  //     company_type: "Cybersecurity",
  //     companies: [
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_46_i3aixd.svg",
  //         company_name: "Apple Inc.",
  //         company_category: "Private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_47_fbigjz.svg",
  //         company_name: "Microsoft",
  //         company_category: "private",
  //         comp_value: "Valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687736/b2c%20images/CandidatePage/logos/image_48_mofc6n.svg",
  //         company_name: "Google",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_49_q2vsyx.svg",
  //         company_name: "Samsung",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //       {
  //         image:
  //           "https://res.cloudinary.com/kalibre-ai/image/upload/v1701687739/b2c%20images/CandidatePage/logos/image_50_txvzbc.svg",
  //         company_name: "Amazon",
  //         company_category: "private",
  //         comp_value: "valuation $5.0B",
  //         jobs_count: "50",
  //       },
  //     ],
  //   },
  // ];

  console.log("data.company_type", companyCategory[0]);

  return (
    <div >
      <Stack rowGap={5} sx={{ marginBottom: "90px" }}>
        <Box
          sx={{
            textAlign: "center",
            margin: { xs: "0% 3%", sm: "0% 6%", md: "0% 22%" },
          }}
        >
          <Typography className="candidate-sub-heading">
            Uncover your dream companies, all in one enchanted place.
          </Typography>
        </Box>
        <Box
          sx={{
            textAlign: "center",
            margin: { xs: "0% 7%", sm: "0% 11%", md: "0% 28%" },
          }}
        >
          <Typography className="candidates-section-seven-sub-heading">
            Discover top companies in one hub, where opportunities and potential
            align, ensuring seamless interviews for an effortless career
            journey.
          </Typography>
        </Box>
      </Stack>

      <Box
        className="carousel_container"
        sx={{ marginBottom: { xs: "60px", sm: "120px" },background:"linear-gradient(181deg, #FFF 5.3%, #F5FCFF 50.37%, #FFF 95.89%)" }}
      >
        <Box className="slide_container_left">
          {companyCategory.map((item) => {
            return (
              <Card
                sx={{
                  border: "2px solid #B6B8FF",
                  p: {
                    xs: "25px 25px 10px 25px",
                    sm: "30px 30px 15px 30px",
                    md: "40px 40px 25px 40px",
                  },
                  borderRadius: "10px",
                  width: { xs: "280px", sm: "350px" },
                }}
              >
                <Box mb={2}>
                  <Typography variant="client_tech_hiring">
                    {" "}
                    {item.company_type}
                  </Typography>
                </Box>
                {item?.companies.map((data) => {
                  return (
                    <Card
                      sx={{
                        p: { xs: "12px", sm: "13px", md: "15px" },
                        border: "1px solid #E7E4F5",
                        mb: 2,
                        boxShadow: "none",
                      }}
                    >
                      <Stack
                        direction={"row"}
                        justifyContent={"space-between"}
                        alignItems={"center"}
                      >
                        <Stack
                          direction={"row"}
                          alignItems={"center"}
                          spacing={2}
                          width="100%"
                        >
                          <Box sx={{width:"34px"}}>
                          <img className="image-responsive" src={data.employer__logo} alt="" loading="lazy" />
                          </Box>
                          <Stack>
                            <Typography className="card-carousel-title">
                              {" "}
                              {data.employer__name}
                            </Typography>
                            {/* <Typography className="card-carousel-sub-title">
                              {data.employer__company_type}{" "}
                              • 
                              {" "}
                              {data.comp_value}
                            </Typography> */}
                          </Stack>
                        </Stack>
                        <Box display={"flex"} justifyContent={"flex-end"}>
                          <Typography color="#00B404">
                            {data.jobs_count}+
                          </Typography>
                        </Box>
                      </Stack>
                    </Card>
                  );
                })}
              </Card>
            );
          })}
        </Box>
      </Box>
      <Box sx={{ textAlign: "center" }}>
        <Button
          variant="contained"
          size="large"
          sx={{
            background: "black",
            width: { xs: "84%", sm: "18%", md: "9%" },
          }}
        >
          Explore more
        </Button>
      </Box>
    </div>
  );
}

export default CandidateCardCarousel;

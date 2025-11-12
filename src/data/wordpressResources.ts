import plugin1_img from "@/assets/images/wordpress-resources/plugins/plugin-1.png";
import plugin2_img from "@/assets/images/wordpress-resources/plugins/plugin-2.png";
import plugin3_img from "@/assets/images/wordpress-resources/plugins/plugin-3.png";
import plugin4_img from "@/assets/images/wordpress-resources/plugins/plugin-4.png";

export const wordpressResources = {
  plugins: [
    {
      title: "Nayapay Payment API",
      website: "Blog",
      image: plugin1_img,
    },
    {
      title: "React WP",
      website: "Blog",
      image: plugin2_img,
    },
    {
      title: "Wordpress to Webflow",
      website: "Blog",
      image: plugin3_img,
    },
    {
      title: "TopNotch SEO",
      website: "Blog",
      image: plugin4_img,
    },
  ],

  themes: [
    {
      title: "Modern Blog Theme",
      website: "Theme Page",
      image: plugin1_img,
    },
    {
      title: "Creative Portfolio Theme",
      website: "Theme Page",
      image: plugin2_img,
    },
  ],

  templates: [
    {
      title: "Landing Page Template",
      website: "Template Page",
      image: plugin3_img,
    },
    {
      title: "E-commerce Template",
      website: "Template Page",
      image: plugin4_img,
    },
  ],

  uiKits: [
    {
      title: "Admin Dashboard UI Kit",
      website: "UI Kit Page",
      image: plugin1_img,
    },
    {
      title: "Blog UI Kit",
      website: "UI Kit Page",
      image: plugin2_img,
    },
  ],
};

export const wordpressTabList = [
  {
    title: "Plugins",
    id: 0,
    resource: wordpressResources.plugins,
  },
  {
    title: "Themes",
    id: 1,
    resource: wordpressResources.themes,
  },
  {
    title: "Templates",
    id: 2,
    resource: wordpressResources.templates,
  },
  {
    title: "UI Kits",
    id: 3,
    resource: wordpressResources.uiKits,
  },
];

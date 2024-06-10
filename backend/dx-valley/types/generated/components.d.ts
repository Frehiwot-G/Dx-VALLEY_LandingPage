import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentAboutDescription extends Schema.Component {
  collectionName: 'components_component_about_descriptions';
  info: {
    displayName: 'About_description';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface ComponentAboutPage2 extends Schema.Component {
  collectionName: 'components_component_about_page_2s';
  info: {
    displayName: 'about_page_2';
  };
  attributes: {
    title_1: Attribute.String;
    title_2: Attribute.String;
    description: Attribute.String;
  };
}

export interface ComponentCategory extends Schema.Component {
  collectionName: 'components_component_categories';
  info: {
    displayName: 'category';
  };
  attributes: {
    category: Attribute.String;
  };
}

export interface ComponentDescription extends Schema.Component {
  collectionName: 'components_component_descriptions';
  info: {
    displayName: 'Description';
    description: '';
  };
  attributes: {
    description: Attribute.Text;
  };
}

export interface ComponentHomePageTopic extends Schema.Component {
  collectionName: 'components_component_home_page_topics';
  info: {
    displayName: 'HomePage_topic';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    link: Attribute.Component<'component.link'>;
  };
}

export interface ComponentHowWeWork extends Schema.Component {
  collectionName: 'components_component_how_we_works';
  info: {
    displayName: 'how_we_work';
  };
  attributes: {
    description: Attribute.Component<'component.description', true>;
    title: Attribute.String;
    image: Attribute.Media<'images'>;
  };
}

export interface ComponentLeaders extends Schema.Component {
  collectionName: 'components_component_leaders';
  info: {
    displayName: 'Leaders';
  };
  attributes: {
    name: Attribute.String;
    position: Attribute.Text;
    proverb: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface ComponentLink extends Schema.Component {
  collectionName: 'components_component_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    url: Attribute.String;
    text: Attribute.String;
    is_External: Attribute.Boolean & Attribute.DefaultTo<false>;
  };
}

export interface ComponentProjectDescription extends Schema.Component {
  collectionName: 'components_component_project_descriptions';
  info: {
    displayName: 'Project_description';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
    image: Attribute.Media<'images'>;
    link: Attribute.Component<'component.link'>;
    category: Attribute.String;
  };
}

export interface LayoutAbout extends Schema.Component {
  collectionName: 'components_component_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    image: Attribute.Media<'images', true>;
    about_us: Attribute.Component<'component.about-description'>;
    about_page_2: Attribute.Component<'component.about-page-2', true>;
  };
}

export interface LayoutCategory extends Schema.Component {
  collectionName: 'components_layout_categories';
  info: {
    displayName: 'Category';
    description: '';
  };
  attributes: {
    category: Attribute.Component<'component.category', true>;
  };
}

export interface LayoutContactUs extends Schema.Component {
  collectionName: 'components_layout_contactuses';
  info: {
    displayName: 'ContactUs';
  };
  attributes: {
    email: Attribute.String;
    phone: Attribute.String;
    Address: Attribute.Text;
  };
}

export interface LayoutEvent extends Schema.Component {
  collectionName: 'components_layout_events';
  info: {
    displayName: 'Event';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
    description: '';
  };
  attributes: {
    pages: Attribute.Component<'component.link', true>;
    text: Attribute.Text;
    email: Attribute.String;
    phone_1: Attribute.String;
    socials: Attribute.Component<'component.link', true>;
    image: Attribute.Media<'images'>;
    phone_2: Attribute.String;
  };
}

export interface LayoutHeading extends Schema.Component {
  collectionName: 'components_layout_headings';
  info: {
    displayName: 'Heading';
  };
  attributes: {
    pages: Attribute.Component<'component.link', true>;
  };
}

export interface LayoutHomePage extends Schema.Component {
  collectionName: 'components_layout_home_pages';
  info: {
    displayName: 'HomePage';
    description: '';
  };
  attributes: {
    email: Attribute.String;
    phone: Attribute.String;
    Address: Attribute.Text;
    image: Attribute.Media<'images'>;
    topic: Attribute.Component<'component.home-page-topic', true>;
  };
}

export interface LayoutLeaders extends Schema.Component {
  collectionName: 'components_layout_leaders';
  info: {
    displayName: 'Leaders';
  };
  attributes: {
    leaders: Attribute.Component<'component.leaders', true>;
  };
}

export interface LayoutProjects extends Schema.Component {
  collectionName: 'components_layout_projects';
  info: {
    displayName: 'Projects';
    description: '';
  };
  attributes: {
    section_title: Attribute.String;
    projects: Attribute.Component<'component.project-description', true>;
  };
}

export interface LayoutWork extends Schema.Component {
  collectionName: 'components_layout_works';
  info: {
    displayName: 'work';
    description: '';
  };
  attributes: {
    work: Attribute.Component<'component.how-we-work', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.about-description': ComponentAboutDescription;
      'component.about-page-2': ComponentAboutPage2;
      'component.category': ComponentCategory;
      'component.description': ComponentDescription;
      'component.home-page-topic': ComponentHomePageTopic;
      'component.how-we-work': ComponentHowWeWork;
      'component.leaders': ComponentLeaders;
      'component.link': ComponentLink;
      'component.project-description': ComponentProjectDescription;
      'layout.about': LayoutAbout;
      'layout.category': LayoutCategory;
      'layout.contact-us': LayoutContactUs;
      'layout.event': LayoutEvent;
      'layout.footer': LayoutFooter;
      'layout.heading': LayoutHeading;
      'layout.home-page': LayoutHomePage;
      'layout.leaders': LayoutLeaders;
      'layout.projects': LayoutProjects;
      'layout.work': LayoutWork;
    }
  }
}

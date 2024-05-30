import type { Schema, Attribute } from '@strapi/strapi';

export interface ComponentDescription extends Schema.Component {
  collectionName: 'components_component_descriptions';
  info: {
    displayName: 'Description';
    description: '';
  };
  attributes: {
    title: Attribute.String;
    description: Attribute.Text;
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
  };
  attributes: {
    image: Attribute.Media<'images'>;
    heading: Attribute.String;
    subheading: Attribute.Text;
  };
}

export interface LayoutAbout extends Schema.Component {
  collectionName: 'components_component_abouts';
  info: {
    displayName: 'About';
    description: '';
  };
  attributes: {
    about_us: Attribute.Component<'component.description'>;
  };
}

export interface LayoutFooter extends Schema.Component {
  collectionName: 'components_layout_footers';
  info: {
    displayName: 'footer';
  };
  attributes: {
    pages: Attribute.Component<'component.link', true>;
    text: Attribute.Text;
    email: Attribute.String;
    phone: Attribute.String;
    socials: Attribute.Component<'component.link', true>;
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
  };
  attributes: {
    email: Attribute.String;
    phone: Attribute.String;
    Address: Attribute.Text;
    image: Attribute.Media<'images'>;
  };
}

export interface LayoutProjects extends Schema.Component {
  collectionName: 'components_component_projects';
  info: {
    displayName: 'Projects';
    description: '';
  };
  attributes: {
    project: Attribute.Component<'component.project-description', true>;
  };
}

export interface LayoutWork extends Schema.Component {
  collectionName: 'components_layout_works';
  info: {
    displayName: 'work';
    description: '';
  };
  attributes: {
    how_we_work: Attribute.Component<'component.description', true>;
  };
}

declare module '@strapi/types' {
  export module Shared {
    export interface Components {
      'component.description': ComponentDescription;
      'component.link': ComponentLink;
      'component.project-description': ComponentProjectDescription;
      'layout.about': LayoutAbout;
      'layout.footer': LayoutFooter;
      'layout.heading': LayoutHeading;
      'layout.home-page': LayoutHomePage;
      'layout.projects': LayoutProjects;
      'layout.work': LayoutWork;
    }
  }
}

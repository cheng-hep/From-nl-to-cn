(() => {
  const CONFIG = {
    REACT_APP_PIWIK_URL: '//piwik.web.cern.ch',
    REACT_APP_PIWIK_SITE_ID: 5664,
    REACT_APP_SENTRY_DSN:
      'https://429f8591d74d40d5865b123c90973410@sentry.inspirehep.net/4',
    FIGURES_FEATURE_FLAG: true,
    DISPLAY_GUIDE_ON_START: false,
    ASSIGN_CONFERENCE_UI_FEATURE_FLAG: true,
    BANNERS: [
      {
        id: 'welcome-banner-april30',
        message:
          '<strong>Welcome to the new INSPIRE! <a href="https://blog.inspirehep.net/2020/03/the-next-inspire-generation-is-here" target="_blank">Learn more</a>.</strong>',
        action: {
          name: 'Take the survey',
          href: 'https://forms.gle/ZQi31GvXXHcsgXgM6'
        }
      }
      /*{
        id: 'maintenance',
        message:
          'Due to planned maintenance, INSPIRE will be unavailable today between 12pm and 12:30pm CET.',
        closable: false,
        center: true,
        type: 'warning'
      },
      {
        id: 'remapping-collection-26-11-2020',
        message:
          'We are improving Authors collection and search will be unavailable until 14:00 CET. Thank you for your patience.',
        closable: false,
        center: true,
        pathnameRegexp: /^\/authors/,
        type: 'warning'
      },
      {
        id: 'incident',
        message:
          'We are currently experiencing technical difficulties. Thank you for your patience while this is being fixed.',
        closable: false,
        center: true,
        type: 'warning'
      }*/
    ]
  };

  Object.defineProperty(window, 'CONFIG', { value: Object.freeze(CONFIG) });
})();

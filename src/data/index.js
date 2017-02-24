const events = [
  {
    date: '2017-03-03',
    title: 'An Introduction to PowerShell',
    link: 'an_introduction_to_powershell',
    location: 'accelerate_places_nottingham',
    summary: `
This workshop will introduce PowerShell to IT professionals and will cover the basic information required to be able to start writing PowerShell Scripts, Functions and Modules using PowerShell ISE and VS Code.
    `,
    description: `
We will cover topics

* Introduction to the ISE and VS Code
* PowerShell Syntax
* Finding Commands, how to use them and how to explore objects
* Understanding Errors
* Writing modules, functions and scripts

Introduction to Testing with Pester
At the end of the workshop attendees can expect to feel comfortable with using PowerShell and capable of writing their own PowerShell code
    `,
    what_you_will_need: `
* Computer with OS Windows (10, 8.1, 7)
* Installed PowerShell 5 or above
* Windows 10 or 8.1: is available by default
* Windows 7: can be installed via link: [PowerShell](https://www.microsoft.com/en-us/download/details.aspx?id=50395)
* [Visual Studio Code](https://code.visualstudio.com/)
* [PowerShell extension for Visual Studio Code](https://blogs.msdn.microsoft.com/cdndevs/2015/12/11/visual-studio-code-powershell-extension/)
    `,
    speakers: [
      {
        name: 'Rob Sewell',
        avatar: 'https://nottsdevworkshop.github.io/img/Speakers/RobSewell.jpg',
        quote: 'To be or not to be',
        bio: `
Rob is a SQL Server DBA with a passion for Powershell, Azure, Automation, and SQL (PaaS geddit?). He is an officer for the PASS PowerShell Virtual Chapter and has spoken at and volunteered at many events. He is a member of the committee that organises SQL Saturday Exeter and also European PowerShell Conference. He is a proud supporter of the SQL and Powershell communities.

He relishes sharing and learning and can be found doing both via Twitter and his blog. He spends most of his time looking at a screen and loves to solve problems. He knows that looking at a screen so much is bad for him because his wife tells him so. Thus, you can find him on the cricket field in the summer and flying a drone in the winter. He has a fabulous beard.
        `,
        links: {
          facebook: 'sqldbawithabeard',
          twitter: 'sqldbawithbeard',
          web: 'https://sqldbawithabeard.com'
        }
      }
    ]
  }
];

const sponsors = [
  {
    name: 'Accelerate Places',
    logo: '/images/sponsors/accelerate-places.png',
    links: {
      web: 'http://rebelrecruitment.co.uk/',
      facebook: 'acceleratenttm',
      twitter: 'AccelerateNttm',
      instagram: 'accelerateplaces',
      linkedin: 'in/acceleratehub'
    }
  },
  {
    name: 'Rebel Recruitment',
    logo: '/images/sponsors/rebel.png',
    links: {
      web: 'http://rebelrecruitment.co.uk/',
      facebook: 'acceleratenttm',
      twitter: 'AccelerateNttm',
      instagram: 'accelerateplaces',
      linkedin: 'in/acceleratehub'
    }
  }
];

const locations = {

};

const links = {
  'email': {
    'url': 'mailto://{0}',
    'icon': 'envelope'
  },
  'web': {
    'url': '{0}',
    'icon': 'home'
  },
  'twitter': {
    'url': 'https://twitter.com/{0}',
    'icon': 'twitter-square'
  },
  'facebook': {
    'url': 'https://facebook.com/{0}',
    'icon': 'facebook-square'
  },
  'instagram': {
    'url': 'https://instagram.com/{0}',
    'icon': 'instagram'
  },
  'linkedin': {
    'url': 'https://linkedin.com/{0}',
    'icon': 'linkedin-square'
  }
};

export {
  events,
  links,
  locations,
  sponsors
}

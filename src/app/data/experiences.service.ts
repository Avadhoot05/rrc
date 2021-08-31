import { Injectable } from '@angular/core';
import { Experience } from '../models/experience.model';

@Injectable({ providedIn: 'root' })
export class ExperiencesService {
  experiences = [
    new Experience(
      'Software Engineer',
      'Zeus Systems Pvt Ltd',
      'June 2021 - present',
      [
        "Working with Web technologies!"
      ],
      [
        {title: "Company Website", link: "https://zeuslearning.com"}
      ]
    ),

    new Experience(
      'Android Develpment Team Lead',
      'Naaniz',
      'May - June 2020',
      [
        'Leading and training a team of 15 interns.',
        'Successfully shifted to MVVM Application Architecture.',
        'Successfully migrated navigation logic to Android Jetpack Navigation Component.',
      ],
      [{ title: 'Certificate', link: 'https://drive.google.com/file/d/1yagmXnV3pTYF_se5BKzQZ46r_SWDU_Gs/view?usp=sharing' }]
    ),

    new Experience(
        "Programming Head",
        "RGIT's Robotics Club",
        '2020-2021',
        [
            "Secured AIR 7 in Robocon 2021 Stage 1 with score 94/100.",
            "Leading a team of 12 programming & robotics enthusiasts.",
            "Ensuring technical superiority in the communication and control mechanism for DD Robocon 2021."
        ],
        [{title: "RRC Website", link: "https://rgitsroboticsclub.com/"},
        {title: "DD Robocon 2021", link: "http://www.ddrobocon.in/"}
        ]
    ),

    new Experience(
        "Marketing Head",
        "RGIT's Robotics Club",
        '2020-2021',
        [
            "Improving the digital Marketing for Club Events.",
            "Searching and interacting with Club Sponsors.",
            "Improving the reach of RGIT's Robotics Club aiming towards better recruitments."
        ],
        [
            {title: "RRC Website", link: "https://rgitsroboticsclub.com/"},            
            {title: "RRC Instagram handle", link: "https://www.instagram.com/roboticsclubrgit/"}
        ]
    ),

    new Experience(
      "Author",
      "IJRASET",
      'April 2021',
      [
        "Published technical paper on Dependency Injection in Android Development.",
        "Explained Dependency Injection concept.",
        "Explained the implementation with Google's Dagger-Hilt."
      ],
      [
        {title: "View Paper", link: "https://doi.org/10.22214/ijraset.2021.33608"}
      ]
    )

  ];
}

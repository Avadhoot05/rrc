import { Injectable } from "@angular/core";
import { Project } from "../models/project.model";

@Injectable({providedIn: "root"})
export class ProjectsService{
    projects: Project[] = [
        new Project("Attendance Organizer",
        "An intuitive attendance manager Android application for university students which gives insightful tips to 'organize' attendance.",
        {path: "../../assets/ao.png", desc: "Attendance Organizer logo"},
        [{path: "../../assets/java.webp", desc: "Java Programming Language"}],
        "https://play.google.com/store/apps/details?id=com.abhishekjagushte.attendanceorganizer&hl=en&gl=US"),

        new Project("Engage Chat Application",
        "A chat application built for Android employing the latest MVVM architechture and all the new Android Jetpack libraries.",
        {path: "../../assets/chat.png", desc: "Engage Chat Application Logo"},
        [{path: "../../assets/kotlin.webp", desc: "Kotlin Programming Language"},
        {path: "../../assets/firebase.png", desc: "Google Firebase"}],
        "https://github.com/abhishekjagushte/Engage"),

        new Project("Piction Photo Editor",
        "A lightweight python image editor application that allows most of the common image editing options with minimal complexity.",
        {path :"../../assets/taylor.jpg", desc:"Screenshot of Piction Photo Editor"},
        [{path: "../../assets/python.png", desc: "Python Programming Language"},
        {path: "../../assets/opencv.png", desc: "OpenCV Image Processing on Python"}],
        "https://github.com/abhishekjagushte/Piction-Photo-Editor"),

        new Project("Website for RGIT's Robotics Club",
        "The official website of RGIT's Robotics Club. This website is used to notify & register students for the events conducted by RRC.",
        {path: "../../assets/robotics.png", desc: "RGIT's Robotics Club Logo"},
        [{path: "../../assets/wordpress.webp", desc: "Wordpress"}],
        "https://www.rgitsroboticsclub.com/")
    ]

}

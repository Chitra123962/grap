import { Injectable } from '@angular/core';
import { CodeNode } from 'source-list-map';
import { analyzeAndValidateNgModules } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class ActionService {
  public gamesArray = [{
    "title": "Focus",
   " bg_color": "#F44336",
    "bg_image": "ic_focus_bg",
    "skill_id": 1,
   " games_list": [21, 22, 23, 24],
   " theme": "Theme_Focus",
   " theme_noaction": "Theme_Focus_NoAction"
  },
  {
    "title": "English",
    "bg_color": "#FF9800",
    "bg_image": "ic_language_bg",
    "skill_id": 2,
    "games_list": [1, 2, 3, 4, 5],
    "theme": "Theme_Language",
    "theme_noaction": "Theme_Language_NoAction"
  },
  {
    "title": "Visual",
    "bg_color": "#E91E63",
    "bg_image": "ic_visual_bg",
    "skill_id": 3,
    "games_list": [16, 17, 18],
    "theme": "Theme_Visual",
    "theme_noaction": "Theme_Visual_NoAction"
  },
  {
    "title": "Problem Solving",
    "bg_color": "#8BC34A",
    "bg_image": "ic_problem_solving_bg",
    "skill_id": 5,
    "games_list": [6, 7, 8, 9],
    "theme": "Theme_ProblemSolving",
    "theme_noaction": "Theme_ProblemSolving_NoAction"
  },
  {
    "title": "Reasoning",
    "bg_color": "#448AFF",
    "bg_image": "ic_logical_reasoning_bg",
    "skill_id": 4,
    "games_list": [33, 31, 32],
    "theme": "Theme_LogicalReasoning",
    "theme_noaction": "Theme_LogicalReasoning_NoAction"
  },
  {
    "title": "Memory",
    "bg_color": "#3F51B5",
    "bg_image": "ic_memory_bg",
    "skill_id": 7,
    "games_list": [13, 11, 14, 15],
    "theme": "Theme_Memory",
    "theme_noaction": "Theme_Memory_NoAction"
  }
  ];

constructor() { }
  // private actionservice:ActionService
  gamesTable(){
    return 'create a service';
    }
  }

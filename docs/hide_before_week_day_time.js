Date.prototype.getWeek = function () {
   var onejan = new Date(this.getFullYear(), 0, 1);
   offset = 0;
   //offset = -1;  // script fails for 2021 - hack to make it work
   return Math.ceil((((new Date(this.getFullYear(), this.getMonth(), this.getDate()) - onejan) / 86400000) + onejan.getDay() + 1) / 7) + offset;
};

hideBeforeWeekDayTime = function(document, week, day, time) {
   var date = new Date();
   var dayInt = {'mon': 1, 'tue':2, 'wed':3, 'thu':4, 'fri':5, 'sat':6, 'sun':0};
   var year = 2025;
   //console.log(date.getFullYear() + " " + year + ", " + date.getWeek() + " " + week + ", " + date.getDay() + " " + dayInt[day] + " " + date.getHours())
   if (hideSolutions &&
       (date.getFullYear() < year ||
           (date.getFullYear() === year &&
               (date.getWeek() < week ||
                   (date.getWeek() === week && (date.getDay() < dayInt[day] ||
                                                (date.getDay() === dayInt[day] && date.getHours() < time))))))) {
      console.log("Hiding solutions")
      var solution_sections = document.getElementsByClassName("solution");
      for (var i = solution_sections.length - 1; i >= 0; i--) {
         var element = solution_sections[i];
         element.parentNode.removeChild(element);
      }
   }
}

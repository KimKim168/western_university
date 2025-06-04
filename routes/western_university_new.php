<?php

use App\Http\Controllers\MessageController;
use App\Models\Banner;
use App\Models\Page;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;


Route::get('/test_component', function () {
    return Inertia::render('test/TestComponent');
});
Route::post('/submit-message', [MessageController::class, 'store']);

Route::get('/', function () {
    $banners = Banner::where('position_code', 'HOME_SLIDE_TOP')->orderBy('order_index')->where('status', 'active')->get();
    $middleSlide = Banner::where('position_code', 'HOME_MIDDLE_SLIDE')->orderBy('order_index')->where('status', 'active')->get();
    $slideBottom = Banner::where('position_code', 'HOM_SLIDE_BOTTOM')->orderBy('order_index')->where('status', 'active')->get();
    $WelcomeToWestern = Page::where('code', 'WELCOME_TO_WESTERN')->with('images')->first();
    $Statistics = Page::where('code', 'STATISTICS')->with(['children.images'])->get();
    // return $banners;
    return Inertia::render('westernUniversityNew/Home', [
        'banners' => $banners,
        'middleSlide' => $middleSlide,
        'slideBottom' => $slideBottom,
        'WelcomeToWestern' => $WelcomeToWestern,
        'Statistics' => $Statistics,
    ]);
});

Route::get('/contact', function () {
     $contact = Page::where('code', 'CONTACT')->orderBy('order_index')->where('status', 'active')->first();

     $careers = Page::where('code', 'CAREERS')
        ->with([
            'children' => fn($sub_query) => $sub_query->orderBy('order_index')->with('images'),
        ]) 
        ->where('status', 'active')
        ->first();
    //  return $careers;
    return Inertia::render('westernUniversityNew/Contact',[
        'contact' => $contact,
        'careers' => $careers,
    ]);
});

Route::get('/history_and_values', function () {
    $hestoryTitle = Page::where('code', 'HISTORY_AND_VALUES')->orderBy('order_index')->where('status', 'active')->first();
    $ourHestory = Page::where('code', 'OUR_HISTORY')->with('images')->orderBy('order_index')->where('status', 'active')->first();
    $vision = Page::where('code', 'OUR_VISION')->with('images')->orderBy('order_index')->where('status', 'active')->first();
    $mission = Page::where('code', 'OUR_MISSION')->with('images')->orderBy('order_index')->where('status', 'active')->first();
    $valuesWiscare = Page::where('code', 'VALUES_WISCARE')->with([
            'children' => fn($sub_query) => $sub_query->orderBy('order_index')->with('images'),
        ])
        ->where('status', 'active')->first();
    //use get() result is it catch data to array [], use first() 
    // return $valuesWiscare;
    return Inertia::render('westernUniversityNew/About/HistoryAndValues', [
        'hestoryTitle' => $hestoryTitle,
        'ourHestory' => $ourHestory,
        'vision' => $vision,
        'mission' => $mission,
        'valuesWiscare' => $valuesWiscare,
    ]);
});

Route::get('/campuses', function () {
    $campuses = Page::where('code', 'CAMPUSES')
        ->with([
            'children' => fn($sub_query) => $sub_query->orderBy('order_index')->with('images'),
        ]) 
        ->where('status', 'active')
        ->first();
    // return $campuses;
    return Inertia::render('westernUniversityNew/About/Campuses',[
        'campuses' =>$campuses,
    ]);
});

Route::get('/school_facilities', function () {
    $schoolFacilities = Page::where('code', 'SCHOOL_FACILITIES')
        ->with([
            'children' => fn($sub_query) => $sub_query->orderBy('order_index')->with('images'),
        ]) 
        ->where('status', 'active')
        ->first();
    // return $schoolFacilities;
    return Inertia::render('westernUniversityNew/About/SchoolFacilities', [
        'schoolFacilities' => $schoolFacilities,
    ]);
});

Route::get('/student_council', function () {
    $studentCouncil = Page::where('code', 'STUDENT_COUNCIL')
        ->with([
            'images', // Main image code STUDENT_COUNCIL
            // 'children' => fn($sub_query) => $sub_query->orderBy('order_index')->with('images'),
        ])
        // ->with('image') 
        ->where('status', 'active')
        ->first();

    $gradeLevelLeaders = Page::where('code', 'GRADE_LEVEL_LEADERS')
        ->with([
            // 'images', // Main image code STUDENT_COUNCIL
            'children' => fn($sub_query) => $sub_query->orderBy('order_index')->with('images'),
        ])
        // ->with('image') 
        ->where('status', 'active')
        ->first();


    $campusRepresentative = Page::where('code', 'CAMPUS_REPRESENTATIVES')
        ->with([
            // 'images', // Main image code STUDENT_COUNCIL
            'children' => fn($sub_query) => $sub_query->orderBy('order_index')->with('images'),
        ])
        // ->with('image') 
        ->where('status', 'active')
        ->first();


    $studentCouncilInAction = Page::where('code', 'STUDENT_COUNCIL_IN_ACTION')
        ->with([
            // 'images', // Main image code STUDENT_COUNCIL
            'children' => fn($sub_query) => $sub_query->orderBy('order_index')->with('images'),
        ])
        // ->with('image') 
        ->where('status', 'active')
        ->first();
        
        // return $gradeLevelLeaders;
    return Inertia::render('westernUniversityNew/About/StudentCouncil',[
        'studentCouncil' => $studentCouncil,
        'gradeLevelLeaders' => $gradeLevelLeaders,
        'campusRepresentative' => $campusRepresentative,
        'studentCouncilInAction' => $studentCouncilInAction,
    ]);
});

Route::get('/curriculum', function () {
    $studentCouncilInAction = Page::where('code', 'STUDENT_COUNCIL_IN_ACTION')
        ->with([
            // 'images', // Main image code STUDENT_COUNCIL
            'children' => fn($sub_query) => $sub_query->orderBy('order_index')->with('images'),
        ])
        // ->with('image') 
        ->where('status', 'active')
        ->first();
    return Inertia::render('westernUniversityNew/Academics/Curriculum',[
        'studentCouncilInAction' => $studentCouncilInAction,

    ]);
});

Route::get('/school_calendar', function () {
    return Inertia::render('westernUniversityNew/Academics/SchoolCalendars');
});

Route::get('/programs', function () {
    $programs = Page::where('code', 'PROGRAMS')
        ->with([
            'children' => fn($sub_query) => $sub_query->orderBy('order_index')->with('images'),
        ]) 
        ->where('status', 'active')
        ->first();
    // return $programs;
    return Inertia::render('westernUniversityNew/Academics/Programs',[
        'programs' => $programs,
    ]);
});

Route::get('/class_schedules_and_subjects', function () {
    $schedulesAndSubjects = Page::where('code', 'CLASS_SCHEDULES_AND_SUBJECTS')->where('status', 'active')->first();
    // return $schedulesAndSubjects;
    return Inertia::render('westernUniversityNew/Academics/ClassScheduleAndSubject',[
        'schedulesAndSubjects' => $schedulesAndSubjects,
    ]);
});

Route::get('/admissions', function () {
    $admissions = Page::where('code', 'ADMISSIONS')->where('status', 'active')->first();
    // return $admissions;
    return Inertia::render('westernUniversityNew/Admission/Index',[
        'admissions' => $admissions,
    ]);
});

Route::get('/news', function () {
    return Inertia::render('westernUniversityNew/SchoolLife/News');
});
Route::get('/activities_and_events', function () {
    $activitiesAndEvents = Page::where('code', 'ACTIVITIES_AND_EVENTS')
        ->with([
            'children' => fn($sub_query) => $sub_query->orderBy('order_index')->with('images'),
        ]) 
        ->where('status', 'active')
        ->first();
    // return $activitiesAndEvents;
    return Inertia::render('westernUniversityNew/SchoolLife/ActivitiesAndEvents',[
        'activitiesAndEvents' => $activitiesAndEvents,
    ]);
});
Route::get('/extracurricular_activities', function () {
     $extracurricularActivities = Page::where('code', 'EXTRACURRICULAR_ACTIVITIES')
        ->with([
            'children' => fn($sub_query) => $sub_query->orderBy('order_index')->with('images'),
        ]) 
        ->where('status', 'active')
        ->first();
    return Inertia::render('westernUniversityNew/SchoolLife/ExtracurricularActivities',[
        'extracurricularActivities' => $extracurricularActivities,
    ]);
});

Route::get('/outreach_programs', function () {
     $outreachPrograms = Page::where('code', 'OUTREACH_PROGRAMS')
        ->with([
            'children' => fn($sub_query) => $sub_query->orderBy('order_index')->with('images'),
        ]) 
        ->where('status', 'active')
        ->first();
    // return $activitiesAndEvents;
    return Inertia::render('westernUniversityNew/SchoolLife/OutreachPrograms',[
        'outreachPrograms' => $outreachPrograms,
    ]);
});

Route::get('/detail/{id}', function ($id) {
    return Inertia::render('westernUniversityNew/Academics/Detail', [
        'id' => $id,
    ]);
});
// Route::get('/careers', function () {
//     return Inertia::render('westernuniversity/contact/Careers');
// })->name('careers');

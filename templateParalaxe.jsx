function templateParalaxe(){
    //création des variables
    var activItem =  app.project.activeItem;
    var paralaxeFolder = app.project.items.addFolder("Paralaxe");
    var plansFolder = app.project.items.addFolder("Plans");
    var camera = activItem.layers.addCamera("Camera Principale", [540, 540]);
    var nullCamera =  activItem.layers.addNull();
    var nullCameraAnchorPoint = nullCamera.anchorPoint;
    nullCameraAnchorPoint.setValue([50, 50, 0]);
    nullCamera.threeDLayer = true;
    var refPlanB = activItem.layers.addNull();
    var refPlanA = activItem.layers.addNull();
    
    //modifications des noms
    nullCamera.name = "Ref camera";
    refPlanA.name = "Ref Plan A"
    refPlanB.name = "Ref Plan B";
    
    //création des deux précomp pour les plans
    var planB = activItem.layers.precompose([2], "Plan B");
    var planA = activItem.layers.precompose([1], "Plan A");
    activItem.layer(2).threeDLayer = true;
    activItem.layer(1).threeDLayer = true;
    
    //liaison des objets nul
    camera.parent = nullCamera;
    
    
    //positionnement des plans et camera
    var planAPosition = activItem.layer(1).position;
    planAPosition.setValue([540, 540, -100]);
    var planBPosition = activItem.layer(2).position;
    planBPosition.setValue([540, 540, -500]);
    var cameraPosition =activItem.layer(4).position;
     cameraPosition.setValue([50, 50, 1340]);
    
    //rangement des dossiers 
    plansFolder.parentFolder = paralaxeFolder;
    planB.parentFolder = plansFolder;
    planA.parentFolder = plansFolder;
    activItem.parentFolder = paralaxeFolder;
    };

templateParalaxe();

//par Amed DOUKOURE

/**
 * Module - for services
 */
angular.module('selfbuildApp.services', [])

/**
 * factory service
 */
.factory('buildStages', function() {
  //Might use a resource here that returns a JSON array

  //data
  var buildStages = [

    { id: 0, title: 'Clear Entrance', description:"An entrace to the site from the road was created with a digger. A driveway and hard stand area was then made so trucks and vehicles could enter the site." },
    { id: 1, title: 'Strip Site', description:"The grass and topsoil was removed from the site to get a firm base for the house foundation." },
    { id: 2, title: 'Foundation Base', description:"28mm crushed rock was compacted with a 75Kg whacker plate. Smaller stone may have causeed moisture to move upwards to the foundation via capillary action." },
    { id: 3, title: 'Build EPS Foundation', description:"The foundation is an expanded polystyrene (EPS) raft foundation. The EPS blocks are held together using large screws. 300mm of EPS is laid on the compacted stone. Entry points for services and plumbing wastes were provisioned for by installing 4'' Wavin pipes in the foundation. The service & waste pipes exit in the stone under the EPS. 804 hardcore was added on top of the EPS and compacted. Heating pipes were also ran in the hardcore. The Radon Barrier was then laid on top. A393 steel mesh was laid on top of the radon barrier. Extra mesh was useds where there are load bearing walls and point loads (e.g. chimneys). Laid underfloor heating (UFH) pipes, cable tied the URH pipes to the steel mesh. Poured 100mm concrete slab." },
    { id: 4, title: 'External leaf foundation', description:"The external leaf is constructed of 4'' blocks on their side. First timber shuttering had to be made to contain the concrete for the external leaf foundation. Then steel mesh was cut and tied inside the shuttering. The concrete could tne be put in place. Wheel barrows were used to distribute the concrete around the perimeter. Could not justify the rental of a concrete pump for the job and also a pump mix is more expensive concrete with smaller stone." },
    { id: 5, title: 'Finish Foundation', description:"Added 804 hardcore on top of the EPS and compacted. Ran heating pipes in the hardcore. Laid Radon Barrier on top. Put A393 steel mesh in the foundation. Extra mesh was used under load bearing walls and point loads (e.g. chimneys). Ran underfloor heating pipes, cable tie them to the steel mesh. Pour 100mm concrete slab." },
    { id: 6, title: 'Blockwork', description:"Inner leaf was laid first. 4'' block on flat. Then the external leaf was laid 4'' block on edge. A cavity of 200mm was kept. Glass fibre wall ties were used. All mortar snots were cleaned off the wall ties and the cavity cleaned thoroughly to reduce cold bridging." },
    { id: 7, title: 'Ceiling', description:"The ceiling slabs were put in place using the delivery truck which had a HI AB. Under floor heating pipes were laid because they were left over from the foundation but will probably never be connected. A course of bricks were laid around the perimeter to contain the screen. A 75mm structural screed was poured. It contained fibre mesh for strength." },
    { id: 8, title: 'Roof', description:"The wall plate was secured to the concrete ceiling using express nails. 7'' x 2'' rafters were used at 400mm centres. The roof construction from inside out consists of 180mm rafter + 22mm Gutex board + Solitex UD breathable felt + 50mm x 30mm counter batten + 50mm x 25mm tiling battens + clay tiles. 105 degree ridge tiles. The facia and soffit were also installed because the plasterer had to plaster up to the soffit." },
    { id: 9, title: 'Windows & Doors', description:"Windows and Doors installed. The cavity around the opes was then filled with EPS and expanding foam. A foam gun is highly recommended for applying the foam instead of just using the spray can nozzle. You get much more control and alot less wasted foam." },   
    { id: 10, title: 'Plastering Externally', description:"Sand cement plaster was applied externally. There was additional lime put in the finish coat of plaster to give it a nicer colour effect. It will not be painted for quite a while." },
    { id: 11, title: '1st Fix', description:"1st Fix Electrical and Plumbing. The walls were chased using a twin blade chaser and hammer drill with a chisel bit. Water pipes were installed. Cables for the following were installed: alarm (6core), electrical (16mm2 from service head, 2.5mm2 for sockets, 6mm2 to cooker, 1.5mm2 to lights) Cat-5, Co-Ax RG6 for satellite, shotgun cable & external Cat-5 for future CCTV, speaker cable for future. 1st Fix Carpentry. Timber stud particians were created upstairs. All the doorframes were put in. Windows & Doors. The windows, rear and front doors were installed." },
    { id: 12, title: 'Air Tightness', description:"An air-tightness membrane was attached to the rafters internally. Tescon tape was used to join the membrane. Tubes of Contega were used to attach the membrane to the walls. The membrane could not be attached directly to the wall. A smooth surface was required. To get a smooth surface a 2-3 inch strip of sand cement plaster was applied to the top of the walls where required. Plasterboard was then applied underneath the rafters." },
    { id: 13, title: 'Insulation Pumped', description:"Holes were drilled in the internal wall to gain entry to the cavity. Electrical cable has to be in protective ducting when entering the cavity. The plasticiser used in the PVC cable sheath reacts with the polystyrene bead insulation. Over time it may loose its flexibility and become brittle. Super silver bonded bead insulation was pumbed into the cavity. " },  
    { id: 14, title: 'Plastering Internally', description:"A sand cement scratch coat was applied first and let dry. Bonding coat was used to fill any holes in the blockwork. Scrim tape was used to cover joints on plasterboard. A skimcoat was applied. " },   
    { id: 15, title: 'External Waste Works', description:"Waste treatment systems and percolation area was installed. Rainwater and dirty water piping installed. Having a slight drop to septic tank is crucial. Also avoid sharp bends if rodding is required in the future. Gutters and downpipes put up." },
    { id: 16, title: '2nd Fix', description:"ELECTRICAL: Consumer Unit installed. Fittings installed and power connected by ESB. Appliances installed. \n PLUMBING: 2 coffin tanks put in attic, toilets, sinks, showers, fridge plumbed. 300L Cylinder, pressure vessel & pump installed in hot press. \n INTERNAL: floors laid, Kitchen installed, doors Hung, stairs fitted." }

  ];

  return {
    all: function() {
      return buildStages;
    },
    getStageTitle: function(stageId) {
      // Simple index lookup
      return buildStages[stageId].title;
    },
    getStageDescription: function(stageId) {
      	//Simple index lookup
    	return buildStages[stageId].description;
    }
  }
});

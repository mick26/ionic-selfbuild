
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

    {
        id: 0, title: 'Clear Entrance', 
        description:"<p>An entrace to the site was created with a digger.  " +
        "A driveway and hard stand area were made so trucks and " +
        "other vehicles could enter the site.</p>" 
    },
    {
        id: 1, title: 'Strip Site', 
        description:"<p>The grass and topsoil was removed from the site to " +
        "get a firm base for the house foundation.</p>"
    },
    {
    	id: 2, title: 'Foundation Base', 
    	description:"<p>28mm crushed stone was compacted with a " +
    	"75Kg whacker plate.</p>"
    },
    { 
        id: 3, title: 'Build EPS Foundation', 
        description:"<p>An expanded polystyrene (EPS) raft foundation was " + 
        "built.  L shaped EPS blocks were laid along the perimeter of " +
        "the house. They were cut to shape with a hand saw and held in " +
        "place with screws.</p>" +
        "<p>Entry points for services and plumbing wastes were provisioned " +
        "for with 4'' Wavin pipes.  The Wavin pipes exit the perimeter in " +
        "the stone under the EPS blocks.  " +
        "Flat EPS sheets were then laid on the stone to a depth of 300mm.</p>"
    },
    { 
    	id: 4, title: 'External leaf foundation',
    	description:"<p>The external leaf is constructed of 4'' blocks on " +
    	"their side.  Timber shuttering was built to contain the " +
    	"concrete for the external leaf foundation.  " +
    	"Steel mesh was cut and tied inside the shuttering.  " +
    	"Wheel barrows were used to distribute the concrete.  " +
    	"The high rental cost for a concrete pump could not be " +
    	"justified for the job.  " +
    	"Also a pump mix is more expensive concrete as it contains " + 
    	"smaller stone.</p>" 
    },
    {
    	id: 5, title: 'Finish Foundation', 
    	description:"<p>804 hardcore was added on top of the EPS blocks.  " +
        "Under floor heating (UFH) pipes were ran in the hardcore.  " +
        "These UFH pipes are for a heat dump from the solar panels " +
        "during the summer.  The large thermal mass of the hardcore " +
        "should act as a thermal store.<p>" +
        "<p>The 804 hardcore was compacted with a 75Kg whacker.  " +
        "The radon/moisture Barrier was then laid on top.  " +
        "A393 steel mesh (10mm) was laid on top of the radon barrier.  " +
        "Extra mesh was used under load bearing walls and point loads.  " +
        "The main UFH pipes were then laid. They were cable tied to the " +
        "mesh. The 100mm concrete slab was poured.</p>"
    },
    {
    	id: 6, title: 'Blockwork',
    	description:"<p>The inner leaf was laid first.  It consists of a " +
    	"4'' block laid on the flat.  Then the external leaf was laid " +
    	"which consists of a 4'' block laid on its edge.  " +
    	"A cavity of 200mm was kept.  Glass fibre wall ties were used.  " +
    	"All mortar snots were cleaned off the wall ties and the cavity " +
    	"cleaned thoroughly.<p>  "
    },
    {
    	id: 7, title: 'Ceiling',
    	description:"<p>The concrete ceiling slabs were put in place with " +
    	"the delivery truck which had a Hiab.  Under floor heating " +
    	"pipes were laid only because they were left over from the " +
    	"foundation.  A course of bricks was laid around the perimeter " +
    	"to contain the screed.  A 75mm structural screed was poured. " +
    	"The screed contained fibre mesh for strength.</p>  "
    },
    {
    	id: 8, title: 'Roof', 
    	description:"<p>The wall plate was secured to the concrete " +
    	"ceiling using express nails.  " +
    	"7'' x 2'' rafters were used at 400mm centres.  </p>" +
    	"<p>The roof construction is: \n" +
    	"- 180mm rafters \n" +
    	"- 22mm Gutex board \n" + 
    	"- Solitex UD breathable felt \n"+ 
    	"- 50mm x 30mm counter batten \n" +
    	"- 50mm x 25mm tiling battens \n" +
    	"- Clay tiles </p>" +
    	"<p>The facia and soffit were also installed because the " +
    	"plasterer needed the soffit as a solid surface to plaster up to.</p>" 
    },
    {
    	id: 9, title: 'Windows & Doors', 
    	description:"<p><h3><u>Windows and Doors installed.</u></h3>" +
    	"The cavity around the opes was filled with EPS and expanding " +
    	"foam.  A foam gun is highly recommended for applying the foam " +
    	"instead of just using the spray can nozzle.  You get much more " +
    	"control and thus alot less wasted foam.</p>"
    },   
    {
    	id: 10, title: 'Plastering Externally', 
    	description:"<p>Sand cement plaster was applied externally.  " +
    	"There was additional lime put in the finish coat of plaster to " +
    	"give it a nicer colour effect.  It will not be painted for quite a " +
    	"while.</p>" 
    },
    { 
    	id: 11, title: '1st Fix', 
    	description:"<p><h3><u>1st Fix Electrical and Plumbing.</u></h3>" +
    	"The walls were chased using a twin blade chaser and hammer drill " +
    	"with a chisel bit.  Water pipes were installed.</p>" +
    	"<p>Cables for the following were installed: \n" +
    	"- alarm (6core)\n " + 
    	"- electrical (16mm2 from service head)\n" +
    	"- electrical (2.5mm2 for sockets)\n" +
    	"- electrical (6mm2 to cooker)\n" +
    	"- electrical (1.5mm2 to lights even though this is overkill nowadays)\n" +
    	"- data (Cat-5E & external Cat-5E)\n" +
    	"- data (Co-Ax RG6 for satellite)\n" +
    	"- data (shotgun cable)\n" +
    	"- data (speaker cable) </p>" +
    	"<p><h3><u>1st Fix Carpentry.</u></h3> " +
    	"Timber stud walls were created upstairs.  " + 
    	"All the doorframes were put in.</p>" + 
    	"<p><h3><u>Windows & Doors.<u></h3>" +
    	"The windows, rear doors and front door were installed.</p>" 
    },
    {
    	id: 12, title: 'Air Tightness', 
    	description:"<p>An air-tightness membrane was attached to the " +
    	"rafters internally.  Tescon tape was used to join the membrane.  " +
    	"Tubes of Contega were used to attach the membrane to the walls.  " +
    	"The membrane could not be attached directly to the wall.  A smooth " +
    	"surface was required.  To get a smooth surface a 2-3 inch strip of " +
    	"sand cement plaster was applied to the top of the walls where " +
    	"required.  Plasterboard was then applied underneath the rafters.</p>" 
    },
    {
    	id: 13, title: 'Insulation Pumped', 
    	description:"<p>Holes were drilled in the internal wall to gain " +
    	"entry to the cavity.  Electrical cable has to be in protective " +
    	"ducting when entering the cavity.  The plasticiser used in the PVC " +
    	"cable sheath reacts with the polystyrene bead insulation.  " +
    	"Over time it may loose its flexibility and become brittle.  " +
    	"Super silver bonded bead insulation was pumbed into the cavity.</p>"
    },  
    {
    	id: 14, title: 'Plastering Internally',
    	description:"<p>Bonding coat was used to fill holes in the " +
    	"blockwork.  A sand cement scratch coat was applied first and " +
    	"let dry.  A skimcoat was then applied.  " +
    	"On ceilings and stud walls Scrim tape was used to cover " +
    	"plasterboard joints before the areas were then skimmed.</p>"
    },
    {
    	id: 15, title: 'External Waste Works',
    	description:"<p>Waste treatment system and percolation area was " +
    	"installed.  Rainwater and dirty water piping installed.  Having a " +
    	"slight drop to waste treatment tank is crucial.  Also avoid sharp " +
    	"bends in the pipework and install sufficient AJ's so the pipework " +
    	"can be rodded if required in the future. " +
    	"Gutters and downpipes installed.</p>"
    },
    {
    	id: 16, title: '2nd Fix', 
    	description:"<p><h3><u>Electrical</u></h3>" +
    	"- 48way Consumer Unit installed\n" +
    	"- Fittings installed and power connected by ESB\n" +
    	"- Appliances installed</p>" +
    	"<p><h3><u>Plumbing</u></h3>" +
    	"- 2 coffin tanks put in attic\n" +
    	"- toilets, sinks & showers installed\n" +
    	"- fridge plumbed\n" +
    	"- 300L twin coil solar Cylinder\n" + 
    	"- pressure vessel & pump installed</p>" +
    	"<p><h3><u>Internal</u></h3>" +
    	"- floors laid\n" +
    	"- kitchen installed\n" +
    	"- doors hung\n" +
    	"- skirting installed\n" +
    	"- stairs fitted.</p>" 
    }
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

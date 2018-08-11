(function (lib, img, cjs, ss, an) {

var p; // shortcut to reference prototypes
lib.ssMetadata = [];


// symbols:
// helper functions:

function mc_symbol_clone() {
	var clone = this._cloneProps(new this.constructor(this.mode, this.startPosition, this.loop));
	clone.gotoAndStop(this.currentFrame);
	clone.paused = this.paused;
	clone.framerate = this.framerate;
	return clone;
}

function getMCSymbolPrototype(symbol, nominalBounds, frameBounds) {
	var prototype = cjs.extend(symbol, cjs.MovieClip);
	prototype.clone = mc_symbol_clone;
	prototype.nominalBounds = nominalBounds;
	prototype.frameBounds = frameBounds;
	return prototype;
	}


(lib.מקלדתועכבר = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-7.9,-7.9,15.8,15.8,3.8);
	this.shape.setTransform(321.8,131.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-7.9,-7.9,15.8,15.8,3.8);
	this.shape_1.setTransform(301.8,131.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s("#000000").ss(1,1,1).rr(-21.45,-21.45,42.9,42.9,3.8);
	this.shape_2.setTransform(311.6,144.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AF3G6QgIAAgCgKQgDgIACgKQAIg2gMgtQgEgPgKgbQgMgdgEgNQgLgoAEgpQADgqASglIAOgaQAHgPADgMQAFgUgGgnIgIgqQgFgYgIgRQgJgTgRgVQgKgMgWgYQgsgvgZgYQgogmglgZQgigXgsgXQgngUgXgFQgcgHgwAEQhCAHhUAcIiSA0QgUAGgFgIQgFgHAHgIQAGgHAKgEQBTghAogOQBEgXA5gNQBBgOAtAGQAfAFAlARQAXAKAqAYQAiAUAQALQAkAZA8A9IBHBIQAcAdAIAPQAJARAKAoQAIAjACASQAEAdgEAXQgDAXgWA1QgTAwgBAcQgBAbAMAmIAWBAQATBBgLBBQgFAUgLAAIgBAAg");
	this.shape_3.setTransform(270.7,87.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AmVGiQgFgEAAgHQAAgHAFgFQAGgGAQgFQA4gRAkgOQAxgTAkgYIArggQAbgVAQgKQAogaB2gsQBognAvgrQAQgPAXgbIAlgrIAnglQAXgWAMgSQALgTAJgZQAGgQAIgfQALgpgFgWQgDgNgJgNQgFgIgNgQQgkgrghgbQgpgigrgOQgVgIABgLQAAgIALgDQAKgCAKAEQAyARAvAsQAgAdAvA6QAWAaAEARQAFATgJAkIgPA5QgKAfgNAWQgOAWghAiIhDBHQgzA4ghAXQgrAfhdAhQhiAkgoAZQgTAMglAeQgkAdgVANQgiAVgvARQgdAKg5AQQgGACgFAAQgGAAgDgCg");
	this.shape_4.setTransform(147.6,42);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_5.setTransform(14.8,127,0.938,0.741);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_6.setTransform(43.7,127,0.938,0.741);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_7.setTransform(74.9,127,0.938,0.741);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_8.setTransform(105.4,127,0.938,0.741);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_9.setTransform(134.3,127,0.938,0.741);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_10.setTransform(163.9,127,0.938,0.741);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_11.setTransform(192.8,127,0.938,0.741);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_12.setTransform(221.3,127,0.938,0.741);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_13.setTransform(14.8,104.4,0.938,0.741);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_14.setTransform(43.7,104.4,0.938,0.741);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_15.setTransform(74.9,104.4,0.938,0.741);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_16.setTransform(105.4,104.4,0.938,0.741);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_17.setTransform(134.3,104.4,0.938,0.741);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_18.setTransform(163.9,104.4,0.938,0.741);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_19.setTransform(192.8,104.4,0.938,0.741);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-11.45,-11.45,22.9,22.9,3.8);
	this.shape_20.setTransform(221.3,104.4,0.938,0.741);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s("#000000").ss(1,1,1).rr(-122.65,-28.1,245.3,56.2,3.8);
	this.shape_21.setTransform(122.6,112.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.מקלדתועכבר, new cjs.Rectangle(-1,0,335,167.2), null);


(lib.מספריים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#CC0000").s().p("AgTAmQgEgGADgMQgCgDgFgDIgIgGQgDgDAAgFIAAAAQAAgFAEgDQADgDAGgDIAAgBIAAAAIAFgFIAAgBIAEgIQADgGAGgDQAFgDAGAAIAGgBIAHABQAFABAGADQANAJgCANIgBAGIgCAIIABAEIAAAEQACAGAAAEQgBALgSAGIgQAGQgGADgGAAQgHAAgEgFg");
	this.shape.setTransform(25,35.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAvEBQgKgIgHgcIgNhAQgDgOgGgEIgFgDIAAAGQgBAHgGAHIgNALQgJAHgYAcQgUAXgRAIQgPAFgHAFIgRAKQgGADgOgBQgNgCgEgCQgGgEgHgLQgJgSABgTQABgNAIgZQAEgOAFgGQAEgFALgHQAGgGAKgMQAHgHAXgGQAbgFAagEQgBAFAEADIAIAGQAFADABADQgDAMAEAGQAFAFAHAAQAFAAAIgDIAOgGQASgGABgLQABgEgCgGIgBgEQAGAGAFADQAAgMALgJQAJgJAOgDQAKgDAPABIAaAAIAbABQAQABAKAEQAdALAMAmQAGAVAAAsIgBAXQgCAMgHAIQgJALgXAHQgtAMgwAEIgIABQgSAAgKgHgABBBuQgDADgHALQgGAKgGAEQALAcACAPIAAANIACAOQAEAQANADQADABALgBQAwgHAYgGQARgFAFgHQAEgGABgLQAEgqgagiQgVgLgigBQghAAgNANgAhmCHQgJADgEAEIgGAJQgDAFgKAHQgJAGgEAFQgFAIgBAXQAAAKAFADQADACAIgCQAVgHARgMIATgOQANgFACgDQACgEAAgHQABgIABgDQADgFAPgHQAKgFABgHIgEgDIgCgCIgDAAQghAAgcAJgAAYBJQADgNgNgJQgGgDgGgBIAnhBQAZgqAQgWQAZgiAZgXIATgSQAKgKADgLQACgSAEgHQAFgIALgHIATgMQAFgDAJgMQAIgKAGgEQAJgGALADQAMAEgBAKQgBAHgKAIIgbAYQgSAOgGAMIgKAZQgFALgWAVQgXAWgVAaQgYAfgnBCIgjA8IABgGgAgoA9IgKgIQgHgEgCgEQgDgFgBgIIgBgNQgDgMgTgTQgpgsgdgzIggg3QgUgegYgOIgPgIQgIgFgEgFQgFgHABgJQACgKAIgCQAHgCANAJIAUAIQAMAFAHAFQAIAGAMATICHDLQAOAVAIAJIAMANIACACIgHABQgHAAgFADQgFADgDAGIgEAIIgBABIgFgHg");
	this.shape_1.setTransform(26.4,26.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.מספריים, new cjs.Rectangle(0,0,52.8,52.8), null);


(lib.מחשבון = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgMAFIAAgCIAZAAIAAACgAgMgCIAAgCIAZAAIAAACg");
	this.shape.setTransform(36.6,53.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AABAMIAAgBIAAAAIADgBIAAgCIABgCIAAgIQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQgCAAgDADIAAAKIABAEIABABIACAAIAAABIgLAAIAAgBIAAAAIADgBIAAgEIAAgHIAAgFIAAgBIgBAAIgCAAIAAgBIAGgDIABAAIAAAFQAEgEADgBIADABIACAEIABAEIAAAIIAAAEIABABIACAAIAAABg");
	this.shape_1.setTransform(37.8,42.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgIAIQgCgDAAgFIABgFQACgDADgBQACgCACAAQAFAAADAEQADADAAAEIgCAGQgBADgCABQgDACgDAAQgFAAgDgEgAgCgIIgCACIgCAFQABAEACAEQACADACAAQABAAAAAAQAAAAABAAQAAAAABgBQAAAAABgBQABgCAAgEQAAgFgCgEQgCgCgCAAIgCABg");
	this.shape_2.setTransform(35.3,42.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgGASIALgiIACAAIgLAig");
	this.shape_3.setTransform(36.3,20.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AABALIAAgBIACAAIABgBIgCgDIgDgFIgDAFIgBADIAAABIACAAIAAABIgIAAIAAgBIACAAIADgEIAEgGIgDgFIgEgEIgCAAIAAgBIAKAAIAAABIgBAAIAAABIAAACIABABIABADIACgDIACgDIAAgBIgCAAIAAgBIAHAAIAAABIgCAAIgDAEIgDAEIAFAHIADAEIADAAIAAABg");
	this.shape_4.setTransform(26.8,21);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgFACIAAgDIALAAIAAADg");
	this.shape_5.setTransform(16.4,21);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAAANIAAgMIgMAAIAAgBIAMAAIAAgMIABAAIAAAMIAMAAIAAABIgMAAIAAAMg");
	this.shape_6.setTransform(7,20.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgHAMQgCgFAAgHQAAgEABgEQABgEADgCQABgBABAAQAAgBABAAQAAAAABAAQAAAAAAAAQAEAAADAEQADAFABAHQgBAGgBAEQgCAEgCACIgFABQgEAAgDgFgAgCgNIgDAGIAAAIQAAAHACAEQABAEACAAIACgBIADgEIABgLIgBgKIgDgEIgCAAIgCABg");
	this.shape_7.setTransform(37.1,30.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgJARIAAAAIAGgCQADgBACgEIADgIQgEADgCAAQgEAAgCgDQgDgCAAgEQAAgFADgDQADgEAEAAQAEAAADADQADAFABAGQAAAEgEAFQgCAFgFADQgDACgEAAgAgEgMQgBABAAAEQAAAFACACQAAABABAAQAAABABAAQAAAAABAAQAAAAAAAAIADAAIACgCIAAgEIAAgFIgCgEIgDgBQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABg");
	this.shape_8.setTransform(27.1,30.2);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgHAOQgCgCAAgDIACgEIAFgFIgFgEIgBgEQAAgDACgDQADgCADAAQAEAAADACQACACAAADIgCAEQgBACgEACIAGAFIABAFQABADgDADQgDACgEAAQgDAAgEgDgAgEAFIAAAEQAAADABACQAAABABAAQAAAAABABQAAAAABAAQAAAAAAAAQABAAABAAQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQAAAAABgBQAAgBAAAAQAAgBAAAAIgBgDQgBgDgFgEIgDAEgAgDgNQAAAAgBABQAAAAAAAAQAAABAAAAQAAABAAAAIAAADIACACIADADIAEgEIABgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAAAAAQgBAAAAABQgBAAAAAAQgBAAAAABg");
	this.shape_9.setTransform(16.8,30.2);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgCARIAJgdIgIAAIgFABIgDADIAAAAIACgIIARAAIAAABIgKAgg");
	this.shape_10.setTransform(6.8,30.2);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgFAPQgEgEgBgHQABgEACgEQABgEADgDIAGgEIAGgBIABAAIAAABIgGABIgDADIgDAFIgCAFQAEgCACAAQAEAAACADQACABABAFQgBAEgCADQgDAEgFAAQgCAAgDgCgAgBgBIgEABIAAAFIABAFIACAFIADABQAAAAABAAQAAAAABgBQAAAAABAAQAAgBAAAAQACgCAAgEQAAgEgCgDQgBgCgDAAIgBAAg");
	this.shape_11.setTransform(27.1,42.2);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgHAQIgBgCIAAgCIACAAIABAAIABABIAEABQABAAADgCQACgCAAgDQAAgDgCgDQgCgBgDgCIgGgBIAGgNIALAAIgCAEIgJAAIgDAFQAGABAEAEQADACAAAEIgBAFIgDAEQAAAAAAABQgBAAAAAAQgBABAAAAQgBAAAAAAIgFACIgEgBg");
	this.shape_12.setTransform(16.8,42.3);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AADARIAAgJIgNAAIAAgDIAOgVIADAAIAAAVIAEAAIAAADIgEAAIAAAJgAgIAFIALAAIAAgQg");
	this.shape_13.setTransform(6.3,42.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgHARIgCgCIABgCIACAAIABAAIABABIACABIACAAQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBQAAAAABgBQAAAAAAgBQAAAAAAgBQAAgBAAAAIAAgEIgBgCIgDgCIgDgBIgBAAIAAAAIADgBIADgDIABgDQAAgBgBAAQAAgBAAAAQAAgBAAAAQgBgBAAAAQAAgBgBAAQAAAAgBAAQAAgBAAAAQAAAAgBAAQgDAAgDAEIgBAAIAEgFQACgCACAAQAEAAACADQAAAAABABQAAAAAAAAQAAABAAABQAAAAAAABQABADgFAEQADABACACQACACAAADQgBAEgDADQgDAEgGAAIgEAAg");
	this.shape_14.setTransform(27,53.8);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgKARIAAgBIALgMQADgFAAgEQABgDgCgCQgCgCgCAAQgBAAAAAAQgBAAAAAAQgBABAAAAQgBAAAAAAIgDAEIgBAAQAAgEADgCQADgDADAAQAEAAACADQADACAAAEIgCAFQgBADgEAFIgHAIIAIAAIADgBIADAAIABgDIABAAIgCAHg");
	this.shape_15.setTransform(16.8,53.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgFARIAAgBIADgBIABAAIAAgEIAAgQIAAgGIgBAAIgBgBIgCABIAAgBIAHgEIAAAAIAAAbIABAEIABAAIACABIAAABg");
	this.shape_16.setTransform(6.2,53.8);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#999999").ss(1,1,1).p("AjRk1IGjAAIAAJrImjAAg");
	this.shape_17.setTransform(21,31);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("ABvg7IBQAAIAABOIhQAAgABvA+IAHAAIA9AAIAMAAIAABQIhQAAgABziXIBMAAIAABMIhMAAgAiokGIE8AAIAABIIk8AAgAAPiXIBMAAIAABMIhMAAgAi9iXIBMAAIAABMIhMAAgAhZg7IBQAAIAABOIhQAAgAi+g7IBQAAIAABOIhQAAgAi+A+IBQAAIAABQIhQAAgAhZA+IBQAAIAABQIhQAAgAAPg7IBQAAIAABOIhQAAgAAPA+IBQAAIAABQIhQAAgAhZiXIBMAAIAABMIhMAAgAAPC3IBQAAIAABQIhQAAgAhZC3IBQAAIAABQIhQAAgABvC3IBQAAIAABQIhQAAgAi+C3IBQAAIAABQIhQAAg");
	this.shape_18.setTransform(22,33);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AAPChIAAhPIBQAAIAABPgAhZChIAAhPIBQAAIAABPgAi+ChIAAhPIBQAAIAABPgAAPAoIAAhOIBQAAIAABOgAhZAoIAAhOIBQAAIAABOgAi+AoIAAhOIBQAAIAABOgABvhRIAAhPIBQAAIAABPgAAPhRIAAhPIBQAAIAABPgAhZhRIAAhPIBQAAIAABPgAi+hRIAAhPIBQAAIAABPg");
	this.shape_19.setTransform(22,43.1);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FF0000").s().p("AgnAoIAAhPIAHAAIA8AAIAMAAIAABPg");
	this.shape_20.setTransform(37.1,43.1);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CC33").s().p("ABvDPIAAhQIBPAAIAABQgABziCIAAhMIBLAAIAABMgAAPiCIAAhMIBLAAIAABMgAhZiCIAAhMIBLAAIAABMgAi9iCIAAhMIBLAAIAABMg");
	this.shape_21.setTransform(22.1,38.5);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#CCCCCC").s().p("AjRE2IAAprIGjAAIAAJrgAB5EaIBQAAIAAhQIhQAAgAAaEaIBPAAIAAhQIhPAAgAhOEaIBOAAIAAhQIhOAAgAizEaIBPAAIAAhQIhPAAgAB5ChIBQAAIAAhQIgLAAIAAgDIg+AAIAAADIgHAAgAAaChIBPAAIAAhQIhPAAgAhOChIBOAAIAAhQIhOAAgAizChIBPAAIAAhQIhPAAgAB5AnIBQAAIAAhPIhQAAgAAaAnIBPAAIAAhPIhPAAgAhOAnIBOAAIAAhPIhOAAgAizAnIBPAAIAAhPIhPAAgAB+g3IBLAAIAAhMIhLAAgAAag3IBLAAIAAhMIhLAAgAhOg3IBLAAIAAhMIhLAAgAiyg3IBLAAIAAhMIhLAAgAieiqIE8AAIAAhIIk8AAIE8AAIAABIIk8AAIAAhIIAABIg");
	this.shape_22.setTransform(21,31);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.מחשבון, new cjs.Rectangle(-1,-1,44.9,64), null);


(lib.מחשבנייד = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ag+g+IB9AAIAAB9Ih9AAg");
	this.shape.setTransform(338.4,360.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("Ag+A/IAAh9IB9AAIAAB9g");
	this.shape_1.setTransform(338.4,360.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("Ag+g+IB9AAIAAB9Ih9AAg");
	this.shape_2.setTransform(318.7,360.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("Ag+A/IAAh9IB9AAIAAB9g");
	this.shape_3.setTransform(318.7,360.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s("#000000").ss(1,1,1).rr(-20.2,-20.2,40.4,40.4,7.3);
	this.shape_4.setTransform(328,370.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#999999").ss(1,1,1).p("A2uS6MAAAglzMAtdAAAMAAAAlz");
	this.shape_5.setTransform(145.5,121);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AnaHqIC+AAIAAC+Ii+AAgAnaL4IC+AAIAAC+Ii+AAgAsQHqIC+AAIAAC+Ii+AAgAiaHqIC9AAIAAC+Ii9AAgAiaL4IC9AAIAAC+Ii9AAgACRHqIC+AAIAAC+Ii+AAgA1AHqIC+AAIAAC+Ii+AAgA1AL4IC+AAIAAC+Ii+AAgAwoHqIC+AAIAAC+Ii+AAgAwoL4IC+AAIAAC+Ii+AAgAxGQ4IC+AAIAAC+Ii+AAgAsQQ4IC+AAIAAC+Ii+AAgA1AQGIC+AAIAAC+Ii+AAgAyCXSIAABeIi+AAIAAi+IC+AAIAABfAxGVyIC+AAIAAC+Ii+AAgAszVyIC+AAIAAC+Ii+AAgAiaQ4IC9AAIAAC+Ii9AAgACRQ4IC+AAIAAC+Ii+AAgAnaQ4IC+AAIAAC+Ii+AAgAG2XSIAABeIvcAAIAAi+IPcAAIAABfACRL4IC+AAIAAC+Ii+AAgAsQL4IC+AAIAAC+Ii+AAgAWvMOIAAmSMgtdAAAIAAXSMAtdAAAIAAwoARlHqIC+AAIAAC+Ii+AAgARlL4IC+AAIAAC+Ii+AAgAMlHqIC+AAIAAC+Ii+AAgAHRHqIC+AAIAAC+Ii+AAgAMlL4IC+AAIAAEOIkdAAIAAi+IBfAAgAHRL4IC+AAIAAC+Ii+AAgALDQ4IEgAAIAAC+IkgAAgAHRQ4IC+AAIAAC+Ii+AAgAIzVyIC+AAIAAC+Ii+AAgAMlVyIC+AAIAAC+Ii+AAgARlQGIC+AAIAAC+Ii+AAgAUjXSIAABeIi+AAIAAi+IC+AAIAABfA0s9NMApPAAAMAAAAgLMgpPAAAg");
	this.shape_6.setTransform(145.5,204);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#666666").s().p("A0nQGMAAAggLMApPAAAMAAAAgLg");
	this.shape_7.setTransform(145,120);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AR0IjIAAi+IC+AAIAABfIAAABIAABegAM0IjIAAi+IC+AAIAAC+gAJCIjIAAi+IC+AAIAAC+gAoXIjIAAi+IPcAAIAABfIAAABIAABegAskIjIAAi+IC+AAIAAC+gAw3IjIAAi+IC+AAIAAC+gA0xIjIAAi+IC+AAIAABfIAAABIAABegALSDoIAAi+IEgAAIAAC+gAHgDoIAAi+IC+AAIAAC+gACgDoIAAi+IC+AAIAAC+gAiLDoIAAi+IC9AAIAAC+gAnLDoIAAi+IC+AAIAAC+gAsBDoIAAi+IC+AAIAAC+gAw3DoIAAi+IC+AAIAAC+gAR0C3IAAi9IC+AAIAAC9gA0xC3IAAi9IC+AAIAAC9gALVgGIAAi/IBfAAIAAhPIC+AAIAAEOgAR0hWIAAi+IC+AAIAAC+gAHghWIAAi+IC+AAIAAC+gACghWIAAi+IC+AAIAAC+gAiLhWIAAi+IC9AAIAAC+gAnLhWIAAi+IC+AAIAAC+gAsBhWIAAi+IC+AAIAAC+gAwZhWIAAi+IC+AAIAAC+gA0xhWIAAi+IC+AAIAAC+gAR0lkIAAi+IC+AAIAAC+gAM0lkIAAi+IC+AAIAAC+gAHglkIAAi+IC+AAIAAC+gACglkIAAi+IC+AAIAAC+gAiLlkIAAi+IC9AAIAAC+gAnLlkIAAi+IC+AAIAAC+gAsBlkIAAi+IC+AAIAAC+gAwZlkIAAi+IC+AAIAAC+gA0xlkIAAi+IC+AAIAAC+g");
	this.shape_8.setTransform(144,307.7);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#454545").s().p("A2uLpIAA3RMAtdAAAIAAGSQgEADgDAEQAEAEACAJIABAEIAAQngARlHLIC+AAIAAheIAAgBIAAhfIi+AAgAMlHLIC+AAIAAi+Ii+AAgAIzHLIC+AAIAAi+Ii+AAgAomHLIPcAAIAAheIAAgBIAAhfIvcAAgAszHLIC+AAIAAi+Ii+AAgAxGHLIC+AAIAAi+Ii+AAgA1AHLIC+AAIAAheIAAgBIAAhfIi+AAgALDCRIEgAAIAAi9IkgAAgAHRCRIC+AAIAAi9Ii+AAgACRCRIC+AAIAAi9Ii+AAgAiaCRIC9AAIAAi9Ii9AAgAnaCRIC+AAIAAi9Ii+AAgAsQCRIC+AAIAAi9Ii+AAgAxGCRIC+AAIAAi9Ii+AAgARlBfIC+AAIAAi9Ii+AAgA1ABfIC+AAIAAi9Ii+AAgALGheIEdAAIAAkOIi+AAIAABQIhfAAgARliuIC+AAIAAi+Ii+AAgAHRiuIC+AAIAAi+Ii+AAgACRiuIC+AAIAAi+Ii+AAgAiaiuIC9AAIAAi+Ii9AAgAnaiuIC+AAIAAi+Ii+AAgAsQiuIC+AAIAAi+Ii+AAgAwoiuIC+AAIAAi+Ii+AAgA1AiuIC+AAIAAi+Ii+AAgARlm8IC+AAIAAi+Ii+AAgAMlm8IC+AAIAAi+Ii+AAgAHRm8IC+AAIAAi+Ii+AAgACRm8IC+AAIAAi+Ii+AAgAiam8IC9AAIAAi+Ii9AAgAnam8IC+AAIAAi+Ii+AAgAsQm8IC+AAIAAi+Ii+AAgAwom8IC+AAIAAi+Ii+AAgA1Am8IC+AAIAAi+Ii+AAg");
	this.shape_9.setTransform(145.5,316.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AXib/QgIAAgBgOQgDgZABgkQgNgEgKgMQgJgLgFgOQgHgUAAgmQAAgUACgLQAEgQAKgIQALgIAagBQBdgCAigEQBHgIAygXIgchSQgPgsgVgMQgSgJgnAHIhGAQQgYAHghAFQiBAWg4g6QgWgXgKghQgJgeACgjQADg3AegYQAMgKAUgHIAjgLQAogOAngjQAcgZAjgtIAdgnIAZgiQASgbAZgtQguAHg5ADQgjAChGAAQgZAAgMAEQgOADgYAOQg2AegXAaIgdAmQgSAYgQALIgQAKQgJAGgEAHIgEAJQgCAEgDACQgGAEgHgEQgGgEgDgIIgEgKIgBgEQgCgJgEgEQADgEAEgDQAGgEAKgCIAdgGQAOgGANgSQAHgLANgWQAQgXAbgUQASgNAjgVQAjgUAWgGQAQgDAXgBIDLgJQAVgCAHAKQAGAJgHATQgUAtgbAmQhBB1htBLQgiAYgYAFIgSACQgLABgGAEQgVALgDAoQgDA5AWAgQAUAcAlALQAhAKAngDQAigCAsgKIBMgUQAigJATACQAYADAWAQQAUAPAOAYQASAgAOBAQAIAjgNAPQgIAIgSAFQh/AmiIgIQgCAdAAANQABAYAIAQQAEAGAJAMQAKALADAGQALASABAWQABAVgKASQgFAKgFAAIgBgBgA7xJ0MAAAglzMAtdAAAMAAAAlzgA5vG2MApPAAAMAAAggLMgpPAAAg");
	this.shape_10.setTransform(177.8,179.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.מחשבנייד, new cjs.Rectangle(-1,-1,356.6,393), null);


(lib.מחשב1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#CCCCCC").ss(1,1,1).p("AkQkGIIhAAQAAAgAgAAIAAHNQggAAAAAgIohAAQAAggggAAIAAnNQAgAAAAggg");
	this.shape.setTransform(45.6,35);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CCCCCC").s().p("AkPEHQAAghghABIAAnMQAhAAAAghIIfAAQABAhAgAAIAAHMQgggBgBAhg");
	this.shape_1.setTransform(45.6,35);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#333333").s().p("AgGBlIhKgIQgYgCghABQgcAAgOACQgiAFgQAAQgjgCgcgaQgbgagEgjQgDghAVgfQAWgfAhgKQAOgEARgBIAgAAIBKABQA7AAAUABQAqAEAJAAIA3gFQAcgCA5ACIA/AAQAkABAXAOQAXANAMAZQANAYgDAZQgCAagRAWQgQAWgZAKQgUAIgeAAIg0gBQgZAAg7AGQgsAFgcAAIgMAAg");
	this.shape_2.setTransform(43.6,94.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#333333").s().p("AgcCiQgYgKgPgUQgQgWgJgrQgJgxACgxQABg1ASggQAOgYAYgOQAZgPAbABQAbABAYARQAXARAJAaQAFARgBAaIgCAsQAAAWAFAsQADAogKAZQgKAXgUAQQgUAPgYAEIgMAAQgRAAgSgHg");
	this.shape_3.setTransform(43.1,78.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#333333").s("#333333").ss(1,1,1).rr(-44,-35,88,70,17);
	this.shape_4.setTransform(44,35);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.מחשב1, new cjs.Rectangle(-1,-1,90,105.4), null);


(lib.מהדק = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgHAMQgIgEABgJQABgJAKgEQAEgBAFACQAGADACAFQACAFgCAEQgCAGgEADQgEACgEAAQgDAAgEgDg");
	this.shape.setTransform(1.5,8.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAAAPQgFAAgEgEQgDgDgCgEQgBgDABgCQABgFAEgDQADgEAFgBQALgBAEALQAEALgKAGQgDACgFAAIAAAAg");
	this.shape_1.setTransform(3.7,9.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#CC0000").ss(1,1,1).p("Ai2BQIFtAAIlYif");
	this.shape_2.setTransform(18.3,8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#CCCCCC").ss(1,1,1).p("AigABIADABAirhPIAABIAiWADIFCBN");
	this.shape_3.setTransform(19.3,8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#CCCCCC").s().p("AiOAEIACABQAIAHgEAIQgDAJgKAAIgEgBQgEgBgDgEIgCgDIgBAAQgFABgDgDIgFgDQAAAAAAgBQgBAAAAAAQAAgBgBAAQAAgBAAAAIgBgIQABgEACgCQAFgFAGABIAAgBIACABIAAhJIFXCfgAiVACIgDgBg");
	this.shape_4.setTransform(18.5,8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.מהדק, new cjs.Rectangle(-1,-1,38.5,18), null);


(lib.לוחשנה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AggAuIAAgDQAHgBAEgCQACgBABgDIABgKIAAgiQAAgQgBgCQAAgBgBgBQAAAAAAgBQAAgBgBAAQAAAAAAgBQgBAAAAAAQgBAAAAgBQgBAAgBAAQAAAAgBAAIgHABIAAgDIAbgLIAEAAIAAAUQAKgUAMAAQAFAAAEADQADAEAAAEQAAAEgCACQgDADgDAAQgEAAgEgDQgEgEgCAAQgBAAAAAAQgBAAAAABQgBAAAAAAQgBABAAAAQgFAEgDAJIAAAqQAAAIABAEQABACADABQADACAGABIAAADg");
	this.shape.setTransform(81.1,26.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMAsQgDgEAAgIQgNALgDACQgFACgGAAQgKAAgGgHQgGgGAAgKQAAgGADgGQAEgGAKgGQAKgFAWgJIAAgDQAAgNgEgFQgEgFgHAAQgHAAgDADQgEADAAAFIAAAFQAAAFgCACQgCADgEAAQgEAAgCgDQgCgCAAgFQAAgIAIgHQAJgHAQAAQAKAAAIAEQAGADADAGQABAFAAAMIAAAeIABAPIABAFIADABIADgBIAIgHIAAAFQgLAPgKAAQgFAAgDgDgAgJAAQgIAFgDAEQgDAFAAAFQAAAIAEAEQAEAEAGABQAHAAALgKIAAghIgSAHg");
	this.shape_1.setTransform(73.5,27);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAQBHIAAgNQgHAHgGADQgFADgHAAQgPAAgLgMQgLgNAAgTQAAgTAMgPQAMgQAUAAQAKAAAIAIIAAgRIAAgTIgDgFIgEgBIgHACIgBgEIAagLIAFAAIAABnQAAAQABADQAAABAAABQAAAAABABQAAAAAAABQABAAAAABQAAAAABAAQAAABABAAQAAAAABAAQAAAAABAAIAHgBIABADIgbALgAgTgJQgJAJAAAUQAAATAJALQAIAKALAAQAIAAAIgJIAAguQgBgFgCgGQgEgFgEgDQgFgDgEAAQgJAAgGAIg");
	this.shape_2.setTransform(64.1,24.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAFAuIAAgDIACAAQAGgBADgCQACgCABgDIAAgJIAAgkQABgMgEgFQgDgGgHAAQgLAAgMAMIAAAvQAAAJABACQACADACABQACACAIAAIAAADIgsAAIAAgDIABAAQAHAAADgEQACgEAAgJIAAggIgBgUIgCgFIgEgBIgGABIgCgDIAbgLIAEAAIAAATQAQgTAOAAQAGAAAGADQAFAEAEAIQABAHAAALIAAAmQABAJABADQAAAAABABQAAAAAAABQABAAAAAAQABABABAAQACACAGAAIAAADg");
	this.shape_3.setTransform(53.7,26.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgZAjQgMgNAAgVQAAgWAMgNQAMgMAQAAQAQAAAJAKQAKAJAAARIg9AAQAAATAKALQAJAMANAAQAIAAAHgFQAGgFAFgMIADACQgCAOgKALQgKAKgPAAQgPAAgLgMgAgPghQgHAGgBALIAoAAQAAgIgCgEQgCgFgFgDQgFgEgEAAQgIAAgGAHg");
	this.shape_4.setTransform(44.3,27);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgUBFIAAgDQAGAAACgBQADgBABgEQABgCAAgJIAAhQQAAgPgBgEQAAgDgCgBIgEgCIgGACIgCgEIAagLIAEAAIAAB2QAAAJACACQABADACACQADABAHAAIAAADg");
	this.shape_5.setTransform(37.1,24.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAMAsQgDgEAAgIQgNALgDACQgFACgGAAQgKAAgGgHQgGgGAAgKQAAgGADgGQAEgGAKgGQAKgFAWgJIAAgDQAAgNgEgFQgEgFgHAAQgHAAgDADQgEADAAAFIAAAFQAAAFgCACQgCADgEAAQgEAAgCgDQgCgCAAgFQAAgIAIgHQAJgHAQAAQAKAAAIAEQAGADADAGQABAFAAAMIAAAeIABAPIABAFIADABIADgBIAIgHIAAAFQgLAPgKAAQgFAAgDgDgAgJAAQgIAFgDAEQgDAFAAAFQAAAIAEAEQAEAEAGABQAHAAALgKIAAghIgSAHg");
	this.shape_6.setTransform(30.1,27);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgtAtQgOgSAAgZQAAgTAJgQQAJgRAQgJQAPgJASAAQAOAAAOAHIAGACQABAAAAAAQABAAABgBQAAAAABAAQAAAAABgBQACgDABgEIAEAAIADAtIgDAAQgGgUgMgJQgLgJgQAAQgMAAgKAHQgLAGgGAPQgGAPAAAUQAAASAGANQAFAOAMAHQALAHAOAAQANAAAKgGQAKgFAMgRIADACQgKASgOAIQgNAIgSAAQggAAgSgYg");
	this.shape_7.setTransform(18.7,24.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FF0000").ss(1,1,1).p("AH4h1IhNAxIBNAxAEehFIA9AyIBQgxIhQg0Ig9AzIg9gzIg+AzIg/gzIhAAzIBAAyIA/gyIA+AygAhjhFIhIAyIAAABIhSBFIBTBGAj+hFIBTAyAmkhFIhTAyIBUBGIhUBGAmkhFIBTAyAlRgSIhSBFAj9AzIhTBGIhThGAj+hFIhTAyIBUBGAhjhFIBJAyIA+gyIg/gzIhIAzIhJgzIhSAzIhTgzIhTAzAn3h4IBTAz");
	this.shape_8.setTransform(50.4,61.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AFbgNIB5AAIAkAEIAABhIAACMIAACDIAACRIidAAIh6AAIh9AAIh8AAIiQAAIioAAIinAAIAAiRICnAAIAACRAFbDkICdAAAFbBYIAACMIAACDICdAAAFbBYICdAAAFbgNIAABlAgKn3IICAAIAAHuAgKn3QgJADgHAHQgLALAAAPQAAAQALALQALALAPAAQAPAAALgLQALgLAAgQQAAgPgLgLQgHgHgdgDgAgbgNIB/AAIB9AAIAABlIAACMIAACDIAACRAn3gNICmAAIClAAICRAAIABBlIB+AAIAACMIB9AAIB6AAAn3gNIAAnqIHtAAAirBYIABCMIABCDICQAAIB9AAIB9AAIB6AAIAACRAlRBYIAAAAIABCMIAACDICnAAIABCRAn3DkICnAAICmAAICRAAIB9AAIAACDIAACRAn3BYICmAAICmAAAn3DkIAAiMIAAhlAn3FnIAAiDAgaBYIABCMIAACDIABCRABkBYIB9AAIB6AAABkgNIAABlAisgNIABBlICRAAAlRgNIAABlADhgNIB6AA");
	this.shape_9.setTransform(50.4,50.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF33").s().p("AAWAhQgEAAgCgCQgCgCADgDQACgDAEAAIAHgBQADAAACgCIAEgHQABgCAEgFQAEgEABgCIACgLQABgHADgCQAHgFAKAKQARAPANgBQALgBAGgKIADgIQABgFACgCQADgEAFAAQAFgBACAEQACAFgJAJIgKAOQgIAIgMABQgMACgKgGQgMgLgIgDQABAGgFAIIgIAPQgDAJgEACIgIACgAhSAVQgKgQACgQQgGACgEAGQgEAEAAAGIgBAHQgDAEgGgCQgFgWgKgIQgKgGgBgCQAEgEAHAAQAHABADAFIAEAGQAEAFADgCQACAAADgGQAEgFAHAAQAGAAAEAFQACADABAJIACAOQAAAFADABQACAAADgFIAPgbQAGgJAFAAQAHABAAAJIgBAOQAAACACADQADADADAAQADgHgBgIQgBAAAAAAQgBAAAAAAQgBAAAAgBQgBAAgBAAQgCgDABgCQABgBAAgBQAAAAABgBQAAAAABAAQAAgBABAAQACgBADABQAFACABAGQACAFgCALQgCAIgDADQgEADgGgBQgFgBgEgEQgEgFgDgOIgOAbQgDAGgCABIgEABQgFAAgFgIg");
	this.shape_10.setTransform(32.4,92.8);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgzBaIAEgGQADgEgBgDIgEgHQgGgJAHgIQAHAAAEAPIAQgVQAFgGAEgBQAEgBAEACQAEADABAEIAGAQIAGgBQADgHAKgEQAEgCAOgBQAIgBAAAFQACAFgJABQgNACgGAFQgFAGgEACQgEACgGgBIgHgCIgDgGIgFgPIgDAAQgIAHgJAPQgEAFgCAFIgCAHQgCAFgGAAQgFgBgCgFgAANgoQgHgMABgNIgDAAQAAAEgDACIgFACIgHAHQgHAFgRAAQgNgBgCgGQgBgCABgFIAGgaQABgGACgCQAGgDACAEQABACgBADIgIAfQAMACAKgFQAHgDAIgIIAIgGQAHgCADAEQACADAAAHQABAHAEAAIAOglQACgCADABQADABACACQACADABAHIACAYQABAFgBADQgDAGgFgCQgDgCABgJQABgIgDgHQAAAJgLAPQgFAJgFAAIgEgBg");
	this.shape_11.setTransform(8.1,86.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#CC0000").s().p("AgaAaQgLgLAAgPQAAgPALgLQAHgHAJgDQAeADAHAHQALALAAAPQAAAPgLALQgLALgQAAQgPAAgLgLg");
	this.shape_12.setTransform(50.3,3.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#006699").s().p("AD3C+QgBgDgFgEIgHgFIgDgHIgJgXQABgDADgBQADAAADACQACABAEAJIAEANIAGAFIAFAEIAUABQAGAAACgCQADgDABgJIAGgIIAAgHQAAgEACgCQAFgBACAGQACADgBAFIgEALIgJAQIgEAFQgCACgFAAgAEFChIAAgIQAAgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAAAIACgEQAEgHgGgFIACgFQAHgBADACQABACAAAJIAAAIIgDAGIAAAIQgBAEgEABQgEAAgBgGgAEcCFQgDgCAAgDIAAgQIACgEIABgGQAAgEACgCQADgBACACIADAEQABAGgEALIAAAHQAAAEgCACQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAIgCAAgAD5B5IgBgFIAAgRQAAgBAAgBQAAAAAAgBQAAAAAAgBQAAAAABgBQAAAAABgBQAAAAABgBQAAAAABAAQAAAAABAAIAAgBIAFABQAAABAAAAQABAAAAABQABAAAAABQAAABABAAIgCAEIgBAJIAAAIQgBAFgEABQgBAAgBAAQgBAAAAgBQgBAAAAAAQAAgBAAAAgAjzhvQgGgCAAgGQAAABAAAAQAAABgBAAQAAABAAAAQgBAAAAAAQgBABgBAAQAAAAgBAAQAAAAgBAAQAAAAgBgBIgIgFQgEgDgHAAIgMgBQgGgBAAgDQgBgEAHgCQAPgDAOAFQgBgEADgFQACgFAFgBQAKAMADARIAGgXIACgGQgEABgEgCIgFgRIgCgBQgSAJgmgGQgDgFAHgEQADgBAJABIARABQANAAAFgIQAGgEAHAHQAEAEACAJQABAEACAAQAAABABgBQAAAAABAAQAAAAABgBQAAAAABgBQAHgLADgMQABgEACgBQAFgCADAIIADAPQAAAGgCACIgEACQgBABAAAAQgBAAAAgBQgBAAAAAAQAAgBAAAAIgCgFQgDAIgFAFIABABQABABAAAIQAAAKAIAFQAIAFAAADQgBAGgJgCQgKgEgDgMQgDACABAIQAAAJgDACQgCABgDAAIgEABQgEAAgDgDg");
	this.shape_13.setTransform(65.6,81.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#33FF66").s().p("Al6AmQgBgDABgCQABgEAFgEQAGgFAAgEQAIgBAJAFQAJAGADgBQACgBAEgIIAKgTIAFgGIgGgGQgEgEgKgGQACADgCADIgEAHQgCAKgCACQgGAIgMgFQgFgCgJgKIgFAEQgDACgDgDQgDgDAEgGQAFgIAGABQAEAAAHAJQAFAJAGgBQgBgEAEgGQAFgHAAgDIAAgHQACgFAHABQAMABAHAKIAGAGQAFACAHgEIAMgEQAEABACADQACADgCACIgHADIgMAFQAGACADAFIADAIQACAGADACIAGADQACAFgGABQgDABgEgCQgIgFgDgIQgDgJgDgBQgGAAgEAIIgIAQQgHAPgJgBQgEAAgIgGQgHgFgGADIgFAHQgCAEgDAAQgBAAAAgBQgBAAAAAAQgBAAAAgBQgBAAAAgBgADOAhQgIgCgBgDIgBgHIgDgIQAAgEACgFQAFgMAAgLQgMAJgBAOQgBAIgCABQgEAEgJgFQgKgGgBgGIADgLIABgMQADgIAGACQAEABAAAGIgDAIQgCAJABAGIADgBQAGgVASgPIAFgDQAEgBABACIABAFQgBAWgGAXQAAADABADQAAAAABABQAAAAABABQAAAAABAAQAAAAABAAQAEAAAAgHQABgQAHgNQACgEADgCIAJgBQAGABABADQAAABAAAAQAAABgBAAQAAABAAAAQgBABAAAAIgEAEQgDADgBAIQAAAJgCADIgFAHQgEADgBADQgBAFgCADQgCACgDAAIgGgCgAExAeQgCAAgCgEIgIgGQgFgEAAgEQAAgBAAgBQAAAAABgBQAAAAAAgBQABAAAAgBQABAAAAgBQABAAAAAAQABgBAAAAQABAAABAAQACAAADACQACADAAACQAIgKAHgPIAEgJQAHgIAKABQAKACADAKIAdgIQAKgBAAAFIgEAFQgQAIgLABQgSABgGgOQgGAGgFAKQgLASgBAJQgDAHgDAAIgBAAg");
	this.shape_14.setTransform(58.6,78.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AFbH4IAAiRIh6AAIB6AAIAACRIh6AAIAAiRIAAiDIh9AAIAAiMIh+AAIA+gzIg/gyIiRAAIhSAyIhTgyIClAAIilAAIhTAyIBTAzIimAAIBTgzIhTgyICmAAIimAAIBTAyIhTAzIBUBGIhUBGIAAiMIAAhlIAAnqIHtAAQgJADgHAHQgLALAAAPQAAAQALALQALALAPAAQAPAAALgLQALgLAAgQQAAgPgLgLQgHgHgdgDIICAAIAAHuIhNAvIBNgvIAABhIhNgyIhQgzIB5AAIAkAEIgkgEIh5AAIh6AAIh9AAIh/AAIB/AAIB9AAIg+AyIA+AzIh9AAIA/gzIg/gyIhAAyIBAAzIB9AAIAACMIAAiMIB6AAIAACMIh6AAIB6AAIAACDICdAAIAACRgAF7HEQgEAAAAADIAIAXIAEAHIAHAGQAEADABADIAeABQAGAAACgBIAEgGIAIgPIAFgLQABgGgCgDQgDgFgFABQgBACAAAEIgBAGIgFAJQgBAJgDADQgDABgFAAIgUAAIgGgFIgGgEIgEgOQgDgIgDgCQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAIgBAAgAGgG0IgDAEQAGAFgDAHIgCAEQgBABAAAAQAAAAAAABQAAABAAAAQAAABABAAIgBAJQABAFAFAAQADAAABgFIABgHIADgGIAAgIQAAgJgCgCQgBgCgEAAIgEABgAG3GUQgCABAAAEIgBAHIgCADIAAARQAAADACABQAEACACgDQACgDAAgEIgBgGQAFgMgBgGIgDgEIgDgBIgCABgAGRGSQAAAAAAAAQAAABgBAAQAAABAAABQAAAAAAABIAAASIABAEQAAABABAAQAAAAABABQAAAAABAAQAAABABAAQAEgCABgEIAAgJIABgIIACgEQAAgBAAgBQgBAAAAgBQAAAAgBgBQAAAAgBAAIgFgCIAAABIAAAAQgBAAAAAAQgBABAAAAQAAAAgBABQAAAAgBABgAEVEeQgCAFABADIADAIIABAHQABAEAHACQAJADADgEQACgCABgGQABgCAEgEIAFgGQACgEAAgJQAAgJADgDIAEgDQABgBAAAAQABgBAAAAQAAgBAAAAQAAgBAAAAQAAgEgHgBIgIABQgEADgBAEQgIANgBAQQAAAHgDABQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBAAgBQgCgCAAgDQAHgZAAgWIAAgEQgCgDgDABIgGADQgRAPgGAXIgDABQgCgHADgJIACgJQAAgFgEgBQgGgDgCAJIgBALIgDAMQABAGAKAGQAIAGAFgEQABgCABgHQABgQAMgJQAAALgFAOgADhH4Ih9AAIAAiRIAACRIh8AAIgBiRIABCRIiQAAIgBiRICQAAIB9AAIh9AAIAAiDIB9AAIAACDIB9AAIAACRgAh8GRQgDACgBAHIgCAMQgBADgEAEQgEAEgBADIgEAHQgCACgDAAIgHAAQgEAAgCADQgDADACACQACACAEAAIAMAAIAIgBQAEgDADgIIAIgPQAFgJgBgHQAIAEAMALQAKAGAMgBQAMgCAIgIIAKgOQAJgKgCgFQgCgEgFABQgFABgDADQgCADgBAFIgDAIQgGAKgLABQgNABgRgPQgHgHgFAAIgFABgAlQH4IAAiRICnAAIABCRgAkGG7QAGALAIgDQACgBADgGIAOgcQADAPAEAEQAEAEAFABQAGABAEgDQADgCACgJQACgMgCgEQgBgGgFgCQgDgBgCABQgBAAgBAAQAAABgBAAQAAABAAAAQgBABAAAAQgBADACACQABABAAAAQABAAAAABQABAAABAAQAAAAABAAQABAIgDAHQgDAAgDgDQgCgDAAgDIABgNQAAgJgHgBQgFgBgGAKIgPAcQgDAFgCgBQgDAAAAgFIgCgQQgBgIgCgDQgEgFgGAAQgHAAgEAFQgDAFgCABQgDABgEgEIgEgHQgDgFgHAAQgHgBgEAFQABACAKAGQAKAHAFAXQAGACADgDIABgHQAAgGAEgGQAEgFAGgCQgCARAKAPgAn3H4IAAiRICnAAIinAAIAAiDICnAAIAACDIAACRgAnXGuIAEAHQAAADgDAEIgDAGQABAFAGABQAFAAADgFIACgHQABgFAEgFQAKgPAHgHIAEAAIAFAPIADAGIAHACQAHABAEgCQADgCAGgGQAFgFANgCQAJgBgBgFQgBgFgIABQgOABgDACQgKAEgEAHIgFABIgGgQQgCgEgEgDQgEgCgEABQgEABgGAGIgQAVQgDgPgIAAQgHAIAHAJgAmeEmQgBANAHAMQAGADAIgLQALgPgBgJQAEAHgBAIQgBAJADACQAEACADgGQACgDgBgFIgDgYQgBgHgCgDQgBgCgDgBQgDgBgCACIgOAlQgEAAgBgHQAAgHgCgDQgDgEgIACIgJAGQgIAIgHADQgKAFgLgCIAIgfQABgDgCgCQgCgEgFADQgCACgBAGIgGAaQgBAFABACQABAGANABQASAAAGgFIAIgHIAGgCQADgCgBgEgAFbFnIAAiDICdAAIAACDgAF1EhQgBAAAAABQAAAAgBABQAAAAAAABQAAABAAAAQAAAEAFAEIAIAHQACAEACAAQAEABACgJQACgJAKgTQAGgKAFgFQAGANASgBQALAAAQgJIAEgFQAAgEgJABIgeAHQgCgJgLgCQgKgCgGAIIgEAKQgHAPgJALQAAgDgCgCQgCgCgDAAQAAAAgBAAQgBAAAAAAQgBAAAAABQgBAAAAABgAFbFngADhFngABkFnIAAiDIB9AAIAACDgAipFnIgBiDICRAAIAACDgAlQFnIAAiDICmAAIgBiMIAAAAICRAAIABCMIiRAAIABCDgAkcEpQAAAFgFAEQgGAFgBADQgBADACADQAAAAABABQAAAAABABQAAAAABAAQAAAAABAAQADAAACgEIAEgGQAGgEAHAFQAJAHADAAQAKAAAGgPIAIgQQAFgJAFABQAEABADAKQADAHAHAFQAFADADgBQAFgBgCgFIgFgEQgEgCgBgFIgEgJQgDgGgFgCIAMgFIAGgCQACgDgCgDQgCgDgDAAIgMADQgIAEgFgCIgFgGQgIgKgLgBQgIgBgCAFIAAAIQAAADgEAHQgEAGABADQgGABgGgIQgGgKgFAAQgGAAgFAIQgDAFACADQADADAEgCIAFgEQAIALAFADQAMAFAGgIQADgEACgKIADgGQACgEgBgDQAKAGAEAEIAGAHIgFAGIgKAUQgEAHgCABQgEACgIgGQgJgFgHAAIgCAAgAhaDEQAEADAGgBQAEAAABgCQADgCAAgIQAAgIADgCQACALALAEQAIACABgGQABgDgIgEQgIgFAAgKQAAgIgBgCIgBgBQAEgEADgJIACAFQABABAAAAQAAAAABABQAAAAABAAQAAAAABAAIAEgCQABgDAAgGIgDgPQgDgHgEACQgCAAgBAFQgDALgIALQAAABgBABQAAAAgBAAQAAABgBAAQAAAAgBAAQgCAAgBgEQgCgJgEgEQgHgHgGAEQgEAIgOAAIgRgBQgJgBgCABQgIADADAGQAmAGASgKIACABIAGASQAEABADAAIgCAFIgGAXQgCgRgLgMQgEACgDAFQgCAEABAFQgPgGgOADQgIACABAFQABADAFABIANAAQAHABAEACIAIAGQAAAAABAAQABAAAAAAQABAAAAAAQABAAAAAAQABAAAAgBQABAAAAgBQAAAAABgBQAAAAAAgBQAAAGAGADgAlQFngAlQFngAlQFngAFbDkIAAiMICdAAIAACMgABkDkgABkDkIh9AAIgBiMIB+AAIAACMgAlQDkIBThGIBTBGgAj9CeIBShGIABCMgAlQDkgAlQDkgAlQDkIgBiMIAAAAIAAhlIBTAyIhTAzIBUBGIhTBGgAlQDkgAlQDkgAlQDkIhThGIBShGIhSBGIBTBGIinAAIBUhGIhUhGICmAAIAAAAIABCMgAn3DkgAj9CeIhUhGICmAAIAAAAIhSBGgAFbBYIBQgyIhQAyIg9gzIg9gyIB6AAIg9AyIA9gyIAABlIAAhlIBQAzIBNAygADhBYIA9gzIA9AzgADhBYgADhBYgADhBYIAAhlIA9AyIg9AzgACjAlIA+gyIAABlgADhBYgABkBYgABkBYIhAgzIBAgyIA/AyIg/AzIAAhlIAABlgAirBYIBIgzIBJAzgAgaBYIgBhlIA/AyIg+AzgAhjAlIBIgyIABBlgAirBYIgBhlIBJAyIhIAzgAlRBYIBTgzIBTAzgAj+AlIBSgyIABBlgAlRBYgAlRBYgAmkAlIBTgyIAABlgAn3BYgAEeAlgAAkAlgAhjAlgAhjAlIhJgyICRAAIhIAygAmkAlgADhgNgAlRgNg");
	this.shape_15.setTransform(50.4,50.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.לוחשנה, new cjs.Rectangle(-1,-0.8,102.8,102.8), null);


(lib.לוחהשנה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgcA0IAAgDQAJAAAIgEQAJgFAGgKQAIgLADgNQgMAIgIAAQgKAAgIgIQgHgIAAgNQAAgNAHgKQAJgNAOAAQAMAAAJAKQAKANAAASQAAAQgIAOQgIAPgOAJQgLAIgOAAgAgMgoQgFAGAAALQAAAQAGAIQAFAGAGAAIAIgCQAFgBADgDIABgOQAAgIgCgIQgCgIgFgEQgEgFgFAAQgGAAgFAGg");
	this.shape.setTransform(58.7,38);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgXAjQgIgOAAgUQAAgQAFgNQAFgMAJgGQAGgFAGAAQAMAAAJAMQALAOAAAZQAAAQgFANQgFAMgIAFQgIAGgGAAQgOAAgJgRgAgIgpQgFAGgCANQgCANAAAMQABAUAFANQADALAIAAQADAAAFgEQAEgDACgJQAEgMAAgWQAAgRgEgLQgCgJgFgDQgDgDgEAAQgEAAgEAFg");
	this.shape_1.setTransform(51.2,38);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAjQgIgOAAgUQAAgQAFgNQAFgMAJgGQAHgFAFAAQALAAAKAMQALAOAAAZQAAAQgFANQgFAMgHAFQgIAGgHAAQgNAAgKgRgAgIgpQgFAGgCANQgBANgBAMQAAAUAGANQADALAIAAQAEAAAEgEQAEgDADgJQADgMAAgWQAAgRgDgLQgEgJgDgDQgDgDgFAAQgEAAgEAFg");
	this.shape_2.setTransform(43.7,38);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AggAzIAAgDQAagYAJgOQALgOAAgNQAAgJgGgGQgFgGgIAAQgHAAgFAEQgGAEgDAIIgDAAQACgNAIgHQAHgIAMAAQALAAAHAIQAJAIAAAKQgBAIgDAIQgFAKgMAOIgWAYIAZAAIALgBQADAAADgCIAEgFIADAAIgHATg");
	this.shape_3.setTransform(36.1,37.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AACjBIgDGD");
	this.shape_4.setTransform(18.8,63.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AABjBIgBGD");
	this.shape_5.setTransform(27.7,63.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AACjBIgDGD");
	this.shape_6.setTransform(38.1,63.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AACjBIgDGD");
	this.shape_7.setTransform(49.4,63.9);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AABjBIgBGD");
	this.shape_8.setTransform(59.8,63.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AAAjBIABGD");
	this.shape_9.setTransform(71.8,63.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AleABIK9gB");
	this.shape_10.setTransform(47.2,53.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AleAAIK9AA");
	this.shape_11.setTransform(47.2,74.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AleAAIK9AA");
	this.shape_12.setTransform(47.2,63.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("Ak/i5IJ/AAIAAFzIp/AAg");
	this.shape_13.setTransform(47.2,63.9,1.098,1.041);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("Ak/C6IAAlzIJ/AAIAAFzg");
	this.shape_14.setTransform(47.2,63.9,1.098,1.041);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("Ak/i5IJ/AAIAAFzIp/AAg");
	this.shape_15.setTransform(47.2,36.1,1.098,0.455);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00FF33").s().p("Ak/C6IAAlzIJ/AAIAAFzg");
	this.shape_16.setTransform(47.2,36.1,1.098,0.455);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AAAhvQAWAAAPAPQAPAPAAAWIAAB3QAAAVgPAPQgPAQgWAAQgUAAgQgQQgPgPAAgVIAAh3QAAgWAPgPQAQgPAUAAg");
	this.shape_17.setTransform(20.4,21.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgkBhQgPgQAAgVIAAh3QAAgWAPgPQAPgPAVAAQAVAAAPAPQAQAPAAAWIAAB3QAAAVgQAQQgPAPgVAAQgVAAgPgPg");
	this.shape_18.setTransform(20.4,21.6);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AAAhvQAWAAAPAPQAPAPAAAWIAAB3QAAAVgPAPQgPAQgWAAQgUAAgQgQQgPgPAAgVIAAh3QAAgWAPgPQAQgPAUAAg");
	this.shape_19.setTransform(74.8,21.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgkBhQgPgQAAgVIAAh3QAAgWAPgPQAPgPAVAAQAVAAAPAPQAQAPAAAWIAAB3QAAAVgQAQQgPAPgVAAQgVAAgPgPg");
	this.shape_20.setTransform(74.8,21.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AmBndIMDAAQBcAAAABcIAAMDQAABchcAAIsDAAQhcAAAAhcIAAsDQAAhcBcAAg");
	this.shape_21.setTransform(47.8,47.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AmBHeQhcAAAAhcIAAsDQAAhcBcAAIMDAAQBcAAAABcIAAMDQAABchcAAg");
	this.shape_22.setTransform(47.8,47.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.לוחהשנה, new cjs.Rectangle(-1,-1,97.6,97.6), null);


(lib.יומן = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AASAqIgKgZIgBAAIgKAYIgTABIAEgPQAOgCAFgGQAFgHAAgOQAAgJgCgDQgBgEgGAAIgFgBQgEgBgCgDQgDgCABgEQAAgHAEgFIACAAQABAEAFABIAFABQAKAAAAAKIgBALIAAAMQAAAFAGALQAHALgBAIQAAAFgDAEg");
	this.shape.setTransform(82.7,19);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgFANQgIgDAAgKIABgEQABgEADgDQADgCAEAAIABAAQAAAAAAgBQAKAAADAKQAEAIgHAGQgEAFgGAAIgFgCg");
	this.shape_1.setTransform(83.8,13.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgEGTQgDgDgBgKQgJjFAHjEQABgMgDgGQgIgHgEgFQgEgGABgKIADgRQAEgRgEgfQgFgjABgOQABgNAFgQIAIgdQAThJgRhIQgEgSACgIQACgHAGgEQAGgEAGADQAHAEACAPQAHApACAVQADAjgEAcIgFAiQAAANACASIAGA6QADAUAAARQAAAIgHApQgEAigBArQgCBKABBlIADCvQAAARgEAGQgDAFgHACIgDAAQgDAAgDgDg");
	this.shape_2.setTransform(83.4,52);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAHAqIAAgyQAAgFgBgDQgCgCgGgBQgLgCAAgKQAAgGAEgEIACAAQAAAEAGABIAFABQAFABADADQACADAAAKIAAAzQAAAHgFACg");
	this.shape_3.setTransform(25.7,83.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAQApQACgEAAgEIgBgNIAAgNQAAgRAIgKIgqAAQgLAAAAgJQAAgHAEgFIACAAQACAFAFAAIAjAAQAFAAACABQACACAAAGIAAADQAAADgCAEQgDAFAAAJIACAPIACAPQAAANgLACgAgbApQACgCAAgEIgBgHIAAgHQAAgPALAAIADABIAAACQgEACAAAHIAAAHIABAIQAAAIgLABg");
	this.shape_4.setTransform(27.3,19);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAFAoQACgCAAgFIgBgMIAAgMQAAgTANgKIghAAQgMAAAAgJQAAgHAFgFIACAAQABAFAGAAIAdAAQAGAAABACQACACAAAFQAAAGgCACQgDACgDAEQgDAFAAAGIABAOIABAPQAAANgLACg");
	this.shape_5.setTransform(58.9,19);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgeApIADgPIArAAQACgJAAgOQAAgNgCgEQgDgFgKAAIgTAAQgLAAAAgJQAAgHAEgFIACAAQABAFAGAAIAOAAQAMAAAFADQAFACABAFQACAFAAALIAAAKQAAARgHAIIANAAIgDAPg");
	this.shape_6.setTransform(113,18.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AAXAqQAAgGgEgDIgfgkQgHADAAAHQAAAFAEAIQAHAIAAAGQgBAHgFAAIgNAAIAAgCQADgBAAgEIgCgKQgDgHAAgEQAAgMAOgHIgJgKQgFgHAAgHQAAgGAFgFIACAAQABAGADAEIAbAfQABgKAHgKQgMgBAAgKQAAgGADgEIACAAQABAEAFABIAFACQAJACAAAHIgBAFIgIABQgHAMgBAHQAAAFAFAFIAHAIQAFAGAAAHQAAAGgFAFg");
	this.shape_7.setTransform(131.7,19);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAAoBIAAQD");
	this.shape_8.setTransform(71.1,51.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AiOAAIEdAA");
	this.shape_9.setTransform(27.6,71.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAAoBIAAQD");
	this.shape_10.setTransform(41.9,51.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AAAoBIAAQD");
	this.shape_11.setTransform(96.5,51.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AAAoBIAAQD");
	this.shape_12.setTransform(119,51.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AAAoBIAAQD");
	this.shape_13.setTransform(143.6,51.4);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AhWh7ICsAAQAmAAAAAlIAACtQAAAlgmAAIisAAQglAAAAglIAAitQAAglAlAAg");
	this.shape_14.setTransform(48.6,51.4,2.84,4.147);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AhVB8QgmAAAAgmIAAisQAAglAmAAICrAAQAmAAAAAlIAACsQAAAmgmAAg");
	this.shape_15.setTransform(48.6,51.4,2.84,4.147);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AiRl/IEjAAQBAAAAAB0IAAIXQAAB0hAAAIkjAAQg/AAAAh0IAAoXQAAh0A/AAg");
	this.shape_16.setTransform(119,51.4,1.682,1.338);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AiRGAQhAAAAAh0IAAoXQAAh0BAAAIEjAAQA/AAAAB0IAAIXQAAB0g/AAg");
	this.shape_17.setTransform(119,51.4,1.682,1.338);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AhWh7ICsAAQAmAAAAAlIAACtQAAAlgmAAIisAAQglAAAAglIAAitQAAglAlAAg");
	this.shape_18.setTransform(125.7,51.4,3.379,4.147);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#0099CC").s().p("AhVB8QgmAAAAgmIAAisQAAglAmAAICrAAQAmAAAAAlIAACsQAAAmgmAAg");
	this.shape_19.setTransform(125.7,51.4,3.379,4.147);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AhWh7ICsAAQAmAAAAAlIAACtQAAAlgmAAIisAAQglAAAAglIAAitQAAglAlAAg");
	this.shape_20.setTransform(41.9,51.4,3.379,4.147);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#0099CC").s().p("AhVB8QgmAAAAgmIAAisQAAglAmAAICrAAQAmAAAAAlIAACsQAAAmgmAAg");
	this.shape_21.setTransform(41.9,51.4,3.379,4.147);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.יומן, new cjs.Rectangle(-1,-1,169.7,104.9), null);


(lib.יוטיוב = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("ADSCzImjAEIDPltg");
	this.shape.setTransform(56.9,50,1,1,90);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgCi1IDUFoImjADg");
	this.shape_1.setTransform(56.9,50,1,1,90);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E9371B").s("#000000").ss(1,1,1).rr(-54.1,-47.25,108.2,94.5,10.1);
	this.shape_2.setTransform(54.1,47.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.יוטיוב, new cjs.Rectangle(-1,-1,110.2,96.5), null);


(lib.תמונהעםדמות2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgaAfQgFgBgFgEIgIgIQgFgFgEgCQgEgBgJgBQgJgDAAgJQAAgGAFgFQAFgEAGgBQAKgBAOAHQANAIAFAGQAMABALgBIAIgBQAEgCAEgFIARgSQAJgHAMABQAIABADADQAHAGgCAJQgCAIgJACIgHACIgEACIgPAPQgEAGgHADQgHAEgMABIgTABg");
	this.shape.setTransform(42.3,37.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgLARIgEgKQgCgJAAgEQABgJAFgEQAEgCAGgBQAIAAAFAEQAHAFgCAIIgDAHIgBAKQgCAIgJADIgCAAQgHAAgEgGg");
	this.shape_1.setTransform(41.9,33.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhvBAQgFgFgCgJIgDgRIgGgUQgCgIAAgPQAAgKACgFQACgJAHgDQAHgDAJAFQAJAFAGABQAAgJAHgGQAGgHAJgCQASgCAPAPQADgUAMgGQAMgEAJAIQAIAEAIAMQABgHAEgFQAFgFAGgCQAHgBAGADQAGADADAGIADAIQADAEADABIAIgBQAFAAAFADQAFADABAFQACAGACADQADADAGgBIALAAQAJACACAMIAAARIADAWQACANgFAIQgCAFgFADQgGADgFgBQgHgCgCgIQgDgIADgHQgGACgGgEQgGgDgCgGQgBgEgCgBIgEABQgFABgFgDQgEgDgCgEIgBgIQgBgFgDgBQAAAGgEAFQgEAFgGABQgGABgFgDQgGgDgCgFQgBgKgDgFQgBgEgHgFIgGgGQACAFgBAHIgBAPQABALgBADQgDAJgMABQgJABgFgFQgDgDgDgNQgEgLgUgUQgEASACAQQADAQgDAHQgFAKgMgCQgMgCgBgMQgBAFADAIQAEAIAAAEQAAAKgJADIgGABQgGAAgFgEgAhbAcIAAgCQAAgGgCgEIgCgDIAAAAQAAAFAEAKgAhkABIABACIAAABIABABIABACIABAAIgBgCIAAgBIgBgDg");
	this.shape_2.setTransform(42.6,16.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgcAyQgFAAgEgCQgHgEAAgIQgBgIAIgEQAEgDAIAAQAGAAACgCIAEgDIAIgGIAGgHIAIgFQACgCAAgDQAFgLAAgFQgCgKABgFQABgEADgEQAEgDAEAAQAKgBAFAJQACAEABALIgBAPQgBAKgJANIgEAGIgHAGIgGAGIgUAQIgGAEIgJABIgKgBg");
	this.shape_3.setTransform(50.3,51.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAqAzIgOgDQgIgDgFgCQgJgEgNgMIgOgJIgWgSQgQgPgEgHQgDgGAAgFQgBgIAFgFQAFgGAIgBQAIABAEAGIADAKQABAFANALIAOANIAKAGIAMAJQAPAKAPADQANACADACQAFAFAAAFQABAHgEAGQgFAFgHAAg");
	this.shape_4.setTransform(31.7,49.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgBAPQgQgCgFgIQgDgFACgHQADgHAIgBIAPABIALAAQAKADABALQAAAJgJAFQgEACgGAAIgHgBg");
	this.shape_5.setTransform(37.1,73.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgDBAQgEgBgGgGIgIgFQgFgEgBgDQgCgDABgGIABgKIgBgJIABgKIAAggIABgIIADgGIAEgPQADgEAHgEQAEgBAEAAQAHAAAEAHQADAGgCAIIgEAHQgDAFgCAGIgBALIAAApQAKgEAIADQAJAEABAJQABAKgJAFIgIADIgIAFIgFABIgDAAg");
	this.shape_6.setTransform(47.1,68.5);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AABA4QgIAAgDgIQgDgEAAgKIABgTIgBgLIgDgIIgBggQAAgIADgFQAFgHAJAAQAJAAAFAFQAHAHgGAKIgDAGIAAAGQAAAIAEAPIAAAjQAAAKgDAEQgEAHgHAAIgBgBg");
	this.shape_7.setTransform(38.1,69.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgTAtQgHgIAHgKIAEgFIACgIQAAgJgCgGIgBgEIAAgEIgDgCQgGgFgBgIQAAgHAGgFIAFgEIAEgFQADgEAEAAIAIAAQAMgBAFAEQAEADACAJIgCAHQgCALgFACIgFADIAAAGIACAIQAAANgCASQgBAHgDADQgEAHgKAAQgIAAgGgGg");
	this.shape_8.setTransform(56.9,28.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AACA1QgCgBgCgFIgEgGIgIgOQgFgLgBgJIgBgHIgEgLQgCgGAAgMQAAgHABgDIAFgHQAEgEAEgCQAEgCAGAAQAKgBAFAEQADACADAHIAEAIQACAIgGAGQgFAGgIgBQACAEABALQABAKAGAJIAHAJQAEAEABAFQACAFgCAEQgCAFgEACQgDADgHAAQgFAAgEgDg");
	this.shape_9.setTransform(27.6,30.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s().p("AgCAhQgFgBgEgFQgCgEAAgFIABgLQgDgMAAgHQgBgNAIgFQAIgGAIAIQAEADACAKQACAOAAAKQABAQgJAHQgDACgEAAIgDgBg");
	this.shape_10.setTransform(41.9,34.1);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgJAdQgEgMAAgRQAAgQAEgMQAEgNAFAAQAGAAAEANQAEAMAAAQQAAARgEAMQgEANgGAAQgFAAgEgNg");
	this.shape_11.setTransform(62.9,68);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1.9,0,0,3).p("ACQAAQAAAUgqAOQgqAOg8AAQg6AAgrgOQgqgOAAgUQAAgTAqgOQArgOA6AAQA8AAAqAOQAqAOAAATg");
	this.shape_12.setTransform(42.2,57,0.85,1,90);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AhlAiQgqgOAAgUQAAgTAqgOQArgOA6AAQA7AAArAOQAqAOAAATQAAAUgqAOQgrAOg7AAQg6AAgrgOg");
	this.shape_13.setTransform(42.2,57,0.85,1,90);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1.9,0,0,3).p("AAXAAQAAAKgHAGQgHAHgJAAQgJAAgHgHQgGgGAAgKQAAgIAGgHQAHgHAJAAQAJAAAHAHQAHAHAAAIg");
	this.shape_14.setTransform(46.4,27.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgPAQQgHgHAAgJQAAgIAHgIQAHgGAIAAQAKAAAGAGQAHAIAAAIQAAAJgHAHQgGAHgKAAQgIAAgHgHg");
	this.shape_15.setTransform(46.4,27.4);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1.9,0,0,3).p("AAXAAQAAAJgHAHQgHAHgJAAQgJAAgHgHQgGgHAAgJQAAgJAGgHQAHgGAJAAQAJAAAHAGQAHAHAAAJg");
	this.shape_16.setTransform(37.3,27.6);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgQAQQgGgHAAgJQAAgIAGgIQAIgGAIAAQAJAAAHAGQAHAIAAAIQAAAJgHAHQgHAHgJAAQgIAAgIgHg");
	this.shape_17.setTransform(37.3,27.6);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1.9,0,0,3).p("ACHAAQAAA4goAnQgnAog4AAQg3AAgogoQgngnAAg4QAAg3AngnQAogoA3AAQA4AAAnAoQAoAnAAA3g");
	this.shape_18.setTransform(42.6,31.2);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AheBgQgogoAAg4QAAg3AognQAngoA3AAQA4AAAoAoQAnAnAAA3QAAA4gnAoQgoAng4AAQg3AAgngng");
	this.shape_19.setTransform(42.6,31.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#663300").ss(19,0,0,3).p("AmDmjIMHAAQAAAgAgAAIAAMHQggAAAAAgIsHAAQAAggggAAIAAsHQAgAAAAggg");
	this.shape_20.setTransform(42,42);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AmDGkQABghghAAIAAsGQAhABgBghIMGAAQAAAhAhgBIAAMGQghAAAAAhg");
	this.shape_21.setTransform(42,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.תמונהעםדמות2, new cjs.Rectangle(-9.5,-9.5,103,103), null);


(lib.תמונה2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AALikIA2AAIAhAAIBQAAIAAD/IAAAPIAAAOIAAAQIAAA3IlCAAIghAAIAAljICdAAQgCgDAAgFQAAgHAFgGQAFgFAIAAQAHAAAFAFQAFAGAAAHQAAAFgCADQAAABgBABQgBABgBACQgFAFgHAAQgIAAgFgFQAAgBgBAAQgCgCAAgC");
	this.shape.setTransform(17.8,19.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("AgMANIgBgBIgCgEQgCgEAAgEQAAgHAFgFQAGgFAGAAQAHAAAGAFQAFAFAAAHQAAAEgCAEIgBACIgCADQgGAFgHAAQgGAAgGgFg");
	this.shape_1.setTransform(17.3,1.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AipBJQgEAAgBgCQgCgBAAgDIAAgSQAAgEACgDIADgEIACgBIgEAAIgBgaIABgCIgBgbIABAAQgFgHACgLQACgLAIgHQAJgHALABIAEAAQAFgDAGgBQAKAAAIADQAIAFAEAIIABACQAFgLAKgFQAKgDAMADQAKAFAFAIIAIABQAFABAFADQACgKAHgFIAAAKQAAADACADIABABIgFAFQgJAJgXAKQgFADAAACQAAAEAFAAQADABAFgCQAWgMALgKIAEgFIAJABIABAAIAAADIgCAIIAAADIgDAEIgBAIQAAADACADQADADACgCQAAgBABAAQAAAAAAgBQAAgBABAAQAAgBAAgBIAAgEQAEgEAAgDIgBgDIACgEIAAgDIACgEQABAAAAgBQAAAAAAAAQAAgBAAAAQAAgBgBAAIAMAAIAAABIgBAGIgCAFIAAAFIgBAFQAAABAAAAQAAABAAABQAAAAABABQAAAAAAAAQACAEAEgCQACgBABgEIAAgFIAEgPIAAgEIAAAAQABAIACADIACAFIAAAFQAAAGACAEIACADQAFADADgDQACgCgBgEIgCgGIgBgJIgDgHIgCgGIACAAQAAABAEADIAOAIIACAFQADADADgCQAEgDgBgEQgBgFgJgGIgNgHIACgIIAAgVIABAAQAJABAIAHQAHAFADAJIAEgDQAEgEAGgDQAKgFALAEIAFADQAEgCAEgCQALgCAJAEQAJAEAFAJIADAFQAHAFAEAJIABAEIAAAPIgDAIIADADIAAACIAAAQIgCAFIAAAUIgDAAIAAAaIgegBIAAgBIgHAAIAAABIgPgBIAAACIgZgBIAAACIgTAAIAAAAIgdgBIAAAAIgYgBIAAABIgagBIAAACIgdgBIAAgBIgHgBIhOAAIAAACIgZgBIgCAEg");
	this.shape_2.setTransform(17.8,30.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#663300").s().p("AAjAwIgCgDQgCgEAAgFIAAgGIgCgEQgCgEgBgHIAAAAIAAAEIgEAOIAAAFQgBAFgCAAQgEACgCgDQgBgBAAAAQAAgBAAAAQAAgBAAAAQAAgBAAgBIABgEIAAgGIACgFIABgGIAAgBIgMAAQAAABABAAQAAAAAAABQAAAAAAABQgBAAAAAAIgCAEIAAAEIgCADIABAEQAAACgDAEIAAAFQAAAAgBABQAAABAAAAQAAABgBAAQAAABAAAAQgDACgDgDQgCgCAAgDIABgIIADgFIAAgCIACgJIABgDIgCAAIgJAAIgEAEQgLAKgWAMQgFACgDAAQgFAAAAgFQAAgCAFgDQAXgKAJgJIAFgEIgBgBQgCgDAAgEIAAgJIAAgDIAAgEIgBgLIAAgKIABgJIAAgEIAAgBQALAGAXAEQAPACAHgBIADABQAGACAHAAIAAAHIABAIIAAAUIgCAHIANAIQAJAFABAFQABAEgEADQgDADgDgEIgCgEIgOgIQgEgDAAgCIgCAAIACAGIADAHIABAJIACAGQABAFgCABQAAABgBAAQAAABAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBgBQAAAAgBgBg");
	this.shape_3.setTransform(18.4,25.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FF9900").s().p("AAFAxQgEgEgBgFQAAgGAEgEQADgFAGgBQAEgBAFACQAJAEgBALQgBAFgEAEQgEAEgGAAQgFAAgFgEgAgPATQgEgDgBgFQgBgGACgEQAFgIAKABQAJABACAJQAEAJgIAGQgDAEgGAAQgFAAgEgEgAAeAQQgEgHACgGQACgIAJgBQAKgCAFAIQAFAFgEAIQgDAIgJABIgCAAQgGAAgFgGgAg2ACQgDgIAEgGQADgFAHgBIAGAAIgEgDQgHgIAEgJQAFgIAJAAQAHAAAEAFQAEAFAAAGQgBAJgJAEIgIAAIABABQAIAFgCAKQgBAIgKADIgEAAQgJAAgEgIgAADgaQgDgEgBgFQgBgIAFgGQAHgFAHACQAFACADAFQADAFgBAFQAAAFgFAEQgEADgFAAQgGAAgEgDg");
	this.shape_4.setTransform(18.8,15.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#339900").s().p("AAWBKIgDgBQgHABgOgCQgYgEgLgGIgDgCIgNgNQgQgQgDgLQgGgSALgUQAHgMATgSIAVgRIAOgIQAJgDAJAEQAKAEAFAIQAFAIgBAKIAGAGIAQANQARARAFAdQACARgFAJQgDAGgHAHQgOAMgNACQgHAAgGgCgAAHAmQgGABgCAFQgEAEAAAGQABAFAEAEQAEAEAFAAQAGAAAEgEQAEgEABgFQABgLgJgEQgEgBgEAAIgBAAgAgZAPQgCAEABAGQABAFAEADQAEAEAFAAQAGAAAEgEQAHgGgEgJQgBgKgKgBIgDAAQgIAAgEAIgAAhAHQgJABgCAJQgCAGAEAHQAGAHAHgBQAJgBADgIQAEgIgFgGQgFgHgHAAIgDABgAgxgEQgHABgDAEQgEAGADAJQAGAKALgCQAKgDABgJQACgKgIgEIgBgBIAIAAQAJgEABgJQAAgGgEgFQgEgFgHAAQgJAAgFAIQgEAJAHAIIAEADIgEgBIgCABgAgCgjQgGAGABAIQABAFAEAEQADADAGAAQAFAAAEgDQAFgEAAgFQABgFgDgFQgDgFgFgCIgEAAQgFAAgEADg");
	this.shape_5.setTransform(19.4,14.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFF00").s().p("AAFAtQgDgDACgCIAEgIIAEgEQACgCABgEIABgFIgEgCIgEAFQgHAIgBADIAAAEQgCADgDAAQgEABgCgDQgBgCACgFIAEgHIAJgLIAAgEIgEgFIgIAIIgEABIgGAFQgEAEgEgCQgFgDADgFIAEgCIADgEIAFgCIAJgHIAAAAIAAgBIgDgGIgLAEIgHAFIgFADQgEABgCgCQgEgCADgFIAGgFIASgIIADgBIgBgDIAAgGQAAgFADgEIACgCQADgDAEAAIAFAAIAnAAIAAAEIABAQIABAAIAAAmIgCAAQACAGgDAFQgEAFgHgBQAAgBgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgCAFgFAGIgEAGQgCADgCAAIgCABIgDgCg");
	this.shape_6.setTransform(31,10.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0099CC").s().p("AgVAQQgVgBgmACIg7ABQgXAAgMgFIAAgdQAxAEAegBIAsgCIAXABIAAAAIALAAIABABQAFAFAIAAQAGAAAFgFIADgDIAXAAIAAADIAfgFIAiAAIARACQAhADARgCQAGAAACACQABACAAAEIAAAWIAAgEIgoAAIgGAAQgDAAgDADQgbgBgOABIgpAEIgFABIg5gDg");
	this.shape_7.setTransform(17.7,4.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AiQCxIghAAIAAlhICdAAIACADIgLAAIAAAAIgWgBIgtACQgeACgxgFIAAAeQAMAFAXAAIA8gBQAlgBAVABQAzACALgBIApgEQAOgBAbACIgCACQgEADABAGIAAAFIABAEIgEABIgSAIIgFAEQgDAFAEACQACADAEgCIAEgDIAIgFIAKgEIADAHIABABIgBAAIgIAHIgFADIgDADIgEACQgEAFAGADQAEACADgEIAHgEIADgCIAIgHIAGAEIAAAEIgKAMIgEAHQgCAEABACQABAEAFgBQADAAABgEIACgDQABgEAGgHIAFgGIADACIgBAGQAAADgCACIgEAEIgEAIQgCACADADQACADADgCQACAAACgDIAEgGQAFgGABgFQABAAAAABQABAAAAAAQABABABAAQAAAAABAAQAHACAEgGQADgFgDgFIACAAIAAgoIgBAAIAAgPIAAgYQABgDgCgDQgCgCgGAAQgRACghgDIgRgBIBPAAIAAD+IgBgEQgEgJgHgFIgCgFQgGgJgJgEQgJgEgKACQgFACgEACIgFgDQgLgEgKAFQgGADgEAEIgEADQgDgJgGgFQgIgHgKgBIAAAAIgCgIIAAgHQANgBAOgMQAHgGAEgGQAEgJgCgRQgEgfgSgRIgPgMIgGgHQAAgKgEgHQgGgJgJgDQgKgFgJAEIgOAIIgUARQgUARgHANQgLAVAGARQADALAQARIAOAMIACACIAAABIAAAEIgBAJIAAAKIABALIAAAEIAAADQgHAFgCAKQgFgDgFgBIgIgBQgFgIgKgFQgMgDgKADQgKAFgFALIgBgCQgEgIgIgFQgIgDgKAAQgFABgFADIgFAAQgLgBgJAHQgIAHgCALQgCALAFAHIgBAAIABAcIgBACIABAaIAEAAIgBABIgEAEQgBADgBAEIAAASQABADABABQABACAEAAIAZAAIADgEIAYABIAAgCIBOAAIAHABIAAABIAdABIAAgCIAaABIAAgBIAYABIAAAAIAdABIAAAAIATAAIAAgCIAZABIAAgCIAQABIAAgBIAHAAIAAABIAeABIgBgaIADAAIAAgUIACgFIAAA2gACxBpIgDgEIADgIIAAAOIAAgCgAAhivIgXAAIABgBIA2AAIggAEg");
	this.shape_8.setTransform(17.8,20.4);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.תמונה2, new cjs.Rectangle(-1,-1,37.5,40.1), null);


(lib.תמונה1 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AgUikQgCgDAAgFQAAgHAFgGQAFgFAIAAQAHAAAFAFQAFAGAAAHQAAAFgCADIA2AAIAhAAIBQAAIAAEAIAAAPIAAANIAAAQIAAA3IlCAAIghAAIAAljgAAug6QAAAEgDACQgCADgFAAQgDAAgEgDQgCgCAAgEQAAgFACgCQAEgDADAAQAFAAACADQADACAAAFgAA/gtQAAATgOAOQgOANgTAAQgTAAgOgNQgOgOAAgTQAAgUAOgOQAOgOATAAQATAAAOAOQAOAOAAAUgAALikQAAABgBABQgBACgBABQgFAFgHAAQgIAAgFgFQAAAAgBgBQgBgCgBgCAAHg6QAAAEgDACQgDADgDAAQgDAAgDgDQgDgCAAgEQAAgFADgCQADgDADAAQADAAADADQADACAAAFg");
	this.shape.setTransform(17.8,16.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF0000").s().p("AgMAMIgBAAIgCgEQgCgEAAgEQAAgGAFgGQAGgFAGAAQAHAAAGAFQAFAGAAAGQAAAEgCAEIgBACIgCACQgGAGgHAAQgGAAgGgGg");
	this.shape_1.setTransform(17.3,-0.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00FF00").s().p("AipBJQgEAAgBgBQgCgBAAgEIAAgSQAAgEACgDIADgDIACgCIgEAAIgBgaIABgBIgBgbIABAAQgFgIACgKQACgMAIgHQAJgGALAAIAEABQAFgDAGgBQAKgBAIAEQAIAEAEAIIABACQAFgLAKgEQAKgEAMAEQAKAEAFAIIAIABQAFABAFADQAEgQAQgFQAHgCAHACIABAAIgIAJIgBACIAAADIAAABQACADACAAQAEgBAAgCIAIgIIAAgBIABAAIABACIADABIABAAIADADIACACIAAgBIADADQACACADgBQADAAABgEQABgDgDgCIgCgCIgCgCIAGgGQAIgGAKABQAJAAAIAHQAHAGADAIIAEgCQAEgFAGgDQAKgEALAEIAFACQAEgCAEgBQALgDAJAEQAJAEAFAJIADAFQAHAFAEAJIABAFIAAAPIgDAHIADAEIAAABIAAAQIgCAFIAAAUIgDAAIAAAaIgegBIAAgBIgHAAIAAABIgPgBIAAACIgZgBIAAADIgTgBIAAABIgdgBIAAgBIgYgBIAAABIgagBIAAADIgdgBIAAgCIgHgBIhOAAIAAACIgZgBIgCAFg");
	this.shape_2.setTransform(17.8,28.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgUA2IAAgBIAAgDIABgCIAJgJIAAgCIABAAIACgCIAEgEIABgBIAAgCIgBgFIAAgBIgGgBIgDgBIgCgDIgIgGIgBgBIgFgDIgDgDQAAAAAAgBQgBAAAAgBQAAAAAAgBQAAAAAAgBIACgCIAAAAQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAEACIABABIAJAFIADADIACACIADABIABAAIAAgDIABgBQAAgBAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIAAgFQgBgEABgCIABgBIABgBQAEgDACAFIABADIAAACIAAABIAAAGQABAAAAAAQAAgBABAAQAAAAAAAAQABAAAAAAIAAgBIABgBIABgBQABAAAAAAQAAAAAAAAQAAAAAAAAQAAAAAAAAIACgCIACgBIAAAAIADgBIABgBIABAAIADgBIAEgBIADABIABACIABACIgCACIgBABIgDACIgFACIgBABIgCACIgCABIgEAEIgBAAIgDADQAAAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIABAHIgBALIABABQADAAADAEIACACIACACQADACgBADQgBAEgDAAQgDABgCgCIgDgDIgCgBIgDgDIgBAAIgCgBIgBgCIgBAAIAAABIgIAIQAAACgEABQgDAAgCgDgAgEgaIgDgBIgKgGIgDgCIgDgBQgDgDABgDIABgBQABgBAAAAQAAAAABAAQAAgBABAAQAAAAABAAIAEAAIACACIANAHIABAAQAHABAFgCIADgCIACgCIAEgDQAAAAABAAQAAgBABAAQAAAAABAAQAAAAABAAQAAAAABAAQABABAAAAQAAAAABABQAAAAAAABIABAEIgBABIgBACIgEADIgBABIgEACIgEACQgDABgHAAgAgCgvIgBgCIAAgCIAAgBIABgCIACgBIABgBIADACIABABIABAEIgBACIgBAAQgBABAAAAQAAAAgBAAQAAABAAAAQgBAAAAAAIgDgCg");
	this.shape_3.setTransform(19.4,17.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AiQCxIghAAIAAliICdAAIACAEIgLAAIAAAAIgWgBIgtADQgeABgxgFIAAAeQAMAFAXAAIA8gBQAlgCAVACQAzACALgBIApgEQAOgBAbACIgCACQgEAEABAFIAAAFIABAEIgEABIgSAIIgFAEQgDAFAEACQACADAEgCIAEgDIAIgFIAKgEIADAHIABABIgBAAIgIAHIgFADIgDADIgEADQgEAEAGADQAEACADgEIAHgEIADgCIAIgHIAGAEIAAAEIgKAMIgEAHQgCAEABACQABADAFAAQADAAABgEIACgDQABgEAGgHIAFgGIADACIgBAGQAAADgCADIgEADIgEAIQgCADADACQACADADgBQACgBACgDIAEgFQAFgHABgFQABAAAAABQABAAAAAAQABABABAAQAAAAABAAQAHABAEgFQADgFgDgFIACAAIAAgnIgBAAIAAgQIAAgYQABgDgCgCQgCgDgGAAQgRACghgDIgRgCIBPAAIAAD/IgBgEQgEgJgHgFIgCgFQgGgJgJgEQgJgEgKACQgFABgEADIgFgDQgLgDgKAEQgGADgEAEIgEADQgDgJgGgFQgIgHgKgBQgKAAgIAGIgGAFQgDgDgDAAIgBgBIABgLIgBgHQABAAAAAAQAAAAABAAQAAgBABAAQAAAAABAAIACgDIABgBIAEgDIADgBIABgCIABgCIAFgCIAEgBIABgBIABgCIgBgDIgBgBIgCgBIgFAAIgDABIgBABIgBABIgDACIAAAAIgCAAIgBACQAAAAgBAAQAAgBAAAAQAAAAAAABQAAAAAAAAIgBABIgBAAIgBACQAAAAgBAAQAAAAAAAAQAAAAgBAAQAAABgBAAIAAgGIAAgCIAAgBIgBgDQgBgFgGADIgBABIgBABQgBACABAEIAAAEQAAAAAAABQAAAAAAAAQAAAAAAAAQAAAAAAAAIgBACIAAADIgBAAIgCgBIgDgDIgDgCIgHgFIgCgCIgEgCQAAAAAAABQgBAAAAAAQgBAAAAAAQAAABgBAAIAAAAIgBADQgBAAAAAAQAAABABAAQAAABAAAAQAAABAAAAIADACIAFAEIACABIAGAGIACADIADABIAGAAIAAABIABAGIAAACIgBAAIgEAEIgCADIgBAAIAAACIgBAAQgGgCgIACQgQAFgEAQQgFgDgFgBIgIgBQgFgIgKgFQgMgDgKADQgKAFgFAKIgBgBQgEgIgIgFQgIgEgKABQgFABgFAEIgFgBQgLgBgJAHQgIAHgCALQgCALAFAHIgBAAIABAcIgBACIABAaIAEAAIgBACIgEADQgBADgBAEIAAASQABADABABQABACAEAAIAZAAIADgEIAYAAIAAgBIBOAAIAHABIAAABIAdABIAAgCIAaAAIAAAAIAYAAIAAABIAdABIAAAAIATAAIAAgCIAZAAIAAgBIAQABIAAgBIAHAAIAAABIAeAAIgBgZIADAAIAAgUIACgFIAAA2gAgfg7QAAAUAOAOQAOAOASAAQAUAAAOgOQAOgOAAgUQAAgTgOgOQgOgOgUAAQgSAAgOAOQgOAOAAATIAAAAgACxBpIgDgEIADgIIAAAOIAAgCgAAVAxIACACIAAABIgCgDgAgRgZQgOgOAAgUQAAgTAOgOQAOgOASAAQAUAAAOAOQAOAOAAATQAAAUgOAOQgOAOgUAAQgSAAgOgOgAgEguQgBAAAAAAQgBAAAAAAQgBABAAAAQAAAAAAABIgBABQgBADACACIADACIADACIAKAFIACACIAJAAQAHAAADgCIAFgBIADgCIABgBIAEgDIACgDIAAgBIAAgDQgBgBAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQAAAAgBAAQAAAAgBAAQgBAAAAAAQgBABAAAAIgEADIgCABIgDACQgFADgGgCIgDAAIgMgGIgCgCIgCAAIgCAAgAAQg5IgDACIgBACIAAABIAAACIABACQAFADACgDIABgBIABgCIgBgDIgBgCIgCgBgAAbhHQAAAEACACQADADAFAAQAEAAACgDQADgCAAgEQAAgFgDgCQgCgDgEAAQgFAAgDADQgCACAAAFIAAAAgAgLhHQAAAEADACQACADAEAAQADAAADgDQADgCAAgEQAAgFgDgCQgDgDgDAAQgEAAgCADQgDACAAAFIAAAAgAA/g7IAAAAgAAdhBQgCgCAAgEQAAgFACgCQADgDAFAAQAEAAACADQADACAAAFQAAAEgDACQgCADgEAAQgFAAgDgDgAgIhBQgDgCAAgEQAAgFADgCQACgDAEAAQADAAADADQADACAAAFQAAAEgDACQgDADgDAAQgEAAgCgDgAAuhHIAAAAgAAHhHIAAAAgAAhivIgXAAIABgCIA2AAIggAGg");
	this.shape_4.setTransform(17.8,17.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF00").s().p("AAFAtQgDgDACgCIAEgIIAEgEQACgCABgEIABgFIgEgCIgEAFQgHAIgBADIAAAEQgCADgDAAQgEABgCgDQgBgCACgFIAEgHIAJgLIAAgEIgEgFIgIAIIgEABIgGAFQgEAEgEgCQgFgDADgFIAEgCIADgEIAFgCIAJgHIAAAAIAAgBIgDgGIgLAEIgHAFIgFADQgEABgCgCQgEgCADgFIAGgFIASgIIADgBIgBgDIAAgGQAAgFADgEIACgCQADgDAEAAIAFAAIAnAAIAAAEIABAQIABAAIAAAmIgCAAQACAGgDAFQgEAFgHgBQAAgBgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgCAFgFAGIgEAGQgCADgCAAIgCABIgDgCg");
	this.shape_5.setTransform(31,7.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#0099CC").s().p("AgVAQQgVgBgmACIg7ABQgXAAgMgFIAAgdQAxAEAegBIAsgCIAXABIAAAAIALAAIABABQAFAFAIAAQAGAAAFgFIADgDIAXAAIAAADIAfgFIAiAAIARACQAhADARgCQAGAAACACQABACAAAEIAAAWIAAgEIgoAAIgGAAQgDAAgDADQgbgBgOABIgpAEIgFABIg5gDg");
	this.shape_6.setTransform(17.7,1.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.תמונה1, new cjs.Rectangle(-1,-3.6,37.5,40.1), null);


(lib.שולחן = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFCC00").s("#FFCC00").ss(1,1,1).rr(-275,-74.5,550,149,74.5);
	this.shape.setTransform(275,74.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFCC00").s().p("AdqGjQgUhzABikQgBiiAUh0QASh0AcAAQAaAAAUB0QASB0AACiQAACkgSBzQgUB1gagBQgcABgSh1gEgj+AFhQgUh0ABijQgBijAUh0QAShzAcAAQAbAAASBzQAUB0gBCjQABCjgUB0QgSBzgbABQgcgBgShzgA/tDgQgTh0AAiiQAAikATh0QATh0AbABQAbgBATB0QATB0AACkQAACigTB0QgTBzgbAAQgbAAgThzgEAikACKQgUhzAAijQAAijAUh0QATh0AbAAQAaAAAUB0QASB0ABCjQgBCjgSBzQgUB1gagBQgbABgTh1g");
	this.shape_1.setTransform(284.7,154.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.שולחן, new cjs.Rectangle(-1,-1,552,209.1), null);


(lib.רמקול = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("ABUAAQAAB3gZBVQgYBUgjAAQgiAAgZhUQgYhVAAh3QAAh2AYhVQAZhUAiAAQAjAAAYBUQAZBVAAB2g");
	this.shape.setTransform(20.5,60.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag7DMQgYhVAAh3QAAh3AYhUQAZhVAiAAQAjAAAZBVQAYBUAAB3QABB3gZBVQgZBUgjAAQgiAAgZhUg");
	this.shape_1.setTransform(20.5,60.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#7C786A").s("#000000").ss(1,1,1).rr(-21.25,-52.9,42.5,105.8,3.8);
	this.shape_2.setTransform(21.2,52.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.רמקול, new cjs.Rectangle(-1,-1,44.5,107.8), null);


(lib.רדיו = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAgAAQAAAOgJAJQgKAJgNAAQgNAAgJgJQgJgJAAgOQAAgMAJgKQAJgJANAAQANAAAKAJQAJAKAAAMg");
	this.shape.setTransform(69.2,51.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#A63A3A").s().p("AgWAXQgJgJAAgOQAAgMAJgKQAJgJANAAQANAAAJAJQAKAKAAAMQAAAOgKAJQgJAJgNAAQgNAAgJgJg");
	this.shape_1.setTransform(69.2,51.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("ABkAAQAAApgeAdQgdAegpAAQgpAAgdgeQgdgdAAgpQAAgpAdgdQAdgdApAAQApAAAdAdQAeAdAAApg");
	this.shape_2.setTransform(59.2,33.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhGBGQgdgdAAgpQAAgpAdgdQAdgdApAAQApAAAdAdQAeAdAAApQAAApgeAdQgdAegpAAQgpAAgdgeg");
	this.shape_3.setTransform(59.2,33.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AAAhzIAADn");
	this.shape_4.setTransform(41.8,37.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AAAhzIAADn");
	this.shape_5.setTransform(35.6,37.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AAAhzIAADn");
	this.shape_6.setTransform(30,37.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AAAhzIAADn");
	this.shape_7.setTransform(24.1,37.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAAhzIAADn");
	this.shape_8.setTransform(17.7,37.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).rr(-34.4,-18.7,68.8,37.4,11.2);
	this.shape_9.setTransform(41,40.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#A63A3A").s("#FFFFFF").ss(1,1,1).rr(-41.3,-23.75,82.6,47.5,11.2);
	this.shape_10.setTransform(41.3,40.6);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#666666").ss(1,1,1).p("Ai0BGIFpiL");
	this.shape_11.setTransform(35,9.9);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("ABTAAQAAAOgKAJQgJAJgNAAQgOAAgJgJQgJgJAAgOQAAgMAJgKQAJgJAOAAQANAAAJAJQAKAKAAAMgAgSAAQAAAOgJAJQgEADgEADQgGADgIAAQgOAAgKgJQgJgJAAgOQAAgMAJgKQAKgJAOAAQAIAAAHAEQAEACADADQAJAKAAAMg");
	this.shape_12.setTransform(54.4,51.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#A63A3A").ss(1,1,1).p("AgWgcQAHgDAIAAQAMAAAJAJQAKAJAAANQAAANgKAJQgJAKgMAAQgJAAgHgE");
	this.shape_13.setTransform(53.2,51.2);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#666666").s().p("AgDAYIgEgBIgDgBIgCgBIgDgCIgBgBIgCgCIAAgBIgBgCIgBgBIgBgBIAAgCIgBgBIAAgCIgBgBIAAgBIAAgBIAAgBIgBgBIABgBIAAgBIAAgCIAAgBIABgCIAAgBIABgBIAAgCIABgBIABgCIABgBIABgCIABgBIACgBIACgCIADgBIACgBIABgBIADAAIADAAIAAgBIAFABIADABIAEABIACACIACABIABABIACACIABABIABACIABABIAAACIABABIABABIAAACIAAABIABACIAAABIAAABIAAABIAAABIAAACIgBABIAAACIgBABIAAACIgBABIAAACIgCABIgBABIgBACIgBABIgCACIgCABIgCACIgDAAIgBABIgCAAIgFABIgDgBg");
	this.shape_14.setTransform(55.5,2.5);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#A63A3A").s().p("AgjAcQAEgCAEgEQAKgJAAgNQAAgNgKgJIgHgFIAHAFQAKAJAAANQAAANgKAJQgEAEgEACQgGAEgJAAQgNAAgJgKQgKgJABgNQgBgNAKgJQAJgJANAAQAJAAAHAEQAHgEAIAAQAOAAAHAJQAKAKAAAMQAAAOgKAJQgHAJgOAAQgJAAgHgEgAAbAWQgJgJABgNQgBgNAJgJQAKgJAOAAQANAAAJAJQAJAJAAANQAAANgJAJQgJAKgNAAQgOAAgKgKgAgRAAIAAAAg");
	this.shape_15.setTransform(54.4,51.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.רדיו, new cjs.Rectangle(-1,0,84.6,65.4), null);


(lib.צירזמן = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgTA1QABgMAEgTQAFgRAJgQQAIgRAKgMIg0AAIAAgMIBFAAIAAAKQgKALgKASQgLASgEASQgEAOgBAQg");
	this.shape.setTransform(1077.4,56.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_1.setTransform(1068.5,56.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgXAsQgLgOAAgeQAAgSAEgMQAEgLAIgHQAHgGALAAQAJAAAGAEQAHADAEAGQAEAIADAJQACAJAAAPQAAATgEALQgDAMgIAGQgIAHgMAAQgOAAgJgLgAgNgjQgHAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgJAAgaQAAgagHgIQgFgJgKAAQgIAAgFAIg");
	this.shape_2.setTransform(1060.7,56.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AgiA2QgBgFACgEQADgHAGgIQAFgHAMgJQAQgOAGgHQAHgJAAgHQAAgIgGgGQgGgFgIAAQgJAAgGAGQgFAFgBAKIgNgBQACgPAIgIQAKgIAOAAQAPAAAJAJQAKAJAAAMQgBAHgDAFQgCAHgGAGQgGAHgPAMIgOANQgDADgCAEIA0AAIAAANg");
	this.shape_3.setTransform(1052.2,56.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgYAqQgLgLAAgcQAAgfAMgOQAKgMAQAAQANAAAIAHQAIAIACAMIgOABQgBgIgDgEQgGgFgIAAQgFAAgFADQgGAFgDAJQgEAJAAAPQAEgGAIgEQAGgDAHAAQANAAAKAJQAJAJgBAPQAAAKgEAJQgEAIgIAFQgIAFgJAAQgQAAgKgNgAgNACQgGAGAAAKQAAAHACAGQADAHAGADQAFADAEAAQAJAAAGgGQAGgIAAgLQAAgLgGgGQgGgGgJAAQgIAAgGAGg");
	this.shape_4.setTransform(1033.3,56.9);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_5.setTransform(1024.4,56.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgXAsQgLgOAAgeQAAgSAEgMQAEgLAIgHQAHgGALAAQAJAAAGAEQAHADAEAGQAEAIADAJQACAJAAAPQAAATgDALQgEAMgIAGQgIAHgMAAQgOAAgJgLgAgNgjQgHAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgJAAgaQAAgagHgIQgFgJgKAAQgIAAgFAIg");
	this.shape_6.setTransform(1016.6,56.9);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgiA2QAAgFABgEQADgHAGgIQAGgHALgJQARgOAFgHQAHgJAAgHQAAgIgGgGQgGgFgIAAQgJAAgGAGQgFAFgBAKIgNgBQACgPAIgIQAKgIAOAAQAPAAAKAJQAIAJABAMQgBAHgDAFQgCAHgGAGQgGAHgOAMIgPANQgDADgCAEIA0AAIAAANg");
	this.shape_7.setTransform(1008.1,56.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgYAtQgJgHgCgOIAOgBQACAKAFAFQAGAFAIAAQAIAAAHgHQAHgHAAgMQAAgMgHgFQgGgHgJAAQgHABgFADQgFACgDAEIgMgCIAKg2IA1AAIAAANIgqAAIgGAdQAKgHAJAAQAOAAAKAJQAKAKAAAOQAAAPgJALQgKANgRAAQgPAAgJgJg");
	this.shape_8.setTransform(986.3,57);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AAGA2IAAhTQgEAFgHAEIgOAHIAAgNQALgFAIgHQAIgIADgHIAJAAIAABrg");
	this.shape_9.setTransform(977.4,56.8);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgXAsQgLgOAAgeQAAgSAEgLQAEgMAIgGQAHgHALAAQAJAAAGADQAHAEAEAHQAEAHADAIQACAKAAAPQAAATgDAMQgFALgHAHQgIAGgMAAQgOAAgJgLgAgNgjQgHAJAAAaQAAAaAGAJQAGAJAIAAQAJAAAGgJQAGgIABgbQgBgagGgIQgGgJgJAAQgIAAgFAIg");
	this.shape_10.setTransform(969.6,56.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AgjA2QAAgFACgEQADgHAGgIQAGgHALgIQARgPAFgIQAHgIAAgIQAAgHgGgFQgGgGgIAAQgJAAgFAGQgHAGAAAKIgNgCQABgPAKgIQAJgIAOAAQAQAAAIAJQAJAIAAANQAAAGgDAHQgCAGgGAGQgGAGgOAMIgPAOQgDAEgCAEIAzAAIAAAMg");
	this.shape_11.setTransform(961.1,56.8);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AAKA2IAAgaIguAAIAAgMIAwhFIAKAAIAABFIAPAAIAAAMIgPAAIAAAagAgXAQIAhAAIAAgvg");
	this.shape_12.setTransform(942.3,55.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_13.setTransform(933.6,55.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgXArQgLgNAAgeQAAgSAEgMQAEgLAIgHQAIgGAKAAQAJAAAGAEQAHADAEAHQAFAHACAJQACAJAAAPQAAATgEAMQgDALgIAHQgIAGgMAAQgOAAgJgMgAgOgjQgGAKAAAZQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgJgBgaQABgZgHgJQgFgJgKAAQgIAAgGAIg");
	this.shape_14.setTransform(925.8,55.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AgiA2QgBgFACgEQADgIAGgGQAFgIAMgJQARgOAFgHQAHgJAAgHQAAgIgFgGQgGgFgJAAQgJAAgGAGQgFAFAAAKIgOgBQACgPAIgIQAJgIAPAAQAQAAAJAJQAIAJABAMQAAAHgEAFQgCAHgGAGQgGAHgPAMIgOANQgDAEgCADIA0AAIAAANg");
	this.shape_15.setTransform(917.3,55.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AgYAuQgJgIgBgNIANgCQACALAFAFQAGAFAIAAQAJAAAGgHQAGgGAAgKQAAgIgGgGQgGgHgJAAIgIACIABgKIACAAQAIAAAGgFQAIgEAAgJQAAgIgGgEQgFgFgGAAQgIAAgFAFQgFAEgBAKIgOgCQACgNAJgHQAJgIANAAQAHAAAIAEQAHAEAEAGQAEAHAAAHQAAAHgEAGQgDAFgIAEQAJACAGAGQAFAHAAAKQAAAPgKAJQgKAKgPAAQgOAAgKgJg");
	this.shape_16.setTransform(901.4,55.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_17.setTransform(892.5,55.2);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAIgHAKAAQAJAAAHADQAGAEAEAGQAFAHACAJQACAKAAAPQAAATgEALQgEAMgHAGQgIAHgMAAQgPAAgIgLgAgOgjQgGAJAAAaQAAAaAGAKQAGAIAIAAQAJAAAHgJQAFgIAAgbQAAgagFgIQgHgJgJAAQgIAAgGAIg");
	this.shape_18.setTransform(884.7,55.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgjA2QABgFABgEQADgHAGgIQAFgGAMgKQAQgOAHgHQAGgJAAgIQAAgHgFgFQgHgGgJAAQgIAAgFAGQgHAGABAJIgOgBQABgPAKgIQAIgIAPAAQAPAAAJAJQAKAJgBAMQAAAGgCAHQgDAGgGAGQgGAGgPAMIgNAOQgEADgCAEIAzAAIAAANg");
	this.shape_19.setTransform(876.2,55.2);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AgjA2QAAgFACgEQADgIAGgGQAFgIAMgIQARgPAFgIQAHgIAAgHQAAgIgGgGQgGgFgIAAQgJAAgFAGQgHAFAAAKIgNgBQABgPAKgIQAJgIAOAAQAQAAAIAJQAJAJAAAMQAAAHgDAFQgCAHgGAGQgGAHgOAMIgPANQgDAEgCAEIAzAAIAAAMg");
	this.shape_20.setTransform(857.2,54.8);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_21.setTransform(848.4,54.8);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgXArQgLgNAAgeQAAgSAEgMQAEgLAIgHQAIgGAKAAQAJAAAHAEQAGADAEAHQAFAGACAKQACAJAAAPQAAATgEAMQgEALgHAHQgIAGgMAAQgPAAgIgMgAgOgjQgGAKAAAZQAAAbAGAIQAGAJAIAAQAJAAAHgJQAFgJAAgaQAAgZgFgJQgHgJgJAAQgIAAgGAIg");
	this.shape_22.setTransform(840.6,54.9);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AgjA2QABgFABgEQADgIAGgGQAFgIAMgIQAQgPAHgIQAGgIAAgHQAAgIgFgGQgHgFgJAAQgIAAgFAGQgHAFABAKIgOgBQABgPAKgIQAIgIAPAAQAPAAAKAJQAJAJgBAMQAAAHgCAFQgDAHgGAGQgGAHgPAMIgNANQgEAEgCAEIAzAAIAAAMg");
	this.shape_23.setTransform(832.1,54.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_24.setTransform(814.9,54.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_25.setTransform(806.5,54.8);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAHgHALAAQAJAAAGADQAHAEAEAGQAEAHADAJQACAKAAAPQAAATgDALQgEAMgIAGQgIAHgMAAQgOAAgJgLgAgNgjQgHAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgIAAgbQAAgagHgIQgFgJgKAAQgIAAgFAIg");
	this.shape_26.setTransform(798.7,54.9);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#000000").s().p("AgiA2QAAgFABgEQADgHAGgIQAGgGALgKQAQgOAGgHQAHgJAAgIQAAgHgGgFQgGgGgIAAQgJAAgGAGQgFAGgBAJIgNgBQABgPAKgIQAJgIAOAAQAQAAAIAJQAJAJAAAMQAAAGgDAHQgCAGgGAGQgGAGgOAMIgPAOQgDADgCAEIAzAAIAAANg");
	this.shape_27.setTransform(790.2,54.8);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAHgHALAAQAJAAAGADQAHAEAEAGQAEAHADAJQACAKAAAPQAAATgEALQgDAMgIAGQgIAHgMAAQgOAAgJgLgAgNgjQgHAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgIAAgbQAAgagHgIQgFgJgKAAQgIAAgFAIg");
	this.shape_28.setTransform(767.3,54.9);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_29.setTransform(758.4,54.8);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAIgHAKAAQAJAAAHADQAGAEAEAGQAFAHACAJQACAKAAAPQAAATgEALQgEAMgHAGQgIAHgMAAQgPAAgIgLgAgOgjQgGAJAAAaQAAAaAGAKQAGAIAIAAQAJAAAHgJQAFgIAAgbQAAgagFgIQgHgJgJAAQgIAAgGAIg");
	this.shape_30.setTransform(750.6,54.9);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#000000").s().p("AgjA2QABgFABgEQADgHAGgIQAFgGAMgKQAQgOAHgHQAGgJAAgIQAAgHgFgFQgHgGgJAAQgIAAgFAGQgHAGABAJIgOgBQABgPAKgIQAIgIAPAAQAPAAAKAJQAJAJgBAMQAAAGgCAHQgDAGgGAGQgGAGgPAMIgNAOQgEADgCAEIAzAAIAAANg");
	this.shape_31.setTransform(742.1,54.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#000000").s().p("AgXAwQgIgHgCgNIAOgBQABAJAEAEQAFAEAHAAQAGAAAEgDQAFgCADgFQADgFABgIQACgHAAgJIAAgDQgEAHgHADQgHAFgGAAQgOAAgJgKQgKgIAAgQQAAgRAKgKQAKgKAPAAQAJAAAIAGQAKAFAEALQAEALABATQgBAUgEAMQgEAMgKAGQgJAHgKAAQgNAAgIgHgAgOgjQgHAHABALQAAAKAFAHQAGAFAJAAQAJAAAGgFQAGgHgBgLQAAgMgFgGQgHgHgIAAQgIAAgGAIg");
	this.shape_32.setTransform(721.4,54.9);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAIgHAKAAQAJAAAGADQAHAEAEAGQAEAHADAJQACAKAAAPQAAATgEALQgDAMgIAGQgIAHgMAAQgPAAgIgLgAgOgjQgGAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgIgBgbQABgagHgIQgFgJgKAAQgIAAgGAIg");
	this.shape_33.setTransform(713,54.9);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAIgHAKAAQAJAAAHADQAGAEAEAGQAFAHACAJQACAKAAAPQAAATgEALQgEAMgHAGQgIAHgMAAQgPAAgIgLgAgOgjQgGAJAAAaQAAAaAGAKQAGAIAIAAQAJAAAHgJQAFgIAAgbQAAgagFgIQgHgJgJAAQgIAAgGAIg");
	this.shape_34.setTransform(704.7,54.9);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#000000").s().p("AgjA2QABgFABgEQADgHAGgIQAFgGAMgKQAQgOAHgHQAGgJAAgIQAAgHgFgFQgHgGgJAAQgIAAgFAGQgHAGABAJIgOgBQABgPAKgIQAIgIAPAAQAPAAAJAJQAKAJgBAMQAAAGgCAHQgDAGgGAGQgGAGgPAMIgNAOQgEADgCAEIAzAAIAAANg");
	this.shape_35.setTransform(696.2,54.8);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#000000").s().p("AgYAuQgLgKABgOQAAgKAFgIQAFgFAKgDQgIgDgEgGQgEgGAAgHQAAgMAIgIQAJgIANAAQAOAAAIAJQAJAHAAAMQAAAIgEAFQgEAGgIADQAKADAFAGQAFAIABAJQgBAOgJAKQgKAJgQAAQgPAAgJgJgAgPAHQgGAGAAAJQAAAGADAFQACAFAGADQAFADAFAAQAJAAAHgGQAGgGAAgKQAAgJgGgGQgHgHgJABQgIgBgHAHgAgMgmQgEAEAAAIQAAAHAEAFQAFAFAHAAQAIAAAEgFQAGgFAAgHQAAgHgGgFQgEgFgIAAQgGAAgGAFg");
	this.shape_36.setTransform(675.3,54.3);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgMQAEgLAIgHQAHgGALAAQAJAAAGADQAHAEAEAGQAEAHADAKQACAJAAAPQAAATgEALQgDAMgIAGQgIAHgMAAQgOAAgJgLgAgNgjQgHAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgIAAgbQAAgagHgIQgFgJgKAAQgIAAgFAIg");
	this.shape_37.setTransform(666.9,54.3);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgMQAEgLAIgHQAHgGALAAQAJAAAGADQAHAEAEAGQAEAHADAKQACAJAAAPQAAATgEALQgDAMgIAGQgIAHgMAAQgPAAgIgLgAgOgjQgGAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgIgBgbQABgagHgIQgFgJgKAAQgIAAgGAIg");
	this.shape_38.setTransform(658.6,54.3);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#000000").s().p("AgiA2QgBgFACgEQADgHAGgIQAGgGALgKQARgOAGgHQAGgJAAgIQAAgHgFgFQgHgGgIAAQgJAAgGAGQgFAGAAAJIgOgBQACgPAIgIQAJgIAPAAQAPAAAKAJQAIAJABAMQAAAGgEAGQgCAHgGAGQgGAHgPALIgNAOQgEADgCAEIA0AAIAAANg");
	this.shape_39.setTransform(650.1,54.2);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f("#000000").s().p("AgTA1QABgMAEgTQAFgSAJgPQAIgRAKgMIg0AAIAAgMIBFAAIAAAKQgKALgKASQgLASgEATQgEANgBAQg");
	this.shape_40.setTransform(629.3,54.9);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAHgHALAAQAJAAAGADQAHAEAEAGQAEAHADAJQACAKAAAPQAAATgDALQgEAMgIAGQgIAHgMAAQgOAAgJgLgAgNgjQgHAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgIAAgbQAAgagHgIQgFgJgKAAQgIAAgFAIg");
	this.shape_41.setTransform(620.9,54.9);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAIgHAKAAQAJAAAGADQAHAEAEAGQAEAHADAJQACAKAAAPQAAATgEALQgDAMgIAGQgIAHgMAAQgOAAgJgLgAgOgjQgGAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgIAAgbQAAgagHgIQgFgJgKAAQgIAAgGAIg");
	this.shape_42.setTransform(612.6,54.9);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#000000").s().p("AgiA2QgBgFACgEQADgHAGgIQAFgGAMgKQARgOAFgHQAHgJAAgIQAAgHgFgFQgGgGgJAAQgJAAgGAGQgFAGAAAJIgOgBQACgPAIgIQAJgIAPAAQAQAAAJAJQAIAJABAMQAAAGgEAHQgCAGgGAGQgGAGgPAMIgOAOQgDADgCAEIA0AAIAAANg");
	this.shape_43.setTransform(604.1,54.8);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#000000").s().p("AgYArQgKgMAAgcQAAgfALgOQAKgMAQAAQANAAAIAIQAIAGABANIgNABQgBgIgEgDQgFgGgHAAQgGAAgEADQgHAFgDAJQgEAIAAARQAEgIAIgDQAGgDAHgBQANAAAKAKQAIAJABAPQAAAKgFAJQgEAJgIAEQgHAFgKAAQgQAAgKgMgAgNACQgGAGAAAKQAAAHADAGQADAGAFAEQAFADAFAAQAIAAAGgHQAGgHAAgLQAAgLgGgGQgGgGgJAAQgHAAgHAGg");
	this.shape_44.setTransform(580.3,54.3);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgMQAEgLAIgHQAIgGAKAAQAJAAAHADQAGAEAEAGQAFAHACAKQACAJAAAPQAAATgEALQgEAMgHAGQgIAHgMAAQgPAAgIgLgAgOgjQgGAJAAAaQAAAaAGAKQAGAIAIAAQAJAAAHgJQAFgIAAgbQAAgagFgIQgHgJgJAAQgIAAgGAIg");
	this.shape_45.setTransform(571.9,54.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgMQAEgLAIgHQAHgGALAAQAJAAAHADQAGAEAEAGQAEAHADAKQACAJAAAPQAAATgDALQgFAMgHAGQgIAHgMAAQgPAAgIgLgAgNgjQgHAJAAAaQAAAaAGAKQAGAIAIAAQAJAAAHgJQAFgIABgbQgBgagFgIQgHgJgJAAQgIAAgFAIg");
	this.shape_46.setTransform(563.6,54.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#000000").s().p("AgjA2QAAgFACgEQADgHAGgIQAFgGAMgKQARgOAFgHQAHgJAAgIQAAgHgGgFQgFgGgKAAQgIAAgFAGQgHAGAAAJIgNgBQABgPAKgIQAIgIAPAAQAQAAAIAJQAKAJgBAMQAAAGgCAGQgDAHgGAGQgGAHgOALIgOAOQgEADgCAEIAzAAIAAANg");
	this.shape_47.setTransform(555.1,54.2);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#000000").s().p("AgYAtQgJgHgCgOIAOgBQACAKAFAFQAGAFAIAAQAIAAAHgHQAHgIAAgLQAAgLgHgGQgGgGgJgBQgHAAgFAEQgFACgDAEIgMgCIAKg2IA1AAIAAAMIgqAAIgGAeQAKgHAJAAQAOAAAKAJQAKAKAAAPQAAAOgJALQgKANgRAAQgPAAgJgJg");
	this.shape_48.setTransform(530.3,55);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAHgHALAAQAJAAAGADQAHAEAEAGQAEAHADAJQACAKAAAPQAAATgDALQgEAMgIAGQgIAHgMAAQgOAAgJgLgAgNgjQgHAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgIAAgbQAAgagHgIQgFgJgKAAQgIAAgFAIg");
	this.shape_49.setTransform(521.9,54.9);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAIgHAKAAQAJAAAGADQAHAEAEAGQAEAHADAJQACAKAAAPQAAATgEALQgDAMgIAGQgIAHgMAAQgOAAgJgLgAgOgjQgGAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgIAAgbQAAgagHgIQgFgJgKAAQgIAAgGAIg");
	this.shape_50.setTransform(513.6,54.9);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#000000").s().p("AgiA2QgBgFACgEQADgHAGgIQAFgGAMgKQARgOAFgHQAHgJAAgIQAAgHgFgFQgGgGgJAAQgJAAgGAGQgFAGAAAJIgOgBQACgPAIgIQAKgIAOAAQAQAAAJAJQAIAJABAMQAAAGgEAHQgCAGgGAGQgGAGgPAMIgOAOQgDADgCAEIA0AAIAAANg");
	this.shape_51.setTransform(505.1,54.8);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#000000").s().p("AAJA2IAAgaIgtAAIAAgMIAwhFIALAAIAABFIAOAAIAAAMIgOAAIAAAagAgXAQIAgAAIAAgvg");
	this.shape_52.setTransform(480.1,54.8);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAHgHALAAQAJAAAHADQAGAEAEAGQAFAHACAJQACAKAAAPQAAATgEALQgEAMgHAGQgIAHgMAAQgPAAgIgLgAgOgjQgGAJAAAaQAAAaAGAKQAGAIAIAAQAJAAAHgJQAFgIAAgbQAAgagFgIQgHgJgJAAQgIAAgGAIg");
	this.shape_53.setTransform(471.9,54.9);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAIgHAKAAQAJAAAHADQAGAEAEAGQAFAHACAJQACAKAAAPQAAATgDALQgFAMgHAGQgIAHgMAAQgPAAgIgLgAgOgjQgGAJAAAaQAAAaAGAKQAGAIAIAAQAJAAAHgJQAFgIAAgbQAAgagFgIQgHgJgJAAQgIAAgGAIg");
	this.shape_54.setTransform(463.6,54.9);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#000000").s().p("AgjA2QABgFABgEQADgHAGgIQAFgGAMgKQAQgOAHgHQAGgJAAgIQAAgHgGgFQgFgGgKAAQgIAAgFAGQgHAGAAAJIgNgBQABgPAKgIQAIgIAPAAQAPAAAJAJQAKAJgBAMQAAAGgCAHQgDAGgGAGQgGAGgOAMIgOAOQgEADgCAEIAzAAIAAANg");
	this.shape_55.setTransform(455.1,54.8);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#000000").s().p("AgYAuQgJgIgBgNIANgCQACALAFAFQAGAFAIAAQAJAAAGgHQAGgGAAgKQAAgIgGgGQgFgHgKAAIgIACIABgKIACAAQAIAAAHgFQAHgEAAgJQAAgIgGgEQgFgFgGAAQgIAAgFAFQgFAEgBAKIgOgCQACgNAJgHQAIgIAOAAQAHAAAIAEQAHAEAEAGQAEAHAAAHQAAAHgEAGQgDAFgIAEQAJACAGAGQAFAHAAAKQAAAPgKAJQgLAKgOAAQgOAAgKgJg");
	this.shape_56.setTransform(432.4,54.9);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAIgHAKAAQAJAAAGADQAHAEAEAGQAEAHADAJQACAKAAAPQAAATgEALQgDAMgIAGQgIAHgMAAQgOAAgJgLgAgOgjQgGAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgIgBgbQABgagHgIQgFgJgKAAQgIAAgGAIg");
	this.shape_57.setTransform(424,54.9);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAHgHALAAQAJAAAHADQAGAEAEAGQAFAHACAJQACAKAAAPQAAATgEALQgEAMgHAGQgIAHgMAAQgPAAgIgLgAgOgjQgGAJAAAaQAAAaAGAKQAGAIAIAAQAJAAAHgJQAFgIAAgbQAAgagFgIQgHgJgJAAQgIAAgGAIg");
	this.shape_58.setTransform(415.7,54.9);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f("#000000").s().p("AgjA2QABgFABgEQADgHAGgIQAFgGAMgKQAQgOAHgHQAGgJAAgIQAAgHgFgFQgHgGgJAAQgIAAgGAGQgFAGAAAJIgOgBQACgPAIgIQAKgIAOAAQAPAAAKAJQAJAJAAAMQAAAGgDAHQgDAGgGAGQgGAGgPAMIgNAOQgEADgCAEIA0AAIAAANg");
	this.shape_59.setTransform(407.2,54.8);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#000000").s().p("AgjA2QABgFABgEQADgHAGgIQAFgGAMgKQAQgOAHgHQAGgJAAgIQAAgHgFgFQgHgGgJAAQgIAAgFAGQgHAGABAJIgOgBQABgPAKgIQAIgIAPAAQAPAAAJAJQAKAJgBAMQAAAGgCAHQgDAGgGAGQgGAGgPAMIgNAOQgEADgCAEIAzAAIAAANg");
	this.shape_60.setTransform(386.2,54.8);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAHgHALAAQAJAAAGADQAHAEAEAGQAEAHADAJQACAKAAAPQAAATgDALQgEAMgIAGQgIAHgMAAQgOAAgJgLgAgNgjQgHAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgIAAgbQAAgagHgIQgFgJgKAAQgIAAgFAIg");
	this.shape_61.setTransform(377.9,54.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAIgHAKAAQAJAAAGADQAHAEAEAGQAEAHADAJQACAKAAAPQAAATgEALQgDAMgIAGQgIAHgMAAQgOAAgJgLgAgNgjQgHAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgIgBgbQABgagHgIQgFgJgKAAQgIAAgFAIg");
	this.shape_62.setTransform(369.6,54.9);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f("#000000").s().p("AgiA2QgBgFACgEQADgHAGgIQAFgGAMgKQARgOAFgHQAHgJAAgIQAAgHgFgFQgGgGgJAAQgJAAgGAGQgFAGAAAJIgOgBQACgPAIgIQAKgIAOAAQAQAAAJAJQAIAJABAMQAAAGgEAHQgCAGgGAGQgGAGgPAMIgOAOQgDADgCAEIA0AAIAAANg");
	this.shape_63.setTransform(361.1,54.8);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_64.setTransform(334.8,54.8);

	this.shape_65 = new cjs.Shape();
	this.shape_65.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAHgHALAAQAJAAAHADQAGAEAEAGQAEAHADAJQACAKAAAPQAAATgDALQgFAMgHAGQgIAHgMAAQgOAAgJgLgAgNgjQgHAJAAAaQAAAaAGAKQAGAIAIAAQAJAAAHgJQAFgIABgbQgBgagFgIQgHgJgJAAQgIAAgFAIg");
	this.shape_65.setTransform(327,54.9);

	this.shape_66 = new cjs.Shape();
	this.shape_66.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAHgHALAAQAJAAAGADQAHAEAEAGQAEAHADAJQACAKAAAPQAAATgEALQgDAMgIAGQgIAHgMAAQgOAAgJgLgAgNgjQgHAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgIAAgbQAAgagHgIQgFgJgKAAQgIAAgFAIg");
	this.shape_66.setTransform(318.6,54.9);

	this.shape_67 = new cjs.Shape();
	this.shape_67.graphics.f("#000000").s().p("AgiA2QAAgFABgEQADgHAGgIQAGgGALgKQARgOAFgHQAHgJAAgIQAAgHgGgFQgGgGgIAAQgJAAgGAGQgFAGgBAJIgNgBQACgPAIgIQAKgIAOAAQAPAAAKAJQAIAJABAMQgBAGgDAHQgCAGgGAGQgGAGgOAMIgPAOQgDADgCAEIA0AAIAAANg");
	this.shape_67.setTransform(310.2,54.8);

	this.shape_68 = new cjs.Shape();
	this.shape_68.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAIgHAKAAQAJAAAHADQAGAEAEAGQAFAHACAJQACAKAAAPQAAATgEALQgEAMgHAGQgIAHgMAAQgPAAgIgLgAgOgjQgGAJAAAaQAAAaAGAKQAGAIAIAAQAJAAAHgJQAFgIAAgbQAAgagFgIQgHgJgJAAQgIAAgGAIg");
	this.shape_68.setTransform(280.3,54.9);

	this.shape_69 = new cjs.Shape();
	this.shape_69.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAHgHALAAQAJAAAHADQAGAEAEAGQAEAHADAJQACAKAAAPQAAATgDALQgFAMgHAGQgIAHgMAAQgPAAgIgLgAgNgjQgHAJAAAaQAAAaAGAKQAGAIAIAAQAJAAAHgJQAFgIABgbQgBgagFgIQgHgJgJAAQgIAAgFAIg");
	this.shape_69.setTransform(272,54.9);

	this.shape_70 = new cjs.Shape();
	this.shape_70.graphics.f("#000000").s().p("AgXAsQgLgNAAgfQAAgSAEgLQAEgMAIgGQAHgHALAAQAJAAAGADQAHAEAEAGQAEAHADAJQACAKAAAPQAAATgDALQgEAMgIAGQgIAHgMAAQgOAAgJgLgAgNgjQgHAJAAAaQAAAaAGAKQAGAIAIAAQAKAAAFgJQAHgIAAgbQAAgagHgIQgFgJgKAAQgIAAgFAIg");
	this.shape_70.setTransform(263.6,54.9);

	this.shape_71 = new cjs.Shape();
	this.shape_71.graphics.f("#000000").s().p("AgiA2QAAgFABgEQADgHAGgIQAGgGALgKQAQgOAGgHQAHgJAAgIQAAgHgGgFQgGgGgIAAQgJAAgFAGQgGAGgBAJIgNgBQABgPAJgIQAKgIAOAAQAQAAAIAJQAJAJAAAMQAAAGgDAHQgCAGgGAGQgGAGgOAMIgPAOQgDADgCAEIAzAAIAAANg");
	this.shape_71.setTransform(255.2,54.8);

	this.shape_72 = new cjs.Shape();
	this.shape_72.graphics.f("#000000").s().p("AgXAwQgHgHgDgNIAOgBQABAJAEAEQAFAEAHAAQAFAAAFgDQAFgCADgFQACgFACgIQACgHAAgJIAAgDQgEAHgHADQgGAFgIAAQgNAAgJgKQgJgIAAgQQgBgRALgKQAJgKAPAAQAJAAAJAGQAIAFAFALQAEALABATQgBAUgEAMQgFAMgIAGQgKAHgKAAQgMAAgJgHgAgOgjQgHAHAAALQABAKAFAHQAHAFAIAAQAJAAAGgFQAFgHAAgLQABgMgHgGQgFgHgJAAQgHAAgHAIg");
	this.shape_72.setTransform(229.4,54.9);

	this.shape_73 = new cjs.Shape();
	this.shape_73.graphics.f("#000000").s().p("AgXAwQgIgHgCgNIAOgBQABAJAEAEQAFAEAHAAQAGAAAEgDQAFgCADgFQADgFABgIQACgHAAgJIAAgDQgEAHgHADQgHAFgGAAQgOAAgJgKQgKgIAAgQQAAgRAKgKQAKgKAPAAQAJAAAJAGQAJAFAEALQAEALABATQgBAUgEAMQgEAMgJAGQgKAHgKAAQgNAAgIgHgAgOgjQgHAHABALQAAAKAFAHQAHAFAIAAQAJAAAGgFQAGgHgBgLQAAgMgFgGQgHgHgIAAQgIAAgGAIg");
	this.shape_73.setTransform(221,54.9);

	this.shape_74 = new cjs.Shape();
	this.shape_74.graphics.f("#000000").s().p("AgWAwQgJgHgBgNIAMgBQACAJAFAEQAEAEAHAAQAFAAAFgDQAFgCACgFQADgFACgIQACgHAAgJIAAgDQgEAHgGADQgIAFgGAAQgOAAgJgKQgKgIAAgQQABgRAJgKQAKgKAOAAQAKAAAIAGQAKAFAEALQAFALgBATQABAUgFAMQgEAMgKAGQgIAHgLAAQgMAAgIgHgAgOgjQgGAHAAALQgBAKAHAHQAGAFAIAAQAJAAAGgFQAGgHAAgLQgBgMgFgGQgHgHgIAAQgHAAgHAIg");
	this.shape_74.setTransform(212.7,54.9);

	this.shape_75 = new cjs.Shape();
	this.shape_75.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_75.setTransform(203.8,54.8);

	this.shape_76 = new cjs.Shape();
	this.shape_76.graphics.f("#000000").s().p("AgYAtQgLgJABgOQAAgKAFgIQAFgFAKgDQgIgDgEgGQgEgGAAgHQAAgMAIgIQAJgIANAAQAOAAAIAJQAJAIAAALQAAAIgEAFQgEAGgIADQAKADAFAGQAFAIABAJQgBAOgJAJQgKAKgQAAQgPAAgJgKgAgPAHQgGAGAAAJQAAAGADAFQACAFAGADQAFADAFAAQAJAAAHgGQAGgGAAgKQAAgJgGgGQgHgHgJAAQgIAAgHAHgAgMgmQgEAEAAAIQAAAHAEAFQAFAEAHABQAIgBAEgEQAGgFAAgHQAAgHgGgFQgEgFgIAAQgGAAgGAFg");
	this.shape_76.setTransform(175.4,54.9);

	this.shape_77 = new cjs.Shape();
	this.shape_77.graphics.f("#000000").s().p("AgXAwQgIgHgCgNIAOgBQABAJAEAEQAFAEAHAAQAGAAAEgDQAFgCADgFQADgFABgIQACgHAAgJIAAgDQgEAHgHADQgHAFgGAAQgOAAgJgKQgKgIAAgQQAAgRAKgKQAKgKAPAAQAJAAAJAGQAJAFAEALQAEALABATQgBAUgEAMQgEAMgJAGQgKAHgKAAQgNAAgIgHgAgOgjQgHAHABALQAAAKAFAHQAGAFAJAAQAJAAAGgFQAGgHgBgLQAAgMgFgGQgHgHgIAAQgIAAgGAIg");
	this.shape_77.setTransform(167,54.9);

	this.shape_78 = new cjs.Shape();
	this.shape_78.graphics.f("#000000").s().p("AgWAwQgJgHgBgNIAMgBQACAJAFAEQAEAEAHAAQAFAAAFgDQAFgCACgFQADgFACgIQACgHAAgJIAAgDQgEAHgGADQgIAFgGAAQgOAAgJgKQgKgIAAgQQABgRAJgKQAKgKAOAAQAKAAAIAGQAKAFAEALQAFALgBATQABAUgFAMQgEAMgKAGQgIAHgLAAQgMAAgIgHgAgOgjQgGAHAAALQgBAKAHAHQAGAFAIAAQAJAAAGgFQAGgHAAgLQgBgMgFgGQgHgHgIAAQgHAAgHAIg");
	this.shape_78.setTransform(158.7,54.9);

	this.shape_79 = new cjs.Shape();
	this.shape_79.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_79.setTransform(149.8,54.8);

	this.shape_80 = new cjs.Shape();
	this.shape_80.graphics.f("#000000").s().p("AgTA1QABgMAEgTQAFgSAJgPQAIgRAKgMIg0AAIAAgMIBFAAIAAAKQgKALgKASQgLASgEATQgEANgBAQg");
	this.shape_80.setTransform(127.4,54.9);

	this.shape_81 = new cjs.Shape();
	this.shape_81.graphics.f("#000000").s().p("AgXAwQgHgHgCgNIAMgBQACAJAEAEQAFAEAHAAQAFAAAFgDQAEgCADgFQAEgFABgIQACgHAAgJIAAgDQgEAHgGADQgIAFgHAAQgNAAgJgKQgJgIAAgQQgBgRALgKQAJgKAPAAQAJAAAJAGQAIAFAFALQAFALAAATQAAAUgFAMQgFAMgIAGQgJAHgLAAQgMAAgJgHgAgOgjQgHAHAAALQABAKAFAHQAGAFAJAAQAJAAAGgFQAFgHAAgLQABgMgHgGQgFgHgJAAQgHAAgHAIg");
	this.shape_81.setTransform(119,54.9);

	this.shape_82 = new cjs.Shape();
	this.shape_82.graphics.f("#000000").s().p("AgXAwQgHgHgDgNIAOgBQABAJAEAEQAFAEAHAAQAGAAAEgDQAEgCAEgFQADgFABgIQACgHAAgJIAAgDQgEAHgHADQgGAFgHAAQgOAAgJgKQgJgIgBgQQAAgRAKgKQAKgKAPAAQAJAAAJAGQAJAFAEALQAEALABATQgBAUgEAMQgEAMgJAGQgKAHgKAAQgMAAgJgHgAgOgjQgHAHABALQAAAKAFAHQAHAFAIAAQAJAAAGgFQAGgHgBgLQAAgMgFgGQgHgHgIAAQgIAAgGAIg");
	this.shape_82.setTransform(110.7,54.9);

	this.shape_83 = new cjs.Shape();
	this.shape_83.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_83.setTransform(101.8,54.8);

	this.shape_84 = new cjs.Shape();
	this.shape_84.graphics.f("#000000").s().p("AgYArQgKgMAAgcQAAgfALgOQAKgMAQAAQANAAAIAIQAIAGACANIgOABQgBgIgDgDQgGgGgIAAQgFAAgEADQgHAFgDAJQgEAIAAARQAEgIAIgDQAGgDAHgBQANAAAKAKQAIAJABAPQgBAKgEAJQgEAJgIAEQgIAFgJAAQgQAAgKgMgAgNABQgGAHAAAKQAAAHADAGQADAGAFAEQAFADAEAAQAJAAAGgHQAGgHAAgLQAAgLgGgHQgGgFgJAAQgIAAgGAFg");
	this.shape_84.setTransform(84.9,54.9);

	this.shape_85 = new cjs.Shape();
	this.shape_85.graphics.f("#000000").s().p("AgWAwQgJgHgBgNIAMgBQACAJAFAEQAEAEAHAAQAFAAAFgDQAEgCADgFQAEgFABgIQACgHAAgJIAAgDQgEAHgGADQgIAFgHAAQgNAAgJgKQgJgIAAgQQAAgRAKgKQAJgKAOAAQAKAAAJAGQAIAFAFALQAFALAAATQAAAUgFAMQgFAMgIAGQgJAHgLAAQgMAAgIgHgAgOgjQgGAHgBALQAAAKAHAHQAFAFAJAAQAJAAAGgFQAFgHABgLQAAgMgHgGQgFgHgJAAQgIAAgGAIg");
	this.shape_85.setTransform(76.6,54.9);

	this.shape_86 = new cjs.Shape();
	this.shape_86.graphics.f("#000000").s().p("AgXAwQgHgHgDgNIAOgBQABAJAEAEQAFAEAHAAQAFAAAFgDQAFgCADgFQACgFACgIQACgHAAgJIAAgDQgEAHgHADQgGAFgIAAQgNAAgJgKQgJgIAAgQQgBgRAKgKQAKgKAPAAQAJAAAJAGQAIAFAFALQAEALABATQgBAUgEAMQgFAMgIAGQgKAHgKAAQgMAAgJgHgAgOgjQgHAHAAALQABAKAFAHQAHAFAIAAQAJAAAGgFQAFgHAAgLQABgMgHgGQgFgHgJAAQgHAAgHAIg");
	this.shape_86.setTransform(68.3,54.9);

	this.shape_87 = new cjs.Shape();
	this.shape_87.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_87.setTransform(59.4,54.8);

	this.shape_88 = new cjs.Shape();
	this.shape_88.graphics.f("#000000").s().p("AgYAtQgJgHgCgOIAOgBQACAKAFAFQAGAFAIAAQAIAAAHgHQAHgIAAgLQAAgLgHgGQgGgGgJgBQgHAAgFAEQgFACgDAEIgMgCIAKg2IA1AAIAAAMIgqAAIgGAeQAKgHAJAAQAOAAAKAJQAKAKAAAPQAAAOgJALQgKANgRAAQgPAAgJgJg");
	this.shape_88.setTransform(41.9,55);

	this.shape_89 = new cjs.Shape();
	this.shape_89.graphics.f("#000000").s().p("AgXAwQgHgHgDgNIANgBQACAJAEAEQAFAEAHAAQAFAAAFgDQAEgCADgFQAEgFABgIQACgHAAgJIAAgDQgEAHgHADQgHAFgHAAQgNAAgJgKQgJgIAAgQQgBgRALgKQAJgKAPAAQAJAAAJAGQAIAFAFALQAFALAAATQAAAUgFAMQgFAMgIAGQgJAHgLAAQgMAAgJgHgAgOgjQgHAHAAALQABAKAGAHQAFAFAJAAQAJAAAGgFQAFgHAAgLQABgMgHgGQgFgHgJAAQgHAAgHAIg");
	this.shape_89.setTransform(33.5,54.9);

	this.shape_90 = new cjs.Shape();
	this.shape_90.graphics.f("#000000").s().p("AgXAwQgHgHgDgNIAOgBQABAJAEAEQAFAEAHAAQAGAAAEgDQAEgCAEgFQADgFABgIQACgHAAgJIAAgDQgEAHgHADQgGAFgHAAQgOAAgJgKQgKgIABgQQgBgRAKgKQAKgKAPAAQAJAAAJAGQAJAFAEALQAEALABATQgBAUgEAMQgEAMgJAGQgKAHgKAAQgMAAgJgHgAgOgjQgHAHABALQAAAKAFAHQAHAFAIAAQAJAAAGgFQAGgHgBgLQAAgMgFgGQgHgHgIAAQgIAAgGAIg");
	this.shape_90.setTransform(25.2,54.9);

	this.shape_91 = new cjs.Shape();
	this.shape_91.graphics.f("#000000").s().p("AAGA2IAAhTQgEAEgHAFIgOAHIAAgNQALgFAIgIQAIgHADgHIAJAAIAABrg");
	this.shape_91.setTransform(16.3,54.8);

	this.shape_92 = new cjs.Shape();
	this.shape_92.graphics.f().s("#000000").ss(0.1,1,1).p("EBQ0gDYIAAGjEBJ8gDYIAAGjEBCcgDYIAAGjEBAagDeIAAAGEA7ugDYIAAGdEA1KgDYIAAGjEAumgDYIAAGjEAn4gDYIAAGjAf6jYIAAGjAZMjYIAAGjASPjYIAAGjALLjYIAAGjADKjKIAAGjAkzjYIAAGjAsdjYIAAGjAz9jYIAAGjA7JjYIAAGjEgi8gDYIAAGjEgrigDYIAAGjEgzggDYIAAGjEg8GgDYIAAGjEhDkgDYIAAGjEhKFgDYIAAGjEhQzgDEIAAGj");
	this.shape_92.setTransform(547.9,22.3);

	this.shape_93 = new cjs.Shape();
	this.shape_93.graphics.f().s("#000000").ss(9.9,1,1).p("EhUpAAAILhAAIGhAAIHeAAIImAAIH+AAIImAAIHzAAIHMAAIHgAAIHqAAIP+AAIHEAAIG9AAIGuAAIH+AAIGuAAIGkAAIGkAAIEsAAICCAAIHgAAIG4AAIC5AA");
	this.shape_93.setTransform(541.8,0.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_93},{t:this.shape_92},{t:this.shape_91},{t:this.shape_90},{t:this.shape_89},{t:this.shape_88},{t:this.shape_87},{t:this.shape_86},{t:this.shape_85},{t:this.shape_84},{t:this.shape_83},{t:this.shape_82},{t:this.shape_81},{t:this.shape_80},{t:this.shape_79},{t:this.shape_78},{t:this.shape_77},{t:this.shape_76},{t:this.shape_75},{t:this.shape_74},{t:this.shape_73},{t:this.shape_72},{t:this.shape_71},{t:this.shape_70},{t:this.shape_69},{t:this.shape_68},{t:this.shape_67},{t:this.shape_66},{t:this.shape_65},{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.צירזמן, new cjs.Rectangle(-4.9,-4.4,1093.6,71.8), null);


(lib.פלאפון = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AijAAQAAAkgZAaQgaAZgkAAQgkAAgZgZQgagaAAgkQAAgjAagaQAZgZAkAAQAkAAAaAZQAZAaAAAjgAFSAAQAAAkgaAaQgZAZgkAAQgkAAgagZQgZgaAAgkQAAgjAZgaQAagZAkAAQAkAAAZAZQAaAaAAAjg");
	this.shape.setTransform(192.4,125.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AC9A9QgZgZAAgkQAAgjAZgaQAagZAkAAQAkAAAZAZQAaAaAAAjQAAAkgaAZQgZAagkAAQgkAAgagagAk3A9QgagZAAgkQAAgjAagaQAZgZAkAAQAkAAAaAZQAZAaAAAjQAAAkgZAZQgaAagkAAQgkAAgZgag");
	this.shape_1.setTransform(192.4,125.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABiDoQgHgNABgPQAAgQAGgNIALgSQAGgLgCgJQgDgNgagNQgrgYgagtQgYgsACgxQgZgTgQgcQgPgbgEgeIhGg6QgHgGAAgEQABgGAKgCQAVgFAWANQATAMAOAVQAIANANAdQAMAcAJANIAPAWQAJANAFAJQAHANAKArQAIAjAPARQAJALArAbQAhAVAFAXQADANgFASIgIAfIgEAPQgCAKgDAGQgFAHgHAEQgFADgEAAIgGgCg");
	this.shape_2.setTransform(211.7,99.8);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AiTDXQgHgdAJggQAJgeAVgYQAKgLAWgVQASgUAHgQQAEgKADgQIAGgaQAJgbAkgpIB1iHQANgQALADQAGACADAHQACAGgBAGQgCAHgMAPIhHBLQggAigPATQgXAegMAdIgPAoQgJAZgJAPQgIALgOAPIgYAYQgcAhAFAdIADAPQADAJABAFQAAAIgEAGQgEAHgHABIgBAAQgOAAgGgWg");
	this.shape_3.setTransform(183.8,99.5);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("ANuGFQgWg/AbhWIA8iUQAbg/gMgoQgKgjgrggQg0ghgYgTQgKgIgjgjQgbgcgVgLQgkgVhGgFQhrgHixALQjWANhHAAQiOAAikgYQiHgTingnIiOgjQg/gQgigCQg3gEglAXQgZAPgUAdQgNATgUAmQgGALgLAGQgMAHgGgJQgFgHAIgOQAVgrANgVQAWghAagTQAvghBKAEQAtADBVAXQEUBLEkAfQBDAGAoACQA7ACAwgEQAhgCBBgJQBBgJAggDQAtgDBEACIBxACIBQABQAtACAgAMQAbAJAdAUQASANAgAaIB2BfQAUAQAIAIQAPAPAHAOQAcAvgaBJQgOAsgqBUQghBLAHA3QACAUgEAOQgEARgOAAIgBAAg");
	this.shape_4.setTransform(110,38.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgHAjQgGAAgCgCQgFgEACgHIAFgLQAEgHAAgEQAAgBgGgNQgGgHADgGQAEgHAHAAQAHAAAGAHQAHAFADAIQAKAUgMAXIgEAFIgDABg");
	this.shape_5.setTransform(13.6,18.4);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAYUNQhfhig9hYQhMhrglhqQgZhKgNhcQgJhEgGhnQgZm7A3nAQAxlIAUikQAikfgRjPQgGg4AegJQAaDkglE/QgVC2g1FsQgzGwAcG0QAHBsAMBHQAQBiAfBLQAlBbBIBeQA1BFBaBdQAcAcAPAMQAZAVAZAIQAdALAdgGQAggGAQgXQAOgUAIhCQAGg5AbgQQAEBNgNAxQgRBDgzAXQgVAJgWAAQhIAAhahdg");
	this.shape_6.setTransform(30.7,150);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#999999").s("#000000").ss(1,1,1).rr(-55.2,-90.5,110.4,181,7.3);
	this.shape_7.setTransform(96.4,141.7,1.011,1.192);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-13.1,-13.1,26.2,26.2,13.1);
	this.shape_8.setTransform(95.9,255.1,0.338,0.417);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s("#000000").ss(1,1,1).rr(-55.2,-119.55,110.4,239.1,18.3);
	this.shape_9.setTransform(95.9,148.5,1.04,1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.פלאפון, new cjs.Rectangle(0,0,227.2,288.6), null);


(lib.פייסבוק = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("ACoA/QgugEiCgBQhvgBhBgJQgggFgNgJQgLgJgGgNQgFgNACgOQACgOAJgMQAKgLANgFQAKgFAOAAIAZAAQCWAICVAAQAxAAAWAIQASAGANAOQANAOACAQQADASgKAQQgLAQgRAGQgKADgTAAIgSAAg");
	this.shape.setTransform(63.4,55.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiZFuQgMgMgEgWQgDgPAAgaIABh6QABhQgEgoIgHgxIgHgzQgDgfAAhPQAAgrAHgXQAGgVAbgoQAdgrAYgRQAWgPAwgKQAvgJAjAEQAaADAzASQAnAOANARQALAQgCAVQgCAUgPANQgaAYg1gOIgpgNQgXgGgSAAQgcACgWARQgxAlAEBmQACAhAEAgIALBFQAFArgBBLIgBCSQAAAbgDAOQgFAXgNAMQgOANgVAAQgWAAgOgOg");
	this.shape_1.setTransform(73.8,56.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#0000CC").s("#666666").ss(1,1,1).rr(-54.55,-47.2,109.1,94.4,10.1);
	this.shape_2.setTransform(54.5,47.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.פייסבוק, new cjs.Rectangle(-1,-1,111.1,96.4), null);


(lib.פתקונים = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgGAWIAFgFQABgDABgEIABgJIgBgJIgBgFIgCgEIgEgEIAAgBQAEACACACQADAEACAFQACAFAAAEQAAAIgEAGQgDAGgGACg");
	this.shape.setTransform(12.8,20.7);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgBALIgBgCIABgCIABgBIACABIAAACIAAACIgCABIgBgBgAgBgGIgBgCIABgCIABgBIACABIABACIgBACIgCABIgBgBg");
	this.shape_1.setTransform(11.4,20.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgJAQIgBgCIABgCIABAAIACAAIACAAIACAAIABgDIABgEIgHgQIgCgCIAAgBIgCgBIAAgBIAKAAIAAABIAAAAIgCABIAAABIABADIAEAKIAFgLIAAgCIAAgBIAAgBIgCAAIAAgBIAHAAIAAABIgBABIgCABIAAACIgJAVQgBADgBACQgBAAgBABQAAAAgBAAQAAABgBAAQAAAAgBAAIgCgBg");
	this.shape_2.setTransform(26.2,13.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AADALIgBgDIgDADIgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAgBgBQAAAAAAgBQAAAAgBgBQAAAAAAgBQAAAAAAgBIAAgDIAEgDIAHgDIAAAAIgBgFIgCgBIgCABIgCABIABACIgBACIgCAAIgBAAIgBgCQABgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgCAEAAIADABIADADIABAEIAAAGIAAAEIAAABIABABIAAgBIACgBIAAABQgDAEgCAAIgCgBgAgBAAIgEACIAAADIABADIADABIADgDIAAgHIgDABg");
	this.shape_3.setTransform(23.9,13.1);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAEARIAAgDIgDADIgCAAQgEAAgDgDQgDgDAAgFQAAgEADgDQADgEAFAAQACAAACACIAAgFIAAgEIgBgBIgBAAIgBAAIgBgBIAHgDIABAAIAAAZIAAAFIABABIABAAIACAAIAAABIgHACgAgEgCQgCACAAAFQAAAFACADQACACACAAQAAAAABAAQABAAAAgBQABAAAAAAQABgBAAAAIAAgLIgBgDIgCgCIgBAAQgBAAAAAAQgBAAAAAAQgBAAAAABQAAAAgBAAg");
	this.shape_4.setTransform(21.5,12.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgGAJQgDgDAAgGQAAgEAEgEQACgDADAAQAEAAADADQACACAAAEIgOAAQAAAEACADQADADACAAIAEgBIACgEIABAAQAAADgDADQgCADgEAAQgDAAgDgDgAgDgHQgBAAAAABQAAAAgBAAQAAABAAABQAAAAAAABIAJAAIAAgDIgCgCIgCgBQAAAAgBAAQAAAAgBAAQAAABgBAAQAAAAAAABg");
	this.shape_5.setTransform(17.9,13.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgFAJQgEgDAAgGQAAgEAEgDQADgEAEAAQACAAADACQABAAAAABQAAAAABABQAAAAAAABQAAAAAAABIgBABIgCABIgBgBIgBgCIgBgCIgDgBQAAAAAAAAQAAAAgBAAQAAABgBAAQAAAAAAABQgCACAAAEQAAADACADQACADACAAQABAAAAAAQABAAAAAAQABgBAAAAQABAAAAgBIADgEIAAABQgBAEgCADQgDACgDAAQgCAAgDgDg");
	this.shape_6.setTransform(15.7,13.1);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgEARIAAgBIACAAIABgBIAAgDIAAgIIAAgEIgBgBIgBgBIgBABIAAgBIAFgDIACAAIAAARIAAADIABABIABAAIAAABgAgBgMIAAgCIAAgCIABAAIACAAIABACIgBACIgCAAIgBAAg");
	this.shape_7.setTransform(13.9,12.5);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AABAMIAAgBIAAAAIADgBIAAgCIABgCIAAgIQAAAAAAgBQAAgBAAAAQgBgBAAAAQAAgBAAAAQAAAAgBgBQAAAAAAAAQgBAAAAAAQAAAAgBAAQgCAAgDADIAAAKIABAEIABABIACAAIAAABIgLAAIAAgBIAAAAIADgBIAAgEIAAgHIAAgFIAAgBIgBAAIgCAAIAAgBIAGgDIABAAIAAAFQAEgEADgBIADABIACAEIABAEIAAAIIAAAEIABABIACAAIAAABg");
	this.shape_8.setTransform(11.9,13.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AADALIgBgDIgDADIgDABQgBAAAAAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIAAgDIAEgDIAHgDIAAAAIgBgFIgCgBIgDABIAAABIAAACIgBACIgBAAIgCAAIgBgCQAAgBABAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgCAEAAIAEABIACADIAAAEIAAAGIAAAEIABABIAAABIABgBIACgBIAAABQgCAEgDAAIgCgBgAgCAAIgCACIgBADIABADIACABIAEgDIAAgHIgEABg");
	this.shape_9.setTransform(22.5,5.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AgGAJQgCgDAAgGQAAgEADgEQACgDAEAAQAEAAACADQADACAAAEIgPAAQAAAEACADQADADACAAIAEgBIADgEIABAAQgBADgDADQgCADgEAAQgDAAgDgDgAgEgHQAAAAAAABQAAAAgBABQAAAAAAABQAAAAAAABIAJAAIAAgDIgCgCIgCgBQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABg");
	this.shape_10.setTransform(19,5.4);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AAAAMIgHgSIgBgCIgBgBIgCgBIAAgBIALAAIAAABIgBAAIgBABIgBABIABADIADAKIAGgLIABgDIgBAAIAAgBIgDAAIAAgBIAIAAIAAABIgCABIgBADIgIASg");
	this.shape_11.setTransform(16.6,5.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AADALIgBgDIgDADIgDABQAAAAgBAAQAAAAgBgBQAAAAgBAAQAAAAAAgBQgBAAAAgBQAAAAgBgBQAAAAAAgBQAAgBAAAAIABgDIADgDIAHgDIAAAAIgBgFIgCgBIgDABIgBABIABACIgBACIgCAAIgBAAIAAgCQAAgBAAAAQAAgBAAAAQAAgBABAAQAAgBABAAQACgCAEAAIADABIADADIABAEIAAAGIAAAEIAAABIABABIAAgBIACgBIAAABQgDAEgCAAIgCgBgAgBAAIgEACIAAADIABADIADABIADgDIAAgHIgDABg");
	this.shape_12.setTransform(14.4,5.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AABARIAAgBIABAAIACAAIAAgCIABgCIAAgIIgBgEIgBgBIgCgBIgBABIgEABIAAAMIABADIABABIACAAIAAABIgLAAIAAgBIADAAIABgBIAAgDIAAgTIAAgFIgBgBIgBAAIgCAAIAAgBIAGgCIABAAIAAAQIAEgEIADgBIADABIADAEIAAAEIAAAIIAAADIABABIACAAIAAABg");
	this.shape_13.setTransform(11.9,4.8);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AhQh2IChAAQAmAAAAAmIAAChQAAAmgmAAIihAAQgmAAAAgmIAAihQAAgmAmAAg");
	this.shape_14.setTransform(17.9,11.9);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CCFF").s().p("AhQB3QgmAAAAgmIAAihQAAgmAmAAIChAAQAmAAAAAmIAAChQAAAmgmAAg");
	this.shape_15.setTransform(17.9,11.9);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AhQh2IChAAQAmAAAAAmIAAChQAAAmgmAAIihAAQgmAAAAgmIAAihQAAgmAmAAg");
	this.shape_16.setTransform(14.6,15.5);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FF00CC").s().p("AhQB3QgmAAAAgmIAAihQAAgmAmAAIChAAQAmAAAAAmIAAChQAAAmgmAAg");
	this.shape_17.setTransform(14.6,15.5);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AhQh2IChAAQAmAAAAAmIAAChQAAAmgmAAIihAAQgmAAAAgmIAAihQAAgmAmAAg");
	this.shape_18.setTransform(11.9,19.5);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#99FF00").s().p("AhQB3QgmAAAAgmIAAihQAAgmAmAAIChAAQAmAAAAAmIAAChQAAAmgmAAg");
	this.shape_19.setTransform(11.9,19.5);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAUA3IgJgBQgEgBgEgEIgGgHIgKgIIgDgHIgIgLQgEgJABgPIABgMQAAgGAEABQAAgBABAAQAAAAABAAQAAAAABAAQABAAAAABQABAAAAAAQABABAAAAQAAAAAAABQABAAAAABQABADgCAGQgDAMADAHIAGANQAGAIAJAKIAJAHQAEACAJgBIAOgBIAHgVQADgKAGACQADAGgDAJIgFAOQgBAJgBABIgHABgAAnALQgOACgGgDQgKgDgGgPQgFgRgCgHIg2APQgIADgFgCQgHgDAAgKQABgGAEgIQADgHAEgDIAGgBQADAAABADQADAEgHAHQgHAIABAEQAcgJAagEQALgCADAEQAEADACAMQAEAPAKAHQAFADAHAAQAHABAFgDQAGgEAFgMIAIgRIAFgHQAEgEADAEQADADgDAIIgTAhQgEAHgEACIgCAAIgJgBg");
	this.shape_20.setTransform(16.5,9.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.פתקונים, new cjs.Rectangle(-1,-1,32.8,33.4), null);


(lib.פקס = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAFA+IAAgFQAFAAACgDQACgCAAgDQAAgDgGgMIgNgbIgOAbQgGAMAAACQAAADACADQACADAFAAIAAAFIgeAAIAAgFQAEgBACgCQAEgEAJgQIATgiIgRgiQgHgOgFgEQgDgEgHAAIAAgFIAqAAIAAAFQgDAAgCACQgBACgBADQABADADAHIADAHIAGAOIAHgOQAHgNAAgEQAAgDgCgCQgCgCgDAAIAAgFIAeAAIAAAFQgEABgEADQgFAFgJAPIgMAWIAXAsQAIAQAEADQADADAGABIAAAFg");
	this.shape.setTransform(145,-19.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAMA8QgDgEAAgMQgNAPgDACQgFAEgGAAQgKAAgGgJQgGgJAAgOQAAgJADgHQAEgJAKgIQAKgHAWgMIAAgEQAAgTgEgHQgEgHgHAAQgHAAgDAFQgEAFAAAGIAAAHQAAAHgCADQgCADgEAAQgEAAgCgDQgCgEAAgGQAAgLAIgKQAJgKAQAAQAKAAAIAGQAGAEADAJQABAGAAASIAAAoIABAWIABAFIADACIADgBIAIgKIAAAHQgLAVgKAAQgFAAgDgFgAgJAAQgIAGgDAHQgDAGAAAIQAAAJAEAHQAEAGAGAAQAHAAALgNIAAguQgOAIgEACg");
	this.shape_1.setTransform(135.9,-19.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AgxBbIAAgFIAFAAQAIAAAEgGQACgFAAgQIAAh1IgBgSQgBgEgDgCQgEgDgFAAIgFAAIAAgFIBiAAIABAoIgDAAQgDgNgDgGQgDgGgGgDQgEgCgLAAIgcAAIAABHIAXAAQAJAAADgFQAEgFABgPIAEAAIAAA9IgEAAQAAgLgBgEQgCgFgEgDQgEgCgGAAIgXAAIAAA5QAAAOABAEQABAEAEACQAEADAEAAIAEAAIAAAFg");
	this.shape_2.setTransform(125.3,-22.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AnYBtQACgMADgOQAJgoAIgRQARgkAigOQAigNAdAUIAOAKQAJAFAGACQAIADAMABQgDgNAAgUQAAg9ALhrQALh2ACgzQAAgaABgMQACgWAEgPQAKgmAegXQAbgUAigDQAWgCApAGQAqAFAUgBQAWAAAjgJQAugLAMgCQAXgEAvAAIB3ABQAsAAAaACQAmADAeALQAvASAUAkQALATAIArQATBlgOBJQgCAJgKAoQgHAegBAUQgCAXAGAsQACANABALQAiALAdAbQAjAhAVAxQARApAEAuQAEAwgMApQgCAFgGATQgFAPgDAKQgDANgFAaQgFAXgHAMQgOAXgiAIQgcAJgcAAQAAABABABQAXArgHAdQgHAegdAHQgKACgOAAQgQgBgIgBQgVAAggAFQgjAHgSADQgiAFhDAAIiVAAQgqAAgfgDQgrgDhEgMQhZgRgWgDQgfgEgRAGQgHADgNAIQgOAIgHADQgLAFgLgCQgMgBgHgKQgLgRADghQACgnAJghQgcgJgRgHQgxgYgSglQgWgsALhSAGjhmQgBg0AIgnQANgwADgZQAGgqgNhIQgEgUgFgMQgKgQgXgJQglgPhOAAIh4AAQguAAgXAEQgPABgxANQgmAJgYAAQgSAAgkgGQgjgGgTAAQglAAgPAbQgJARAAAeQAAARACAjQAAATgEAaQgDAOgFAeQgFAigCBAQgCBFgDAdQgCAYgHAPQAIAGAEALQAKgCAMAAIBaACQAaAAATADQAWAEArAQQATAFAbAAQAJAAAmgBQB3gIAngDQBZgHBFgJQAEgBADAAQgKgNADgVQACgVAMgLQABgCABAAQgDgoAAgXgApvGOQAIAAAAAKQAAAIgFABQgDAAgEAAQADgGABgNgApXGCIAAASIAJAAIAAgSgAo3GMIgFgGIgEgGApiG2IAAAQQABAEAGgJQgDgPgEAEQgGABABAIAo3GMQgHABgCADAo3GMIAAAMQAGABAAgGIgLgNAoyG4IgYAA");
	this.shape_3.setTransform(122.5,4.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#0066CC").s().p("AgwCJQglgNgbgfQgJgLgMgUIAAAAIgTggIgOgYQgIgCgGgGQgEgGgGgUIgBgEQgKgrACgbQACgVAKgKQAIgJASAAIAaAAQAUACAHAKQAHAKACAXQADAVgDAMIgBAEIABAVQAEAmAfAbQAfAbAkgBQAngBAcgeIAPgSQgJgSgCgqQAAgdAFgLQAIgTAYgLQAegRAPACQAQAAAJAMQAHAJAEATQAIAlAAAhQACArgPAVQgHALgVAMQgJAEgIACQg6BBg+ANQgQAEgOAAQgVAAgTgGgABzgZIAAAAIACgCIABgBIAAAAIABgCIABgCIAAAAQgCgLgDAAIAAAAIAAAAIgCABIAAAAQgFAAAAAGIAAADIAAgDQAAgGAFAAIAAAQIABABIAAAAIABAAgAChgoIgYAAgABghAIAHAAQAFAAAAgJQAAgJgHAAIgBAAIAAAAIAAAAIAAAAIAAAAIAAAAIAAAAIABAAQAHAAAAAJQAAAJgFAAIgHAAQADgFABgNQgBANgDAFIAAAAgACehIQAEAAAAgFIgLgOIgEgFIAEAFIAFAHQgHAAgCAEQACgEAHAAIAAALIAAABIABAAIABAAIAAAAgACFhNIAAgRIgJAAIAJAAIAAARIgJAAIAAgRIAAARIAJAAgABygZIgBgBIAAgQIAAAAIACgBIAAAAIAAAAQADAAACALIAAAAIgBACIgBACIAAAAIgBABIgCACIAAAAIgBAAIAAAAgACdhIIgBAAIAAgBIAAgLIgFgHIALAOQAAAFgEAAIAAAAIgBAAgACchUg");
	this.shape_4.setTransform(50.1,52.5);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFF33").s().p("AAVBRQgGgDgEgGQgFgGgBgJQgEgVAGgOQAIgSAOACQAFAAgBgDIAJADQAGACADAEQAEAEADAIQAHAWgHARQgHAXgQAAQgHAAgHgFgAg4A9QgKgFgGgOQgGgMACgPQABgOAHgJQAIgHAIgBQgHgLgBgPQgBgZANgMQAGgDAHAAQAFAAAAgCQANAEAEAEQAEAEADAIQAFAMgCAPQgCAQgIAKQgFAFgHADQADADABAGQAEASgDANQgEAQgLAIQgGADgFAAQgGAAgEgDgAAhgIQgIgJgCgKQgHgRAHgUQADgIAGgFQAHgHAGACQAGAAgCgCQAKAAAHAIQAKAKACASQABAYgOAOQgIAIgJAAQgHAAgIgGg");
	this.shape_5.setTransform(90.5,24.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AgBApQgLgBgIgKQgIgNAAgQQAAgRAGgLQAJgOALADQAEAAgCgCQAOACAGAJIAFAJQAFANgCAOQgCAQgIAJQgIAJgKAAIgBAAg");
	this.shape_6.setTransform(171.3,21.2);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#0066FF").s().p("Al0CKQgwgIgsgYQgXgOgHgPQgJgWAKguQAMgxANgvQALgnAPgDQAOARAXAJQAOAFAbAFQAjAGARgJIABgBQAGAEANAAIBfgDQAfgCAQADQAUAEAnAPQAoAMBNgGIEBgRQA3gFASgEQAbgGADgTQABgGgBgGIACABQALACAJgMQAYAHAUAVQAdAcAMArQAKAkgHAXQgCAJgHAPQgHAQgCAIIgEAYQgCAOgEAIQgMAagggBQgFAAgUgEQgKgCgIAAQgJgPgWgJQgdgKguACIhNAEQgXgBgwgHQhHgJhYACQg2ABhrAIQgvADgXAEQgnAGgeANQgOAGgGALIgBAFIgTgFgAl7AkQgGAOAEAUQABAKAFAGQAEAGAGADQAHAEAHAAQAQAAAHgWQAHgSgHgVQgDgIgEgFQgDgDgGgCIgJgEQABADgFAAIgCAAQgMAAgIARgAmzhBQgNAMABAZQABAOAHAMQgIABgIAGQgHAKgBAOQgCAOAGANQAGAOAKAEQAJAHAMgHQALgHAEgQQADgOgEgRQgBgGgDgEQAHgDAFgGQAIgIACgQQACgPgFgMQgDgIgEgFQgEgDgNgFQAAADgFAAIgCAAQgGAAgFADgAGOguQgGALAAARQAAAQAIAMQAIALALAAQALABAJgKQAIgJACgPQACgPgFgNIgFgJQgGgIgOgDQACADgFAAIgEgBQgJAAgHAMgAlihAQgGAGgDAIQgHATAHASQACAKAIAIQARANAPgPQAOgNgBgYQgCgSgKgLQgHgHgKgBQACADgGAAIgCgBQgFAAgGAFg");
	this.shape_7.setTransform(129.2,23.2);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s().p("AgpHFQhTgChBgLIhlgTQgfgGgagCQAGgFADgHQAGgPgFgSQAVgOAegGQASgDAkgCIA4gEIBugFQA+gCAwAFIBCAHQAnAFAbgBQAYAAAwgDQAWAAASADIgCAHQgDAOADAOQAEAVATAbQgsALg4AGQglADhBABIiAACIgUgBgAhjAzQgrgPgWgEQgTgEgaAAIhagCQgMAAgKACQgEgLgIgGQAHgPACgYQADgcAChGQACg/AFgjIAIgrQAEgaAAgTIgCg0QAAgfAJgQQAPgbAlAAQATAAAjAGQAkAGASAAQAYAAAngJQAxgNAPgCQAWgDAuAAIB4AAQBOAAAlAPQAXAJAKAQQAFAMAEAUQANBIgGAqQgDAZgNAwQgIAnABAzQAAAXADAoIgCACQgMAMgCAVQgDAVAKAMIgHABQhFAJhZAHQgnAEh2AHIgvACQgbAAgUgGg");
	this.shape_8.setTransform(132.1,4.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AsUHyQgTgQgIgQQgLgWACglIADgoQACgZgBgPIgDgxQgBg8AVgyQALgaALgKQAQgOAigDIA+gEQAngEANgGQALgEAYgRQAXgOANgEQAUgHAkAEQARAAAGgEQAGgCAFgJIAKgQQAdgvAigLQATgHATAJQAUAIAMAUQAHANAHAfQAIAgAGANIAKASIAFgaQAKgoAHgRQARgkAigOQAigNAeAUIAOAKIAOAIQAIACANABQgDgNAAgUQAAg9AKhrQAMh2ABgzIACgmQABgWAEgOQAKgnAfgXQAagUAigCQAVgCApAFQAqAGAUgBQAXgBAjgJIA6gNQAYgDAvAAIB2AAQAtAAAZADQAnADAeAKQAvASAUAkQAKATAJArQATBmgPBJIgLAxQgIAdgBAUQgBAYAGArIADAYQAhALAdAbQAkAhAUAxQARApAEAuQAEAwgMApIgIAYIgHAZIgIAnQgFAXgIAMQgNAXgiAIQgdAJgcAAIABACQAXArgHAdQgHAegdAHQgKACgOAAIgXgCQgWAAgfAFIg2AKQghAFhEAAIiVAAQgpAAghgDQgqgDhFgMIhugUQgegEgSAGIgUALQgNAIgHADQgMAFgKgCQgNgBgHgKQgLgRADghQACgnAKghQgdgJgRgHQgxgYgSglQgVgsALhSIgGgCQgUgJgSgoQgOgcgEgdQgDgZgHgDQgFgBgJAGQgXAVgIANQgGALgHAUQgGAPgCAKQgEASACAgQACAlgBANQgCAdgNAPQgNAPgSgEQgSgFgIgUQgHgRABglIAChWQgigCgZAUQgdAZgFApIgBAZQgBAQgCAIQgCANgIALQgHAKgKAFQgJADgKgDQgLgDgHgJQgOgPgEgfQgCgWADgjQgcgDgNAEQgYAJgIAZQgGASAGAkQAGAogCAQIgGAbQgEARACAKQADAOANANQANAMAPAIIABAEQAFAUAFAFQAFAIAIABIAOAYIAUAgQgFACgGABIgPABQgvAAg4gvgADjFNIhvAGIg3ADQglACgSAEQgcAFgWAPQAFASgGAOQgDAHgFAFQAaADAeAFIBkAUQBBALBTACQAuAABngCQBCgBAkgDQA4gFAtgMQgTgagFgWQgCgNADgPIACgGQgTgEgVAAQgxAEgYAAQgaABgogFIhCgIQgigDgqAAIgiAAgAjMBiQgNAvgMAyQgKAuAJAWQAHAPAXAOQAsAYAwAIIATAFIABgFQAGgLAOgGQAegNAmgGQAXgEAvgDQBrgIA2gBQBZgCBHAJQAwAHAXABIBNgEQAugCAdAKQAWAJAJAPQAIAAAKACQAUAEAFAAQAgABAMgaQAEgIACgOIAEgYQACgIAHgQQAHgPACgJQAHgYgKgkQgMgrgdgcQgUgVgYgHQgJAMgLgCIgCgBQABAGgBAGQgDATgbAGQgSAEg3AFIkBARQhOAGgogMQgngPgUgEQgQgDgfACIheADQgNAAgGgEIgBABQgRAJgjgGQgbgFgOgFQgXgJgOgRQgPADgLAngABUAcQAaAAASADQAWAEArAQQAUAFAbAAIAwgBQB2gIAogDQBZgHBEgJIAIgBQgKgNACgVQADgVALgLIADgCQgDgogBgXQgBgzAIgoQANgwADgZQAGgqgNhHQgDgUgGgMQgJgRgYgJQglgOhOAAIh4AAQguAAgXADQgPACgwAMQgoAJgYABQgRAAglgHQgjgGgTABQglAAgOAaQgJARABAeIABA0QAAATgEAaIgHAsQgFAigCBAQgCBFgDAdQgDAYgHAPQAJAGAEALQAJgCANAAg");
	this.shape_9.setTransform(102.8,4.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.פקס, new cjs.Rectangle(20.3,-50.9,166.1,117.8), null);


(lib.פאוורפוינט = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhwhwIDhAAIAADhIjhAAg");
	this.shape.setTransform(11.3,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#CC0000").s().p("AgNAdQAAgBgBAAQAAgBAAAAQgBgBAAAAQAAgBAAAAIAAgEIABgGQABgEgBgFIAAgBIgCgJIAAAAIgBgLIAAgFIABgDIADgBIADgBQAGgCAHgBQAFgBADACQADACABADIAAABQAFAJgDAFIgCADIAAAEIgBAAIgBACIgDACIgHABIgHAAIgBAAIABAKIgCAJQgBAEgCABIgBABIgDgBgAgGgQIAAACIAAAEIABAHIABAAIAIgBIACgDQACgEgBgEIgBgDg");
	this.shape_1.setTransform(4.3,3.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhPBYQgFgBAAgFQAAgEAIgBQAUgFAPAAQAOgBAbACIBYAFQAIAAAAAFQAAAEgIAAQgMABgmgCIgdgCIgogCQgXAAgSAFIgGABIgBAAgAAnBIIgNgEIgcgLQgKgDgEAAIgmACQgSABgMAEQgGACgCgDQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgDADgBQAFgEAMgBIAngDIAPgBQANABARAHIATAHIALADQAFABAEgBQALgBAJgDIAIgDQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAADgGACQgOAGgPABIgFABIgGgBgAhQAhQgIgFgEgBIgIgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBQADgCAFACIAHAEQAHACAOgBIBagIQAKgCAJABQAIABARAGIAHABQAEACgBAEQgBAEgGAAQgGAAgMgEQgMgEgGAAIgMACIgMABIhTAIIgNgBgAgzgBIgggDIgFgCQgDgCAAgDQABgDAEgBIAGAAQAPADAeACIAUABQAQAAAWgCIAggEQAWgCAKAEQABAAABAAQAAABABAAQAAAAABABQAAAAAAAAQADAEgGACQgCABgGgBQgQgBgaADIgqAEIgFAAQgPAAgbgCgAgRghQgLgDgGAAIgLAAQgWABgRgBQgIgBgCgDQgCgCAAgDQABgEADAAIAEAAQAMAEAWgBQAXgCAKADIATAFIAUAAIAggBIARgDQAKgDAGABQAEAAACABQADACAAADQgBADgEABIgGABIgNABIgNADIgRABIgnABIgQgEgAA+hHIgkgEQgQgCgLABIgFADQgEACgDgBQgFgBABgEQABgDAGgDIAFgEIAFAAQAUAAAKABIAMACQAXADAbAAQAFAAACADQAEADgFAEIgEAAIgQABIgQgBg");
	this.shape_2.setTransform(11.1,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhwBxIAAjhIDhAAIAADhgAgqBPQgQABgTAFQgIABAAAEQAAAEAEABIAIgBQARgEAYAAIAnACIAeACQAlACANgBQAIAAAAgEQAAgFgIAAIhYgGIgegBIgLAAgAgDBBIAcALIANAEQAGABAFgBQAPgBAOgGQAFgCABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgIADQgIADgLABQgFABgEgBIgLgDIgTgHQgRgHgNgBIgPAAIgoAEQgLABgGADQgCABgBAEQAAAAgBABQAAAAAAABQAAAAABABQAAABAAAAQADACAGgCQALgDATgBIAlgCQAFAAAKADgAhjAZQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIAIAEQAEABAIAFIANAAIBTgIIAMgBIAMgBQAGAAAMADQAMAFAGAAQAGAAABgFQABgDgFgCIgGgBQgRgHgIAAQgKgBgJACIhaAIQgOABgIgCIgHgEIgEgBIgEABgAhXgHQgEABgBADQAAACACACIAGACIAgADQAeADARgBIAqgEQAZgEARACQAFABACgBQAHgCgEgDQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgKgFgXADIgfAEQgWACgQAAIgUgBQgegCgPgDIgFgBIgBABgAgjgdQAGABAKADIARADIAnAAIAQgBIAOgDIANgCIAGAAQAEgBABgDQgBgDgDgCQgCgBgDgBQgGAAgKACIgRAEIggABIgUAAIgTgGQgKgCgYABQgVACgMgEIgFAAQgCAAgBADQAAADACADQACACAIABQARACAVgBIAJgBIADAAgAhChmQgIABgFACIgEABIgCACIgCACIABAFIABALIAAABIABAKIAAAAQABAGgBAEIgBAFIAAAEQAAABAAAAQABABAAAAQAAABABAAQAAABAAAAQABAAAAABQABAAABAAQAAAAABAAQAAAAABAAQACgCAAgEIACgJIgBgJIABAAIAIAAIAHgBIADgDIABgDIABAAIAAgDIADgEQADgFgGgJIAAgBQgBgDgCgCQgCgBgEAAIgDAAgAAZhDIAkAEQAQABAQgBIAEgBQAEgDgDgDQgCgDgFAAQgbAAgXgDIgMgCQgKgBgTAAIgGAAIgGADQgFADgBAEQgBADAFABQADABAEgCIAEgCIAGgBIAWACgAhLhNIgBgHIAAgDIAAgDIANgCIACAEQABADgDAEIgCADIgJABIgBAAg");
	this.shape_3.setTransform(11.3,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.פאוורפוינט, new cjs.Rectangle(-1,-1,24.5,24.5), null);


(lib.סקייפ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0099FF").s().p("Ag2CGQgJgDgHAAQgGAAgEAHIgJAAIAAhfIAJAAQAIApAYAUQAWAVAcAAQAVAAAMgMQANgMAAgQQAAgUgOgOQgPgOgpgVQgrgUgNgRQgNgRABgZQgBghAXgXQAXgWAkAAQAOAAAXAHQAPAEAFAAQAEAAADgCQADgCAEgHIAJAAIAABbIgJAAQgLgrgSgPQgRgQgaAAQgVAAgNALQgMALAAANQAAARAJALQAJAMAcAOIAqAVQA8AcgBAvQABAlgcAWQgcAWgiAAQgYAAgggIg");
	this.shape.setTransform(51.8,45.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgmB7QgagIgTgQQgXgTgLgcQgLgcACgdQADgdAQgaQAPgaAYgQQAjgZAqABQAsABAjAhQAjAhAEAtQAEAwggApQgiAsg1AHIgQABQgSAAgQgEg");
	this.shape_1.setTransform(69.8,58.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("Ag9BoQgogXgOgoQgIgWABgXQABgYAKgVQARgnApgUQAogUApAJQApAKAcAkQAcAlgCApQgCAqgeAiQgfAigqAGIgSACQgfAAgegTg");
	this.shape_2.setTransform(29,27.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AgeDyQg2gGgvgfQgvgegcguQgegvgGg4QgDgXADgYQAFg8Aig0QAjg1A1gdQA2gcA9AAQA/AAA2AdQA1AdAiA1QAiA0AFA8QAFA2gUA0QgUA0gnAmQgnAlg1ASQgnANgmAAQgPAAgPgCg");
	this.shape_3.setTransform(51.9,44.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AmznJINnAAQBkAAAABkIAALLQAABkhkAAItnAAQhkAAAAhkIAArLQAAhkBkAAg");
	this.shape_4.setTransform(53.6,45.8);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0099FF").s().p("AmzHKQhkAAAAhkIAArLQAAhkBkAAINnAAQBkAAAABkIAALLQAABkhkAAg");
	this.shape_5.setTransform(53.6,45.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.סקייפ, new cjs.Rectangle(-1,-1,109.3,93.7), null);


(lib.ספר = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AjIm9IEADZIAAACICRAAIjxjbgADJjiIAAKgIiRAAIAAgEIkAjZIAAqeAA4G6IAAqc");
	this.shape.setTransform(20.1,44.6);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ABRDnQgHgCgKgLQgJgKABgJQgQgCgHgEQgOgHACgMQgOADgJABQgLABgFgEQgIgFABgUQgKACgJAAQgKAAgFgDQgGgFAAgIQAAgIADgHQAAgBgBAAQAAgBAAAAQAAgBgBAAQAAgBAAgBQgKAFgHABQgLABgHgFQgDgDgBgFQgBgFACgEQADgEAHgDIAigPQAFgCAEAAQAIAAAEAJQABAEAAANQADABAFgGQAGgFAOAAQAMAAAEAEQAEAEABAJQACARgFAPQADgBADgDIAFgFQAHgFAIABQAJABACAHQACAEgBAJQgBAJADAEQAAAAAAABQABAAAAAAQAAABABAAQAAAAABAAIAEgPQAEgKADgDQAFgEAHAAQAHABAFAFQAFAGgBANIgBANQgBAHACAFQABAFAFAIQAFAIABAGQACAJgIAHQgFAFgIAAIgEAAgAARAVQgHgBgFgIIgHgOQAAAGgFAGQgFAFgHABQgHABgHgEQgGgEgCgHQgCgDABgHIAAgLQgBgOgJgLQgEAGgIABQgIABgGgFQgKgJADgRQABgKAGgFQAGgGALACQATADAKAQQAIALADABQAEABAJgCQAOgCAGAIQADAEABAIQABAKACADQABADACABQAEABAFgEQAPgKANAHQAGAEACAIQACAIgGAFQgDACgHACIgLADIgMAKQgHAGgFAAIgBAAgAA1hoQgDgCgEgFIgJgKQgLgNgDgJQgBgHgBgCQgBAAAAAAQAAgBgBAAQAAgBgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAAAABQgCAFgIAGQgGAGgIAAQgIABgIgHQgFgEgHgKQgIAHgFACQgFACgGgBQgGgCgEgFQgIgJAEgNIAEgOQAAgEgDgGIgEgLQgDgMAKgGQAIgFAHAFQAGAEACAJQAGgCAGAAQAIABAEAEQADAEABAMQACANAGAJQADAAACgCIAFgEQAEgFAOAAQALAAAFADQALAEAHAQQAKAUAFAEIAKAIQAGAFACAGQACAJgHAFQgEACgHABQgHAAgFgCg");
	this.shape_1.setTransform(11.3,43.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AA4BuIAAgDIkAjYIChABIDwDag");
	this.shape_2.setTransform(20.1,11);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0066CC").s().p("AA4G+IAAgEIkAjZIAAqeIEADZIAAACICRAAIAAKggAA4G6IAAqcgAg2CzQAHAEARACQgBAJAJAKQAJALAIACQAIABAHgGQAIgHgCgJQAAgGgGgIQgFgIgBgFQgCgFABgHIACgNQAAgNgFgGQgEgFgHgBQgHAAgEAEQgEADgDAKIgFAPQAAAAgBAAQAAgBgBAAQAAAAAAAAQgBgBAAAAQgDgEACgJQAAgJgBgEQgDgHgJgBQgIgBgGAFIgGAFQgDADgDABQAFgPgCgRQAAgJgFgEQgDgEgNAAQgPAAgGAFQgFAGgDgBQAAgNgBgEQgEgJgIAAQgEAAgFACIgiAPQgHADgDAEQgCAEABAFQABAFADADQAIAFAKgBQAHgBAKgFQAAABABAAQAAABAAABQAAAAABABQAAAAABABQgEAHAAAIQABAIAFAFQAGADAJAAQAJAAAKgCQgBAUAIAFQAGAEAKgBQAKgBAOgDQgBAMANAHgAhSgBQAFAHAHABQAGAAAHgGIAMgJIALgDQAHgCAEgDQAFgFgCgIQgCgIgGgEQgMgHgQAKQgFAEgEgBQgCgBgBgDQgCgDgBgKQgBgIgCgEQgHgIgPACQgJACgEgBQgDgBgHgLQgLgQgSgDQgMgCgGAGQgGAFgBAKQgDARALAJQAGAFAHgBQAJgBADgGQAJALABAOIAAALQgBAHACAEQADAHAGAEQAGADAHgBQAHgBAFgEQAFgGAAgHIAIAPgAhGioQABAAAAAAQABAAAAABQABAAAAAAQABABAAAAQABACABAHQADAJAMANIAJAKQADAFADACQAFACAHAAQAHgBAEgCQAHgFgCgJQgCgGgFgFIgLgIQgFgEgJgUQgIgQgKgEQgGgDgLAAQgPAAgEAFIgFAEQgCACgCAAQgGgJgDgNQgBgMgDgEQgDgEgJgBQgFAAgHACQgBgJgHgEQgHgFgIAFQgJAGACAMIAEALQADAGAAAEIgEAOQgEANAIAJQAEAFAGACQAGABAGgCQAEgCAIgHQAHAKAFAEQAIAHAIgBQAIAAAIgGQAHgGACgFIACgCIACABg");
	this.shape_3.setTransform(20.1,44.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ספר, new cjs.Rectangle(-1,-1,42.1,91.3), null);


(lib.נעץ2 = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,0,0,3).p("ABLAAQAAAfgWAWQgWAWgfAAQgeAAgWgWQgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeg");
	this.shape.setTransform(7.5,7.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#66FF33").s().p("Ag0A1QgWgWAAgfQAAgeAWgWQAWgWAeAAQAfAAAWAWQAWAWAAAeQAAAfgWAWQgWAWgfAAQgeAAgWgWg");
	this.shape_1.setTransform(7.5,7.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.נעץ2, new cjs.Rectangle(-1,-1,17,17), null);


(lib.נעץ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,0,0,3).p("AAyAAQAAAVgPAOQgOAPgVAAQgUAAgPgPQgOgOAAgVQAAgUAOgPQAPgOAUAAQAVAAAOAOQAPAPAAAUg");
	this.shape.setTransform(5,5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0033CC").s().p("AgjAjQgOgPAAgUQAAgUAOgPQAPgOAUAAQAUAAAPAOQAPAPAAAUQAAAUgPAPQgPAPgUAAQgUAAgPgPg");
	this.shape_1.setTransform(5,5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.נעץ, new cjs.Rectangle(-1,-1,12,12), null);


(lib.טלפון = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAACkQgGgCgFgPQgQg3AXgVQgPgdgFgpQgCgYAAgyIAChIQAAgOAGgDQAHgFAJAKQACAFABAMQADAfgDA/QABA3AQAiQAJATAAAIQgBAHgHAMQgHAMgBAHQgBAGAEALIAEAQQABAJgFAIQgEAHgGAAIgEgBg");
	this.shape.setTransform(23.4,53.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AABEsQgMgDgPgKQgQgHgGgJIgKgSQgDgGgUgcQgOgVADgSQABgJAKgPQAWgeAZgJQAPgEAPADQAPADAKALQAFAFABAGQACAHgEAFQgFAGgNAAQgHgBgGgDQgGgEgBgHQgaAIgOAYQgJAPAFANQACAEANAPIAQAVQAFAHATAOQAJAGAEABQAJACALgGIAUgKIALgDQAGgCADgEQAEgFgBgLIgBgRQAAgGADgGIAFgMQAJgUABgeIgCg0QgBgcAEgTIAEgRQADgJgBgIQAAgFgDgIIgEgOQgCgKABgOIABgYQABgTgEgaIgHgtIgJg0QgFgUgJgQQgGgNgHgFQgNgKgdABQgbAAgOAGQgNAFgVAWQgUAUgDAQQAKASAJAFQAGADANACIAhAGQAPACAHAFQAFAEACAGQACAGgDAFQgEAJgMgBQgFAAgNgEQgTgHgZgCQgQgBgEgEQgEgCgDgFIgGgJQgMgNgEgIQgKgSAQgXIAOgRIAOgRIAKgPQAGgIAGgFQANgKAaAAIAhgBQAmAAARAKQARALAMAZIAKAaQAEARACAQIAGAiQAIAzAAAWIgBAZQAAAPABAKIAFAaQADAOAAAKQABALgDAOIgGAZQgCASABAvQACApgHAXIgGAVQgEAMgBAJIAAAQQAAAJgCAGQgGANgYAKQgVAKgNADQgLADgJAAQgIAAgHgCg");
	this.shape_1.setTransform(22.2,52.6);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-8.45,-8.45,16.9,16.9,3.8);
	this.shape_2.setTransform(47.4,88.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-8.45,-8.45,16.9,16.9,3.8);
	this.shape_3.setTransform(68.7,88.6);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-8.45,-8.45,16.9,16.9,3.8);
	this.shape_4.setTransform(90.2,88.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-8.45,-8.45,16.9,16.9,3.8);
	this.shape_5.setTransform(47.4,67.8);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-8.45,-8.45,16.9,16.9,3.8);
	this.shape_6.setTransform(68.7,67.8);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-8.45,-8.45,16.9,16.9,3.8);
	this.shape_7.setTransform(90.2,67.8);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-8.45,-8.45,16.9,16.9,3.8);
	this.shape_8.setTransform(47.4,46.9);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-8.45,-8.45,16.9,16.9,3.8);
	this.shape_9.setTransform(68.7,46.9);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-8.45,-8.45,16.9,16.9,3.8);
	this.shape_10.setTransform(90.2,46.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#CCCCCC").s("#000000").ss(1,1,1).rr(-24.25,-8.05,48.5,16.1,8);
	this.shape_11.setTransform(68.8,20.8,1.228,1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#999999").ss(1,1,1).p("AnhoGIPDAAQAlAAAAAlIAAPDQAAAlglAAIvDAAQglAAAAglIAAvDQAAglAlAAg");
	this.shape_12.setTransform(51.9,51.9);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#336699").s().p("AngIHQgmAAAAglIAAvCQAAgmAmAAIPCAAQAlAAAAAmIAAPCQAAAlglAAg");
	this.shape_13.setTransform(51.9,51.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFFFF").s().p("AmbCtQgGgCgCgFQgEgKAKgJQAFgEAMgIIAPgPQAhgnBOg8QBPg9AggkIAUgYQAMgNAJgIIASgNQAKgIAFgHIAIgKQAEgGAEgDQAFgFAHAAQAHAAADAEQAIAJgMAOQgIAMgTAPIgdAYQgJAIgLAOIgUAYQgRATgkAcIg+AxQg/A0gVAWIgjAnQgKAKgIADIgGABIgGgBgAGTAMIgBgCQgGgEAAgFQgBgEAGgGIADgCIAJAAIACACQAFAFABADQABAFgHAGIgCACg");
	this.shape_14.setTransform(92.7,53.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.טלפון, new cjs.Rectangle(-1,-1,135.8,105.8), null);


(lib.חוד = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAUgVIgFArIgigZg");
	this.shape.setTransform(2,2.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgTgDIAngSIgFArg");
	this.shape_1.setTransform(2,2.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.חוד, new cjs.Rectangle(-1,-1,6.1,6.4), null);


(lib.ויקיפדיה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AASAhQgJgGgBgJQgVAAgTgJQgXgJgBgQQAAgHAFgFQAEgGAHgBQAHgBAJAEIARAHQAHACAKABIATACQAKABAIAGQAIAGABAIQABAIgGALQgHALgIAEIgHABQgFAAgGgDg");
	this.shape.setTransform(70.7,20.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgqAXQgGgEgFgHQgEgHAAgIQAAgJAFgGQAHgGASAAIAvAAQARAAAIADQAHAEAEAHQAEAIgCAGQgBAIgHAFQgHAFgIgCIgLgEQgGgCgIABIgUABIgIABIgKAHIgGABQgEAAgEgCg");
	this.shape_1.setTransform(31.3,18.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgiC2QgGgGgFgKIgIgSQgHgRgTgcQgUgegHgPIgMgdQgHgTgGgKIgXgiQgKgQgRglQgQglgMgRIgMgUQgFgOAIgIQAFgFAIAAQAHAAAGAEQAJAGAJAQQASAeAMAYIAZAzIAQAZQALAPAEALIANAhQAGAQAQAXIAiA2QAbghA0hGIA+hTQAlgzANgZIAIgQQAFgJAGgEQAIgGAJABQAKABAEAHQAFAKgJARQgWArg5BOIhkCHQgOATgKAKQgKAKgCAGIgCAKQgBAHgBADQgEAJgLAAQgLAAgHgHg");
	this.shape_2.setTransform(50.9,36.7);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AAjAfIgQgDIgdAAQgSgBgLgGIgOgJQgLgDgFgDQgHgGAAgJQABgLAHgFQAHgGAKABQAKAAAHAFIANAJQAGACAIABQAVABAHgBIAPgEQAJgDAGAAQAIgBAHADQAIAEACAHQAEALgQAQQgHAIgGABQgFACgGAAIgFAAg");
	this.shape_3.setTransform(50.8,20.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag3AZQgJgEgEgIQgEgIADgJQADgJAIgFQAGgEAQgBQA1gEAcABQAOABAFAFQAJAHgCAMQgDALgMAEQgHACgRgBQgWgBgTACQgKABgFACIgNAHIgIABQgFAAgFgCg");
	this.shape_4.setTransform(14.3,19.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhECuQgHgGgFgQIgJgqQgGglgEgMQgDgIgJgUIhXipQgHgNABgIQABgKAKgGQAKgHAJAFQAKAFAGAPIAIAbIAIAOIAKAOQAHALALAXIAcA8IAUAuQALAbAEAXQACAPACAGQAhgeAWggQAMgQAWghQATgdAIgPIAVgsQAHgMAPgTQAKgMAWgXQALgMAJgEQAJgDAKACQAKADAHAHQAFAHAAAKQgBALgHAEIgJADIgKACQgGACgLAKQgZAYgHAPIgKASIgHASQgIAQgMAUQguBGgdAhQgSAVgFAJIgLASQgHALgGAGQgIAIgKACIgGABQgIAAgGgEg");
	this.shape_5.setTransform(33,35.9);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s("#000000").ss(1,1,1).rr(-56.45,-41.05,112.9,82.1,5.7);
	this.shape_6.setTransform(40.5,36.7,0.718,0.894);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.ויקיפדיה, new cjs.Rectangle(-1,-1,83.1,75.4), null);


(lib.וורד = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhwhwIDhAAIAADhIjhAAg");
	this.shape.setTransform(11.3,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066CC").s().p("AAIAZQgEgCgCgDIgBgCIgCgNQgCACgEAIQgEAJgFgDIgDgCIgCgDIgDgHIgFgOIgDgLQgBgEABgCIABgCIACAAQABAAAAAAQABAAAAAAQABAAABABQAAAAABAAQACACACAGIAAABIAGAUIAIgXQADgHADAAQADAAACAEIABAHIAAAHQABAHADAIQAAgFAEgFIAHgLIADgJQAAgBABAAQAAgBAAAAQABAAAAAAQABgBABAAQAAAAABAAQAAAAABAAQABAAAAAAQABAAAAABQADACgCAGIgIAQQgFAKgCAHQgBAEgCACQgBAAAAAAQgBABAAAAQgBAAAAAAQgBAAAAAAIgDAAg");
	this.shape_1.setTransform(5.2,3.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhPBYQgFgBAAgFQAAgEAIgBQAUgFAPAAQAOgBAbACIBYAFQAIAAAAAFQAAAEgIAAQgMABgmgCIgdgCIgogCQgXAAgSAFIgGABIgBAAgAAnBIIgNgEIgcgLQgKgDgEAAIgmACQgSABgMAEQgGACgCgDQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgDADgBQAFgEAMgBIAngDIAPgBQANABARAHIATAHIALADQAFABAEgBQALgBAJgDIAIgDQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAADgGACQgOAGgPABIgFABIgGgBgAhQAhQgIgFgEgBIgIgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBQADgCAFACIAHAEQAHACAOgBIBagIQAKgCAJABQAIABARAGIAHABQAEACgBAEQgBAEgGAAQgGAAgMgEQgMgEgGAAIgMACIgMABIhTAIIgNgBgAgzgBIgggDIgFgCQgDgCAAgDQABgDAEgBIAGAAQAPADAeACIAUABQAQAAAWgCIAggEQAWgCAKAEQABAAABAAQAAABABAAQAAAAABABQAAAAAAAAQADAEgGACQgCABgGgBQgQgBgaADIgqAEIgFAAQgPAAgbgCgAgRghQgLgDgGAAIgLAAQgWABgRgBQgIgBgCgDQgCgCAAgDQABgEADAAIAEAAQAMAEAWgBQAXgCAKADIATAFIAUAAIAggBIARgDQAKgDAGABQAEAAACABQADACAAADQgBADgEABIgGABIgNABIgNADIgRABIgnABIgQgEgAA+hHIgkgEQgQgCgLABIgFADQgEACgDgBQgFgBABgEQABgDAGgDIAFgEIAFAAQAUAAAKABIAMACQAXADAbAAQAFAAACADQAEADgFAEIgEAAIgQABIgQgBg");
	this.shape_2.setTransform(11.1,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhwBxIAAjhIDhAAIAADhgAgqBPQgQABgTAFQgIABAAAEQAAAEAEABIAIgBQARgEAYAAIAnACIAeACQAlACANgBQAIAAAAgEQAAgFgIAAIhYgGIgegBIgLAAgAgDBBIAcALIANAEQAGABAFgBQAPgBAOgGQAFgCABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgIADQgIADgLABQgFABgEgBIgLgDIgTgHQgRgHgNgBIgPAAIgoAEQgLABgGADQgCABgBAEQAAAAgBABQAAAAAAABQAAAAABABQAAABAAAAQADACAGgCQALgDATgBIAlgCQAFAAAKADgAhjAZQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIAIAEQAEABAIAFIANAAIBTgIIAMgBIAMgBQAGAAAMADQAMAFAGAAQAGAAABgFQABgDgFgCIgGgBQgRgHgIAAQgKgBgJACIhaAIQgOABgIgCIgHgEIgEgBIgEABgAhXgHQgEABgBADQAAACACACIAGACIAgADQAeADARgBIAqgEQAZgEARACQAFABACgBQAHgCgEgDQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgKgFgXADIgfAEQgWACgQAAIgUgBQgegCgPgDIgFgBIgBABgAgjgdQAGABAKADIARADIAnAAIAQgBIAOgDIANgCIAGAAQAEgBABgDQgBgDgDgCQgCgBgDgBQgGAAgKACIgRAEIggABIgUAAIgTgGQgKgCgYABQgVACgMgEIgFAAQgCAAgBADQAAADACADQACACAIABQARACAVgBIAJgBIADAAgAg6g4IABACQABADAFACQAEABACgCQADgDABgEQACgGAFgLIAIgQQACgGgDgDQAAAAgBAAQgBAAAAAAQgBAAAAAAQgBAAAAAAQgBAAgBAAQAAABgBAAQAAAAAAABQgBAAAAABIgEAJIgGALQgEAFAAAFQgDgHgBgIIgBgHIgBgHQgCgFgCAAQgFABgCAGIgIAZIgGgWIgBAAQgCgGgBgCQgBAAgBgBQAAAAgBAAQAAAAgBAAQAAgBgBAAIgCABIgCACQAAACAAADIAEALIAFAPIADAIIACACIADADQAFACAEgIQAEgIACgCIADANgAAZhDIAkAEQAQABAQgBIAEgBQAEgDgDgDQgCgDgFAAQgbAAgXgDIgMgCQgKgBgTAAIgGAAIgGADQgFADgBAEQgBADAFABQADABAEgCIAEgCIAGgBIAWACg");
	this.shape_3.setTransform(11.3,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.וורד, new cjs.Rectangle(-1,-1,24.5,24.5), null);


(lib.דמות = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AAcBCQgTgJgFgJIgDgMQgBgIgDgEQgCgFgMgIIgggTQgfgVACgSQABgNANgIQANgHAOADQAMACANAIIAVARIARANIARAOQALALAMARQAJANADAIQAEAQgIANQgIAMgNACIgCAAQgIAAgPgIg");
	this.shape.setTransform(27.7,88.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("Ag9BFQgJgIgHgPQgFgMAAgJQABgJAKgOQALgQAIgKQAdghAmgNQAZgJATAIQALAEAHAJQAHAKgBALQgDAQgOAGQgFACgJABQgKABgEABIgVALIgRAKQgIAIgGAaQgGAYgOAFQgFACgEAAQgJAAgJgHg");
	this.shape_1.setTransform(17.2,87.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAjAzIgUgOQgcgXgogGQgWgEgGgCQgRgFgDgNQgDgIAEgIQADgIAHgFQAMgJATgBQAdAAAlARIBAAfQAUAIAGAHQAHAIAAALQAAALgHAHQgIAJgVACIgJAAQgOAAgKgFg");
	this.shape_2.setTransform(32.1,59.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AhYA5QgPgQAAgSQAAgKAFgIQAGgHAIgEQAGgCAPAAQAOgBAHgDQAFgDAJgIQAJgKAFgCIAOgFQAIgCAEgDQAEgCAGgHQAFgGAEgDQAHgFASgBQAeAAALAMQAGAHAAAJQABAKgFAHQgFAIgKAEIgUAIQgWAIgZASIgqAgQgVAQgOAAQgNAAgPgNg");
	this.shape_3.setTransform(15.1,58.7);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgKCyQgRgJgFgRQgEgOADgUIAGgiQAHgmgIg9QgIhPAAgXQAAgmAQgQQALgLAPABQARABAGANQADAJgDASQgFAjAFA3IAIBZQABAhgFBCQgCAegMAJQgHAFgHAAQgHAAgIgEg");
	this.shape_4.setTransform(23.3,67.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgRAhQgGgGAAgLIABgSIgBgQQABgIAEgFQAEgFAHgBQAGgBAFADQAGADAFAFQAMAMgEALIgEAJIgDALIgDAKQgEAJgJADIgFAAQgHAAgFgFg");
	this.shape_5.setTransform(23.1,27.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AAUBIQgxgFgZgMIgYgOIgYgOIgcgMQgQgHgHgKQgIgMABgZQAAgQAFgIQADgGAGgCQAGgDAGACQAJADADATQADAVAGAFQADADAGACIAKADQANAEARAJIAcAPQAxAaA6gIQAjgGAOgUQgPgUAFgMQADgHAIgEQAJgDAIADQAOAFAHATQAHAVgNAYQgNAWgXALQgVAJgbACIgOAAQgPAAgUgCg");
	this.shape_6.setTransform(24.8,33.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s().p("AACBFQgMgBgKgNQgHgIgFgQQgEgNgCgKQgBgJAAgSQAAgdALgLQAKgKAOABQASAAAJAQIAHAXIAJAmQAEAYgIAQQgFAKgJAFQgIAFgIAAIgDAAg");
	this.shape_7.setTransform(24.2,30.3);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(4.6,0,0,3).p("AAtAAQAAATgOANQgMANgTAAQgSAAgNgNQgNgNAAgTQAAgRANgOQANgNASAAQATAAAMANQAOAOAAARg");
	this.shape_8.setTransform(15.5,17.5);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FFFFFF").s().p("AgfAfQgNgMAAgTQAAgRANgOQAOgNARAAQATAAAMANQAOAOAAARQAAATgOAMQgMAOgTAAQgRAAgOgOg");
	this.shape_9.setTransform(15.5,17.5);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(4.6,0,0,3).p("AAtAAQAAATgOANQgMANgTAAQgSAAgNgNQgNgNAAgTQAAgRANgOQANgNASAAQATAAAMANQAOAOAAARg");
	this.shape_10.setTransform(31.5,17.5);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFFFF").s().p("AgfAfQgNgMAAgTQAAgRANgOQAOgNARAAQATAAAMANQAOAOAAARQAAATgOAMQgMAOgTAAQgRAAgOgOg");
	this.shape_11.setTransform(31.5,17.5);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(4.6,0,0,3).p("AD4AAQAABnhJBIQhIBJhnAAQhmAAhIhJQhJhIAAhnQAAhmBJhIQBIhJBmAAQBnAABIBJQBJBIAABmg");
	this.shape_12.setTransform(24.8,24.8);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFFFF").s().p("AiuCvQhIhJgBhmQABhlBIhJQBJhIBlAAQBmAABJBIQBIBJAABlQAABmhIBJQhJBJhmAAQhlAAhJhJg");
	this.shape_13.setTransform(24.8,24.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.דמות, new cjs.Rectangle(-2.2,-2.2,54,97.9), null);


(lib.דרופבוקס = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s("#0066CC").ss(3,1,1).dr(-11.7,-11.7,23.4,23.4);
	this.shape.setTransform(55.5,72.1,0.777,0.97,0,36.7,23.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).dr(-11.7,-11.7,23.4,23.4);
	this.shape_1.setTransform(35.4,38.6,0.777,0.97,0,36.7,23.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).dr(-11.7,-11.7,23.4,23.4);
	this.shape_2.setTransform(38.2,64.9,0.777,0.97,0,36.7,23.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).dr(-11.7,-11.7,23.4,23.4);
	this.shape_3.setTransform(69.1,53.2,0.777,0.97,0,36.7,23.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).dr(-11.7,-11.7,23.4,23.4);
	this.shape_4.setTransform(64.5,26.8,0.777,0.97,0,36.7,23.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#0066CC").s("#000000").ss(1,1,1).rr(-53.8,-48.3,107.6,96.6,10.1);
	this.shape_5.setTransform(53.8,48.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.דרופבוקס, new cjs.Rectangle(-1,-1,109.6,98.6), null);


(lib.דף = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(0.1,0,0,3).p("AjCkSIGFAAIAAIlImFAAg");
	this.shape.setTransform(19.5,27.5);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("ACUDjQgKgTgGgPQgNgCgRAEIgfAIQg+ATg9gEQgEgMACgLQgdgBgQgYIgGgLQgFgHgFgCIgHgEQgEgDAAgDQAAgDADgCQADgCADABQAFACAFAGQARAUAKAIQARAOAQgBQAFALgCAMQA9gCA5gQQAXgHANAAQATgBALAMQAFAGAIAPQAJAOAMgEQgFAGgHABIgDAAQgGAAgFgDgABECGQgKgGgHgJQgGgKAAgLQgPACgKANQgKAMAAAPIg+gCQgCgKAAgPIAAgaQgBgigUgKQgPAEgHANQgFASgGAHQgEAGgIAAQgIAAgCgGQARgMALgTQAKgRADgDQAEgEAHAAQAHgBADAFQABAFAGAGIALAKQAJALgDAYQgDAcADAKIAxgDQgGgKARgQQAcgXASAHQgIAJAEAOQAEANAMAGQAUAJAdgPIgGgQIARAAIgFAVQgEALgCACQgEACgIABIgMABQgRAAgOgHgACVApQgUgGgYggQgkAAgpAEQABgIAKgEIARgEQARgBAVgEIAHgBQAEACACADQAKAJAFAKIAIAKIAJADIAHAFIAPAHQADACABAFQABAEgEACIgEABQgBgDgIgEgAh5AmQAAgEAEgHQAFgHgCgEIgFgGQgEgEACgDIACgCIANACQADALgBAJQAIABAOgJQAFgCAGAAQAZgCAwANQAGAHgGAHIgDAAQgCgEgHgDQgZgKglAEIgLACIgTAKQgGADgFAAQgEAAgEgCgAgWghQAPgMABgVQgJADgcgCQgYgBgMAHQgEADgLANQgKAKgHACQgFgfgHgXQgDgNgHgBQgIgBgHAPQgCAGgEAEQgEACgDAAIAZAIQgQALgTgIQgFgGAJgLIAegnQATACAIAfQAFAQACAVQAFgBADgHIAFgLQAHgNAUAAIAPACIAQABQAMAAAYgHQAYgGANABQAIABALAEIASAGQALADAJgCQAKgDAFgIQACAMgLAJQgLAJgLgEQgEgBgGgDIgJgGQgKgFgbACQgPACgFAHQgDAEACANQABAMgEAEQgCAEgHAAQgGAAgJgEgAiDh5Igfg2QAAALgLADQACgPAEgQQACgJAFgEQADgDAEAAQAEgBACADQADAGgCAHQgCAGgGADQAFAEADAIIAEAQQACAIAGAFQAGAGAHgCQgBgHAGgGQAFgFAIgCIAPgEQAIgCAFgEQAGgDAJgLQAIgHATgHQAUgGAIgGIAHgIIAJgIQAFgEAGAAQAGgBAEAEQABAZATARQATgPAYgGQAYgGAXAGQACADgEACQgDACgEABQgbACgbAKQgJAEgFAGQgHAIAEAGIgPAAQABgKgOgRQgNgQAEgKQgIgBgJAIIgPANQgHAGgPAGQgRAGgGAEIgQALQgJAHgHADIgOAFQgIACgFAFIgJALQgFAHgFAAIgBAAg");
	this.shape_1.setTransform(20.7,26.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AjCETIAAolIGFAAIAAIlgACQC0QAGAPAKATQAGAEAIgBQAIgCAEgFQgMADgJgNQgIgPgFgGQgKgMgUABQgNAAgWAGQg6ARg8ABQABgLgFgLQgQAAgRgNQgKgIgQgUQgGgGgFgCQgDgBgCACQgEACAAADQABADAEADIAHADQAFADAEAGIAGALQARAZAcABQgCALAFAMQA8AEA+gTIAfgJQAKgCAKAAIAKABgAA/BqQAHAJAKAFQASAKAagDQAHgBAEgCQADgCADgLIAFgVIgQAAIAFAQQgdAPgTgKQgMgFgFgOQgEgOAIgIQgSgIgcAYQgRAQAGAKIgwADQgEgKAEgcQADgYgJgLIgLgKQgHgGAAgGQgEgEgHABQgHAAgEAEQgDADgKARQgKATgSAMQACAGAIAAQAIgBAEgGQAGgGAGgTQAGgMAPgEQAUAKABAhIAAAaQAAAQADAKIA+ACQgBgPAKgNQAKgMAPgCQAAALAGAKgAChAcQAIADABAEIAFgBQADgCgBgFQgBgEgDgDIgOgGIgIgFIgIgDIgJgJQgFgLgKgKQgCgDgDgBIgIABQgVADgQACIgSAEQgKAEgBAJQApgEAkAAQAYAfAUAGgAhsgJQgDADAEAEIAFAFQACAEgFAHQgEAHAAAEQAIAFALgGIATgKIALgDQAlgDAYAKQAHADACAEIAFAAQAFgIgFgHQgxgMgZACQgGAAgFABQgOAKgIgCQABgJgDgJIgNgCgAgKguQARAJAIgJQADgEgBgNQgBgMACgFQAFgGAPgDQAbgBALAEIAJAGQAFAEAEABQALAEALgJQALgJgCgMQgEAIgLADQgJACgLgDIgSgGQgLgEgIgBQgMgCgZAHQgYAHgMAAIgQgBIgPgCQgUAAgHANIgFALQgDAGgFABQgBgUgGgRQgIgegTgCIgeAnQgJALAFAGQATAIAQgLIgYgIQADAAADgDQAEgDACgGQAIgPAHABQAHABAEAMQAGAXAFAgQAIgDAJgJQALgNAFgDQALgHAYABQAcABAJgDQgBAWgPAMgAh2iHQAFABAFgHIAJgMQAFgEAJgDIANgEQAIgDAJgHIAPgMQAGgDARgHQAPgFAHgGIAPgOQAKgHAHABQgEAJANARQAPARgBAKIAOAAQgDgGAGgIQAGgGAIgEQAbgKAbgCQAEgBADgCQAEgCgCgDQgXgGgYAGQgYAFgTAQQgSgRgCgZQgDgEgHAAQgGABgFADIgIAIIgJAIQgHAHgTAGQgUAHgIAHQgJAKgGAEQgEADgJADIgPAEQgIACgEAFQgHAGABAGQgHADgGgGQgGgFgCgJIgEgPQgDgJgFgDQAGgDACgHQACgGgDgGQgCgDgEAAQgEABgDADQgEADgCAKQgEAPgDAQQALgDAAgLg");
	this.shape_2.setTransform(19.5,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.דף, new cjs.Rectangle(-1,-1,41,57), null);


(lib.דבק = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#0000FF").s("#000000").ss(1,1,1).rr(-21.8,-4.65,43.6,9.3,3.8);
	this.shape.setTransform(21.8,50.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-21.8,-21.8,43.6,43.6,12.5);
	this.shape_1.setTransform(21.8,54.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().s("#000000").ss(1,1,1).p("AAHAAQgGAEgFAAQgIAAgGgGQgGgHgGgPQgKgdAAgqQAAgpAKgeQALgdAPAAQAOAAAKAdQALAeAAApQAAAqgLAdQgGAQgHAIQAhAEAoAYQBBAnAHAiQAIAggfAgQgfAfgsAAQgrAAgggdQgggehAATQhBATA1hUQA0hTAvgIQAGgBAGgB");
	this.shape_2.setTransform(21.1,19.6);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0000FF").s().p("AgMBdQgHgHgFgQQgLgdAAgpQAAgpALgdQAKgdAOAAQAPAAAKAdQALAdAAApQAAApgLAdQgGARgGAHQgHAGgGAAQgHAAgFgHg");
	this.shape_3.setTransform(20.6,10);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("AgVBGQgggdhAATQhBASA1hSQA0hTAvgKIAMgBQAGAHAIAAQAFAAAGgGQAhAFAoAZQBBAmAHAhQAIAhgfAfQgfAfgsAAQgrAAgggdg");
	this.shape_4.setTransform(21.1,29.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.דבק, new cjs.Rectangle(-1,-1,45.6,78.7), null);


(lib.גלובוס = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AAGjPQBSACA7A7QA9A9AABVQAABWg9A9Qg9A9hWAAQhVAAg9g9Qg9g9AAhWQAAhVA9g9QA8g8BVgB");
	this.shape.setTransform(20.8,27);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#33FF33").s().p("AgIC9QgIgDgBgKQAAgJAIgFQAEgDAGAAIANAAQAIgCAOgJQAOgIAJAAQAHAAAFAEQAGADABAGQACAJgIAFIgNAFQgEABgFADIgJAGQgMAGgYACIgFAAQgFAAgDgBgAg0CDQgGgCgJgFIgPgHQgMgFgFgEQgEgDgIgLQgIgMgDgHQgFgLgCgOQgCgQACgKQACgOAJgJQALgKARABQABgIAKgDQAGgCALACQAPADAIAEQAZALAQAiIAVAvQAGALgBAGQgBAHgHADQgGADgIAAQADAIgIAGQgDAEgLACQgOACgKAAQgJAAgGgBgABgBkQgFgBgDgFQgFgGABgNQABgNAIgGQAHgEAIAFIAGAEQAEAAAFgDIALgGQAMgIAEgEIAFgIQABgFABgNQAAgMADgEQAGgHAHAAQAIgBAFAGQAFAFgCAFIgDAIIAAANIgCAMIgDAJQgCAFgEAEIgIAIQgEAEgJAGIgNAJQgLAGgKACIgIACIgHAFQgCACgEAAIgDgBgAizgnQgFgCgDgHQgCgGACgFIAEgHIACgJQABgIAEgKQAEgGADgCIAGgCQAEgCABgCQAEgEAFgKQACgEAGgDIAIgCQAKgDADAAQAIAAAEAGQAEAGgCAIQgEAJgMADIgFADIgDAEIgIAMQgDAEgFABQgDABgBACQgBAAAAAAQAAABgBAAQAAABAAAAQAAABAAABIgGAWQgDAFgGADIgHABIgFAAgABog8IgMgFIgdgHIgygJIgngBQghAAgPAHQgNAJgHADQgOAFgHgJQgFgFAAgHQAAgHACgGQACgIAIgJIAPgPIAfgfQAUgRASgEQAQgDANAEQABgLALgDQAKgCAGAJIADAFIAEACQABABAFgDQAGgDAGACQAHABAEAFQADAFACAKIAEAQQAGgFAIgCQAIgBAHADQAHAEAEAGQAEAHAAAIIATADQALADAEAIQADAGgDAJQgFAPgQAGQAAAGgGAEQgFAEgHAAQgGAAgHgDg");
	this.shape_1.setTransform(20.5,28.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#330099").s().p("AiSCTQg9g9AAhWQAAhVA9g9QA8g8BVgBQADABAEgBQBSACA7A7QA9A9AABVQAABWg9A9Qg9A9hWAAQhVAAg9g9gAA4CYQgJABgOAHQgOAKgIABIgMABQgIAAgEACQgHAFgBAJQABALAJADQAFABAIAAQAYgDAMgGIAJgGQAFgDAEgBIAMgFQAJgFgCgIQgBgGgGgEQgFgEgGAAIgBAAgAh5ANQgKAJgBAOQgCAKACAQQABAOAGALQADAHAIAMQAHAMAFADQAFADAMAFIAPAIQAJAFAGABQAOAEAZgFQALgCAEgDQAHgHgDgIQAIAAAFgCQAIgEABgHQABgFgGgLIgUgvQgRgkgZgKQgIgDgPgDQgMgCgFABQgKADgBAIIgDgBQgPAAgKAKgABaBEQgIAGgBANQgCANAGAGQADAFAFACQAFABAEgCIAHgGIAIgCQAKgCALgGIANgJQAJgGAEgEIAIgIQAEgEACgFIADgJIACgLIAAgOIADgIQACgFgFgGQgFgFgIAAQgIAAgFAHQgEAFABAMQgBANgCAFIgEAIQgEAFgNAHIgKAGQgFADgEAAIgHgEQgEgCgEAAQgDAAgDABgAiIh2IgIADQgGACgCAEQgFAKgEAEQgBADgEABIgHACQgDACgDAGQgEALgCAHIgBAJIgFAHQgBAFACAGQACAHAGACQAGACAGgDQAGgDADgFIAGgWQAAgBAAAAQAAgBAAAAQABgBAAAAQAAgBAAAAQACgCADgBQAFgBADgDIAIgNIADgEIAFgCQAMgEADgJQADgIgFgFQgEgHgHAAQgDAAgKADgAAKhFIAyAKIAdAHIAMAEQAHADAFAAQAIAAAFgEQAGgEAAgGQAQgFAFgQQACgJgCgGQgEgIgLgCIgTgEQAAgIgFgGQgDgHgIgDQgGgEgJABQgHACgGAFIgEgQQgCgKgDgEQgEgFgHgCQgGgCgHADQgEADgBgBIgFgCIgCgEQgGgKgLADQgLACAAALQgNgEgQADQgSAFgVAQIgeAfIgPAPQgIAJgCAJQgCAGAAAGQAAAIAEAEQAIAJAOgFQAHgDANgJQAPgGAgAAg");
	this.shape_2.setTransform(20.8,27);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#999999").s().p("AiZGTQgIgHADgKQADgKAKgBQADgBAJACQAHABAEgCQADgCADgEIAEgJQAFgLAOgHIAagMIAVgMQAKgFATgEIAmgKQgCgVABgSQADgpALhBIAOhXQgcAWgKAGQgqAbg4AEQg1AFg0gQQgLgEgDgGQgDgHAGgKQADgIAGgFQAGgFAGADQACACACADIADAFQAJALAYAAIApAAQAdAAAOgDQAZgFAegUIAbgUIAdgaIAbgVQAOgOAEgGQAFgHAHgRIAYg/QAKgdAAgPQAAgMgEgQQgOgwgegnQgKgNgOgOIgUgXIgVgWIgQgMQgVgPgagHQgYgFgrABQgnABgQAKIgJAHQgBAFgFAEIgHAEQgEABgEgBIgDgBQgFgBgCgDQgFgFABgIQABgLAJgDIAFAAIAAgBQAOgUAagGQAKgDAiAAIAiAAQAUAAANADQAmAGAmAfQAbAXAhAqQAhAqAQAfQAWAsgDAoQgBAWgRAuIgQAuQgJAYgHAJQgIAMgVARIAAABIAAABQAAAEgCAFIgEAIQgGAOgEAaIgOBQQgJAygCAcQgCAYAAAWIAcgEQAhgCAUAIIAWANQAWANAEAEQATAPAJAdQAEAJgBAHQAAAHgFAEQgEAFgHABQgGABgFgFQgGgDAAgHIAAgJQAAgKgKgOQgEgGgHgGQgEgDgKgEIgOgGQgIgHgEgBQgDgBgGAAQgXgCgfAGIAAAAQADARgHAGQgEADgGgBQgGgCgDgEQgEgFgBgIIgSAEQgfAJgSAHQgaALgQARIgNAQQgIAIgIADQgHADgMAAQgNAAgHgGg");
	this.shape_3.setTransform(39.2,40.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.גלובוס, new cjs.Rectangle(-1,0,61.1,81.8), null);


(lib.גוגלמפות = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AhDB2QgdgLgGgfQgfiYCGg2QBfAVg6AuQgHAFgKgFQgxgXgUA1QghBVBBAbQAPAGANgNQAJgIABgMQhLgBAtgtQAIgGAKgEQBWgfAMA+QADAQgSABQgIAAgIgBQgRBYhCAAQgbAAgigNg");
	this.shape.setTransform(22.3,26.4);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CD64").s().p("AhNDHQgPgUASgTQgOAAgLgQQgEgFAAgGQgqgHANgrIAPgrQg1goAghFQALgYAAgbQgChCA6AaQALgVASgNQANgKAOgEQBlgGAbBTQACAHgIAJQgMAQgOAOQBJAbgEBLQgHB+h3gWQgaA0gtAfQgHAFgGAAQgJAAgIgKgAgXhtQgTASgDAXIgBACQALgZAZgOQgCgEgJAAIgCAAg");
	this.shape_1.setTransform(20.4,28.9);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#00CD64").s().p("AgXACQADgTAUgCQA3AmhCAAQgPAAADgRg");
	this.shape_2.setTransform(6.5,8.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CD64").s().p("AgQAXQgLgBACgOQAFgZAYgFQAyAtg9AAIgJAAg");
	this.shape_3.setTransform(4.7,9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00CD64").s().p("AgYAIQADgZAYgEQA0AphFACQgMAAACgOg");
	this.shape_4.setTransform(4,10.3);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhlBhQgOgcgFghQgNhWAug5QAZgfAjgNQBZgaAkBHQAKATgWABQgYABgYgFQhfgXgJBOQgKBQAnA4QAJAOAPgIQAjgRAWgZQgtAIgBgoQgBgVAVgIQBXgeASBCQAGAUgRAPIg1AtQgwAngkAAQguAAgeg+g");
	this.shape_5.setTransform(20.6,25.1);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#CC0000").ss(1,1,1).p("ABBAAQAAAbgTATQgTAUgbAAQgaAAgUgUQgTgTAAgbQAAgaATgTQAUgTAaAAQAbAAATATQATATAAAag");
	this.shape_6.setTransform(78.2,16);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#CC0000").s().p("AguAuQgSgTAAgbQAAgaASgUQAUgTAaAAQAbAAATATQATAUAAAaQAAAbgTATQgTAUgbAAQgaAAgUgUg");
	this.shape_7.setTransform(78.2,16);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#FD514E").ss(1,1,1).p("ACwh+QAAAfhEBPQgeAhhBBBQgSATAFBnQAGBigHABQgDAAADhhQABhogTgUQg0gzgngvQhChPAAgfQAAhJA0g0QAzgzBJAAQBJAAAzAzQA0A0AABJg");
	this.shape_8.setTransform(78.7,30.3);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FD514E").s().p("AgBDPQABhpgTgUQgzgzgogvQhChPAAgeQAAhKA0g0QA0gzBIAAQBJAAAzAzQA0A0AABKQABAfhFBOQgfAihABAQgSATAGBoQAGBhgIABIAAAAQgCAAAChgg");
	this.shape_9.setTransform(78.7,30.3);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FFFF00").s().p("AgXAxQhAgqA5g0QANgMARAAQBhAbhBBIQgOAQgQAAQgLAAgOgJg");
	this.shape_10.setTransform(46.5,39.9);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FFFF00").s().p("AgWAyQhBgrA5gzQAOgNAQAAQBhAchBBIQgOAPgQAAQgLAAgNgIg");
	this.shape_11.setTransform(49.4,37.4);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FFFF00").s().p("AjaCWQgMhBBBgkQBcgyBOhHQBLhFBSgvQBnAjhOBQQhvBvh7BjQg0Apg+AKIgNABQgkAAgIgng");
	this.shape_12.setTransform(67.8,23.1);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FFFF00").s().p("AjiCTQgNgSAOgTQAggpAzgVQATgHASgPQBYhGBRhOQAxguA4gZQBuAehOBTQhrBwh6BfIgkAdQguAmgmAAQgrAAgjgvg");
	this.shape_13.setTransform(67.9,24.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FFFF00").s().p("AmaFLQgfgvAsgmQCTh/CYh6QAfgaAfgcQATgRAWgIQA5gUAtgqQBWhNBchGQARgNALgVQARghAkgCQBsAvheBhQhNBQhbBBIhkBHQjfCkjSCxQgYAUgUAAQgZAAgUgeg");
	this.shape_14.setTransform(44.2,43.4);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#00CD64").s().p("AgYAhQAFgdgDgfQgBgKAKgBQAGgBAEAEIABACQADAHgDAHQgCAEADACQAMgMAOAKQAAAVgOAUIgFAJQgHAEgHAAQgJAAgHgGg");
	this.shape_15.setTransform(3.6,67.8);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#00CD64").s().p("AgNARQgEgSARgNIAEgCQAGgBAEAEIABACQgBAagYADIgDgBg");
	this.shape_16.setTransform(75.7,7.2);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#00CD64").s().p("AgUAUQAAgWAZgOIAEgDQAIgBADAHIABACQgLAfgcAAIgCAAg");
	this.shape_17.setTransform(77,8.7);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#00CD64").s().p("AgbgEQgEgFAIAAQAfgHAWAOIAAACQgOAMgOAAQgPAAgOgQg");
	this.shape_18.setTransform(77.7,7);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#00CD64").s().p("AgoAnIAAgBIAAgCIAAhKIAAgBIBRADIAAABIAAACIAABGIAAADIgfAAQgYAAgagBg");
	this.shape_19.setTransform(5.5,44.9);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#00CD64").s().p("AgoAmIAAgBIAAgCIAAhIIAAgBIBRAEIAAABIAAACIAABCIAAADIgpABIgogBg");
	this.shape_20.setTransform(5.5,14.6);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#00CD64").s().p("AgmAoIgCgBIAAgCIAAhMIAAAAIBRADIAAABIAAACIAABGIAAACIg0ABIgbAAg");
	this.shape_21.setTransform(5.2,24);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#00CD64").s().p("AgnAoIAAgCIAAgCIAAhLIAAgBIBPAEIAAABIAAACIAABIIgBABIgnABIgngBg");
	this.shape_22.setTransform(5.9,24.5);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#00CD64").s().p("AgoAmIAAgBIAAgCIAAhIIAAgBIBRAEIAAABIAAACIAABCIAAADIgpABIgogBg");
	this.shape_23.setTransform(5.5,38.5);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#00CD64").s().p("AgrA4QAJhGgKhFQgGgkAmgEQBIAmgSBbQgJAxADAxQABAUgVAAQhDAAAIhEg");
	this.shape_24.setTransform(5.8,25.6);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#00CD64").s().p("AgZAcQgkgxA8gSQBOAhhIAqQgGAEgGAAQgKAAgIgMg");
	this.shape_25.setTransform(45.6,32);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#00CD64").s().p("AgfAVQgSguAxgLQBNAohQAeQgFADgFAAQgNAAgFgQg");
	this.shape_26.setTransform(47.3,30.7);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#00CD64").s().p("AghAYQgWgyA3gNQBQAjhQAoQgHAEgGAAQgMAAgIgQg");
	this.shape_27.setTransform(56.3,23.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#00CD64").s().p("AgeAXQgZgvA2gNQBNAghJAoQgGAEgGAAQgNAAgIgQg");
	this.shape_28.setTransform(65.6,15.7);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#00CD64").s().p("AgfAXQgWgwA1gNQBNAihLAnQgHAEgGAAQgNAAgHgQg");
	this.shape_29.setTransform(52.9,26.4);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#00CD64").s().p("AgfAYQgXgxA2gNQBQAqhSAhQgFACgFAAQgMAAgHgPg");
	this.shape_30.setTransform(49.3,28.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#00CD64").s().p("AgfAWQgUgwAzgLQBOAphRAgQgFACgFAAQgMAAgGgQg");
	this.shape_31.setTransform(47.6,29.8);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#00CD64").s().p("AiPBeQgPg7BFgZQAXgJAUgPQBEg3BKgoQBYAWhCA5QhqBaiBAwQgFACgEAAQgNAAgEgQg");
	this.shape_32.setTransform(52.5,23.7);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f("#00CD64").s().p("AjeCeQgQgiAdgcQBYhWBmhHQBahABahBQAHgFAIgBQBeAWhIA5QisCGinCIQgEADgEAIQgTAhgRAAQgTAAgSgng");
	this.shape_33.setTransform(24.2,48.6);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#00CD64").s().p("Ai1BTQgDgZAUgUQA4g1BEgbQAhgOAggPQA9gdA1gjQBZAmhgA/QhjBAhgBDIgYARQggAWgVAAQghAAgIg1g");
	this.shape_34.setTransform(57.5,19);

	this.shape_35 = new cjs.Shape();
	this.shape_35.graphics.f("#00CD64").s().p("AgcAoQgzhBBPgbQBbAmhPA8QgKAHgIAAQgLAAgLgNg");
	this.shape_35.setTransform(7.1,18.5);

	this.shape_36 = new cjs.Shape();
	this.shape_36.graphics.f("#00CD64").s().p("AgdAhQgvg8BLgVQBWAYg/A9QgNAMgMAAQgOAAgMgQg");
	this.shape_36.setTransform(6.4,13.2);

	this.shape_37 = new cjs.Shape();
	this.shape_37.graphics.f("#00CD64").s().p("AgvAXQgRguAvgaQALgGAKAAQBZAhhLA+QgSAQgPAAQgVAAgLghg");
	this.shape_37.setTransform(8.1,11.2);

	this.shape_38 = new cjs.Shape();
	this.shape_38.graphics.f("#00CD64").s().p("AhEANQgKgcAagSQAggVAlgGQBiAehNA/QghAcgYAAQggAAgRgwg");
	this.shape_38.setTransform(10.8,11.7);

	this.shape_39 = new cjs.Shape();
	this.shape_39.graphics.f("#00CD64").s().p("Ai4EQQhBgbARhJQAGgZABgdQADhrAIheQACgRAAgTQgBh0BsgoQBpAABKA2QAKAIgCAOQgBAOgJALQAYgCAYANQAQAJAFASQBPhDAQBdQAEAXgSARQh8BxiDBpQgQAMgTgLQgXgNggAKQAUBDgjAvQgLAQgQAAQgJAAgKgEg");
	this.shape_39.setTransform(24.3,36.6);

	this.shape_40 = new cjs.Shape();
	this.shape_40.graphics.f().s("#00CD64").ss(1,1,1).p("AkxHgIiSu/IOHFhg");
	this.shape_40.setTransform(38.1,11.1,0.535,0.488,0,-112.8,-162.5);

	this.shape_41 = new cjs.Shape();
	this.shape_41.graphics.f("#00CD64").s().p("AnDnfIOHFhIr1Jeg");
	this.shape_41.setTransform(38.1,11.1,0.535,0.488,0,-112.8,-162.5);

	this.shape_42 = new cjs.Shape();
	this.shape_42.graphics.f("#FFFF00").s().p("AgfAfQgqg7BIgTQBYAfhIA3QgLAJgKAAQgOAAgLgRg");
	this.shape_42.setTransform(4.7,78.3);

	this.shape_43 = new cjs.Shape();
	this.shape_43.graphics.f("#FFFF00").s().p("AgXAmQg6g7BQgaQBZAehHA5QgKAIgJAAQgLAAgKgKg");
	this.shape_43.setTransform(8.9,79.6);

	this.shape_44 = new cjs.Shape();
	this.shape_44.graphics.f("#FFFF00").s().p("AgYAlQg6g5BQgbQBcAchIA7QgKAIgJAAQgMAAgLgLg");
	this.shape_44.setTransform(6.7,78.8);

	this.shape_45 = new cjs.Shape();
	this.shape_45.graphics.f("#FFFF00").s().p("AgbAoQg0g+BPgaQBgArhdAzQgGADgGAAQgKAAgIgJg");
	this.shape_45.setTransform(6.3,77.3);

	this.shape_46 = new cjs.Shape();
	this.shape_46.graphics.f("#FFFF00").s().p("AjFC6Qgdg5A4grQCHhmBwh8QAdgeAfgbQAJgHAKAAQBhAthTBVQhwByh6BnQgrAkgxAWQgJAEgHAAQgQAAgJgTg");
	this.shape_46.setTransform(71.3,25.3);

	this.shape_47 = new cjs.Shape();
	this.shape_47.graphics.f("#FFFF00").s().p("Aj9DJQgVgvAsglQDai2DfiiQBhArheBIQhBAyg/A1QiKB1iNBrQgQANgNAAQgTAAgMgbg");
	this.shape_47.setTransform(30.9,60.6);

	this.shape_48 = new cjs.Shape();
	this.shape_48.graphics.f("#FFFF00").s().p("AhBBTQhghDBbhDQASgNAWAEQAXAEAYgQQAWgOAXgCQBjArhXA8QgxAjg0AiQgJAFgJAAQgKAAgKgGg");
	this.shape_48.setTransform(11.6,74);

	this.shape_49 = new cjs.Shape();
	this.shape_49.graphics.f("#FFFF00").s().p("AhXBmQgwhCBEg+QA4gzA7ghQBpAhhQBOQhBBBhHAqQgFADgEAAQgIAAgHgJg");
	this.shape_49.setTransform(79.5,15.6);

	this.shape_50 = new cjs.Shape();
	this.shape_50.graphics.f("#FFFF00").s().p("AggAiQgng8BHgUQBgAxhjAqQgFACgFAAQgLAAgIgNg");
	this.shape_50.setTransform(86.1,12.3);

	this.shape_51 = new cjs.Shape();
	this.shape_51.graphics.f("#FFFF00").s().p("AghAiQgmg8BHgUQBgAxhjAqQgFACgFAAQgLAAgJgNg");
	this.shape_51.setTransform(85.6,10.2);

	this.shape_52 = new cjs.Shape();
	this.shape_52.graphics.f("#FFFF00").s("#FFFF00").ss(1,1,1).rr(-4.75,-27.95,9.5,55.9,1.6);
	this.shape_52.setTransform(45.3,43.6,1.162,1.8,51.2);

	this.shape_53 = new cjs.Shape();
	this.shape_53.graphics.f("#FFFFFF").s().p("ACrC6QgSgCgZgTQiYhphEg3Qg7gvgwgtQgRgQgFgLQgHgPAEgRQAFgSANgKQANgKASgBQARgCAPAJQAMAHAOASQATAXAFAEIAhAYQAOAKAiAeIA/AxQBIA1ArAaQAaAPALAKQASAQAEASQAHAZgSAUQgPAQgVAAIgHAAg");
	this.shape_53.setTransform(67.3,64.3);

	this.shape_54 = new cjs.Shape();
	this.shape_54.graphics.f("#0099FF").s().p("AgjAfQgig9BGgTQBZAnhRA1QgKAHgJAAQgPAAgKgTg");
	this.shape_54.setTransform(79.2,78.2);

	this.shape_55 = new cjs.Shape();
	this.shape_55.graphics.f("#0099FF").s().p("AgaAmQg2g9BPgaQBdAjhNA4QgLAIgIAAQgMAAgKgMg");
	this.shape_55.setTransform(79.8,78.4);

	this.shape_56 = new cjs.Shape();
	this.shape_56.graphics.f("#0099FF").s().p("AAjB3QhIg7hAhDQglgngBgwQgBgqArgDQBeA1BGBdQAcAkAjAfQATAQgPAWQgWAcgbAAQgXAAgbgVg");
	this.shape_56.setTransform(66.6,69.4);

	this.shape_57 = new cjs.Shape();
	this.shape_57.graphics.f().s("#999999").ss(1,1,1).p("ADQk8IgEJ6Imbkdg");
	this.shape_57.setTransform(70.4,45.8);

	this.shape_58 = new cjs.Shape();
	this.shape_58.graphics.f("#CCCCCC").s().p("AjPAgIGfldIgEJ7g");
	this.shape_58.setTransform(70.4,45.8);

	this.shape_59 = new cjs.Shape();
	this.shape_59.graphics.f().s("#0099FF").ss(1,1,1).p("AFEEbIqHgHIFJoug");
	this.shape_59.setTransform(46.6,65.5,0.978,0.644,0,13.2,0);

	this.shape_60 = new cjs.Shape();
	this.shape_60.graphics.f("#0099FF").s().p("AlEEUIFKouIE+I1g");
	this.shape_60.setTransform(46.6,65.5,0.978,0.644,0,13.2,0);

	this.shape_61 = new cjs.Shape();
	this.shape_61.graphics.f().s("#000000").ss(1,1,1).p("AijisIFHFZ");
	this.shape_61.setTransform(66.6,65.9);

	this.shape_62 = new cjs.Shape();
	this.shape_62.graphics.f().s("#000000").ss(1,1,1).p("AGalZIszKz");
	this.shape_62.setTransform(42,40.3);

	this.shape_63 = new cjs.Shape();
	this.shape_63.graphics.f().s("#000000").ss(1,1,1).p("AGalZIszKz");
	this.shape_63.setTransform(50.3,48.6);

	this.shape_64 = new cjs.Shape();
	this.shape_64.graphics.f("#FFFFFF").s("#000000").ss(1,1,1).rr(-45.15,-38.75,90.3,77.5,8.3);
	this.shape_64.setTransform(46.1,44.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_64},{t:this.shape_63},{t:this.shape_62},{t:this.shape_61},{t:this.shape_60},{t:this.shape_59},{t:this.shape_58},{t:this.shape_57},{t:this.shape_56},{t:this.shape_55},{t:this.shape_54},{t:this.shape_53},{t:this.shape_52},{t:this.shape_51},{t:this.shape_50},{t:this.shape_49},{t:this.shape_48},{t:this.shape_47},{t:this.shape_46},{t:this.shape_45},{t:this.shape_44},{t:this.shape_43},{t:this.shape_42},{t:this.shape_41},{t:this.shape_40},{t:this.shape_39},{t:this.shape_38},{t:this.shape_37},{t:this.shape_36},{t:this.shape_35},{t:this.shape_34},{t:this.shape_33},{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.גוגלמפות, new cjs.Rectangle(0,-1,97.4,85.5), null);


(lib.גימייל = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#E24D41").s().p("AAAHDQg8gZAJhPQAkkugUktQgFhMgBhLQgBgoAogFQBHA5gVBsQgKAyAEA2QAYE9gvEzQgBAMgJAAQgEAAgFgCg");
	this.shape.setTransform(5.3,47);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#E24D41").s().p("AgwDsQiljVjoiTQh6hOB0gQQAOgCAPALQDkCbC9DIQD5jCDmjKQBSA8hxBTQjkCnjZC2QgLAJgKAAQgNAAgMgPg");
	this.shape_1.setTransform(53.2,25.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#E24D41").s().p("AAFHSQhAgTADhQQAEhpgDhpQgMk5A6ksQABgJALgBQBNA0geBvQgOAxgDA1QgQFHAJFGQABAPgNAAIgJgBg");
	this.shape_2.setTransform(99.9,46.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#000000").ss(1,1,1).p("AH3nFIvtOL");
	this.shape_3.setTransform(52.3,46.4);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AH3HGIvtuL");
	this.shape_4.setTransform(52.3,47.1);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#EEEEE0").s("#000000").ss(1,1,1).rr(-51.95,-46.7,103.9,93.4,5.7);
	this.shape_5.setTransform(52.7,46.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.גימייל, new cjs.Rectangle(-0.2,-1,106,95.4), null);


(lib.אינסטגרם = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#8C0CF0").ss(6,1,1).p("ABkAAQAAAqgdAdQgdAdgqAAQgpAAgdgdQgdgdAAgqQAAgoAdgeQAdgdApAAQAqAAAdAdQAdAeAAAog");
	this.shape.setTransform(83.3,21.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AhGBGQgdgdAAgpQAAgpAdgdQAegdAoAAQAqAAAdAdQAdAdAAApQAAApgdAdQgdAegqAAQgoAAgegeg");
	this.shape_1.setTransform(83.3,21.1);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f().ls(["#FA8A91","#FA7083","#FA0904","#FAE03A","#9309D2"],[0,0.173,0.357,0.627,0.894],-22.2,0,22.3,0).ss(6,1,1).p("ADBAAQAABPg5A5Qg4A5hQAAQhOAAg5g5Qg5g5AAhPQAAhOA5g5QA5g5BOAAQBQAAA4A5QA5A5AABOg");
	this.shape_2.setTransform(54,50.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AiHCIQg4g4AAhQQAAhPA4g4QA5g4BOgBQBPABA5A4QA4A4AABPQAABQg4A4Qg5A4hPABQhOgBg5g4g");
	this.shape_3.setTransform(54,50.3);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").ls(["#FA8A91","#FA7083","#FA0904","#FAE03A","#9309D2"],[0,0.173,0.357,0.627,0.894],-56.1,0,56.2,0).ss(6,1,1).rr(-53.2,-46.3,106.4,92.6,14.7);
	this.shape_4.setTransform(53.2,46.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.אינסטגרם, new cjs.Rectangle(-3,-3,112.4,98.6), null);


(lib.אקסל = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhwhwIDhAAIAADhIjhAAg");
	this.shape.setTransform(11.3,11.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#00CC00").s().p("AAUAYIgHgGIgNgJIAAAAIAAAAIgIAEIgIAGQgFAEgCAAQgEgBAAgEIAAgBQAAgFAGgEIADgCIAGgDIABgBIgBAAIgDgCQgFgEgDgFIgDgFQgBgFACgCIADgCQACAAADADIAFAIIAEAEIAFAEIABABQAHgHAEgGIAGgGQAFgDADADIABABQAAABAAAAQAAABAAABQAAAAAAABQAAAAgBABIgDAFIgMANIACAAIAJAGIAFAEIABABQAFAFgCAEQgCADgDAAIgDgBg");
	this.shape_1.setTransform(4.6,3.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhPBYQgFgBAAgFQAAgEAIgBQAUgFAPAAQAOgBAbACIBYAFQAIAAAAAFQAAAEgIAAQgMABgmgCIgdgCIgogCQgXAAgSAFIgGABIgBAAgAAnBIIgNgEIgcgLQgKgDgEAAIgmACQgSABgMAEQgGACgCgDQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgDADgBQAFgEAMgBIAngDIAPgBQANABARAHIATAHIALADQAFABAEgBQALgBAJgDIAIgDQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAADgGACQgOAGgPABIgFABIgGgBgAhQAhQgIgFgEgBIgIgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBQADgCAFACIAHAEQAHACAOgBIBagIQAKgCAJABQAIABARAGIAHABQAEACgBAEQgBAEgGAAQgGAAgMgEQgMgEgGAAIgMACIgMABIhTAIIgNgBgAgzgBIgggDIgFgCQgDgCAAgDQABgDAEgBIAGAAQAPADAeACIAUABQAQAAAWgCIAggEQAWgCAKAEQABAAABAAQAAABABAAQAAAAABABQAAAAAAAAQADAEgGACQgCABgGgBQgQgBgaADIgqAEIgFAAQgPAAgbgCgAgRghQgLgDgGAAIgLAAQgWABgRgBQgIgBgCgDQgCgCAAgDQABgEADAAIAEAAQAMAEAWgBQAXgCAKADIATAFIAUAAIAggBIARgDQAKgDAGABQAEAAACABQADACAAADQgBADgEABIgGABIgNABIgNADIgRABIgnABIgQgEgAA+hHIgkgEQgQgCgLABIgFADQgEACgDgBQgFgBABgEQABgDAGgDIAFgEIAFAAQAUAAAKABIAMACQAXADAbAAQAFAAACADQAEADgFAEIgEAAIgQABIgQgBg");
	this.shape_2.setTransform(11.1,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhwBxIAAjhIDhAAIAADhgAgqBPQgQABgTAFQgIABAAAEQAAAEAEABIAIgBQARgEAYAAIAnACIAeACQAlACANgBQAIAAAAgEQAAgFgIAAIhYgGIgegBIgLAAgAgDBBIAcALIANAEQAGABAFgBQAPgBAOgGQAFgCABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgIADQgIADgLABQgFABgEgBIgLgDIgTgHQgRgHgNgBIgPAAIgoAEQgLABgGADQgCABgBAEQAAAAgBABQAAAAAAABQAAAAABABQAAABAAAAQADACAGgCQALgDATgBIAlgCQAFAAAKADgAhjAZQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIAIAEQAEABAIAFIANAAIBTgIIAMgBIAMgBQAGAAAMADQAMAFAGAAQAGAAABgFQABgDgFgCIgGgBQgRgHgIAAQgKgBgJACIhaAIQgOABgIgCIgHgEIgEgBIgEABgAhXgHQgEABgBADQAAACACACIAGACIAgADQAeADARgBIAqgEQAZgEARACQAFABACgBQAHgCgEgDQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgKgFgXADIgfAEQgWACgQAAIgUgBQgegCgPgDIgFgBIgBABgAgjgdQAGABAKADIARADIAnAAIAQgBIAOgDIANgCIAGAAQAEgBABgDQgBgDgDgCQgCgBgDgBQgGAAgKACIgRAEIggABIgUAAIgTgGQgKgCgYABQgVACgMgEIgFAAQgCAAgBADQAAADACADQACACAIABQARACAVgBIAJgBIADAAgAhBhAIANAIIAGAHQAGABACgDQACgFgFgEIAAgBIgGgFIgJgFIgBgBIALgNIAEgGQAAAAAAgBQABAAAAgBQAAAAAAgBQgBgBAAAAIAAgBQgEgEgEAEIgGAGQgEAGgIAHIgBgBIgGgFIgDgDIgFgIQgDgDgCAAIgEACQgBABABAGIACAFQAEAFAFAEIADACIABABIgBABIgGADIgDABQgGAFgBAEIAAABQAAAFAEABQADAAAFgFIAIgFIAHgFIABAAIABABgAAZhDIAkAEQAQABAQgBIAEgBQAEgDgDgDQgCgDgFAAQgbAAgXgDIgMgCQgKgBgTAAIgGAAIgGADQgFADgBAEQgBADAFABQADABAEgCIAEgCIAGgBIAWACg");
	this.shape_3.setTransform(11.3,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.אקסל, new cjs.Rectangle(-1,-1,24.5,24.5), null);


(lib.אפליקצייתרדיו = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AgYAYQgIgLABgNQgBgIAFgJQAEgJAIgEQAIgEAHgBQAPAAAKAMQAIAKAAANQgBAIgEAJQgEAJgIAFQgIAEgIAAQgPABgJgMgAgJgbQgEACgDAGQgCAGAAAIQAAAOAGAKQAGALAJAAQAGAAAFgFQAFgHgBgNQABgSgIgKQgFgHgIAAQgDAAgEADg");
	this.shape.setTransform(49.3,55.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AgPA0IAAgCQAFgBACAAIACgDIABgJIAAgaIAAgNIgCgDIgDgBIgFABIgBgDIATgIIAEAAIAAA1IABAJQAAAAAAAAQAAABABAAQAAABAAAAQABAAAAABIAHABIAAACgAgEgnQgCgCAAgDQAAgDACgCQACgCADAAQADAAACACQACACAAADQAAADgCACQgCACgDAAQgDAAgCgCg");
	this.shape_1.setTransform(43.5,54);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AAMA1IAAgKQgFAGgFACQgDACgGAAQgLAAgIgJQgIgKAAgOQAAgOAJgLQAJgMAOAAQAIAAAGAFIAAgMIgBgOIgBgDIgDgBIgFABIgBgDIAUgIIADAAIAABMIAAAPIACADIADABIAFgBIABADIgUAIgAgOgHQgHAHAAAOQAAAPAHAIQAGAIAIAAQAGAAAGgGIAAgjQgBgEgCgFQgCgEgEgCQgDgCgDAAQgGABgFAFg");
	this.shape_2.setTransform(37.9,54.1);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("AAJAhQgCgDgBgGQgJAIgCABQgEACgEAAQgIAAgEgFQgEgEAAgIQAAgFABgEQADgFAIgEIAXgKIAAgCQABgKgDgEQgEgEgFAAQgEAAgDADQgDACAAADIABAFQgBADgCACQAAAAAAABQgBAAAAAAQgBABgBAAQAAAAgBAAQgBAAAAAAQgBAAAAgBQgBAAAAAAQgBgBgBAAQgBgCAAgDQAAgHAHgFQAGgFAMAAQAIAAAFADQAEACACAFQACADAAAKIAAAVIAAAMIACADIACABIABgBIAHgFIAAAEQgJALgHAAQgEAAgCgCgAgHAAQgGADgCAEQgCADgBAEQABAGADADQADAEAEAAQAFAAAIgIIAAgYIgNAFg");
	this.shape_3.setTransform(30.9,55.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AAXAyIghgvIgGAAIgCAAIgCAAIAAAdQAAAKACACQADADAFAAIAEAAIAAADIgrAAIAAgDIAFAAQAFAAAEgEQABgCAAgJIAAg/QAAgJgCgDQgDgDgFAAIgFAAIAAgDIAkAAQAQAAAHADQAIACAFAGQAFAGAAAJQAAAJgGAHQgGAHgNABIAVAdQAHAKAFADQAFADAIABIAAADgAgUgqIAAAqIADAAIABAAQAOAAAGgGQAIgHgBgJQABgJgGgGQgGgGgIAAIgMABg");
	this.shape_4.setTransform(22.5,54.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f().s("#000000").ss(1,1,1).p("AAAiTIAAEn");
	this.shape_5.setTransform(51.5,32.3);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f().s("#000000").ss(1,1,1).p("AAAiTIAAEn");
	this.shape_6.setTransform(17,32.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f().s("#000000").ss(1,1,1).p("AAAiTIAAEn");
	this.shape_7.setTransform(34,32.1);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_8.setTransform(37.6,33.4);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_9.setTransform(40.9,33.4);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_10.setTransform(44.1,33.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_11.setTransform(47.4,33.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_12.setTransform(20.6,33.6);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_13.setTransform(23.9,33.6);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_14.setTransform(27.1,33.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_15.setTransform(30.4,33.6);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_16.setTransform(4.3,33.4);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_17.setTransform(7.7,33.4);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_18.setTransform(10.8,33.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_19.setTransform(14.2,33.3);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_20.setTransform(55.6,33.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_21.setTransform(58.9,33.3);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_22.setTransform(62.1,33.3);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f().s("#000000").ss(1,1,1).p("AAAhLIAACX");
	this.shape_23.setTransform(65.4,33.3);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AkilbIJFAAQA5AAAAA5IAAJFQAAA5g5AAIpFAAQg5AAAAg5IAApFQAAg5A5AAg");
	this.shape_24.setTransform(34.8,34.8);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AkiFcQg5AAAAg5IAApFQAAg5A5AAIJFAAQA5AAAAA5IAAJFQAAA5g5AAg");
	this.shape_25.setTransform(34.8,34.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.אפליקצייתרדיו, new cjs.Rectangle(-1,-1,71.6,71.6), null);


(lib.אפליקציתיומן = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#FFFFFF").ss(1,1,1).p("AA7A7Ih1ggIBVhVg");
	this.shape.setTransform(38.3,34.5,1,1,-30);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#5AB1DE").s().p("Ag6AbIBVhVIAgB1g");
	this.shape_1.setTransform(38.3,34.5,1,1,-30);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#5AB1DE").s("#FFFFFF").ss(1,1,1).dr(-8.35,-19.5,16.7,39);
	this.shape_2.setTransform(52.9,21.1,0.424,1,45);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#5AB1DE").s().p("AhAAWIgBgCIAAgCIAAgnIAAgBICCAEIABACIAAACIAAAiIAAADIgyAAQgoAAgogBg");
	this.shape_3.setTransform(11.2,56.2);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#5AB1DE").s().p("AhAAWIgBgCIAAgCIAAgnIAAgBICCAEIABACIAAACIAAAiIAAADIgyAAQgoAAgogBg");
	this.shape_4.setTransform(11.2,44.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#5AB1DE").s().p("AhAAWIgBgCIAAgCIAAgnIAAgBICCAEIABACIAAACIAAAiIAAADIgyAAQgoAAgogBg");
	this.shape_5.setTransform(11.2,33.7);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#5AB1DE").s().p("AhAAWIgBgCIAAgCIAAgnIAAgBICCAEIABACIAAACIAAAiIAAADIgyAAQgoAAgogBg");
	this.shape_6.setTransform(11.2,23);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FFFFFF").s("#FFFFFF").ss(1,1,1).dr(-30.9,-30.9,61.8,61.8);
	this.shape_7.setTransform(41,41.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#5AB1DE").s("#000000").ss(1,1,1).rr(-41.15,-41.15,82.3,82.3,7.2);
	this.shape_8.setTransform(41.1,41.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.אפליקציתיומן, new cjs.Rectangle(-1,-1,84.3,84.3), null);


(lib.אפליקציתגלריה = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).rr(-35.55,-34.1,71.1,68.2,1.9);
	this.shape.setTransform(36.3,34.8);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#0066FF").s().p("AgCFXIgIABQgNABgLgGQgEACgGABQgJABgHgEQgIADgHAAQgFAAgIgBIgMgDQgQgDghACQghACgVgCIgKgCQgEAEgGACQgJADgHgDQgGABgGgCIgFgCQgHAFgKAAIgEgBIgCABQgNAEgOgCQgIgBgGgDIgFABQgIABgIgFQgHgFgDgIQgCgIADgIIAAgBQgEgLABgMQABgJACgGIADgFIgCgCQgFgFAAgIQgBgHADgHQADgGAEgDIgBgBQgEgFgBgIQgBgGACgGQgCgEgBgGIAAgCQgCgFABgHIABgEQACADADAAQAEABAGgCIAEgCIABAAIAFAAIAIAAQAQgCAWAFIAmAJQAgAHA6ACQArABAVgFQAZgGAngWIABAAIAAgBIAHgEQAHgEADAAIAKACIAEgCQgBAQADAQIAHAlQABAPACAFIAWBJQACAHAAAFIAAAJIgEADIgDABQgFACgFAAIgIADIgIABQgGAAgFgDgAEIFZQgHAAgEgEQgEABgEgBIgGgCIABgBQAJgLAJgOIAMgTIAFgSIAGgLQAEgJACgJIADgLQAFgSACgLIABgCIAGgJIAHgFQADgDABgFQAAgFgDgEIgDgDIADAAIAXATQAMAKAHgFIABABIACAFQAEAHgCAMIgFAdQgDASAEALIAEASIgCALIgCANQgBAHgDADQgEAEgGABIgMABIgyAIIgLABIgEAAgAAoDGIABAAIAAABIgBgBgAlcBqQgDgDgCgDQgCgEACgDIADgEIADgCIgEgEQgJgJACgOQACgIAHgGIACgBQgCgFABgFIACgGIgBgBQgHgEgCgHQgDgGAAgLQABgMAEgEQgDgLAHgJQgFgLgBgTQgBgVAAgQQABgRAFgcIgCgEQgDgJACgJQACgFAEgEIgDgMIgBgaQABgOACgEIABAAQgDgFAAgHQgBgHADgGIAAgHIACgGIgEgHQgEgHADgJQABgGAFgFIgBgCQgHgNAJgNQAJgNAQAEIAHABIAOACIAFACIAEABQAFABAEADIAEADQAFAGABAIQAJAGAJAOQASAbAKAKIAQARIAMAQQAFAEAKAHIAOALIAOAPQAGAGAKAFIARAJQAPAIAFAMIgBABIABACIABACIABAAIAAACIAAACQAAAIgDAFIgEAIQgEAFgIAEIgPAHQgRAIgTARIggAgIgrAnQgaAXgPASIgMAPQgEAAgEACIgEACIgIAMIgCAFIgDAFQgIADgCAEIgDAGIgCACIgCAFQgCAGgFAHg");
	this.shape_1.setTransform(36,34.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF9900").s().p("AAsFZQgHAAgGgGIADgBIAEgDIgBgJQABgFgDgHIgVhJQgCgFgBgPIgHglQgDgQABgQIACgEIABgFQAEgDACgDIABgEIADgCQAEgEgBgFIAAAAIABAAIAGgOQAKgYAJgKIAQgOIAQgWQAFgHASgVQAOgRAHgMIAIgOIACgDIAAgFQABgEADgFIAPgTIAPgRIAEgKQgHACgDABIgJAHIgCABIAAABIgEAGQgOASgWAQIgeATIgCACIgFAIIgJAHIgFADIgEAFQgFAIgKABQgFACgEgCIgEACQgQAGgIABIgIACQgIAFgGABIgBAAIgUAGIgUAFQgbALgPAEIgtALQgbAGgQAJIgaASIgxAXQgdAPgbAQIgEAAQgIAAgFAEQgDgCgEABIgIAEIgDAFQgCgIADgGIADgDIAEgEQgDgCgBgDQgBgGABgGIABgDIgBAAQgDgFADgFIACgCIABgEIABABQAGgHACgGIABgFIADgCIACgGQACgEAIgDIADgFIADgFIAIgMIAEgCQAEgCAEAAIAMgPQAOgSAagXIArgnIAgggQATgRASgIIAOgHQAIgEAEgFIAEgIQADgFAAgIIAAgCIABgBQABAAABAAQAAAAABAAQAAAAABAAQAAgBABAAIABgBIAAgBQAWgJAUgHQAUgGALAAQAMgBARACQBAAJA7APIAJADQAEgBAFAAIAPABIgTgOIgOgKIgXgKQgKgEgTgMQgUgMgKgEQgdgJgMgIIgFgFIgIgDQgHgDgNgIQgcgQgMgMQgIgIgEgCIgPgFQgGgDgJgKQgHgHAAgFQABgEACgCQgCgKAJgHIAAAAQAHgGALABIATACQAJABALgCQAigFALADIAIADQADAAAIgEQAKgEALACIAOADQAFAAAKgCIAGABQACgBADAAQAFABACADIABACIABAKQAAAHADAIIAFALIApBBIABABIADAEIAMAUIADAHIAFAHIALASIAKALIABABIALAKIgCgJIgDgMQgCgNAFgYIACgLIABgaQAAgIAEgSIAFgXIAAgXQABgJACgDQADgEADgBIAFAAQAEABACADQAEgBAQgBIAagBIAJABIAAgBQAJgFAJADIAGADIACAAIAFACQAEADABAEIAAAIIADAIQACALgFANIgJAWIgJAaQgGAPgHAIIgJAJIgWAeQgGAKgFAGQgIAHgDAEIgEAHQADAGgEAEIgEAFIAGgDIAJgGQAEgCANgFIAEgBIAHgFIADgBIACgCIAHgIIANgLIANgJIADgFQACgEAGgDIACgBQAEgFAJgBIABAAIAHgBIABAAIAGgCQAJgBACAJIABAAIAAABIABADQACAEgCAEIAAABIAAABQADAFABAIIACAOQABANgBAEQgDAJgIAEQAHAKgCAKIgBADQgCAEgFAEIAAgBQgEAAgFACIgCADIgCAAIgMgCIgIgBIg4ACQgKAAgFgCQgGgCgDgEQgHgBgIABIgCAAIAAAAIAGAHIAIADIANAMQADACALADQAKAEAGAFIADABQAHAEAJAIIAOANIAaAUIAEAFIADABIABABIAEACQAIAGAAAHIgBACIgCAFIACASIAKBGQAEAZgJAKQgEAFAAACQgBACAFAHQAEAGgBAIQgBAHgFAFIgBABIgBABIACADQAEAJgGAFIAAAAQgIAFgLgKIgYgTIgSgPQgjgdgPgSQgTgZgXg7IgJgYIgKgbIgBAFIAAADQgBAUgEAOIgIAaQgCAMgBAPIgBAoIgCApIgFAtIAAA1QAAAhgEAUQgEAPgHAHIgGAEQgCAIgGAFQgHAEgHAAIgKgBIgIgBIgDAAIgRACQgKACgGgDIgBAAQgFADgFAAIgBAAgAAkDGIAAgBIAAAAIAAABgAEpCGQgHgHgKgHIgCgCIATAQgAChgzIAAAAIABgBIgBABg");
	this.shape_2.setTransform(36.4,34.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFF00").s().p("ACWFZQgFgCgCgFIgBABQgDAFgFABIgHABQgSABgLgDIgGgCIAIABIAKABQAIAAAGgEQAHgFACgIIAGgEQAHgHADgPQAFgUgBghIAAg1IAGgtIACgpIAAgoQABgPADgMIAIgaQADgOABgUIAAgDIACgFIAJAaIAKAZQAWA7AUAZQAOASAkAdIASAPIgDAAIADADQADAEAAAFQgBAFgDADIgHAFIgGAJIgBACQgCALgFASIgDALQgCAJgEAJIgGALIgFASIgMATQgJAOgJALIgBABQgGAFgDABIgEAAIgBAAQgGADgGgDIgGAAQgVACgPgEIgHAEIgDABQgEAAgDgDgACzDeIAAAAIAAgDIAAADgAFfDEIgBgBIABAAQAGgFgEgJIgDgDIACgBIABgBQAGAEABAGQABAGgEAFIgEAEIgCgFgAieDCQg6gCgggHIgmgJQgWgFgQACIgIAAIgFAAIgBAAIgEACQgGACgEgBQgDAAgCgDIgBgBQgCgEABgEIABgBIADgFIAIgEQAEgBADACQAEgEAIAAIAEAAQAbgQAegPIAxgXIAagSQAPgJAcgGIAtgLQAOgEAcgLIAUgFIAUgGIABAAQAFgBAIgFIAIgCQAIgBAQgGIAFgCQAEACAFgCQAKgBAEgIIAFgFIAFgDIAIgHIAFgIIADgCIAdgTQAXgQANgSIAFgGIAAgBIACgBIAIgHQAEgBAHgCIgFAKIgOARIgPATQgEAFAAAEIgBAFIgCADIgHAOQgHAMgPARQgSAVgFAHIgPAWIgQAOQgJAKgKAYIgGAOIgBAAIgBAAQACAFgEAEIgDACIgCAEQgBADgEADIgBAFIgDAEIgDACIgLgCQgDAAgHAEIgHAEIAAABIgBAAQgnAWgZAGQgRAEggAAIgPAAgAiDBCIADgBIACgCIgFADgAliCJQABADACACIgEAEIABgJgAEWB3IACACQAKAHAHAHIgTgQgAFfAEQAAgHgIgGIgEgCIAAgBIgDgBIgFgFIgZgUIgPgNQgIgIgHgEIgDgBQgHgFgJgEQgLgDgDgCIgOgMIgHgDIgGgHIgBAAIADAAQAHgBAIABQADAEAGACQAFACAKAAIA4gCIAIABIAMACIABAAIADgDQAEgCAEAAIABABQAEgEACgEQABAEgDAGIACABQAEAEgDAGIgCADIACAEIACAJIADAIQABADAAAIQABAMgGAFIgEACIADAEIABAFIACACQAFAIgDAIQgDAEgEADIAAgCgAChgyIABgBIAAABIgBAAgADfiHQADgFgCgFIAEgHQADgEAHgHQAGgGAGgKIAVgeIAJgJQAIgIAFgPIAJgaIAKgWQAFgNgDgLIgCgIIgBgIQAAgEgEgDIgFgCIAFgBIACABIACgDQAFgEAHgBQAJgCAJACQAKABAFAFQADAEABAHQABAOgBAXIgCAkQABALgBAFQgCAJgFADIACAIQAFAFgBAGQAAAGgFAFIAAABQgCgJgJABIgGACIgCAAIgHABIgBAAQgJABgEAFIgCABQgFADgCAEIgDAFIgOAJIgMALIgIAIIgCACIgCABIgHAFIgEABQgNAFgEACIgJAGIgHADIAFgFgACBiQQg7gPhAgJQgRgCgNABQgKAAgUAGQgVAHgVAJIgBABIgBABQAAAAgBABQAAAAgBAAQAAAAgBAAQgBAAAAAAIgCgBIAAAAIgBgCIgBgCIABgBQgFgMgPgIIgRgJQgKgFgGgGIgOgPIgOgLQgKgHgFgEIgMgQIgQgRQgKgKgSgbQgJgOgJgGQgBgIgFgGIgEgDIACgFQADgGAGAAQAGgBAGAGQAGgEAIAAIAWADIASAAQALAAAGACIAIABQAEABAFgBIANgBIALgCIALgCQAHAAAFACIAKADIALAEIgBAAQgIAHABAKQgCACAAAEQAAAFAGAHQAJAKAGADIAQAFQAEACAIAIQAMAMAcAQQANAIAHADIAIADIAFAFQAMAIAcAJQALAEATAMQATAMALAEIAXAKIANAKIAUAOIgQgBQgFAAgDABIgJgDgAC0imIgCgBIgJgLIgLgSIgGgHIgDgHIgLgUIgEgEIgBgBIgohBIgGgLQgCgIAAgHIgCgKIACgCQAGgDAFABIABABQALgIALACIAJACIAJAAQAFAAAEACIAFACIAGABIAIgDQAFgCAFABQAEgBAEABQAEAAADACQAFgEAHABQAFAAADADQgEABgCAEQgDADgBAJIAAAXIgEAXQgEASgBAIIAAAaIgDALQgFAYACANIADAMIACAJIgKgKg");
	this.shape_3.setTransform(36.4,34.8);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.אפליקציתגלריה, new cjs.Rectangle(-0.3,-0.3,73.1,70.1), null);


(lib.replaybtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIcAAQAADfieCfQifCejfAAQjfAAieieQieifAAjfQAAjfCeieQCeieDfAAQDfAACfCeQCeCeAADfg");
	this.shape.setTransform(54,54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("ABTGHQgRgjAFgoIACgVQjEARiUiPQjjjYDujwQBMhOBlghQCagdCNA0QCiA8AECdIAFCkIgIAGQgJAFgKADQgFABgFgBQgJgBgIgEIgIgGQgWhBAChGQAGiUisgeQlRg7h0FSIAIAOQAjBEA0AzQCKCHCMgvQgLgggPgeQgPggAYgaIALgHQAGgDAGgBIAPgDIAAgBQB/AQBgBYQA4AygxBBQg6BNhPAqQgUAKgTAAQgZAAgWgSg");
	this.shape_1.setTransform(47.6,58.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Al9F+QieieAAjgQAAjfCeieQCeieDfAAQDgAACeCeQCeCeAADfQAADgieCeQieCejgAAQjfAAieiegAAHFmQgFAoASAjQAnAhAugaQBQgqA5hNQAxhAg4gzQhfhXiAgQIAAABIgOACQgGACgGADIgKAHQgZAZAQAhQAOAeALAgQiNAviJiHQg0gzgkhFIgIgPQB0lQFRA6QCsAegFCVQgDBGAWBAIAIAHQAJAEAJABQAEABAFgCQAKgCAJgFIAIgGIgFikQgEidiig8QiMg0ibAdQhkAhhNBNQjuDxDjDYQCVCODEgQIgDAVg");
	this.shape_2.setTransform(54,54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#00CCFF").s().p("Al9F+QieieAAjgQAAjfCeieQCeieDfAAQDgAACeCeQCeCeAADfQAADgieCeQieCejgAAQjfAAieiegAAHFmQgFAoASAjQAnAhAugaQBQgqA5hNQAxhAg4gzQhfhXiAgQIAAABIgOACQgGACgGADIgKAHQgZAZAQAhQAOAeALAgQiNAviJiHQg0gzgkhFIgIgPQB0lQFRA6QCsAegFCVQgDBGAWBAIAIAHQAJAEAJABQAEABAFgCQAKgCAJgFIAIgGIgFikQgEidiig8QiMg0ibAdQhkAhhNBNQjuDxDjDYQCVCODEgQIgDAVg");
	this.shape_3.setTransform(54,54);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF66").s().p("Al9F+QieieAAjgQAAjfCeieQCeieDfAAQDgAACeCeQCeCeAADfQAADgieCeQieCejgAAQjfAAieiegAAHFmQgFAoASAjQAnAhAugaQBQgqA5hNQAxhAg4gzQhfhXiAgQIAAABIgOACQgGACgGADIgKAHQgZAZAQAhQAOAeALAgQiNAviJiHQg0gzgkhFIgIgPQB0lQFRA6QCsAegFCVQgDBGAWBAIAIAHQAJAEAJABQAEABAFgCQAKgCAJgFIAIgGIgFikQgEidiig8QiMg0ibAdQhkAhhNBNQjuDxDjDYQCVCODEgQIgDAVg");
	this.shape_4.setTransform(54,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_1},{t:this.shape_3},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,110,110);


(lib.playbtn = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AIcAAQAADfieCfQifCejfAAQjfAAieieQieifAAjfQAAjfCeieQCeieDfAAQDfAACfCeQCeCeAADfgAEagJIlnDnIAAnOg");
	this.shape.setTransform(54,54);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AiyjmIFmDmIlmDng");
	this.shape_1.setTransform(64.2,53);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FF0000").s().p("Al9F+QieieAAjgQAAjfCeieQCeieDfAAQDgAACeCeQCeCeAADfQAADgieCeQieCejgAAQjfAAieiegAhMDdIFmjmIlmjng");
	this.shape_2.setTransform(54,54);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#0099CC").s().p("Al9F+QieieAAjgQAAjfCeieQCeieDfAAQDgAACeCeQCeCeAADfQAADgieCeQieCejgAAQjfAAieiegAhMDdIFmjmIlmjng");
	this.shape_3.setTransform(54,54);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#00FF33").s().p("Al9F+QieieAAjgQAAjfCeieQCeieDfAAQDgAACeCeQCeCeAADfQAADgieCeQieCejgAAQjfAAieiegAhMDdIFmjmIlmjng");
	this.shape_4.setTransform(54,54);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).to({state:[{t:this.shape_3},{t:this.shape_1},{t:this.shape}]},1).to({state:[{t:this.shape_1},{t:this.shape_4},{t:this.shape}]},1).wait(1));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(-1,-1,110,110);


(lib.PDF = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgJANIAAAAIABAAIADgBIAAgDIAAgRIAAgCIgBgBIgCgBIgBAAIAAAAIATAAIAAAGIAAAAIgBgDIgDgBIgCgBIgGAAIAAALIAFAAIACgBIABgDIAAAAIAAAIIAAAAIgBgCIgBgBIgBgBIgFAAIAAAJIABACIABABIABABIABAAIAAAAg");
	this.shape.setTransform(8.2,4.2);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AgMANIAAAAIABAAQAAAAAAAAQABAAAAgBQAAAAABAAQAAAAAAgBIAAgCIAAgRIAAgDIgCgBIgBAAIAAAAIALAAQAEAAADABQADABADAEQACADAAADQgBAFgDAEQgEAEgHAAgAgFgKIAAAVIAEABQAEAAADgDQADgDAAgGQAAgEgDgEQgDgDgEAAIgEABg");
	this.shape_1.setTransform(5.7,4.2);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AgJANIAAAAIABAAQAAAAABAAQAAAAAAgBQABAAAAAAQAAAAAAgBIABgCIAAgRIgBgDIgCgBIgBAAIAAAAIAJAAIAFABIAEACQAAAAAAABQABAAAAABQAAAAAAABQAAABAAAAQAAADgCACQgCABgEAAIgCAAIgCAAIAAAIQAAAAAAABQAAAAAAABQABAAAAAAQAAABAAAAIABABIABAAIAAAAgAgCgKIAAAKIACAAIABAAQAAAAABAAQAAAAABAAQAAAAAAAAQABAAAAAAQABgBAAAAQAAgBAAAAQABgBAAgBQAAAAAAgBIgBgDIgCgCIgDgBIgCABg");
	this.shape_2.setTransform(3.1,4.2);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f().s("#FF0000").ss(1,1,1).p("AgpgMIBUAAIAAAZIhUAAg");
	this.shape_3.setTransform(5.7,4.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f().s("#000000").ss(1,1,1).p("AhwhwIDhAAIAADhIjhAAg");
	this.shape_4.setTransform(11.3,13.2);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FFFFFF").s().p("AhwBxIAAjgIDhAAIAADggAAJA8QgEAGACAIIAFAJIANARQAFAEACABQAEABACgIQACgLgBgJIgFgOQAJgBAOgKQAPgJAHgCIANATQAEAFABABQAAAAABAAQAAAAABAAQAAAAABgBQAAAAABgBQACgDAAgEQgBgGgHgLQgGgIgCgBQgHgDgDgEIgGgKQgGgOgOgTIgWgcIgFgIIgCgHQgEgKgFgKQgFgFgDgBQAAAAgBAAQAAAAgBAAQAAAAgBABQAAAAgBABQgFADABAJQADAHAGAIIALALQgBAIADALQgBADACALIAFAdIAAAAIABAJIAAAIIAAAPIACAIIgGgBQgIAAgFAGgAhhhGIBVAAIAAgaIhVAAgAAcBbIgFgDIgJgMIAAgCIAAgCQABgCACgBIADgBIADgBIACgBIADAAQACAEABAEIABAFIgCANIgBABgABbAwIgGgIQABAAAAAAQAAAAABAAQAAABABAAQABABAAABIAFAHIABADIAAABQgDgCgBgEgAAhAvIAAgEIAAgHIABgDIAAgEIAAgDIgIgqIgBgNIgBgNIARAWIASAZIAFAHIACAFIAIANIgDACIgDABIgFABIgUALIgCACIgIAEIAAgEgAAIhDIgCgBIAAgBIgCgCIAEgDIABABIADADIABAEIABACIACAEg");
	this.shape_5.setTransform(11.3,13.2);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF0000").s().p("AAeBkQgDAAgEgEIgOgRIgEgJQgDgJAEgFQAHgIAMADIgBgIIgBgPIABgIIgCgJIAAgBIgFgcQgCgLABgDQgDgLABgJIgLgLQgGgHgCgIQgCgIAGgEQABAAAAAAQAAgBABAAQAAAAABAAQAAAAABAAQACABAFAFQAGAKADAKIACAHIAFAHIAWAdQAOAUAHAMIAFALQAEAEAGACQACABAGAJQAIALAAAGQABAEgDADQgBABAAAAQAAABgBAAQAAAAgBAAQAAAAgBAAQgBgBgEgGIgMgSQgIACgPAJQgNAJgJACIAEAOQABAJgCALQgCAHgCAAIgBgBgAARA/IgCABQgDABgBADIAAACIABABIAIAMIAFAEIABACIABgBIACgOIgBgEQAAgEgDgEIgDAAIgCABgABTAkIAFAIQABAEADACIAAgBIgBgDIgEgHIgEgDIAAAAgAAXgiIAAAOIAIAqIABADIAAADIgCAEIAAAHIABAEIgBAEIAIgEIADgCIATgLIAGgCIACgBIADgBIgIgNIgCgFIgFgIIgSgZIgQgVIABAMgAAChLIABACIABABIABABIAIAHIgBgEIgCgCIgBgEIgDgEIgBgBgAhkhKIAAgaIBVAAIAAAag");
	this.shape_6.setTransform(11.5,13.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.PDF, new cjs.Rectangle(-1,0,24.5,25.5), null);


(lib.note = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#6600CC").s().p("AAKAaQgEAAgCgGQgFgOgGgLIABATQAAAHgCACQgCADgEgBQgEgBAAgDIABgFQABgDgBgOIAAgQQAAgEACgCQADgCAFAFQAJAKAGANQACgDgBgHIgBgLQAAgDABgDQADgDACACQACABABAEQACARgBAFIgCAUQgCAFgDAAIgBgBg");
	this.shape.setTransform(5,3.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f().s("#000000").ss(1,1,1).p("AhwhwIDhAAIAADhIjhAAg");
	this.shape_1.setTransform(11.3,11.3);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhPBYQgFgBAAgFQAAgEAIgBQAUgFAPAAQAOgBAbACIBYAFQAIAAAAAFQAAAEgIAAQgMABgmgCIgdgCIgogCQgXAAgSAFIgGABIgBAAgAAnBIIgNgEIgcgLQgKgDgEAAIgmACQgSABgMAEQgGACgCgDQgBAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABgDADgBQAFgEAMgBIAngDIAPgBQANABARAHIATAHIALADQAFABAEgBQALgBAJgDIAIgDQABAAAAABQABAAAAAAQABAAAAAAQABABAAAAQABAAAAABQABAAAAABQAAAAAAABQAAAAAAABQAAADgGACQgOAGgPABIgFABIgGgBgAhQAhQgIgFgEgBIgIgDQAAAAAAgBQAAAAAAgBQAAAAAAgBQAAAAAAgBQABAAAAgBQAAAAAAgBQABAAAAAAQAAAAABgBQADgCAFACIAHAEQAHACAOgBIBagIQAKgCAJABQAIABARAGIAHABQAEACgBAEQgBAEgGAAQgGAAgMgEQgMgEgGAAIgMACIgMABIhTAIIgNgBgAgzgBIgggDIgFgCQgDgCAAgDQABgDAEgBIAGAAQAPADAeACIAUABQAQAAAWgCIAggEQAWgCAKAEQABAAABAAQAAABABAAQAAAAABABQAAAAAAAAQADAEgGACQgCABgGgBQgQgBgaADIgqAEIgFAAQgPAAgbgCgAgRghQgLgDgGAAIgLAAQgWABgRgBQgIgBgCgDQgCgCAAgDQABgEADAAIAEAAQAMAEAWgBQAXgCAKADIATAFIAUAAIAggBIARgDQAKgDAGABQAEAAACABQADACAAADQgBADgEABIgGABIgNABIgNADIgRABIgnABIgQgEgAA+hHIgkgEQgQgCgLABIgFADQgEACgDgBQgFgBABgEQABgDAGgDIAFgEIAFAAQAUAAAKABIAMACQAXADAbAAQAFAAACADQAEADgFAEIgEAAIgQABIgQgBg");
	this.shape_2.setTransform(11.1,12);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AhwBxIAAjhIDhAAIAADhgAgqBPQgQABgTAFQgIABAAAEQAAAEAEABIAIgBQARgEAYAAIAnACIAeACQAlACANgBQAIAAAAgEQAAgFgIAAIhYgGIgegBIgLAAgAgDBBIAcALIANAEQAGABAFgBQAPgBAOgGQAFgCABgDQAAgBAAAAQAAgBgBAAQAAgBAAAAQgBgBAAAAQgBgBAAAAQgBAAAAgBQgBAAAAAAQgBAAgBAAIgIADQgIADgLABQgFABgEgBIgLgDIgTgHQgRgHgNgBIgPAAIgoAEQgLABgGADQgCABgBAEQAAAAgBABQAAAAAAABQAAAAABABQAAABAAAAQADACAGgCQALgDATgBIAlgCQAFAAAKADgAhjAZQAAAAAAAAQgBABAAAAQAAAAgBABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAABQAAAAAAAAIAIAEQAEABAIAFIANAAIBTgIIAMgBIAMgBQAGAAAMADQAMAFAGAAQAGAAABgFQABgDgFgCIgGgBQgRgHgIAAQgKgBgJACIhaAIQgOABgIgCIgHgEIgEgBIgEABgAhXgHQgEABgBADQAAACACACIAGACIAgADQAeADARgBIAqgEQAZgEARACQAFABACgBQAHgCgEgDQAAAAAAgBQAAAAgBAAQAAgBgBAAQAAAAgBAAQgKgFgXADIgfAEQgWACgQAAIgUgBQgegCgPgDIgFgBIgBABgAgjgdQAGABAKADIARADIAnAAIAQgBIAOgDIANgCIAGAAQAEgBABgDQgBgDgDgCQgCgBgDgBQgGAAgKACIgRAEIggABIgUAAIgTgGQgKgCgYABQgVACgMgEIgFAAQgCAAgBADQAAADACADQACACAIABQARACAVgBIAJgBIADAAgAAZhDIAkAEQAQABAQgBIAEgBQAEgDgDgDQgCgDgFAAQgbAAgXgDIgMgCQgKgBgTAAIgGAAIgGADQgFADgBAEQgBADAFABQADABAEgCIAEgCIAGgBIAWACg");
	this.shape_3.setTransform(11.3,11.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.note, new cjs.Rectangle(-1,-1,24.5,24.5), null);


(lib.books = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#FFFFFF").s().p("AgSAtIgEgBQgBAAgBAAQAAAAgBAAQAAABAAAAQgBABAAAAIgDAAIAAggIADAAQACAOAJAHQAHAHAIAAQAHAAAFgEQAEgEAAgGQAAgGgFgFQgEgFgOgHQgOgGgFgFQgDgGAAgIQAAgLAHgIQAIgHALAAQAEAAAIACIAHABIACAAIADgDIADAAIAAAeIgDAAQgEgOgGgFQgGgGgIAAQgHAAgEAEQgEAEAAAEQAAAGADADQADAEAJAFIAOAHQATAJABAPQAAANgKAHQgJAHgMAAQgHAAgLgCg");
	this.shape.setTransform(70.6,84.9);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AAGBGIAAgEIAGgBIABgDQAAgDgEgEIgbgkIAWgTIAJgJIAAgCQAAgBAAAAQAAAAAAgBQAAAAgBAAQAAgBAAAAQgCgBgEgBIAAgDIAnAAIAAADQgIABgFABQgFADgHAFIgWAVIAWAdIANAPQAFAEADACIAJABIAAAEgAgxBGIAAgEQAHAAAEgCQAAAAABAAQAAAAAAgBQABAAAAgBQAAAAABgBQABgDAAgIIAAhQIAAgUIgDgEIgEgBIgGABIgCgDIAbgMIAEAAIAABYIAAAfQAAAIACADQAAABAAAAQABABAAAAQABABAAAAQABAAAAAAQACACAIAAIAAAEg");
	this.shape_1.setTransform(61.6,82.4);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#FFFFFF").s().p("AggAfQgKgNAAgRQAAgLAGgNQAGgMAKgFQAKgGAKAAQAVAAAMAPQAKANAAARQAAALgFANQgGAMgKAGQgKAGgMAAQgUAAgMgQgAgMglQgFADgEAIQgDAIAAAMQAAASAIAOQAIAPALAAQAKAAAGgIQAGgIAAgTQAAgXgKgOQgHgJgKAAQgFAAgFADg");
	this.shape_2.setTransform(51.5,84.9);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#FFFFFF").s().p("AggAfQgKgNAAgRQAAgLAGgNQAGgMAKgFQAKgGAKAAQAVAAAMAPQAKANAAARQAAALgFANQgGAMgKAGQgKAGgMAAQgUAAgMgQgAgMglQgFADgEAIQgDAIAAAMQAAASAIAOQAIAPALAAQAKAAAGgIQAGgIAAgTQAAgXgKgOQgHgJgKAAQgFAAgFADg");
	this.shape_3.setTransform(41.5,84.9);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#FFFFFF").s().p("Ag7BCIAAgDIAGAAQAHAAAEgGQADgDgBgLIAAhVQAAgMgCgDQgEgFgHAAIgGAAIAAgDIA5AAQAQAAAJACQAPAEAIAJQAHAJABALQgBAKgFAIQgHAIgMAEQAOACAHAGQAJAJAAANQABAKgHAJQgGAJgLAEQgLAEgWAAgAgVACIAAA3QAMACAKAAQARAAAKgIQAJgIAAgLQAAgIgFgHQgDgHgKgEQgJgEgOAAIgKAAIgHAAgAgVg4IAAAyIAIABIAKABQAOAAAHgDQAIgDADgHQAEgGAAgIQAAgLgKgIQgJgJgRAAQgKAAgIADg");
	this.shape_4.setTransform(29.5,82.7);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#FF6600").s().p("AgDhQIACgBQAcBQgfBRIgDACQgJhNANhVg");
	this.shape_5.setTransform(20.6,66.5);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#FF6600").s().p("AAAgQIACgBQAHABACAHIABACQgBAXgTACQgKgSASgQg");
	this.shape_6.setTransform(48.4,60.7);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#FF6600").s().p("AgOAAQgCg7AFgpQAwBdglBrQAAAAAAAAQAAAAAAABQAAAAgBAAQAAAAgBAAQgKgpgCg8g");
	this.shape_7.setTransform(49.2,59.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#FF6600").s().p("AgKglQADgYAOgMQAXBIglBJIgCACQgMgqALhFg");
	this.shape_8.setTransform(50,29.1);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#FF6600").s().p("AgSC3QAJi2Aai8QAAAAAAgBQAAAAABAAQAAAAAAgBQABAAAAAAQgCCzgJC8IAAAFQgHAHgGAAQgGAAgHgHg");
	this.shape_9.setTransform(50,43.1);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#FF6600").s().p("AgSBaQAVhUgEhdQAAgBABAAQAAAAAAAAQAAgBAAAAQAAAAABAAQArBcg7BXIgBAAIgCAAg");
	this.shape_10.setTransform(48.8,67.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#FF6600").s().p("AgKBpQALgygDgyQgMh0AfhkQAGDSgYDUIgCABQgYgoARhDg");
	this.shape_11.setTransform(48.7,50.1);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#FF6600").s().p("AAAhhQAPBjgCBfIAAABQgshaAfhpg");
	this.shape_12.setTransform(48.9,37.2);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#FF6600").s().p("AgCgmIAAgBQAYAggTAtQAAAAAAAAQAAABgBAAQAAAAgBAAQAAABgBAAQgVgoATgmg");
	this.shape_13.setTransform(50.1,29.9);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#FF6600").s().p("AgLCBQAOhIgFhIQgJiAAVhwQATD8gdEBQAAAAAAAAQAAAAAAABQAAAAAAAAQAAABgBAAQgZg2APhJg");
	this.shape_14.setTransform(48.2,52.7);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#FFFFFF").s().p("AgxC8QgOgNADgbQAIgbACgOQACgMgBgXQgBgYACgLQACgQAJgVIARglQATgugQgeIgPgVQgJgMgBgJQgBgOALgLQAKgLAOgDQAXgFARAOQAJAHAFAOQADAIAEARQAMA4gEAdQgDAVgTAqQgRApgCAXQgCAMACAVQABAWgBALQgDAggRAQQgLAIgOABIgDAAQgMAAgJgIg");
	this.shape_15.setTransform(50.3,48.7);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#FFFFFF").s().p("AgPB5QgRgBgHgMQgJgNAGgXIAHgSIAHgRQAFgSAAgkQAAgagEgMIgIgUQgEgMACgIQACgLAMgHQAKgGANgBQAVgCALAKQAIAHADAOQACAIAAARIABBBQAAAlgGAaQgHAlgVAOQgLAJgMAAIgEgBg");
	this.shape_16.setTransform(46.3,40.7);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#FFFFFF").s().p("AgPCJQgKgDgIgLQgGgKgBgMQgBgKACgOIAFgXQABgOAAgaQgBgbABgLQAFgeABgPQABgWACgLQADgUALgIQAHgGAKgBQAKAAAIAFQATAOgDArIgEBaQgBAlgDAaQgDAbgJAOQgGAKgKAFQgGAEgHAAIgHgBg");
	this.shape_17.setTransform(75.8,39.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#FFFFFF").s().p("AhdDWQgKAAgIgGQgIgGgEgIQgEgIgBgLIAAgUIAAgpQAAgYACgRIAFgaQACgPAAgKQAAgGgHghQgEgYAGgPQACgFAHgJQAGgKACgFIAEgOIADgNQAFgRAXgTQAdgYAGgIIARgXQAHgHALgCQAJgDAJAEQAKADAHAHQAHAIACAKQAIgCALAHIARANIASAOQAMAMABATQACAUgIAlIgCASQAAAKgCAHIgEAMQgCAIAAAFQAAAHAFAOQAHAQABAFQADAKABAVQABAIALAdQAIAWgBAPQgCALgKAVQgJARgGAFQgJAIgMABQgMAAgLgGQgMgHgMgWQgdAJgdgEQgNgBgDABQgGACgFAHQgFAKgEAEQgLAOgTAAIgDAAg");
	this.shape_18.setTransform(34.8,43.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#FFFFFF").s().p("AhMDPQgRAAgKgGQgLgHgFgOQgEgNACgOQACgLAGgPIAKgZQAOgdAThAIAHgaQADgSADgFQAKgMADgHQAEgJgGgWQgHgkAPgRQAKgLAbgFQgEgIACgKQACgKAGgHQANgMAWAAQAWABAKANQAEAHAEAOQAEAGANAPQAQATACASQABAKgDAKQgEAKgJAGQgHAEgQADQgQAEgHAFQgLALAGALQAmACAJARQAEAJACASQADAJAJARQACAIABAKIgBASQABAUAGAlQABAjgSASQgJAJgOADQgOADgMgFQgKgEgQgPQgUgUgBgNQAAgNgFgBQgDAAgDADQgSARgIAVIgFARQgEAKgFAFQgLALgUAAIgEAAg");
	this.shape_19.setTransform(65.5,42.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#FFFFFF").s().p("AhADGQgLgKgBgTQgCgLAFgJIAJgMQADgHgBgMIgBh2QAAgvACgYIABgdIgCgPQgBgKABgFQADgQAOgMQAMgKARgGQAQgFACgCQAGgFAJgNQAGgFANgCQALgBAKAEQAKAEAFAIQAKAPgJAZIgIASQgGAMgCAHQgCAGgEAXQgEASgFAJQgMAVgYAEQgDAWAGAUIADASQAAAHgEASQgHAhAKAfQAhgDAOAKQAIAGADAKQADAKgDAKQgFARgWAKQgHADgMADIgUAEQgaAJgHABIgJABQgOAAgLgJg");
	this.shape_20.setTransform(60.4,41.9);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#FFFFFF").s().p("AgnA4QgMgHgFgOQgFgOAFgMIAJgQIALgYQALgRAdgHQAcgHAPAKQAHAFAEAJQADAJgCAJQgDASgSAJIgJAEQgGADgDADQgEADgDAIIgFAMQgHAMgNAFQgGACgHAAQgHAAgHgDg");
	this.shape_21.setTransform(71,30.2);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#FFFFFF").s().p("AAVBqQgIgEgGgJIgJgRIg3hzQgKgTAAgOQABgMAIgKQAJgKALgCQAMgCAMAFQALAFAFAKQAEAGACAKIAEAQQADAKAKARIAWAlQAPAcAEANQAFAbgLAQQgHAKgLAEQgFACgGAAQgFAAgFgCg");
	this.shape_22.setTransform(69.7,32.7);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#FFFFFF").s().p("AgIDKQgLgCgFgKQgHgMAFgbIAKgxQAGgcgBgVQAAgTgFgbIgIgsQgGgrADhZQAAgNAFgJQAGgMAKABQANABAEAZQACATgBAxQgCAqAFAZIAHAZIAGAZQAEAYgGAyIgMBhQgBANgEAFQgFAFgGAAIgGgBg");
	this.shape_23.setTransform(76.5,47);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f("#FFFFFF").s().p("AgKDJQgGgDgDgEQgGgIgBgPQgBggANgcQgFhIAEg7IACguQAAgbgDgUIgGgdQgEgRAAgMQAAgOAHgJQAEgEAGgCQAGgCAEADQAGAEAEAJQAQApgBBAIgDBrIAEBSQAAAwgPAfQgGAMgGACIgEABIgGgBg");
	this.shape_24.setTransform(52.7,47);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFFF").s().p("AhyBIQgJgDgGgGQgGgGAAgIQgBgIAHgJIANgNQAPgLAUgVIAUgVQALgMAJgHQAagWAZADQAQACARALQAKAHARARIAuArQAPAPAEAKQADAIgDAIQgCAJgHAEQgLAGgNgJQgGgDgMgQQgYgegXgUQgRgOgJgBQgSgCgZAYQgWAUgGAMQgIAUgGAJQgHAJgLAEQgHACgGAAIgJgBg");
	this.shape_25.setTransform(64.5,24.9);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFFFFF").s().p("AhyBIQgJgDgGgGQgGgGAAgIQgBgIAHgJIANgNQAPgLAUgVIAUgVQALgMAJgHQAagWAZADQAQACARALQAKAHARARIAuArQAPAPAEAKQADAIgDAIQgCAJgHAEQgLAGgNgJQgGgDgMgQQgYgegXgUQgRgOgJgBQgSgCgZAYQgWAUgGAMQgIAUgGAJQgHAJgLAEQgHACgGAAIgJgBg");
	this.shape_26.setTransform(64.5,63.1);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#FFFFFF").s().p("AgIDKQgLgCgFgKQgHgMAFgbIAKgxQAGgcgBgVQAAgTgFgbIgIgsQgGgrADhZQAAgNAFgJQAGgMAKABQANABAEAZQACATgBAxQgCAqAFAZIAHAZIAGAZQAEAYgGAyIgMBhQgBANgEAFQgFAFgGAAIgGgBg");
	this.shape_27.setTransform(46.7,48.1);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFFFF").s().p("AgKDJQgGgDgDgEQgGgIgBgPQgBggANgcQgFhIAEg7IACguQAAgbgDgUIgGgdQgEgRAAgMQAAgOAHgJQAEgEAGgCQAGgCAEADQAGAEAEAJQAQApgBBAIgDBrIAEBSQAAAwgPAfQgGAMgGACIgEABIgGgBg");
	this.shape_28.setTransform(22.9,48.1);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f("#FFFFFF").s().p("AhyBIQgJgDgGgGQgGgGAAgIQgBgIAHgJIANgNQAPgLAUgVIAUgVQALgMAJgHQAagWAZADQAQACARALQAKAHARARIAuArQAPAPAEAKQADAIgDAIQgCAJgHAEQgLAGgNgJQgGgDgMgQQgYgegXgUQgRgOgJgBQgSgCgZAYQgWAUgGAMQgIAUgGAJQgHAJgLAEQgHACgGAAIgJgBg");
	this.shape_29.setTransform(34.7,26);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFFFFF").s().p("AhyBIQgJgDgGgGQgGgGAAgIQgBgIAHgJIANgNQAPgLAUgVIAUgVQALgMAJgHQAagWAZADQAQACARALQAKAHARARIAuArQAPAPAEAKQADAIgDAIQgCAJgHAEQgLAGgNgJQgGgDgMgQQgYgegXgUQgRgOgJgBQgSgCgZAYQgWAUgGAMQgIAUgGAJQgHAJgLAEQgHACgGAAIgJgBg");
	this.shape_30.setTransform(34.7,64.2);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f().s("#000000").ss(1,1,1).p("AmlneINLAAQA5AAAAA5IAANLQAAA5g5AAItLAAQg5AAAAg5IAAtLQAAg5A5AAg");
	this.shape_31.setTransform(47.9,47.9);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FF6600").s().p("AmlHfQg5AAAAg5IAAtLQAAg5A5AAINLAAQA5AAAAA5IAANLQAAA5g5AAg");
	this.shape_32.setTransform(47.9,47.9);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_29},{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.books, new cjs.Rectangle(-1,-1,97.9,97.9), null);


(lib.מחזיקעפרונות = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.חוד();
	this.instance.parent = this;
	this.instance.setTransform(9.8,3.2,1,1,45,0,0,2,2.1);

	this.instance_1 = new lib.חוד();
	this.instance_1.parent = this;
	this.instance_1.setTransform(21.2,2.3,1,1.081,90,0,0,2,2.1);

	this.instance_2 = new lib.חוד();
	this.instance_2.parent = this;
	this.instance_2.setTransform(32.4,2.1,1,1,0,0,0,2,2.1);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("AhoBwIAAknIBwAAIADAAIBlAAIAAEnIBZAAIAABIIhZAAIjYAAIhgAAIAAhIgABwBwIAABIAhoC4IAAhI");
	this.shape.setTransform(20.1,31.3);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFF33").s().p("AAVAwQgEAAgEgCQgFgEgCgDIgFgJQgBgGgFgFIgGgIIgEgJIgSgZQgDgFAAgDQgCgHAHgGQAGgFAIACQAEABADACIAHAKIADADIADAIIAGAIIAEAJIAHAIIAQAbQADAHgFAHQgFAFgGAAIgCAAg");
	this.shape_1.setTransform(13,7.8);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("ABwC4IAAhIIAABIIjXAAIAAhIIAAknIBuAAIAEAAIBlAAIAAEnIBZAAIAABIgAjIC4IAAhIIBhAAIAABIg");
	this.shape_2.setTransform(20.1,31.3);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#CC0000").s().p("AgBAzIgEgBQgFgCgCgEIgCgHQgGglAGgYIAFgRQACgFAGgDQAEgBAGACQAEACACADQADAEAAAHIgBAIIgCAGIgCAHQgDASACAKIACAGIAAAIQAAAKgDAEQgDAEgFABIgCABg");
	this.shape_3.setTransform(21,7.8);

	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#33CCFF").s().p("AgdA0QgFAAgDgEQgHgIAEgLIAGgJQAFgFAFgIIAIgLQAGgJAFgFIAHgHQAEgEAGgLQAGgKAIgBQAIgBAFAGQAEAFgBAIQgBAEgEAHQgIANgFAFQgKAIgEAGIgHAKIgQAYQgEAFgDACQgDABgDAAIgDAAg");
	this.shape_4.setTransform(28.6,7.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_4},{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape},{t:this.instance_2},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.מחזיקעפרונות, new cjs.Rectangle(-1,-0.5,42.1,51.3), null);


(lib.תמונהעםדמות = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.דמות();
	this.instance.parent = this;
	this.instance.setTransform(45.8,41.7,0.515,0.489,0,0,0,24.8,46.6);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#663300").ss(19,0,0,3).p("AmDmjIMHAAQAAAgAgAAIAAMHQggAAAAAgIsHAAQAAggggAAIAAsHQAgAAAAggg");
	this.shape.setTransform(42,42);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FFFFFF").s().p("AmDGkQABghghAAIAAsGQAhABgBghIMGAAQAAAhAhgBIAAMGQghAAAAAhg");
	this.shape_1.setTransform(42,42);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.תמונהעםדמות, new cjs.Rectangle(-9.5,-9.5,103,103), null);


(lib.דףנעוץ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.נעץ2();
	this.instance.parent = this;
	this.instance.setTransform(0,-24.4,0.533,0.533,180,0,0,7.6,7.4);

	this.instance_1 = new lib.דף();
	this.instance_1.parent = this;
	this.instance_1.setTransform(0,3,1,1,0,0,0,19.5,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.דףנעוץ, new cjs.Rectangle(-19.5,-28.5,39.1,59.1), null);


(lib._2דףנעוץ = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.נעץ();
	this.instance.parent = this;
	this.instance.setTransform(19.5,5,1,1,0,0,0,5,5);

	this.instance_1 = new lib.דף();
	this.instance_1.parent = this;
	this.instance_1.setTransform(19.5,32.5,1,1,0,0,0,19.5,27.5);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib._2דףנעוץ, new cjs.Rectangle(0,0,39.1,60.1), null);


(lib.לוחשעם = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// Layer 1
	this.instance = new lib.דףנעוץ();
	this.instance.parent = this;
	this.instance.setTransform(62.4,38.6,1,0.864,0,0,0,0,1);

	this.instance_1 = new lib._2דףנעוץ();
	this.instance_1.parent = this;
	this.instance_1.setTransform(108.6,34.1,1,1,15,0,0,19.6,30);

	this.shape = new cjs.Shape();
	this.shape.graphics.f().s("#000000").ss(1,1,1).p("Ap6oHIT1AAIAAQPIz1AAg");
	this.shape.setTransform(63.5,59.1);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#FF9900").s().p("Ap6IIIAAwPIT1AAIAAQPg");
	this.shape_1.setTransform(63.5,59.1);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_1},{t:this.shape},{t:this.instance_1},{t:this.instance}]}).wait(1));

}).prototype = getMCSymbolPrototype(lib.לוחשעם, new cjs.Rectangle(-1,3.7,134.8,108.4), null);


// stage content:
(lib.קובץאנימציהחדש = function(mode,startPosition,loop) {
	this.initialize(mode,startPosition,loop,{});

	// timeline functions:
	this.frame_0 = function() {
		var self = this; 
		self.stop();
		
		
		
		self.playbtn.addEventListener("click", clickPlayStart);
		
		
		function clickPlayStart()
		{
			self.gotoAndPlay(1);
		}
		
		
		
		createjs.Sound.registerSound("/sounds/sound1.mp3","a");
		createjs.Sound.stop();
	}
	this.frame_1 = function() {
		createjs.Sound.play("a");
	}
	this.frame_734 = function() {
		var self = this; 
		self.stop(); 
		
		createjs.Sound.stop("a");
		
		self.replaybtn.addEventListener("click", clickRestart);
		
		
		function clickRestart()
		{	
			self.gotoAndPlay(1); 
		}
	}

	// actions tween:
	this.timeline.addTween(cjs.Tween.get(this).call(this.frame_0).wait(1).call(this.frame_1).wait(733).call(this.frame_734).wait(1));

	// control
	this.playbtn = new lib.playbtn();
	this.playbtn.parent = this;
	this.playbtn.setTransform(222,112.1);
	new cjs.ButtonHelper(this.playbtn, 0, 1, 2);

	this.replaybtn = new lib.replaybtn();
	this.replaybtn.parent = this;
	this.replaybtn.setTransform(441,3.1);
	new cjs.ButtonHelper(this.replaybtn, 0, 1, 2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.playbtn}]}).to({state:[]},1).to({state:[{t:this.replaybtn}]},733).wait(1));

	// דרופבוקס
	this.instance = new lib.דרופבוקס();
	this.instance.parent = this;
	this.instance.setTransform(340.7,185.5,0.21,0.191,0,0,0,53.6,48.1);
	this.instance._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance).wait(640).to({_off:false},0).wait(95));

	// טלפון
	this.instance_1 = new lib.טלפון();
	this.instance_1.parent = this;
	this.instance_1.setTransform(74.6,290.2,0.424,0.46,0,0,0,67.2,51.9);

	this.instance_2 = new lib.סקייפ();
	this.instance_2.parent = this;
	this.instance_2.setTransform(71.6,292.8,0.344,0.33,0,0,0,53.6,45.8);
	this.instance_2._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_1).wait(114).to({_off:true},174).wait(447));
	this.timeline.addTween(cjs.Tween.get(this.instance_2).wait(288).to({_off:false},0).wait(1).to({scaleX:0.34,scaleY:0.33,x:76.8,y:289.8},0).wait(1).to({scaleX:0.33,scaleY:0.32,x:82.2,y:286.9},0).wait(1).to({scaleX:0.33,scaleY:0.32,x:87.4,y:283.9},0).wait(1).to({scaleX:0.32,scaleY:0.31,x:92.8,y:281},0).wait(1).to({scaleX:0.32,scaleY:0.31,x:98,y:278},0).wait(1).to({scaleX:0.31,scaleY:0.3,x:103.4,y:275.1},0).wait(1).to({scaleX:0.31,scaleY:0.3,x:108.7,y:272.1},0).wait(1).to({scaleX:0.3,scaleY:0.29,x:114,y:269.1},0).wait(1).to({scaleX:0.3,scaleY:0.28,x:119.3,y:266.2},0).wait(1).to({scaleX:0.29,scaleY:0.28,x:124.6,y:263.2},0).wait(1).to({scaleX:0.29,scaleY:0.28,x:129.9,y:260.3},0).wait(1).to({scaleX:0.28,scaleY:0.27,x:135.2,y:257.3},0).wait(1).to({scaleX:0.28,scaleY:0.27,x:140.5,y:254.3},0).wait(1).to({scaleX:0.27,scaleY:0.26,x:145.8,y:251.4},0).wait(1).to({scaleX:0.27,scaleY:0.26,x:151.1,y:248.4},0).wait(1).to({scaleX:0.26,scaleY:0.25,x:156.4,y:245.5},0).wait(1).to({scaleX:0.26,scaleY:0.25,x:161.7,y:242.5},0).wait(1).to({scaleX:0.25,scaleY:0.24,x:167,y:239.6},0).wait(1).to({scaleX:0.25,scaleY:0.24,x:172.3,y:236.6},0).wait(1).to({scaleX:0.24,scaleY:0.23,x:177.6,y:233.7},0).wait(1).to({scaleX:0.24,scaleY:0.23,x:182.9,y:230.7},0).wait(1).to({scaleX:0.23,scaleY:0.22,x:188.2,y:227.8},0).wait(1).to({scaleX:0.23,scaleY:0.22,x:193.6,y:224.8},0).wait(1).to({scaleX:0.22,scaleY:0.21,x:198.8,y:221.8},0).wait(1).to({scaleX:0.22,scaleY:0.21,x:204.2,y:218.9},0).wait(1).to({scaleX:0.21,scaleY:0.2,x:209.4,y:215.9},0).wait(1).to({scaleX:0.21,scaleY:0.2,x:214.8,y:213},0).wait(1).to({scaleX:0.2,scaleY:0.19,x:220,y:210},0).wait(1).to({scaleX:0.2,scaleY:0.19,x:225.4,y:207},0).wait(1).to({scaleX:0.19,scaleY:0.18,x:230.6,y:204.1},0).wait(1).to({scaleX:0.19,scaleY:0.18,x:236,y:201.1},0).wait(1).to({scaleX:0.18,scaleY:0.17,x:241.3,y:198.2},0).wait(1).to({scaleX:0.18,scaleY:0.17,x:246.6,y:195.2},0).wait(1).to({scaleX:0.17,scaleY:0.16,x:251.9,y:192.3},0).wait(1).to({scaleX:0.17,scaleY:0.16,x:257.2,y:189.3},0).wait(1).to({scaleX:0.16,scaleY:0.15,x:262.5,y:186.4},0).wait(1).to({scaleX:0.16,scaleY:0.15,x:267.8,y:183.4},0).to({_off:true},1).wait(409));

	// פקס
	this.instance_3 = new lib.פקס();
	this.instance_3.parent = this;
	this.instance_3.setTransform(74.9,217.1,0.521,0.759,0,0,0,103,8.2);

	this.instance_4 = new lib.PDF();
	this.instance_4.parent = this;
	this.instance_4.setTransform(75.8,220,2.071,1.887,0,0,0,12,12.9);
	this.instance_4._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_3).wait(114).to({_off:true},144).wait(477));
	this.timeline.addTween(cjs.Tween.get(this.instance_4).wait(258).to({_off:false},0).wait(1).to({regX:11.3,regY:13.2,scaleX:2.03,scaleY:1.85,x:80.1,y:219.4},0).wait(1).to({scaleX:1.99,scaleY:1.81,x:85.8,y:218.2},0).wait(1).to({scaleX:1.95,scaleY:1.78,x:91.5,y:217.1},0).wait(1).to({scaleX:1.91,scaleY:1.74,x:97.2,y:215.9},0).wait(1).to({scaleX:1.87,scaleY:1.7,x:102.9,y:214.8},0).wait(1).to({scaleX:1.83,scaleY:1.66,x:108.6,y:213.6},0).wait(1).to({scaleX:1.79,scaleY:1.63,x:114.3,y:212.4},0).wait(1).to({scaleX:1.75,scaleY:1.59,x:120.1,y:211.3},0).wait(1).to({scaleX:1.71,scaleY:1.55,x:125.8,y:210.1},0).wait(1).to({scaleX:1.67,scaleY:1.51,x:131.5,y:208.9},0).wait(1).to({scaleX:1.63,scaleY:1.48,x:137.2,y:207.8},0).wait(1).to({scaleX:1.59,scaleY:1.44,x:142.9,y:206.6},0).wait(1).to({scaleX:1.55,scaleY:1.4,x:148.6,y:205.4},0).wait(1).to({scaleX:1.51,scaleY:1.36,x:154.3,y:204.3},0).wait(1).to({scaleX:1.47,scaleY:1.33,x:160,y:203.1},0).wait(1).to({scaleX:1.43,scaleY:1.29,x:165.7,y:202},0).wait(1).to({scaleX:1.39,scaleY:1.25,x:171.4,y:200.8},0).wait(1).to({scaleX:1.35,scaleY:1.21,x:177.1,y:199.6},0).wait(1).to({scaleX:1.31,scaleY:1.17,x:182.9,y:198.5},0).wait(1).to({scaleX:1.27,scaleY:1.14,x:188.6,y:197.3},0).wait(1).to({scaleX:1.23,scaleY:1.1,x:194.3,y:196.1},0).wait(1).to({scaleX:1.19,scaleY:1.06,x:200,y:195},0).wait(1).to({scaleX:1.15,scaleY:1.02,x:205.7,y:193.8},0).wait(1).to({scaleX:1.11,scaleY:0.99,x:211.4,y:192.6},0).wait(1).to({scaleX:1.07,scaleY:0.95,x:217.1,y:191.5},0).wait(1).to({scaleX:1.03,scaleY:0.91,x:222.8,y:190.3},0).wait(1).to({scaleX:0.99,scaleY:0.87,x:228.6,y:189.2},0).wait(1).to({scaleX:0.95,scaleY:0.84,x:234.3,y:188},0).wait(1).to({scaleX:0.91,scaleY:0.8,x:240,y:186.8},0).wait(1).to({scaleX:0.87,scaleY:0.76,x:245.7,y:185.7},0).to({_off:true},1).wait(446));

	// מחשבון
	this.instance_5 = new lib.מחשבון();
	this.instance_5.parent = this;
	this.instance_5.setTransform(477.2,305.1,0.597,0.578,0,0,0,21.6,31.1);

	this.instance_6 = new lib.אקסל();
	this.instance_6.parent = this;
	this.instance_6.setTransform(472.5,308.7,1.902,1.622,0,0,0,11.6,11.2);
	this.instance_6._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_5).wait(114).to({_off:true},58).wait(563));
	this.timeline.addTween(cjs.Tween.get(this.instance_6).wait(172).to({_off:false},0).wait(1).to({regX:11.3,regY:11.3,scaleX:1.88,scaleY:1.61,x:467.8,y:305.8},0).wait(1).to({scaleX:1.86,scaleY:1.59,x:463.6,y:302.8},0).wait(1).to({scaleX:1.84,scaleY:1.58,x:459.4,y:299.8},0).wait(1).to({scaleX:1.82,scaleY:1.56,x:455.2,y:296.7},0).wait(1).to({scaleX:1.8,scaleY:1.55,x:451,y:293.7},0).wait(1).to({scaleX:1.78,scaleY:1.53,x:446.9,y:290.6},0).wait(1).to({scaleX:1.76,scaleY:1.52,x:442.7,y:287.6},0).wait(1).to({scaleX:1.74,scaleY:1.51,x:438.5,y:284.5},0).wait(1).to({scaleX:1.72,scaleY:1.49,x:434.3,y:281.5},0).wait(1).to({scaleX:1.7,scaleY:1.48,x:430.1,y:278.5},0).wait(1).to({scaleX:1.67,scaleY:1.46,x:425.9,y:275.4},0).wait(1).to({scaleX:1.65,scaleY:1.45,x:421.8,y:272.4},0).wait(1).to({scaleX:1.63,scaleY:1.43,x:417.5,y:269.3},0).wait(1).to({scaleX:1.61,scaleY:1.42,x:413.3,y:266.3},0).wait(1).to({scaleX:1.59,scaleY:1.4,x:409.2,y:263.2},0).wait(1).to({scaleX:1.57,scaleY:1.39,x:405,y:260.2},0).wait(1).to({scaleX:1.55,scaleY:1.37,x:400.8,y:257.1},0).wait(1).to({scaleX:1.53,scaleY:1.36,x:396.6,y:254.1},0).wait(1).to({scaleX:1.51,scaleY:1.34,x:392.4,y:251.1},0).wait(1).to({scaleX:1.49,scaleY:1.33,x:388.2,y:248},0).wait(1).to({scaleX:1.47,scaleY:1.32,x:384,y:245},0).wait(1).to({scaleX:1.45,scaleY:1.3,x:379.9,y:241.9},0).wait(1).to({scaleX:1.43,scaleY:1.29,x:375.7,y:238.9},0).wait(1).to({scaleX:1.41,scaleY:1.27,x:371.5,y:235.8},0).wait(1).to({scaleX:1.38,scaleY:1.26,x:367.3,y:232.8},0).wait(1).to({scaleX:1.36,scaleY:1.24,x:363.1,y:229.8},0).wait(1).to({scaleX:1.34,scaleY:1.23,x:358.9,y:226.7},0).wait(1).to({scaleX:1.32,scaleY:1.21,x:354.8,y:223.7},0).wait(1).to({scaleX:1.3,scaleY:1.2,x:350.6,y:220.6},0).wait(1).to({scaleX:1.28,scaleY:1.18,x:346.4,y:217.6},0).wait(1).to({scaleX:1.26,scaleY:1.17,x:342.2,y:214.5},0).wait(1).to({scaleX:1.24,scaleY:1.15,x:338,y:211.5},0).wait(1).to({scaleX:1.22,scaleY:1.14,x:333.8,y:208.4},0).wait(1).to({scaleX:1.2,scaleY:1.12,x:329.7,y:205.4},0).wait(1).to({scaleX:1.18,scaleY:1.11,x:325.5,y:202.4},0).wait(1).to({scaleX:1.16,scaleY:1.1,x:321.3,y:199.3},0).wait(1).to({scaleX:1.14,scaleY:1.08,x:317.1,y:196.3},0).wait(1).to({scaleX:1.11,scaleY:1.07,x:312.9,y:193.2},0).wait(1).to({scaleX:1.09,scaleY:1.05,x:308.7,y:190.2},0).wait(1).to({scaleX:1.07,scaleY:1.04,x:304.5,y:187.1},0).wait(1).to({scaleX:1.05,scaleY:1.02,x:300.4,y:184.1},0).wait(1).to({scaleX:1.03,scaleY:1.01,x:296.2,y:181.1},0).wait(1).to({scaleX:1.01,scaleY:0.99,x:292,y:178},0).wait(1).to({scaleX:0.99,scaleY:0.98,x:287.8,y:175},0).wait(1).to({scaleX:0.97,scaleY:0.96,x:283.6,y:172},0).wait(1).to({scaleX:0.95,scaleY:0.95,x:279.4,y:168.9},0).wait(1).to({scaleX:0.93,scaleY:0.93,x:275.3,y:165.8},0).wait(1).to({scaleX:0.91,scaleY:0.92,x:271.1,y:162.8},0).wait(1).to({scaleX:0.89,scaleY:0.9,x:266.9,y:159.7},0).to({_off:true},1).wait(513));

	// דף שני על השולחן
	this.instance_7 = new lib.דף();
	this.instance_7.parent = this;
	this.instance_7.setTransform(428.1,281.1,1.154,1,0,0,0,19.6,27.5);

	this.instance_8 = new lib.דרופבוקס();
	this.instance_8.parent = this;
	this.instance_8.setTransform(445.1,277.2,0.425,0.393,0,0,0,53.6,48.3);
	this.instance_8._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_7).wait(114).to({_off:true},494).wait(127));
	this.timeline.addTween(cjs.Tween.get(this.instance_8).wait(608).to({_off:false},0).wait(1).to({regX:53.8,scaleX:0.42,scaleY:0.39,x:441.8,y:274.3},0).wait(1).to({scaleX:0.41,scaleY:0.38,x:438.6,y:271.5},0).wait(1).to({scaleX:0.4,scaleY:0.37,x:435.3,y:268.6},0).wait(1).to({scaleX:0.4,scaleY:0.37,x:432,y:265.8},0).wait(1).to({scaleX:0.39,scaleY:0.36,x:428.8,y:262.9},0).wait(1).to({scaleX:0.38,scaleY:0.36,x:425.5,y:260},0).wait(1).to({scaleX:0.38,scaleY:0.35,x:422.2,y:257.2},0).wait(1).to({scaleX:0.37,scaleY:0.34,x:419,y:254.3},0).wait(1).to({scaleX:0.36,scaleY:0.34,x:415.7,y:251.4},0).wait(1).to({scaleX:0.36,scaleY:0.33,x:412.4,y:248.5},0).wait(1).to({scaleX:0.35,scaleY:0.32,x:409.1,y:245.7},0).wait(1).to({scaleX:0.34,scaleY:0.32,x:405.9,y:242.8},0).wait(1).to({scaleX:0.34,scaleY:0.31,x:402.6,y:239.9},0).wait(1).to({scaleX:0.33,scaleY:0.3,x:399.3,y:237.1},0).wait(1).to({scaleX:0.32,scaleY:0.3,x:396.1,y:234.2},0).wait(1).to({scaleX:0.31,scaleY:0.29,x:392.8,y:231.4},0).wait(1).to({scaleX:0.31,scaleY:0.28,x:389.5,y:228.5},0).wait(1).to({scaleX:0.3,scaleY:0.28,x:386.2,y:225.6},0).wait(1).to({scaleX:0.29,scaleY:0.27,x:383,y:222.7},0).wait(1).to({scaleX:0.29,scaleY:0.27,x:379.7,y:219.9},0).wait(1).to({scaleX:0.28,scaleY:0.26,x:376.4,y:217},0).wait(1).to({scaleX:0.27,scaleY:0.25,x:373.2,y:214.1},0).wait(1).to({scaleX:0.27,scaleY:0.25,x:369.9,y:211.3},0).wait(1).to({scaleX:0.26,scaleY:0.24,x:366.6,y:208.4},0).wait(1).to({scaleX:0.25,scaleY:0.24,x:363.4,y:205.5},0).wait(1).to({scaleX:0.25,scaleY:0.23,x:360.1,y:202.7},0).wait(1).to({scaleX:0.24,scaleY:0.22,x:356.8,y:199.8},0).wait(1).to({scaleX:0.23,scaleY:0.22,x:353.5,y:197},0).wait(1).to({scaleX:0.23,scaleY:0.21,x:350.3,y:194},0).wait(1).to({scaleX:0.22,scaleY:0.2,x:347,y:191.2},0).wait(1).to({scaleX:0.21,scaleY:0.2,x:343.7,y:188.3},0).wait(1).to({scaleX:0.2,scaleY:0.19,x:340.5,y:185.5},0).to({_off:true},1).wait(94));

	// אינסטגראם
	this.instance_9 = new lib.אינסטגרם();
	this.instance_9.parent = this;
	this.instance_9.setTransform(285.3,184.8,0.199,0.188,0,0,0,53.2,46.3);
	this.instance_9._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_9).wait(622).to({_off:false},0).wait(113));

	// תמונה נעוצה 2
	this.instance_10 = new lib.תמונה2();
	this.instance_10.parent = this;
	this.instance_10.setTransform(432.8,45.1,1,1,0,0,0,17.8,19.1);

	this.instance_11 = new lib.אינסטגרם();
	this.instance_11.parent = this;
	this.instance_11.setTransform(432.8,52.6,0.469,0.498,0,0,0,53.2,46.4);
	this.instance_11._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_10).wait(114).to({_off:true},469).wait(152));
	this.timeline.addTween(cjs.Tween.get(this.instance_11).wait(583).to({_off:false},0).wait(1).to({regY:46.3,scaleX:0.46,scaleY:0.49,x:429,y:55.9},0).wait(1).to({scaleX:0.46,scaleY:0.48,x:425.2,y:59.3},0).wait(1).to({scaleX:0.45,scaleY:0.48,x:421.4,y:62.7},0).wait(1).to({scaleX:0.44,scaleY:0.47,x:417.6,y:66.1},0).wait(1).to({scaleX:0.44,scaleY:0.46,x:413.8,y:69.5},0).wait(1).to({scaleX:0.43,scaleY:0.45,x:410.1,y:72.8},0).wait(1).to({scaleX:0.42,scaleY:0.44,x:406.3,y:76.2},0).wait(1).to({scaleX:0.42,scaleY:0.44,x:402.6,y:79.6},0).wait(1).to({scaleX:0.41,scaleY:0.43,x:398.8,y:83},0).wait(1).to({scaleX:0.4,scaleY:0.42,x:395,y:86.4},0).wait(1).to({scaleX:0.4,scaleY:0.41,x:391.2,y:89.7},0).wait(1).to({scaleX:0.39,scaleY:0.41,x:387.4,y:93.1},0).wait(1).to({scaleX:0.39,scaleY:0.4,x:383.7,y:96.5},0).wait(1).to({scaleX:0.38,scaleY:0.39,x:379.9,y:99.9},0).wait(1).to({scaleX:0.37,scaleY:0.38,x:376.1,y:103.3},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:372.4,y:106.6},0).wait(1).to({scaleX:0.36,scaleY:0.37,x:368.6,y:110},0).wait(1).to({scaleX:0.35,scaleY:0.36,x:364.8,y:113.4},0).wait(1).to({scaleX:0.35,scaleY:0.35,x:361,y:116.8},0).wait(1).to({scaleX:0.34,scaleY:0.34,x:357.2,y:120.2},0).wait(1).to({scaleX:0.33,scaleY:0.34,x:353.5,y:123.5},0).wait(1).to({scaleX:0.33,scaleY:0.33,x:349.7,y:126.9},0).wait(1).to({scaleX:0.32,scaleY:0.32,x:345.9,y:130.3},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:342.1,y:133.7},0).wait(1).to({scaleX:0.31,scaleY:0.31,x:338.4,y:137.1},0).wait(1).to({scaleX:0.3,scaleY:0.3,x:334.6,y:140.4},0).wait(1).to({scaleX:0.29,scaleY:0.29,x:330.8,y:143.8},0).wait(1).to({scaleX:0.29,scaleY:0.28,x:327,y:147.2},0).wait(1).to({scaleX:0.28,scaleY:0.27,x:323.3,y:150.6},0).wait(1).to({scaleX:0.27,scaleY:0.27,x:319.5,y:154},0).wait(1).to({scaleX:0.27,scaleY:0.26,x:315.7,y:157.3},0).wait(1).to({scaleX:0.26,scaleY:0.25,x:311.9,y:160.7},0).wait(1).to({scaleX:0.26,scaleY:0.24,x:308.1,y:164.1},0).wait(1).to({scaleX:0.25,scaleY:0.24,x:304.4,y:167.5},0).wait(1).to({scaleX:0.24,scaleY:0.23,x:300.6,y:170.9},0).wait(1).to({scaleX:0.24,scaleY:0.22,x:296.8,y:174.2},0).wait(1).to({scaleX:0.23,scaleY:0.21,x:293.1,y:177.6},0).wait(1).to({scaleX:0.22,scaleY:0.2,x:289.3,y:181},0).wait(1).to({scaleX:0.22,scaleY:0.2,x:285.5,y:184.4},0).to({_off:true},1).wait(112));

	// אפליקציית רדיו
	this.instance_12 = new lib.אפליקצייתרדיו();
	this.instance_12.parent = this;
	this.instance_12.setTransform(259.2,184.5,0.306,0.263,0,0,0,34.8,34.8);
	this.instance_12._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_12).wait(583).to({_off:false},0).wait(152));

	// רדיו
	this.instance_13 = new lib.רדיו();
	this.instance_13.parent = this;
	this.instance_13.setTransform(500.9,246.1,0.806,1,0,0,0,41.3,32.5);

	this.instance_14 = new lib.אפליקצייתרדיו();
	this.instance_14.parent = this;
	this.instance_14.setTransform(510.1,252.3,0.792,0.733,0,0,0,34.8,34.8);
	this.instance_14._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_13).wait(114).to({_off:true},444).wait(177));
	this.timeline.addTween(cjs.Tween.get(this.instance_14).wait(558).to({_off:false},0).wait(1).to({scaleX:0.77,scaleY:0.71,x:500,y:249.6},0).wait(1).to({scaleX:0.75,scaleY:0.7,x:490,y:246.9},0).wait(1).to({scaleX:0.73,scaleY:0.68,x:479.9,y:244.1},0).wait(1).to({scaleX:0.72,scaleY:0.66,x:469.9,y:241.5},0).wait(1).to({scaleX:0.7,scaleY:0.64,x:459.8,y:238.8},0).wait(1).to({scaleX:0.68,scaleY:0.62,x:449.8,y:236.1},0).wait(1).to({scaleX:0.66,scaleY:0.6,x:439.8,y:233.4},0).wait(1).to({scaleX:0.64,scaleY:0.58,x:429.7,y:230.7},0).wait(1).to({scaleX:0.62,scaleY:0.56,x:419.7,y:228},0).wait(1).to({scaleX:0.6,scaleY:0.54,x:409.6,y:225.3},0).wait(1).to({scaleX:0.58,scaleY:0.52,x:399.6,y:222.6},0).wait(1).to({scaleX:0.56,scaleY:0.51,x:389.6,y:219.9},0).wait(1).to({scaleX:0.54,scaleY:0.49,x:379.5,y:217.2},0).wait(1).to({scaleX:0.52,scaleY:0.47,x:369.5,y:214.5},0).wait(1).to({scaleX:0.5,scaleY:0.45,x:359.4,y:211.8},0).wait(1).to({scaleX:0.48,scaleY:0.43,x:349.4,y:209.2},0).wait(1).to({scaleX:0.46,scaleY:0.41,x:339.3,y:206.5},0).wait(1).to({scaleX:0.45,scaleY:0.39,x:329.3,y:203.7},0).wait(1).to({scaleX:0.43,scaleY:0.37,x:319.3,y:201},0).wait(1).to({scaleX:0.41,scaleY:0.35,x:309.2,y:198.4},0).wait(1).to({scaleX:0.39,scaleY:0.34,x:299.2,y:195.7},0).wait(1).to({scaleX:0.37,scaleY:0.32,x:289.1,y:193},0).wait(1).to({scaleX:0.35,scaleY:0.3,x:279.1,y:190.3},0).wait(1).to({scaleX:0.33,scaleY:0.28,x:269.1,y:187.6},0).wait(1).to({scaleX:0.31,scaleY:0.26,x:259,y:184.9},0).to({_off:true},1).wait(151));

	// גוגל מפס
	this.instance_15 = new lib.גוגלמפות();
	this.instance_15.parent = this;
	this.instance_15.setTransform(230.8,184.1,0.221,0.225,0,0,0,48.4,42.2);
	this.instance_15._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_15).wait(554).to({_off:false},0).wait(181));

	// גלובוס
	this.instance_16 = new lib.גלובוס();
	this.instance_16.parent = this;
	this.instance_16.setTransform(465.8,179.2,1,1,0,0,0,29.8,40.9);

	this.instance_17 = new lib.גוגלמפות();
	this.instance_17.parent = this;
	this.instance_17.setTransform(444.7,193,0.614,0.647,0,0,0,48.3,41.9);
	this.instance_17._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_16).wait(114).to({_off:true},418).wait(203));
	this.timeline.addTween(cjs.Tween.get(this.instance_17).wait(532).to({_off:false},0).wait(1).to({regX:44.9,regY:39.5,scaleX:0.6,scaleY:0.63,x:432.9,y:191.1},0).wait(1).to({scaleX:0.58,scaleY:0.61,x:423.3,y:190.7},0).wait(1).to({scaleX:0.56,scaleY:0.59,x:413.6,y:190.4},0).wait(1).to({scaleX:0.54,scaleY:0.57,x:404,y:190},0).wait(1).to({scaleX:0.53,scaleY:0.55,x:394.3,y:189.6},0).wait(1).to({scaleX:0.51,scaleY:0.53,x:384.6,y:189.2},0).wait(1).to({scaleX:0.49,scaleY:0.52,x:375,y:188.8},0).wait(1).to({scaleX:0.47,scaleY:0.5,x:365.3,y:188.5},0).wait(1).to({scaleX:0.45,scaleY:0.48,x:355.7,y:188.1},0).wait(1).to({scaleX:0.44,scaleY:0.46,x:346,y:187.7},0).wait(1).to({scaleX:0.42,scaleY:0.44,x:336.3,y:187.3},0).wait(1).to({scaleX:0.4,scaleY:0.42,x:326.7,y:186.9},0).wait(1).to({scaleX:0.38,scaleY:0.4,x:317,y:186.6},0).wait(1).to({scaleX:0.36,scaleY:0.38,x:307.4,y:186.2},0).wait(1).to({scaleX:0.35,scaleY:0.36,x:297.7,y:185.8},0).wait(1).to({scaleX:0.33,scaleY:0.35,x:288,y:185.5},0).wait(1).to({scaleX:0.31,scaleY:0.33,x:278.4,y:185.1},0).wait(1).to({scaleX:0.29,scaleY:0.31,x:268.7,y:184.7},0).wait(1).to({scaleX:0.28,scaleY:0.29,x:259.1,y:184.3},0).wait(1).to({scaleX:0.26,scaleY:0.27,x:249.4,y:183.9},0).wait(1).to({scaleX:0.24,scaleY:0.25,x:239.7,y:183.6},0).wait(1).to({scaleX:0.22,scaleY:0.23,x:230.1,y:183.2},0).to({_off:true},1).wait(180));

	// אפליקצית לוח שנה
	this.instance_18 = new lib.לוחהשנה();
	this.instance_18.parent = this;
	this.instance_18.setTransform(203.7,183.8,0.216,0.205,0,0,0,47.8,47.8);
	this.instance_18._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_18).wait(529).to({_off:false},0).wait(206));

	// לוח שנה
	this.instance_19 = new lib.לוחשנה();
	this.instance_19.parent = this;
	this.instance_19.setTransform(272.4,58.1,1,1,0,0,0,50.4,50.5);

	this.instance_20 = new lib.לוחהשנה();
	this.instance_20.parent = this;
	this.instance_20.setTransform(277.7,43.4,0.665,0.564,0,0,0,47.8,48);
	this.instance_20._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_19).wait(114).to({_off:true},385).wait(236));
	this.timeline.addTween(cjs.Tween.get(this.instance_20).wait(499).to({_off:false},0).wait(1).to({regY:47.8,scaleX:0.65,scaleY:0.55,x:275.2,y:47.9},0).wait(1).to({scaleX:0.64,scaleY:0.54,x:272.8,y:52.6},0).wait(1).to({scaleX:0.62,scaleY:0.53,x:270.3,y:57.3},0).wait(1).to({scaleX:0.61,scaleY:0.52,x:267.9,y:61.9},0).wait(1).to({scaleX:0.59,scaleY:0.5,x:265.4,y:66.6},0).wait(1).to({scaleX:0.58,scaleY:0.49,x:263,y:71.3},0).wait(1).to({scaleX:0.56,scaleY:0.48,x:260.5,y:76},0).wait(1).to({scaleX:0.55,scaleY:0.47,x:258.1,y:80.7},0).wait(1).to({scaleX:0.53,scaleY:0.46,x:255.6,y:85.3},0).wait(1).to({scaleX:0.52,scaleY:0.44,x:253.2,y:90},0).wait(1).to({scaleX:0.5,scaleY:0.43,x:250.7,y:94.7},0).wait(1).to({scaleX:0.49,scaleY:0.42,x:248.3,y:99.4},0).wait(1).to({scaleX:0.48,scaleY:0.41,x:245.8,y:104.1},0).wait(1).to({scaleX:0.46,scaleY:0.4,x:243.4,y:108.8},0).wait(1).to({scaleX:0.45,scaleY:0.38,x:240.9,y:113.4},0).wait(1).to({scaleX:0.43,scaleY:0.37,x:238.4,y:118.1},0).wait(1).to({scaleX:0.42,scaleY:0.36,x:236,y:122.8},0).wait(1).to({scaleX:0.4,scaleY:0.35,x:233.5,y:127.4},0).wait(1).to({scaleX:0.39,scaleY:0.34,x:231.1,y:132.2},0).wait(1).to({scaleX:0.37,scaleY:0.32,x:228.6,y:136.8},0).wait(1).to({scaleX:0.36,scaleY:0.31,x:226.2,y:141.5},0).wait(1).to({scaleX:0.34,scaleY:0.3,x:223.7,y:146.2},0).wait(1).to({scaleX:0.33,scaleY:0.29,x:221.3,y:150.9},0).wait(1).to({scaleX:0.31,scaleY:0.27,x:218.8,y:155.5},0).wait(1).to({scaleX:0.3,scaleY:0.26,x:216.4,y:160.3},0).wait(1).to({scaleX:0.28,scaleY:0.25,x:213.9,y:164.9},0).wait(1).to({scaleX:0.27,scaleY:0.24,x:211.5,y:169.6},0).wait(1).to({scaleX:0.26,scaleY:0.23,x:209,y:174.3},0).wait(1).to({scaleX:0.24,scaleY:0.21,x:206.6,y:178.9},0).wait(1).to({scaleX:0.23,scaleY:0.2,x:204.1,y:183.6},0).to({_off:true},1).wait(205));

	// גלריה
	this.instance_21 = new lib.אפליקציתגלריה();
	this.instance_21.parent = this;
	this.instance_21.setTransform(340.9,158.9,0.294,0.26,0,0,0,36.7,34.9);
	this.instance_21._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_21).wait(489).to({_off:false},0).wait(246));

	// תמונה על הקיר
	this.instance_22 = new lib.תמונהעםדמות();
	this.instance_22.parent = this;
	this.instance_22.setTransform(61.3,58.1,1,1,0,0,0,42,42);

	this.instance_23 = new lib.אפליקציתגלריה();
	this.instance_23.parent = this;
	this.instance_23.setTransform(49.6,51.3,0.559,0.586,0,0,0,36.2,34.9);
	this.instance_23._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_22).wait(114).to({_off:true},346).wait(275));
	this.timeline.addTween(cjs.Tween.get(this.instance_23).wait(460).to({_off:false},0).wait(1).to({regX:36.3,regY:34.8,scaleX:0.55,scaleY:0.57,x:59.7,y:54.9},0).wait(1).to({scaleX:0.54,scaleY:0.56,x:69.8,y:58.6},0).wait(1).to({scaleX:0.53,scaleY:0.55,x:79.8,y:62.3},0).wait(1).to({scaleX:0.52,scaleY:0.54,x:89.8,y:66},0).wait(1).to({scaleX:0.51,scaleY:0.53,x:99.9,y:69.8},0).wait(1).to({scaleX:0.5,scaleY:0.51,x:109.9,y:73.4},0).wait(1).to({scaleX:0.49,scaleY:0.5,x:120,y:77.2},0).wait(1).to({scaleX:0.48,scaleY:0.49,x:130.1,y:80.9},0).wait(1).to({scaleX:0.47,scaleY:0.48,x:140.1,y:84.6},0).wait(1).to({scaleX:0.45,scaleY:0.47,x:150.2,y:88.3},0).wait(1).to({scaleX:0.44,scaleY:0.45,x:160.2,y:92},0).wait(1).to({scaleX:0.43,scaleY:0.44,x:170.2,y:95.7},0).wait(1).to({scaleX:0.42,scaleY:0.43,x:180.3,y:99.4},0).wait(1).to({scaleX:0.41,scaleY:0.42,x:190.4,y:103.1},0).wait(1).to({scaleX:0.4,scaleY:0.41,x:200.5,y:106.9},0).wait(1).to({scaleX:0.39,scaleY:0.39,x:210.5,y:110.5},0).wait(1).to({scaleX:0.38,scaleY:0.38,x:220.5,y:114.3},0).wait(1).to({scaleX:0.37,scaleY:0.37,x:230.6,y:118},0).wait(1).to({scaleX:0.36,scaleY:0.36,x:240.6,y:121.7},0).wait(1).to({scaleX:0.35,scaleY:0.34,x:250.7,y:125.4},0).wait(1).to({scaleX:0.34,scaleY:0.33,x:260.8,y:129.1},0).wait(1).to({scaleX:0.33,scaleY:0.32,x:270.8,y:132.8},0).wait(1).to({scaleX:0.32,scaleY:0.31,x:280.9,y:136.5},0).wait(1).to({scaleX:0.31,scaleY:0.3,x:290.9,y:140.2},0).wait(1).to({scaleX:0.3,scaleY:0.28,x:300.9,y:143.9},0).wait(1).to({scaleX:0.29,scaleY:0.27,x:311,y:147.7},0).wait(1).to({scaleX:0.28,scaleY:0.26,x:321.1,y:151.4},0).wait(1).to({scaleX:0.27,scaleY:0.25,x:331.1,y:155.1},0).wait(1).to({scaleX:0.26,scaleY:0.24,x:341.2,y:158.8},0).to({_off:true},1).wait(245));

	// פייסבוק
	this.instance_24 = new lib.פייסבוק();
	this.instance_24.parent = this;
	this.instance_24.setTransform(311.9,159,0.189,0.201,0,0,0,54.6,47.2);
	this.instance_24._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_24).wait(455).to({_off:false},0).wait(280));

	// תמונה נעוצה 1
	this.instance_25 = new lib.תמונה1();
	this.instance_25.parent = this;
	this.instance_25.setTransform(432.8,92,1,1,0,0,0,17.8,16.4);

	this.instance_26 = new lib.פייסבוק();
	this.instance_26.parent = this;
	this.instance_26.setTransform(432.1,84.9,0.338,0.439,0,0,0,54.1,47.2);
	this.instance_26._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_25).wait(114).to({_off:true},317).wait(304));
	this.timeline.addTween(cjs.Tween.get(this.instance_26).wait(431).to({_off:false},0).wait(1).to({regX:54.5,scaleX:0.33,scaleY:0.43,x:427.2,y:87.9},0).wait(1).to({scaleX:0.33,scaleY:0.42,x:422.1,y:91},0).wait(1).to({scaleX:0.32,scaleY:0.41,x:417.2,y:94.1},0).wait(1).to({scaleX:0.31,scaleY:0.4,x:412.1,y:97.2},0).wait(1).to({scaleX:0.31,scaleY:0.39,x:407.1,y:100.3},0).wait(1).to({scaleX:0.3,scaleY:0.38,x:402.1,y:103.4},0).wait(1).to({scaleX:0.3,scaleY:0.37,x:397.1,y:106.5},0).wait(1).to({scaleX:0.29,scaleY:0.36,x:392.1,y:109.6},0).wait(1).to({scaleX:0.28,scaleY:0.35,x:387.1,y:112.7},0).wait(1).to({scaleX:0.28,scaleY:0.34,x:382.1,y:115.8},0).wait(1).to({scaleX:0.27,scaleY:0.33,x:377,y:118.9},0).wait(1).to({scaleX:0.27,scaleY:0.33,x:372,y:121.9},0).wait(1).to({scaleX:0.26,scaleY:0.32,x:367,y:125.1},0).wait(1).to({scaleX:0.25,scaleY:0.31,x:362,y:128.2},0).wait(1).to({scaleX:0.25,scaleY:0.3,x:357,y:131.3},0).wait(1).to({scaleX:0.24,scaleY:0.29,x:352,y:134.4},0).wait(1).to({scaleX:0.23,scaleY:0.28,x:346.9,y:137.5},0).wait(1).to({scaleX:0.23,scaleY:0.27,x:342,y:140.5},0).wait(1).to({scaleX:0.22,scaleY:0.26,x:336.9,y:143.6},0).wait(1).to({scaleX:0.22,scaleY:0.25,x:331.9,y:146.7},0).wait(1).to({scaleX:0.21,scaleY:0.24,x:326.9,y:149.8},0).wait(1).to({scaleX:0.2,scaleY:0.23,x:321.9,y:152.9},0).wait(1).to({scaleX:0.2,scaleY:0.22,x:316.9,y:156},0).wait(1).to({scaleX:0.19,scaleY:0.21,x:311.9,y:159.1},0).to({_off:true},1).wait(279));

	// גימייל
	this.instance_27 = new lib.גימייל();
	this.instance_27.parent = this;
	this.instance_27.setTransform(312.2,184.7,0.173,0.181,0,0,0,52.9,46.8);
	this.instance_27._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_27).wait(624).to({_off:false},0).wait(111));

	// לוח שעם
	this.instance_28 = new lib.לוחשעם();
	this.instance_28.parent = this;
	this.instance_28.setTransform(482.3,55.8,1,1,0,0,0,67.3,55.8);

	this.instance_29 = new lib.גימייל();
	this.instance_29.parent = this;
	this.instance_29.setTransform(480.4,50.9,0.43,0.457,0,0,0,52.9,46.7);
	this.instance_29._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_28).wait(114).to({_off:true},484).wait(137));
	this.timeline.addTween(cjs.Tween.get(this.instance_29).wait(598).to({_off:false},0).wait(1).to({regX:52.8,scaleX:0.42,scaleY:0.45,x:473.9,y:56},0).wait(1).to({scaleX:0.41,scaleY:0.44,x:467.4,y:61.2},0).wait(1).to({scaleX:0.4,scaleY:0.43,x:461,y:66.3},0).wait(1).to({scaleX:0.39,scaleY:0.42,x:454.5,y:71.5},0).wait(1).to({scaleX:0.38,scaleY:0.41,x:448,y:76.6},0).wait(1).to({scaleX:0.37,scaleY:0.4,x:441.6,y:81.8},0).wait(1).to({scaleX:0.36,scaleY:0.39,x:435.1,y:86.9},0).wait(1).to({scaleX:0.35,scaleY:0.38,x:428.6,y:92},0).wait(1).to({scaleX:0.34,scaleY:0.37,x:422.2,y:97.2},0).wait(1).to({scaleX:0.33,scaleY:0.36,x:415.7,y:102.4},0).wait(1).to({scaleX:0.33,scaleY:0.34,x:409.2,y:107.5},0).wait(1).to({scaleX:0.32,scaleY:0.33,x:402.8,y:112.7},0).wait(1).to({scaleX:0.31,scaleY:0.32,x:396.3,y:117.8},0).wait(1).to({scaleX:0.3,scaleY:0.31,x:389.8,y:123},0).wait(1).to({scaleX:0.29,scaleY:0.3,x:383.3,y:128.1},0).wait(1).to({scaleX:0.28,scaleY:0.29,x:376.9,y:133.3},0).wait(1).to({scaleX:0.27,scaleY:0.28,x:370.4,y:138.4},0).wait(1).to({scaleX:0.26,scaleY:0.27,x:363.9,y:143.6},0).wait(1).to({scaleX:0.25,scaleY:0.26,x:357.5,y:148.7},0).wait(1).to({scaleX:0.24,scaleY:0.25,x:351,y:153.9},0).wait(1).to({scaleX:0.23,scaleY:0.24,x:344.5,y:159},0).wait(1).to({scaleX:0.22,scaleY:0.23,x:338.1,y:164.2},0).wait(1).to({scaleX:0.21,scaleY:0.22,x:331.6,y:169.4},0).wait(1).to({scaleX:0.2,scaleY:0.21,x:325.1,y:174.5},0).wait(1).to({scaleX:0.19,scaleY:0.2,x:318.7,y:179.7},0).wait(1).to({scaleX:0.18,scaleY:0.19,x:312.2,y:184.8},0).to({_off:true},1).wait(110));

	// תמונה על השולחן
	this.instance_30 = new lib.תמונהעםדמות2();
	this.instance_30.parent = this;
	this.instance_30.setTransform(410.1,194.1,0.405,0.621,0,0,0,42,42.1);

	this.instance_31 = new lib.יוטיוב();
	this.instance_31.parent = this;
	this.instance_31.setTransform(407.4,207.4,0.247,0.271,0,0,0,53.7,47.3);
	this.instance_31._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_30).wait(114).to({_off:true},312).wait(309));
	this.timeline.addTween(cjs.Tween.get(this.instance_31).wait(426).to({_off:false},0).wait(1).to({regX:54.1,regY:47.2,scaleX:0.25,scaleY:0.27,x:402.3,y:205.3},0).wait(1).to({scaleX:0.24,scaleY:0.27,x:397.2,y:203.3},0).wait(1).to({scaleX:0.24,scaleY:0.26,x:392.1,y:201.2},0).wait(1).to({scaleX:0.24,scaleY:0.26,x:387,y:199.1},0).wait(1).to({scaleX:0.24,scaleY:0.26,x:381.9,y:197.1},0).wait(1).to({scaleX:0.24,scaleY:0.26,x:376.8,y:195.1},0).wait(1).to({scaleX:0.24,scaleY:0.26,x:371.7,y:193},0).wait(1).to({scaleX:0.23,scaleY:0.25,x:366.6,y:191},0).wait(1).to({scaleX:0.23,scaleY:0.25,x:361.5,y:189},0).wait(1).to({scaleX:0.23,scaleY:0.25,x:356.4,y:186.9},0).wait(1).to({scaleX:0.23,scaleY:0.25,x:351.3,y:184.9},0).wait(1).to({scaleX:0.23,scaleY:0.24,x:346.2,y:182.8},0).wait(1).to({scaleX:0.23,scaleY:0.24,x:341,y:180.8},0).wait(1).to({scaleX:0.22,scaleY:0.24,x:336,y:178.7},0).wait(1).to({scaleX:0.22,scaleY:0.24,x:330.9,y:176.7},0).wait(1).to({scaleX:0.22,scaleY:0.24,x:325.7,y:174.6},0).wait(1).to({scaleX:0.22,scaleY:0.23,x:320.6,y:172.6},0).wait(1).to({scaleX:0.22,scaleY:0.23,x:315.5,y:170.6},0).wait(1).to({scaleX:0.22,scaleY:0.23,x:310.4,y:168.5},0).wait(1).to({scaleX:0.22,scaleY:0.23,x:305.3,y:166.5},0).wait(1).to({scaleX:0.21,scaleY:0.22,x:300.2,y:164.4},0).wait(1).to({scaleX:0.21,scaleY:0.22,x:295.1,y:162.4},0).wait(1).to({scaleX:0.21,scaleY:0.22,x:290,y:160.3},0).wait(1).to({scaleX:0.21,scaleY:0.22,x:284.9,y:158.3},0).to({_off:true},1).wait(284));

	// יומן
	this.instance_32 = new lib.יומן();
	this.instance_32.parent = this;
	this.instance_32.setTransform(374.7,311.4,0.513,0.415,0,0,0,84.2,51.4);

	this.instance_33 = new lib.אפליקציתיומן();
	this.instance_33.parent = this;
	this.instance_33.setTransform(365.3,309.8,0.505,0.406,0,0,0,39.2,41);
	this.instance_33._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_32).wait(114).to({_off:true},274).wait(347));
	this.timeline.addTween(cjs.Tween.get(this.instance_33).wait(388).to({_off:false},0).wait(1).to({regX:41.1,regY:41.1,scaleX:0.5,scaleY:0.4,x:362.1,y:304},0).wait(1).to({scaleX:0.49,scaleY:0.39,x:358,y:298.2},0).wait(1).to({scaleX:0.48,scaleY:0.39,x:353.9,y:292.4},0).wait(1).to({scaleX:0.47,scaleY:0.38,x:349.8,y:286.5},0).wait(1).to({scaleX:0.46,scaleY:0.37,x:345.6,y:280.7},0).wait(1).to({scaleX:0.45,scaleY:0.36,x:341.5,y:274.9},0).wait(1).to({scaleX:0.44,scaleY:0.36,x:337.4,y:269},0).wait(1).to({scaleX:0.43,scaleY:0.35,x:333.3,y:263.2},0).wait(1).to({scaleX:0.42,scaleY:0.34,x:329.1,y:257.4},0).wait(1).to({scaleX:0.41,scaleY:0.34,x:325,y:251.6},0).wait(1).to({scaleX:0.4,scaleY:0.33,x:320.9,y:245.7},0).wait(1).to({scaleX:0.4,scaleY:0.32,x:316.7,y:239.9},0).wait(1).to({scaleX:0.39,scaleY:0.31,x:312.6,y:234},0).wait(1).to({scaleX:0.38,scaleY:0.31,x:308.5,y:228.3},0).wait(1).to({scaleX:0.37,scaleY:0.3,x:304.4,y:222.4},0).wait(1).to({scaleX:0.36,scaleY:0.29,x:300.2,y:216.6},0).wait(1).to({scaleX:0.35,scaleY:0.29,x:296.1,y:210.7},0).wait(1).to({scaleX:0.34,scaleY:0.28,x:292,y:204.9},0).wait(1).to({scaleX:0.33,scaleY:0.27,x:287.9,y:199.1},0).wait(1).to({scaleX:0.32,scaleY:0.27,x:283.7,y:193.3},0).wait(1).to({scaleX:0.31,scaleY:0.26,x:279.6,y:187.4},0).wait(1).to({scaleX:0.3,scaleY:0.25,x:275.5,y:181.6},0).wait(1).to({scaleX:0.29,scaleY:0.24,x:271.4,y:175.7},0).wait(1).to({scaleX:0.28,scaleY:0.24,x:267.2,y:170},0).wait(1).to({scaleX:0.28,scaleY:0.23,x:263.1,y:164.1},0).wait(1).to({scaleX:0.27,scaleY:0.22,x:259,y:158.3},0).to({_off:true},1).wait(320));

	// אפליקציות
	this.instance_34 = new lib.סקייפ();
	this.instance_34.parent = this;
	this.instance_34.setTransform(340.6,133.3,0.204,0.258,0,0,0,54.3,46.6);

	this.instance_35 = new lib.PDF();
	this.instance_35.parent = this;
	this.instance_35.setTransform(313,132.2,1,1,0,0,0,11.3,12.5);

	this.instance_36 = new lib.note();
	this.instance_36.parent = this;
	this.instance_36.setTransform(285.8,132.9,1,1,0,0,0,11.3,11.3);

	this.instance_37 = new lib.פאוורפוינט();
	this.instance_37.parent = this;
	this.instance_37.setTransform(258.6,132.9,1,1,0,0,0,11.3,11.3);

	this.instance_38 = new lib.אקסל();
	this.instance_38.parent = this;
	this.instance_38.setTransform(230.5,133.9,1,1,0,0,0,11.3,11.3);

	this.instance_39 = new lib.וורד();
	this.instance_39.parent = this;
	this.instance_39.setTransform(204.3,132.9,1,1,0,0,0,11.3,11.3);

	this.instance_40 = new lib.ויקיפדיה();
	this.instance_40.parent = this;
	this.instance_40.setTransform(230.7,158.1,0.249,0.271,0,0,0,40.7,37);

	this.instance_41 = new lib.books();
	this.instance_41.parent = this;
	this.instance_41.setTransform(204.4,158.2,0.231,0.229,0,0,0,48,48);

	this.instance_42 = new lib.אפליקציתיומן();
	this.instance_42.parent = this;
	this.instance_42.setTransform(259.1,157.5,0.261,0.23,0,0,0,41.1,41.1);

	this.instance_43 = new lib.יוטיוב();
	this.instance_43.parent = this;
	this.instance_43.setTransform(284.8,158.2,0.206,0.207,0,0,0,54.5,47.3);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34}]},352).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_41},{t:this.instance_40}]},32).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_41},{t:this.instance_40},{t:this.instance_42}]},30).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_41},{t:this.instance_40},{t:this.instance_42},{t:this.instance_43}]},37).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_41},{t:this.instance_40},{t:this.instance_42},{t:this.instance_43}]},5).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_41},{t:this.instance_40},{t:this.instance_42},{t:this.instance_43}]},34).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_41},{t:this.instance_40},{t:this.instance_42},{t:this.instance_43}]},42).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_41},{t:this.instance_40},{t:this.instance_42},{t:this.instance_43}]},24).to({state:[{t:this.instance_39},{t:this.instance_38},{t:this.instance_37},{t:this.instance_36},{t:this.instance_35},{t:this.instance_34},{t:this.instance_41},{t:this.instance_40},{t:this.instance_42},{t:this.instance_43}]},69).wait(110));

	// ספר 2
	this.instance_44 = new lib.ספר();
	this.instance_44.parent = this;
	this.instance_44.setTransform(160,200.5,0.701,0.731,0,0,0,20.1,44.6);

	this.instance_45 = new lib.ויקיפדיה();
	this.instance_45.parent = this;
	this.instance_45.setTransform(160.9,196.5,0.267,0.301,0,0,0,40.7,36.6);
	this.instance_45._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_44).wait(114).to({_off:true},241).wait(380));
	this.timeline.addTween(cjs.Tween.get(this.instance_45).wait(355).to({_off:false},0).wait(1).to({regX:40.5,regY:36.7,x:163.2,y:195.2},0).wait(1).to({x:165.6,y:193.9},0).wait(1).to({x:168,y:192.6},0).wait(1).to({x:170.4,y:191.3},0).wait(1).to({x:172.8,y:189.9},0).wait(1).to({x:175.2,y:188.6},0).wait(1).to({x:177.5,y:187.3},0).wait(1).to({x:179.9,y:186},0).wait(1).to({x:182.3,y:184.6},0).wait(1).to({x:184.7,y:183.3},0).wait(1).to({x:187.1,y:182},0).wait(1).to({x:189.5,y:180.7},0).wait(1).to({x:191.8,y:179.4},0).wait(1).to({x:194.2,y:178},0).wait(1).to({x:196.6,y:176.7},0).wait(1).to({x:199,y:175.4},0).wait(1).to({x:201.4,y:174.1},0).wait(1).to({x:203.8,y:172.7},0).wait(1).to({x:206.2,y:171.4},0).wait(1).to({x:208.5,y:170.1},0).wait(1).to({x:210.9,y:168.8},0).wait(1).to({x:213.3,y:167.5},0).wait(1).to({x:215.7,y:166.1},0).wait(1).to({x:218.1,y:164.8},0).wait(1).to({x:220.5,y:163.5},0).wait(1).to({x:222.8,y:162.2},0).wait(1).to({x:225.2,y:160.8},0).wait(1).to({x:227.6,y:159.5},0).wait(1).to({x:230,y:158.2},0).to({_off:true},1).wait(350));

	// ספר 1
	this.instance_46 = new lib.ספר();
	this.instance_46.parent = this;
	this.instance_46.setTransform(131.9,205.6,0.701,0.731,0,0,0,20.1,44.6);

	this.instance_47 = new lib.books();
	this.instance_47.parent = this;
	this.instance_47.setTransform(123.9,202.4,0.223,0.234,0,0,0,47.8,48);
	this.instance_47._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_46).wait(114).to({_off:true},241).wait(380));
	this.timeline.addTween(cjs.Tween.get(this.instance_47).wait(355).to({_off:false},0).wait(1).to({regX:47.9,regY:47.9,x:126.7,y:200.9},0).wait(1).to({x:129.5,y:199.3},0).wait(1).to({x:132.3,y:197.8},0).wait(1).to({x:135.1,y:196.3},0).wait(1).to({x:137.8,y:194.7},0).wait(1).to({x:140.6,y:193.2},0).wait(1).to({x:143.4,y:191.7},0).wait(1).to({x:146.2,y:190.1},0).wait(1).to({x:149,y:188.6},0).wait(1).to({x:151.8,y:187.1},0).wait(1).to({x:154.6,y:185.5},0).wait(1).to({x:157.4,y:184},0).wait(1).to({x:160.1,y:182.5},0).wait(1).to({x:162.9,y:180.9},0).wait(1).to({x:165.7,y:179.4},0).wait(1).to({x:168.5,y:177.9},0).wait(1).to({x:171.3,y:176.3},0).wait(1).to({x:174.1,y:174.8},0).wait(1).to({x:176.9,y:173.3},0).wait(1).to({x:179.7,y:171.7},0).wait(1).to({x:182.4,y:170.2},0).wait(1).to({x:185.2,y:168.7},0).wait(1).to({x:188,y:167.1},0).wait(1).to({x:190.8,y:165.6},0).wait(1).to({x:193.6,y:164.1},0).wait(1).to({x:196.4,y:162.5},0).wait(1).to({x:199.2,y:161},0).wait(1).to({x:202,y:159.5},0).wait(1).to({x:204.7,y:157.9},0).to({_off:true},1).wait(350));

	// מחשב נייד וסמארטפון
	this.instance_48 = new lib.פלאפון();
	this.instance_48.parent = this;
	this.instance_48.setTransform(137.1,262.6,0.333,0.251,0,0,0,113.7,144.5);
	this.instance_48._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_48).wait(455).to({_off:false},0).wait(280));

	// סקייפ
	this.instance_49 = new lib.סקייפ();
	this.instance_49.parent = this;
	this.instance_49.setTransform(268.7,184.2,0.209,0.261,0,0,0,53.6,46);
	this.instance_49._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_49).wait(325).to({_off:false},0).wait(5).to({regX:53.4},0).wait(1).to({regX:53.6,regY:45.8,x:272,y:181.8},0).wait(1).to({x:275.3,y:179.5},0).wait(1).to({x:278.6,y:177.2},0).wait(1).to({x:281.8,y:174.9},0).wait(1).to({x:285.1,y:172.6},0).wait(1).to({x:288.4,y:170.2},0).wait(1).to({x:291.7,y:167.9},0).wait(1).to({x:294.9,y:165.6},0).wait(1).to({x:298.2,y:163.3},0).wait(1).to({x:301.5,y:161},0).wait(1).to({x:304.7,y:158.6},0).wait(1).to({x:308,y:156.3},0).wait(1).to({x:311.3,y:154},0).wait(1).to({x:314.6,y:151.7},0).wait(1).to({x:317.8,y:149.4},0).wait(1).to({x:321.1,y:147.1},0).wait(1).to({x:324.4,y:144.7},0).wait(1).to({x:327.7,y:142.4},0).wait(1).to({x:330.9,y:140.1},0).wait(1).to({x:334.2,y:137.8},0).wait(1).to({x:337.5,y:135.5},0).wait(1).to({x:340.7,y:133.1},0).to({_off:true},1).wait(382));

	// pdf
	this.instance_50 = new lib.PDF();
	this.instance_50.parent = this;
	this.instance_50.setTransform(245.5,183.4,1,1,0,0,0,11.3,12.5);
	this.instance_50._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_50).wait(288).to({_off:false},0).wait(43).to({regY:13.2,x:248.6,y:181.7},0).wait(1).to({x:251.7,y:179.4},0).wait(1).to({x:254.8,y:177},0).wait(1).to({x:257.9,y:174.6},0).wait(1).to({x:261,y:172.3},0).wait(1).to({x:264,y:169.9},0).wait(1).to({x:267.1,y:167.6},0).wait(1).to({x:270.2,y:165.2},0).wait(1).to({x:273.3,y:162.8},0).wait(1).to({x:276.4,y:160.5},0).wait(1).to({x:279.5,y:158.1},0).wait(1).to({x:282.6,y:155.7},0).wait(1).to({x:285.7,y:153.4},0).wait(1).to({x:288.8,y:151},0).wait(1).to({x:291.9,y:148.6},0).wait(1).to({x:295,y:146.3},0).wait(1).to({x:298,y:143.9},0).wait(1).to({x:301.1,y:141.6},0).wait(1).to({x:304.2,y:139.2},0).wait(1).to({x:307.3,y:136.8},0).wait(1).to({x:310.4,y:134.5},0).wait(1).to({x:313.5,y:132.1},0).to({_off:true},1).wait(382));

	// note
	this.instance_51 = new lib.note();
	this.instance_51.parent = this;
	this.instance_51.setTransform(314,161,1,1,0,0,0,11.3,11.3);
	this.instance_51._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_51).wait(270).to({_off:false},0).wait(61).to({x:312.7,y:159.7},0).wait(1).to({x:311.4,y:158.5},0).wait(1).to({x:310.1,y:157.2},0).wait(1).to({x:308.9,y:155.9},0).wait(1).to({x:307.6,y:154.6},0).wait(1).to({x:306.3,y:153.4},0).wait(1).to({x:305,y:152.1},0).wait(1).to({x:303.8,y:150.8},0).wait(1).to({x:302.5,y:149.5},0).wait(1).to({x:301.2,y:148.3},0).wait(1).to({x:300,y:147},0).wait(1).to({x:298.7,y:145.7},0).wait(1).to({x:297.4,y:144.5},0).wait(1).to({x:296.1,y:143.2},0).wait(1).to({x:294.9,y:141.9},0).wait(1).to({x:293.6,y:140.6},0).wait(1).to({x:292.3,y:139.4},0).wait(1).to({x:291,y:138.1},0).wait(1).to({x:289.8,y:136.8},0).wait(1).to({x:288.5,y:135.5},0).wait(1).to({x:287.2,y:134.3},0).wait(1).to({x:286,y:133},0).to({_off:true},1).wait(382));

	// פתקונים
	this.instance_52 = new lib.פתקונים();
	this.instance_52.parent = this;
	this.instance_52.setTransform(273.7,305.8,1,1,0,0,0,15.6,15.7);

	this.instance_53 = new lib.note();
	this.instance_53.parent = this;
	this.instance_53.setTransform(264.7,293.9,1.444,1.311,0,0,0,11.3,11.3);
	this.instance_53._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_52).wait(114).to({_off:true},116).wait(505));
	this.timeline.addTween(cjs.Tween.get(this.instance_53).wait(230).to({_off:false},0).wait(1).to({scaleX:1.43,scaleY:1.3,x:266,y:290.5},0).wait(1).to({scaleX:1.42,scaleY:1.29,x:267.3,y:287.1},0).wait(1).to({scaleX:1.41,scaleY:1.28,x:268.6,y:283.7},0).wait(1).to({scaleX:1.4,scaleY:1.27,x:269.8,y:280.3},0).wait(1).to({scaleX:1.39,scaleY:1.26,x:271.1,y:276.9},0).wait(1).to({scaleX:1.38,scaleY:1.26,x:272.4,y:273.6},0).wait(1).to({scaleX:1.36,scaleY:1.25,x:273.6,y:270.2},0).wait(1).to({scaleX:1.35,scaleY:1.24,x:274.9,y:266.8},0).wait(1).to({scaleX:1.34,scaleY:1.23,x:276.2,y:263.4},0).wait(1).to({scaleX:1.33,scaleY:1.22,x:277.5,y:260},0).wait(1).to({scaleX:1.32,scaleY:1.21,x:278.8,y:256.7},0).wait(1).to({scaleX:1.31,scaleY:1.2,x:280,y:253.3},0).wait(1).to({scaleX:1.29,scaleY:1.19,x:281.3,y:249.8},0).wait(1).to({scaleX:1.28,scaleY:1.18,x:282.6,y:246.5},0).wait(1).to({scaleX:1.27,scaleY:1.17,x:283.8,y:243.1},0).wait(1).to({scaleX:1.26,scaleY:1.17,x:285.1,y:239.7},0).wait(1).to({scaleX:1.25,scaleY:1.16,x:286.4,y:236.3},0).wait(1).to({scaleX:1.24,scaleY:1.15,x:287.7,y:232.9},0).wait(1).to({scaleX:1.22,scaleY:1.14,x:289,y:229.6},0).wait(1).to({scaleX:1.21,scaleY:1.13,x:290.2,y:226.2},0).wait(1).to({scaleX:1.2,scaleY:1.12,x:291.5,y:222.8},0).wait(1).to({scaleX:1.19,scaleY:1.11,x:292.8,y:219.4},0).wait(1).to({scaleX:1.18,scaleY:1.1,x:294,y:216},0).wait(1).to({scaleX:1.17,scaleY:1.09,x:295.3,y:212.6},0).wait(1).to({scaleX:1.15,scaleY:1.08,x:296.6,y:209.3},0).wait(1).to({scaleX:1.14,scaleY:1.07,x:297.9,y:205.9},0).wait(1).to({scaleX:1.13,scaleY:1.06,x:299.1,y:202.5},0).wait(1).to({scaleX:1.12,scaleY:1.06,x:300.4,y:199.1},0).wait(1).to({scaleX:1.11,scaleY:1.05,x:301.7,y:195.7},0).wait(1).to({scaleX:1.1,scaleY:1.04,x:303,y:192.3},0).wait(1).to({scaleX:1.08,scaleY:1.03,x:304.2,y:188.9},0).wait(1).to({scaleX:1.07,scaleY:1.02,x:305.5,y:185.5},0).wait(1).to({scaleX:1.06,scaleY:1.01,x:306.8,y:182.2},0).wait(1).to({scaleX:1.05,scaleY:1,x:308,y:178.8},0).wait(1).to({scaleX:1.04,scaleY:0.99,x:309.3,y:175.4},0).wait(1).to({scaleX:1.03,scaleY:0.98,x:310.6,y:172},0).wait(1).to({scaleX:1.01,scaleY:0.97,x:311.9,y:168.6},0).wait(1).to({scaleX:1,scaleY:0.96,x:313.2,y:165.3},0).wait(1).to({scaleX:0.99,scaleY:0.96,x:314.4,y:161.9},0).to({_off:true},1).wait(465));

	// פאוור פוינט
	this.instance_54 = new lib.פאוורפוינט();
	this.instance_54.parent = this;
	this.instance_54.setTransform(290.9,161,1,1,0,0,0,11.3,11.3);
	this.instance_54._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_54).wait(254).to({_off:false},0).wait(77).to({x:289.4,y:159.7},0).wait(1).to({x:287.9,y:158.5},0).wait(1).to({x:286.5,y:157.2},0).wait(1).to({x:285,y:155.9},0).wait(1).to({x:283.6,y:154.6},0).wait(1).to({x:282.1,y:153.4},0).wait(1).to({x:280.7,y:152.1},0).wait(1).to({x:279.2,y:150.8},0).wait(1).to({x:277.8,y:149.5},0).wait(1).to({x:276.3,y:148.3},0).wait(1).to({x:274.9,y:147},0).wait(1).to({x:273.4,y:145.7},0).wait(1).to({x:271.9,y:144.5},0).wait(1).to({x:270.5,y:143.2},0).wait(1).to({x:269,y:141.9},0).wait(1).to({x:267.6,y:140.6},0).wait(1).to({x:266.1,y:139.4},0).wait(1).to({x:264.7,y:138.1},0).wait(1).to({x:263.2,y:136.8},0).wait(1).to({x:261.8,y:135.5},0).wait(1).to({x:260.3,y:134.3},0).wait(1).to({x:258.9,y:133},0).to({_off:true},1).wait(382));

	// כלי כתיבה
	this.instance_55 = new lib.מהדק();
	this.instance_55.parent = this;
	this.instance_55.setTransform(181.1,282.1,1,1,0,0,0,18.3,8);

	this.instance_56 = new lib.מחזיקעפרונות();
	this.instance_56.parent = this;
	this.instance_56.setTransform(204.1,258.2,1.103,0.797,0,0,0,20.1,25);

	this.instance_57 = new lib.מספריים();
	this.instance_57.parent = this;
	this.instance_57.setTransform(172.2,260.4,0.385,0.663,75,0,0,26.9,26.2);

	this.instance_58 = new lib.דבק();
	this.instance_58.parent = this;
	this.instance_58.setTransform(143.1,271.2,0.498,0.608,0,0,0,21.8,38.4);

	this.instance_59 = new lib.פאוורפוינט();
	this.instance_59.parent = this;
	this.instance_59.setTransform(168.4,275,1.933,1.898,0,0,0,11.6,11.3);
	this.instance_59._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55}]}).to({state:[{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55}]},39).to({state:[{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55}]},67).to({state:[{t:this.instance_58},{t:this.instance_57},{t:this.instance_56},{t:this.instance_55}]},8).to({state:[{t:this.instance_59}]},91).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[{t:this.instance_59}]},1).to({state:[]},1).wait(481));
	this.timeline.addTween(cjs.Tween.get(this.instance_59).wait(205).to({_off:false},0).wait(1).to({regX:11.3,scaleX:1.92,scaleY:1.88,x:170.4,y:272.6},0).wait(1).to({scaleX:1.91,scaleY:1.86,x:173,y:270.2},0).wait(1).to({scaleX:1.89,scaleY:1.84,x:175.6,y:267.9},0).wait(1).to({scaleX:1.88,scaleY:1.82,x:178.3,y:265.5},0).wait(1).to({scaleX:1.87,scaleY:1.8,x:180.9,y:263.1},0).wait(1).to({scaleX:1.85,scaleY:1.78,x:183.5,y:260.7},0).wait(1).to({scaleX:1.84,scaleY:1.76,x:186.1,y:258.3},0).wait(1).to({scaleX:1.82,scaleY:1.74,x:188.7,y:256},0).wait(1).to({scaleX:1.81,scaleY:1.72,x:191.3,y:253.5},0).wait(1).to({scaleX:1.8,scaleY:1.7,x:194,y:251.2},0).wait(1).to({scaleX:1.78,scaleY:1.68,x:196.6,y:248.8},0).wait(1).to({scaleX:1.77,scaleY:1.67,x:199.2,y:246.4},0).wait(1).to({scaleX:1.76,scaleY:1.65,x:201.8,y:244.1},0).wait(1).to({scaleX:1.74,scaleY:1.63,x:204.5,y:241.6},0).wait(1).to({scaleX:1.73,scaleY:1.61,x:207.1,y:239.3},0).wait(1).to({scaleX:1.72,scaleY:1.59,x:209.7,y:236.9},0).wait(1).to({scaleX:1.7,scaleY:1.57,x:212.3,y:234.5},0).wait(1).to({scaleX:1.69,scaleY:1.55,x:214.9,y:232.1},0).wait(1).to({scaleX:1.67,scaleY:1.53,x:217.5,y:229.7},0).wait(1).to({scaleX:1.66,scaleY:1.51,x:220.2,y:227.4},0).wait(1).to({scaleX:1.65,scaleY:1.49,x:222.8,y:225},0).wait(1).to({scaleX:1.63,scaleY:1.47,x:225.4,y:222.6},0).wait(1).to({scaleX:1.62,scaleY:1.45,x:228,y:220.2},0).wait(1).to({scaleX:1.61,scaleY:1.43,x:230.7,y:217.8},0).wait(1).to({scaleX:1.59,scaleY:1.41,x:233.3,y:215.5},0).wait(1).to({scaleX:1.58,scaleY:1.39,x:235.9,y:213.1},0).wait(1).to({scaleX:1.56,scaleY:1.37,x:238.5,y:210.7},0).wait(1).to({scaleX:1.55,scaleY:1.35,x:241.1,y:208.3},0).wait(1).to({scaleX:1.54,scaleY:1.33,x:243.7,y:206},0).wait(1).to({scaleX:1.52,scaleY:1.32,x:246.4,y:203.6},0).wait(1).to({scaleX:1.51,scaleY:1.3,x:249,y:201.2},0).wait(1).to({scaleX:1.5,scaleY:1.28,x:251.6,y:198.8},0).wait(1).to({scaleX:1.48,scaleY:1.26,x:254.2,y:196.4},0).wait(1).to({scaleX:1.47,scaleY:1.24,x:256.9,y:194.1},0).wait(1).to({scaleX:1.46,scaleY:1.22,x:259.5,y:191.7},0).wait(1).to({scaleX:1.44,scaleY:1.2,x:262.1,y:189.3},0).wait(1).to({scaleX:1.43,scaleY:1.18,x:264.7,y:186.9},0).wait(1).to({scaleX:1.41,scaleY:1.16,x:267.4,y:184.5},0).wait(1).to({scaleX:1.4,scaleY:1.14,x:270,y:182.2},0).wait(1).to({scaleX:1.39,scaleY:1.12,x:272.6,y:179.7},0).wait(1).to({scaleX:1.37,scaleY:1.1,x:275.2,y:177.4},0).wait(1).to({scaleX:1.36,scaleY:1.08,x:277.8,y:175},0).wait(1).to({scaleX:1.35,scaleY:1.06,x:280.4,y:172.6},0).wait(1).to({scaleX:1.33,scaleY:1.04,x:283.1,y:170.2},0).wait(1).to({scaleX:1.32,scaleY:1.02,x:285.7,y:167.8},0).wait(1).to({scaleX:1.31,scaleY:1,x:288.3,y:165.5},0).wait(1).to({scaleX:1.29,scaleY:0.98,x:290.9,y:163.1},0).wait(1).to({scaleX:1.28,scaleY:0.97,x:293.6,y:160.7},0).to({_off:true},1).wait(481));

	// אקסל
	this.instance_60 = new lib.אקסל();
	this.instance_60.parent = this;
	this.instance_60.setTransform(266.7,161,1,1,0,0,0,11.3,11.3);
	this.instance_60._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_60).wait(222).to({_off:false},0).wait(109).to({x:265,y:159.7},0).wait(1).to({x:263.4,y:158.5},0).wait(1).to({x:261.7,y:157.2},0).wait(1).to({x:260.1,y:155.9},0).wait(1).to({x:258.5,y:154.6},0).wait(1).to({x:256.8,y:153.4},0).wait(1).to({x:255.2,y:152.1},0).wait(1).to({x:253.6,y:150.8},0).wait(1).to({x:251.9,y:149.5},0).wait(1).to({x:250.3,y:148.3},0).wait(1).to({x:248.7,y:147},0).wait(1).to({x:247,y:145.7},0).wait(1).to({x:245.4,y:144.5},0).wait(1).to({x:243.7,y:143.2},0).wait(1).to({x:242.1,y:141.9},0).wait(1).to({x:240.5,y:140.6},0).wait(1).to({x:238.8,y:139.4},0).wait(1).to({x:237.2,y:138.1},0).wait(1).to({x:235.6,y:136.8},0).wait(1).to({x:233.9,y:135.5},0).wait(1).to({x:232.3,y:134.3},0).wait(1).to({x:230.7,y:133},0).to({_off:true},1).wait(382));

	// וורד
	this.instance_61 = new lib.וורד();
	this.instance_61.parent = this;
	this.instance_61.setTransform(245.5,161,1,1,0,0,0,11.3,11.3);
	this.instance_61._off = true;

	this.timeline.addTween(cjs.Tween.get(this.instance_61).wait(172).to({_off:false},0).wait(159).to({x:243.6,y:159.7},0).wait(1).to({x:241.7,y:158.5},0).wait(1).to({x:239.8,y:157.2},0).wait(1).to({x:237.9,y:155.9},0).wait(1).to({x:236,y:154.6},0).wait(1).to({x:234,y:153.4},0).wait(1).to({x:232.1,y:152.1},0).wait(1).to({x:230.2,y:150.8},0).wait(1).to({x:228.3,y:149.5},0).wait(1).to({x:226.4,y:148.3},0).wait(1).to({x:224.5,y:147},0).wait(1).to({x:222.6,y:145.7},0).wait(1).to({x:220.7,y:144.5},0).wait(1).to({x:218.8,y:143.2},0).wait(1).to({x:216.9,y:141.9},0).wait(1).to({x:215,y:140.6},0).wait(1).to({x:213,y:139.4},0).wait(1).to({x:211.1,y:138.1},0).wait(1).to({x:209.2,y:136.8},0).wait(1).to({x:207.3,y:135.5},0).wait(1).to({x:205.4,y:134.3},0).wait(1).to({x:203.5,y:133},0).to({_off:true},1).wait(382));

	// דף על השולחן
	this.instance_62 = new lib.דף();
	this.instance_62.parent = this;
	this.instance_62.setTransform(395.1,281.1,1.154,1,0,0,0,19.6,27.5);

	this.instance_63 = new lib.וורד();
	this.instance_63.parent = this;
	this.instance_63.setTransform(350.8,309.5,2.124,2.316,0,0,0,-2,26.7);
	this.instance_63._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_62}]}).to({state:[{t:this.instance_62}]},39).to({state:[{t:this.instance_62}]},67).to({state:[{t:this.instance_63}]},6).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[{t:this.instance_63}]},1).to({state:[]},1).wait(563));
	this.timeline.addTween(cjs.Tween.get(this.instance_63).wait(112).to({_off:false},0).wait(1).to({regX:11.3,regY:11.3,scaleX:2.1,scaleY:2.29,x:376.6,y:272},0).wait(1).to({scaleX:2.07,scaleY:2.26,x:374.3,y:270.1},0).wait(1).to({scaleX:2.05,scaleY:2.24,x:372,y:268.3},0).wait(1).to({scaleX:2.02,scaleY:2.21,x:369.7,y:266.4},0).wait(1).to({scaleX:2,scaleY:2.19,x:367.3,y:264.6},0).wait(1).to({scaleX:1.97,scaleY:2.16,x:364.9,y:262.7},0).wait(1).to({scaleX:1.95,scaleY:2.14,x:362.6,y:260.9},0).wait(1).to({scaleX:1.92,scaleY:2.11,x:360.3,y:259.1},0).wait(1).to({scaleX:1.9,scaleY:2.08,x:357.9,y:257.2},0).wait(1).to({scaleX:1.87,scaleY:2.06,x:355.6,y:255.4},0).wait(1).to({scaleX:1.85,scaleY:2.03,x:353.2,y:253.5},0).wait(1).to({scaleX:1.82,scaleY:2.01,x:350.9,y:251.7},0).wait(1).to({scaleX:1.8,scaleY:1.98,x:348.6,y:249.8},0).wait(1).to({scaleX:1.77,scaleY:1.96,x:346.2,y:248},0).wait(1).to({scaleX:1.75,scaleY:1.93,x:343.9,y:246.1},0).wait(1).to({scaleX:1.72,scaleY:1.91,x:341.5,y:244.3},0).wait(1).to({scaleX:1.7,scaleY:1.88,x:339.2,y:242.5},0).wait(1).to({scaleX:1.67,scaleY:1.85,x:336.8,y:240.6},0).wait(1).to({scaleX:1.65,scaleY:1.83,x:334.5,y:238.8},0).wait(1).to({scaleX:1.62,scaleY:1.8,x:332.2,y:236.9},0).wait(1).to({scaleX:1.6,scaleY:1.78,x:329.8,y:235.1},0).wait(1).to({scaleX:1.57,scaleY:1.75,x:327.5,y:233.3},0).wait(1).to({scaleX:1.55,scaleY:1.73,x:325.1,y:231.4},0).wait(1).to({scaleX:1.52,scaleY:1.7,x:322.8,y:229.5},0).wait(1).to({scaleX:1.5,scaleY:1.67,x:320.5,y:227.7},0).wait(1).to({scaleX:1.47,scaleY:1.65,x:318.1,y:225.8},0).wait(1).to({scaleX:1.45,scaleY:1.62,x:315.7,y:224},0).wait(1).to({scaleX:1.42,scaleY:1.6,x:313.4,y:222.2},0).wait(1).to({scaleX:1.4,scaleY:1.57,x:311.1,y:220.3},0).wait(1).to({scaleX:1.37,scaleY:1.55,x:308.7,y:218.5},0).wait(1).to({scaleX:1.35,scaleY:1.52,x:306.4,y:216.6},0).wait(1).to({scaleX:1.32,scaleY:1.49,x:304,y:214.8},0).wait(1).to({scaleX:1.3,scaleY:1.47,x:301.7,y:213},0).wait(1).to({scaleX:1.27,scaleY:1.44,x:299.4,y:211.1},0).wait(1).to({scaleX:1.25,scaleY:1.42,x:297,y:209.2},0).wait(1).to({scaleX:1.22,scaleY:1.39,x:294.7,y:207.4},0).wait(1).to({scaleX:1.2,scaleY:1.37,x:292.3,y:205.6},0).wait(1).to({scaleX:1.17,scaleY:1.34,x:290,y:203.7},0).wait(1).to({scaleX:1.15,scaleY:1.31,x:287.7,y:201.9},0).wait(1).to({scaleX:1.12,scaleY:1.29,x:285.3,y:200},0).wait(1).to({scaleX:1.1,scaleY:1.26,x:282.9,y:198.2},0).wait(1).to({scaleX:1.07,scaleY:1.24,x:280.6,y:196.4},0).wait(1).to({scaleX:1.05,scaleY:1.21,x:278.3,y:194.5},0).wait(1).to({scaleX:1.02,scaleY:1.19,x:275.9,y:192.7},0).wait(1).to({scaleX:1,scaleY:1.16,x:273.6,y:190.8},0).wait(1).to({scaleX:0.97,scaleY:1.13,x:271.3,y:188.9},0).wait(1).to({scaleX:0.95,scaleY:1.11,x:268.9,y:187.1},0).wait(1).to({scaleX:0.92,scaleY:1.08,x:266.6,y:185.3},0).wait(1).to({scaleX:0.9,scaleY:1.06,x:264.2,y:183.4},0).wait(1).to({scaleX:0.87,scaleY:1.03,x:261.9,y:181.6},0).wait(1).to({scaleX:0.85,scaleY:1.01,x:259.6,y:179.7},0).wait(1).to({scaleX:0.82,scaleY:0.98,x:257.2,y:177.9},0).wait(1).to({scaleX:0.8,scaleY:0.95,x:254.8,y:176.1},0).wait(1).to({scaleX:0.77,scaleY:0.93,x:252.5,y:174.2},0).wait(1).to({scaleX:0.75,scaleY:0.9,x:250.2,y:172.4},0).wait(1).to({scaleX:0.72,scaleY:0.88,x:247.8,y:170.5},0).wait(1).to({scaleX:0.7,scaleY:0.85,x:245.5,y:168.6},0).wait(1).to({scaleX:0.67,scaleY:0.83,x:243.1,y:166.8},0).wait(1).to({scaleX:0.65,scaleY:0.8,x:240.8,y:165},0).to({_off:true},1).wait(563));

	// 2018
	this.shape = new cjs.Shape();
	this.shape.graphics.f("#000000").s().p("AhVCYQggggAAgvQAAgjASgXQARgXAhgIQgbgKgNgTQgOgSAAgaQAAgnAcgbQAdgbAuAAQAuAAAdAcQAcAbAAAnQAAAZgNASQgNATgbAKQAhAKASAXQARAYAAAhQAAAughAgQggAfg1AAQg0AAghgfgAgzAWQgVAVAAAeQAAATAJASQAJARASAKQARAKATAAQAgAAAUgVQAVgUAAgfQAAgggVgVQgVgUgfAAQgfAAgUAUgAgpiBQgRAQAAAWQAAAaARAQQAQAQAZAAQAaAAAQgQQAQgQAAgXQAAgZgRgQQgQgQgZAAQgYAAgRAQg");
	this.shape.setTransform(311.9,65);

	this.shape_1 = new cjs.Shape();
	this.shape_1.graphics.f("#000000").s().p("AAWC0IAAkXQgQAPgYAPQgbAPgUAIIAAgrQAlgRAcgZQAagYAMgYIAcAAIAAFng");
	this.shape_1.setTransform(282.4,64.7);

	this.shape_2 = new cjs.Shape();
	this.shape_2.graphics.f("#000000").s().p("AhQCSQgkgtABhlQgBg+ANgnQAOgnAagVQAZgVAmAAQAdAAAVAMQAWAMAOAWQAOAVAJAgQAHAfABA0QAAA/gOAnQgMAngaAVQgZAVgoAAQgzAAgdglgAgwh4QgXAhABBXQgBBYAVAeQAUAdAeAAQAeAAAVgeQAUgdABhYQgBhXgUgdQgVgdgeAAQgeAAgSAZg");
	this.shape_2.setTransform(256.3,65);

	this.shape_3 = new cjs.Shape();
	this.shape_3.graphics.f("#000000").s().p("Ah1C0QgBgQAGgPQAJgYAUgXQAUgYAlgfQA6gvAUgbQAVgcAAgZQAAgagTgSQgTgSgeAAQgeAAgTATQgTATgBAiIgtgFQAFgzAegaQAegbAyAAQA0AAAeAdQAeAdAAAqQAAAVgJAVQgJAVgUAWQgUAXgwAoQgmAhgMAMQgLAMgHAMICuAAIAAAqg");
	this.shape_3.setTransform(228,64.7);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_3},{t:this.shape_2},{t:this.shape_1},{t:this.shape}]},700).wait(35));

	// ציר זמן
	this.shape_4 = new cjs.Shape();
	this.shape_4.graphics.f("#000000").s().p("AgyBDQgSgOgJgYQgKgZAAgoIgBgrIAcAAIAAAaQACAmACAPQAPAAANgHQAMgIABgWIACgqIAbAAIgDAxQAAANgCAGQgDAHgFAGQgGAHgMAFQgNAGgWABQAEAQAOAKQANAJATAAQARAAANgIQANgJAGgNQAGgOACgYIAHhDIAcAAIgGA6QgCAfgIAWQgJAVgTAOQgTANgfAAQgbAAgTgNg");
	this.shape_4.setTransform(417.9,365.6);

	this.shape_5 = new cjs.Shape();
	this.shape_5.graphics.f("#000000").s().p("AgNAoIAAhPIAcAAIAABPg");
	this.shape_5.setTransform(403.8,361.6);

	this.shape_6 = new cjs.Shape();
	this.shape_6.graphics.f("#000000").s().p("AgkBOIAAgXIAuAAIAAhLQgBgMgBgHQgDgGgFgEQgGgFgLAAQgJAAgHACIgBgWQAKgDAOAAQASgBALAIQAKAIAFALQADAKAAAUIAABjg");
	this.shape_6.setTransform(394.2,365.3);

	this.shape_7 = new cjs.Shape();
	this.shape_7.graphics.f("#000000").s().p("AgNBOIAAibIAcAAIAACbg");
	this.shape_7.setTransform(385.8,365.4);

	this.shape_8 = new cjs.Shape();
	this.shape_8.graphics.f("#000000").s().p("AgOAoIAAhPIAdAAIAABPg");
	this.shape_8.setTransform(378.4,361.6);

	this.shape_9 = new cjs.Shape();
	this.shape_9.graphics.f("#000000").s().p("AgOAoIAAhPIAcAAIAABPg");
	this.shape_9.setTransform(371,361.6);

	this.shape_10 = new cjs.Shape();
	this.shape_10.graphics.f("#000000").s().p("AhDBOIAAiXQAfgEAbAAQAbgBASAJQARAIAHAOQAIAPAAAYIAABWgAgngzIAABqIBPAAIAAg7QAAgSgEgJQgEgLgLgGQgMgFgUgBQgNAAgPADg");
	this.shape_10.setTransform(358.4,365.3);

	this.shape_11 = new cjs.Shape();
	this.shape_11.graphics.f("#000000").s().p("AhJBOIAAgXIBfAAIAAg1QAAgUgFgLQgFgMgMgGQgMgHgbAAIgeADIgCgXQAUgDAWAAQApgBATATQATARAAAmIAAA7IAYAAIAAAXg");
	this.shape_11.setTransform(332.9,365.3);

	this.shape_12 = new cjs.Shape();
	this.shape_12.graphics.f("#000000").s().p("AgzA8QgVgXAAgkQAAglAVgWQATgXAgAAQAUAAAQAIQAPAJALASQALATAAAcQAAAWgIASQgIATgRALQgRALgXAAQggAAgTgWgAgfgpQgKARAAAZQAAAbALAPQALAPATABQAWAAAKgRQALgRAAgZQAAgbgMgPQgLgRgUABQgUAAgLARg");
	this.shape_12.setTransform(316.1,365.4);

	this.shape_13 = new cjs.Shape();
	this.shape_13.graphics.f("#000000").s().p("AhJBOIAAgXIBfAAIAAg1QAAgUgFgLQgFgMgMgGQgMgHgbAAIgeADIgCgXQAUgDAWAAQApgBATATQATARAAAmIAAA7IAYAAIAAAXg");
	this.shape_13.setTransform(299.4,365.3);

	this.shape_14 = new cjs.Shape();
	this.shape_14.graphics.f("#000000").s().p("AgNAoIAAhPIAbAAIAABPg");
	this.shape_14.setTransform(287.6,361.6);

	this.shape_15 = new cjs.Shape();
	this.shape_15.graphics.f("#000000").s().p("AhJBOIAAgXIBfAAIAAg1QAAgUgFgLQgFgMgMgGQgMgHgbAAIgeADIgCgXQAUgDAWAAQApgBATATQATARAAAmIAAA7IAYAAIAAAXg");
	this.shape_15.setTransform(275.8,365.3);

	this.shape_16 = new cjs.Shape();
	this.shape_16.graphics.f("#000000").s().p("AApBOIAAhMQAAgXgGgKQgFgLgNgGQgOgFgYgBQgUAAgYAFIgDgYQAbgFAZABQAvgBATATQATARAAAmIAABSgAhCBOIAAhWIAcAAIAABWg");
	this.shape_16.setTransform(258.6,365.3);

	this.shape_17 = new cjs.Shape();
	this.shape_17.graphics.f("#000000").s().p("AApBOIAAhMQAAgXgGgKQgFgLgNgGQgOgFgYgBQgUAAgYAFIgDgYQAbgFAZABQAvgBATATQATARAAAmIAABSgAhCBOIAAhWIAcAAIAABWg");
	this.shape_17.setTransform(232.2,365.3);

	this.shape_18 = new cjs.Shape();
	this.shape_18.graphics.f("#000000").s().p("AgFBOIAAgXIAzAAIAAguQAAgYgCgMQgCgMgHgHQgHgIgKAAQgRAAgKARQgMARgIApIgLA5IgcAAIAMg8IAHgdIgYhBIAcAAIALAjQAHgPAPgLQANgKARAAQASAAANAJQANAIAGASQAGASAAAiIAABEg");
	this.shape_18.setTransform(213.6,365.3);

	this.shape_19 = new cjs.Shape();
	this.shape_19.graphics.f("#000000").s().p("AgxBDQgTgOgJgYQgKgZABgoIgDgrIAdAAIABAaQABAmACAPQAQAAAMgHQAMgIAAgWIAEgqIAbAAIgEAxQgBANgCAGQgBAHgHAGQgEAHgNAFQgNAGgWABQAEAQANAKQANAJAUAAQARAAANgIQANgJAGgNQAGgOACgYIAGhDIAcAAIgEA6QgEAfgIAWQgIAVgTAOQgUANgdAAQgcAAgSgNg");
	this.shape_19.setTransform(194.7,365.6);

	this.shape_20 = new cjs.Shape();
	this.shape_20.graphics.f("#000000").s().p("AAjBOIAAhMQAAgUgFgLQgEgLgNgHQgNgGgWgBQgQAAgWAEIgCgYQAXgDATAAQAugBASATQATASAAAlIAABSg");
	this.shape_20.setTransform(175.8,365.3);

	this.shape_21 = new cjs.Shape();
	this.shape_21.graphics.f("#000000").s().p("AAPBOIAAiDIhUAAIAAgYICLAAIAAAYIgbAAIAACDg");
	this.shape_21.setTransform(161.3,365.4);

	this.shape_22 = new cjs.Shape();
	this.shape_22.graphics.f("#000000").s().p("AgNAoIAAhPIAcAAIAABPg");
	this.shape_22.setTransform(150,361.6);

	this.shape_23 = new cjs.Shape();
	this.shape_23.graphics.f("#000000").s().p("AhSBKIAFgUQAIACAIAAQALAAADgEQAEgFAAgLIAAhZQgMAAgTACIgCgXQAhgEAjAAQAiAAASAGQATAGAKAPQAKAQAAAeIAABTIgcAAIAAhNQAAgVgEgLQgDgKgMgHQgLgGgaAAIgOAAIAABdQAAAOgDAJQgCAHgJAFQgJAFgQAAQgOAAgOgFg");
	this.shape_23.setTransform(135.9,365.4);

	this.instance_64 = new lib.צירזמן();
	this.instance_64.parent = this;
	this.instance_64.setTransform(2509.9,368.9,3.597,0.996,0,0,0,541.5,26);
	this.instance_64._off = true;

	this.timeline.addTween(cjs.Tween.get({}).to({state:[]}).to({state:[{t:this.shape_23},{t:this.shape_22},{t:this.shape_21},{t:this.shape_20},{t:this.shape_19},{t:this.shape_18},{t:this.shape_17},{t:this.shape_16},{t:this.shape_15},{t:this.shape_14},{t:this.shape_13},{t:this.shape_12},{t:this.shape_11},{t:this.shape_10},{t:this.shape_9},{t:this.shape_8},{t:this.shape_7},{t:this.shape_6},{t:this.shape_5},{t:this.shape_4}]},19).to({state:[{t:this.instance_64}]},53).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[{t:this.instance_64}]},1).to({state:[]},1).wait(49));
	this.timeline.addTween(cjs.Tween.get(this.instance_64).wait(72).to({_off:false},0).wait(1).to({regX:541.8,regY:29,x:2504,y:371.8},0).wait(1).to({x:2497.1},0).wait(1).to({x:2490.1},0).wait(1).to({x:2483.2,y:371.7},0).wait(1).to({x:2476.3},0).wait(1).to({x:2469.3},0).wait(1).to({x:2462.4},0).wait(1).to({x:2455.5,y:371.6},0).wait(1).to({x:2448.5},0).wait(1).to({x:2441.6},0).wait(1).to({x:2434.7},0).wait(1).to({x:2427.7,y:371.5},0).wait(1).to({x:2420.8},0).wait(1).to({x:2413.9},0).wait(1).to({x:2406.9},0).wait(1).to({x:2400,y:371.4},0).wait(1).to({x:2393.1},0).wait(1).to({x:2386.1},0).wait(1).to({x:2379.2},0).wait(1).to({x:2372.3,y:371.3},0).wait(1).to({x:2365.3},0).wait(1).to({x:2358.4},0).wait(1).to({x:2351.5,y:371.2},0).wait(1).to({x:2344.5},0).wait(1).to({x:2337.6},0).wait(1).to({x:2330.7},0).wait(1).to({x:2323.7,y:371.1},0).wait(1).to({x:2316.8},0).wait(1).to({x:2309.9},0).wait(1).to({x:2302.9},0).wait(1).to({x:2296,y:371},0).wait(1).to({x:2289.1},0).wait(1).to({x:2282.1},0).wait(1).to({x:2275.2},0).wait(1).to({x:2268.3,y:370.9},0).wait(1).to({x:2261.3},0).wait(1).to({x:2254.4},0).wait(1).to({x:2247.5},0).wait(1).to({x:2240.5,y:370.8},0).wait(1).to({x:2233.6},0).wait(1).to({x:2226.7},0).wait(1).to({x:2219.7},0).wait(1).to({x:2212.8,y:370.7},0).wait(1).to({x:2205.8},0).wait(1).to({x:2198.9},0).wait(1).to({x:2192,y:370.6},0).wait(1).to({x:2185},0).wait(1).to({x:2178.1},0).wait(1).to({x:2171.2},0).wait(1).to({x:2164.2,y:370.5},0).wait(1).to({x:2157.3},0).wait(1).to({x:2150.4},0).wait(1).to({x:2143.4},0).wait(1).to({x:2136.5,y:370.4},0).wait(1).to({x:2129.6},0).wait(1).to({x:2122.6},0).wait(1).to({x:2115.7},0).wait(1).to({x:2108.8,y:370.3},0).wait(1).to({x:2101.8},0).wait(1).to({x:2094.9},0).wait(1).to({x:2088},0).wait(1).to({x:2081,y:370.2},0).wait(1).to({x:2074.1},0).wait(1).to({x:2067.2},0).wait(1).to({x:2060.2,y:370.1},0).wait(1).to({x:2053.3},0).wait(1).to({x:2046.4},0).wait(1).to({x:2039.4},0).wait(1).to({x:2032.5,y:370},0).wait(1).to({x:2025.6},0).wait(1).to({x:2018.6},0).wait(1).to({x:2011.7},0).wait(1).to({x:2004.8,y:369.9},0).wait(1).to({x:1997.8},0).wait(1).to({x:1990.9},0).wait(1).to({x:1984},0).wait(1).to({x:1977,y:369.8},0).wait(1).to({x:1970.1},0).wait(1).to({x:1963.2},0).wait(1).to({x:1956.2},0).wait(1).to({x:1949.3,y:369.7},0).wait(1).to({x:1942.4},0).wait(1).to({x:1935.5},0).wait(1).to({x:1928.5},0).wait(1).to({x:1921.6,y:369.6},0).wait(1).to({x:1914.7},0).wait(1).to({x:1907.7},0).wait(1).to({x:1900.8,y:369.5},0).wait(1).to({x:1893.9},0).wait(1).to({x:1886.9},0).wait(1).to({x:1880},0).wait(1).to({x:1873.1,y:369.4},0).wait(1).to({x:1866.1},0).wait(1).to({x:1859.2},0).wait(1).to({x:1852.3},0).wait(1).to({x:1845.3,y:369.3},0).wait(1).to({x:1838.4},0).wait(1).to({x:1831.5},0).wait(1).to({x:1824.5},0).wait(1).to({x:1817.6,y:369.2},0).wait(1).to({x:1810.7},0).wait(1).to({x:1803.7},0).wait(1).to({x:1796.8},0).wait(1).to({x:1789.9,y:369.1},0).wait(1).to({x:1782.9},0).wait(1).to({x:1776},0).wait(1).to({x:1769},0).wait(1).to({x:1762.1,y:369},0).wait(1).to({x:1755.2},0).wait(1).to({x:1748.2},0).wait(1).to({x:1741.3,y:368.9},0).wait(1).to({x:1734.4},0).wait(1).to({x:1727.4},0).wait(1).to({x:1720.5},0).wait(1).to({x:1713.6,y:368.8},0).wait(1).to({x:1706.6},0).wait(1).to({x:1699.7},0).wait(1).to({x:1692.8},0).wait(1).to({x:1685.8,y:368.7},0).wait(1).to({x:1678.9},0).wait(1).to({x:1672},0).wait(1).to({x:1665},0).wait(1).to({x:1658.1,y:368.6},0).wait(1).to({x:1651.2},0).wait(1).to({x:1644.2},0).wait(1).to({x:1637.3},0).wait(1).to({x:1630.4,y:368.5},0).wait(1).to({x:1623.4},0).wait(1).to({x:1616.5},0).wait(1).to({x:1609.6,y:368.4},0).wait(1).to({x:1602.6},0).wait(1).to({x:1595.7},0).wait(1).to({x:1588.8},0).wait(1).to({x:1581.8,y:368.3},0).wait(1).to({x:1574.9},0).wait(1).to({x:1568},0).wait(1).to({x:1561},0).wait(1).to({x:1554.1,y:368.2},0).wait(1).to({x:1547.2},0).wait(1).to({x:1540.2},0).wait(1).to({x:1533.3},0).wait(1).to({x:1526.4,y:368.1},0).wait(1).to({x:1519.4},0).wait(1).to({x:1512.5},0).wait(1).to({x:1505.6},0).wait(1).to({x:1498.6,y:368},0).wait(1).to({x:1491.7},0).wait(1).to({x:1484.8},0).wait(1).to({x:1477.8},0).wait(1).to({x:1470.9,y:367.9},0).wait(1).to({x:1463.9},0).wait(1).to({x:1457,y:367.8},0).wait(1).to({x:1450,y:367.7},0).wait(1).to({x:1443,y:367.6},0).wait(1).to({x:1436,y:367.5},0).wait(1).to({x:1429.1},0).wait(1).to({x:1422.1,y:367.4},0).wait(1).to({x:1415.1,y:367.3},0).wait(1).to({x:1408.1,y:367.2},0).wait(1).to({x:1401.2,y:367.1},0).wait(1).to({x:1394.2,y:367},0).wait(1).to({x:1387.2,y:366.9},0).wait(1).to({x:1380.2},0).wait(1).to({x:1373.3,y:366.8},0).wait(1).to({x:1366.3,y:366.7},0).wait(1).to({x:1359.3,y:366.6},0).wait(1).to({x:1352.3,y:366.5},0).wait(1).to({x:1345.4,y:366.4},0).wait(1).to({x:1338.4},0).wait(1).to({x:1331.4,y:366.3},0).wait(1).to({x:1324.4,y:366.2},0).wait(1).to({x:1317.5,y:366.1},0).wait(1).to({x:1310.5,y:366},0).wait(1).to({x:1303.5,y:365.9},0).wait(1).to({x:1296.5},0).wait(1).to({x:1289.6,y:365.8},0).wait(1).to({x:1282.6,y:365.7},0).wait(1).to({x:1275.6,y:365.6},0).wait(1).to({x:1268.6,y:365.5},0).wait(1).to({x:1261.7},0).wait(1).to({x:1254.7,y:365.4},0).wait(1).to({x:1247.7,y:365.3},0).wait(1).to({x:1240.7,y:365.2},0).wait(1).to({x:1233.8,y:365.1},0).wait(1).to({x:1226.8},0).wait(1).to({x:1219.8,y:365},0).wait(1).to({x:1212.8,y:364.9},0).wait(1).to({x:1205.9,y:364.8},0).wait(1).to({x:1198.9,y:364.7},0).wait(1).to({x:1191.9},0).wait(1).to({x:1184.9,y:364.6},0).wait(1).to({x:1178,y:364.5},0).wait(1).to({x:1171,y:364.4},0).wait(1).to({x:1164},0).wait(1).to({x:1157,y:364.3},0).wait(1).to({x:1150.1,y:364.2},0).wait(1).to({x:1143.1,y:364.1},0).wait(1).to({x:1136.1,y:364},0).wait(1).to({x:1129.1},0).wait(1).to({x:1122.2,y:363.9},0).wait(1).to({x:1115.2,y:363.8},0).wait(1).to({x:1108.2,y:363.7},0).wait(1).to({x:1101.2},0).wait(1).to({x:1094.2,y:363.6},0).wait(1).to({x:1087.3,y:363.5},0).wait(1).to({x:1080.3},0).wait(1).to({x:1073.3,y:363.4},0).wait(1).to({x:1066.3,y:363.3},0).wait(1).to({x:1059.4,y:363.2},0).wait(1).to({x:1052.4},0).wait(1).to({x:1045.4,y:363.1},0).wait(1).to({x:1038.4,y:363},0).wait(1).to({x:1031.5,y:362.9},0).wait(1).to({x:1024.5},0).wait(1).to({x:1017.5,y:362.8},0).wait(1).to({x:1010.5,y:362.7},0).wait(1).to({x:1003.6},0).wait(1).to({x:996.6,y:362.6},0).wait(1).to({x:989.6,y:362.5},0).wait(1).to({x:982.6,y:362.4},0).wait(1).to({x:975.7},0).wait(1).to({x:968.7,y:362.3},0).wait(1).to({x:961.7,y:362.2},0).wait(1).to({x:954.7},0).wait(1).to({x:947.8,y:362.1},0).wait(1).to({x:940.8,y:362},0).wait(1).to({x:933.8},0).wait(1).to({x:926.8,y:361.9},0).wait(1).to({x:919.9,y:361.8},0).wait(1).to({x:912.9},0).wait(1).to({x:905.9,y:361.7},0).wait(1).to({x:898.9,y:361.6},0).wait(1).to({x:892},0).wait(1).to({x:885,y:361.5},0).wait(1).to({x:878,y:361.4},0).wait(1).to({x:871},0).wait(1).to({x:864,y:361.3},0).wait(1).to({x:857.1,y:361.2},0).wait(1).to({x:850.1},0).wait(1).to({x:843.1,y:361.1},0).wait(1).to({x:836.1,y:361},0).wait(1).to({x:829.2},0).wait(1).to({x:822.2,y:360.9},0).wait(1).to({x:815.2},0).wait(1).to({x:808.2,y:360.8},0).wait(1).to({x:801.3,y:360.7},0).wait(1).to({x:794.3},0).wait(1).to({x:787.3,y:360.6},0).wait(1).to({x:780.3,y:360.5},0).wait(1).to({x:773.4},0).wait(1).to({x:766.4,y:360.4},0).wait(1).to({x:759.4},0).wait(1).to({x:752.4,y:360.3},0).wait(1).to({x:745.5,y:360.2},0).wait(1).to({x:738.5},0).wait(1).to({x:731.5,y:360.1},0).wait(1).to({x:724.5},0).wait(1).to({x:717.6,y:360},0).wait(1).to({x:710.6,y:359.9},0).wait(1).to({x:703.6},0).wait(1).to({x:696.6,y:359.8},0).wait(1).to({x:689.7},0).wait(1).to({x:682.7,y:359.7},0).wait(1).to({x:675.7,y:359.6},0).wait(1).to({x:668.7},0).wait(1).to({x:661.8,y:359.5},0).wait(1).to({x:654.8},0).wait(1).to({x:647.8,y:359.4},0).wait(1).to({x:640.8},0).wait(1).to({x:633.8,y:359.3},0).wait(1).to({x:626.9},0).wait(1).to({x:619.9,y:359.2},0).wait(1).to({x:612.9,y:359.1},0).wait(1).to({x:605.9},0).wait(1).to({x:599,y:359},0).wait(1).to({x:592},0).wait(1).to({x:585,y:358.9},0).wait(1).to({x:578},0).wait(1).to({x:571.1,y:358.8},0).wait(1).to({x:564.1},0).wait(1).to({x:557.1,y:358.7},0).wait(1).to({x:550.1},0).wait(1).to({x:543.2,y:358.6},0).wait(1).to({x:536.2},0).wait(1).to({x:529.2,y:358.5},0).wait(1).to({x:522.2,y:358.4},0).wait(1).to({x:515.3},0).wait(1).to({x:508.3,y:358.3},0).wait(1).to({x:501.3},0).wait(1).to({x:494.3,y:358.2},0).wait(1).to({x:487.4},0).wait(1).to({x:480.4,y:358.1},0).wait(1).to({x:473.4},0).wait(1).to({x:466.4,y:358},0).wait(1).to({x:459.5},0).wait(1).to({x:452.5,y:357.9},0).wait(1).to({x:445.5},0).wait(1).to({x:438.5,y:357.8},0).wait(1).to({x:431.6},0).wait(1).to({x:424.6,y:357.7},0).wait(1).to({x:417.6},0).wait(1).to({x:410.6},0).wait(1).to({x:403.7,y:357.6},0).wait(1).to({x:396.7},0).wait(1).to({x:389.7,y:357.5},0).wait(1).to({x:382.7},0).wait(1).to({x:375.7,y:357.4},0).wait(1).to({x:368.8},0).wait(1).to({x:361.8,y:357.3},0).wait(1).to({x:354.8},0).wait(1).to({x:347.8,y:357.2},0).wait(1).to({x:340.9},0).wait(1).to({x:333.9,y:357.1},0).wait(1).to({x:326.9},0).wait(1).to({x:319.9},0).wait(1).to({x:313,y:357},0).wait(1).to({x:306},0).wait(1).to({x:299,y:356.9},0).wait(1).to({x:292},0).wait(1).to({x:285.1,y:356.8},0).wait(1).to({x:278.1},0).wait(1).to({x:271.1},0).wait(1).to({x:264.1,y:356.7},0).wait(1).to({x:257.2},0).wait(1).to({x:250.2,y:356.6},0).wait(1).to({x:243.2},0).wait(1).to({x:236.2},0).wait(1).to({x:229.3,y:356.5},0).wait(1).to({x:222.3},0).wait(1).to({x:215.3,y:356.4},0).wait(1).to({x:208.3},0).wait(1).to({x:201.3},0).wait(1).to({x:194.4,y:356.3},0).wait(1).to({x:187.4},0).wait(1).to({x:180.4,y:356.2},0).wait(1).to({x:173.4},0).wait(1).to({x:166.5},0).wait(1).to({x:159.5,y:356.1},0).wait(1).to({x:152.5},0).wait(1).to({x:145.5,y:356},0).wait(1).to({x:138.6},0).wait(1).to({x:131.6},0).wait(1).to({x:124.6,y:355.9},0).wait(1).to({x:117.6},0).wait(1).to({x:110.7},0).wait(1).to({x:103.7,y:355.8},0).wait(1).to({x:96.7},0).wait(1).to({x:89.7},0).wait(1).to({x:82.8,y:355.7},0).wait(1).to({x:75.8},0).wait(1).to({x:68.8},0).wait(1).to({x:61.8,y:355.6},0).wait(1).to({x:54.9},0).wait(1).to({x:47.9},0).wait(1).to({x:40.9,y:355.5},0).wait(1).to({x:33.9},0).wait(1).to({x:27},0).wait(1).to({x:20,y:355.4},0).wait(1).to({x:13},0).wait(1).to({x:6},0).wait(1).to({x:-1,y:355.3},0).wait(1).to({x:-7.9},0).wait(1).to({x:-14.9},0).wait(1).to({x:-21.9,y:355.2},0).wait(1).to({x:-28.9},0).wait(1).to({x:-35.8},0).wait(1).to({x:-42.8,y:355.1},0).wait(1).to({x:-49.8},0).wait(1).to({x:-56.8},0).wait(1).to({x:-63.7},0).wait(1).to({x:-70.7,y:355},0).wait(1).to({x:-77.7},0).wait(1).to({x:-84.7},0).wait(1).to({x:-91.6,y:354.9},0).wait(1).to({x:-98.6},0).wait(1).to({x:-105.6},0).wait(1).to({x:-112.6},0).wait(1).to({x:-119.5,y:354.8},0).wait(1).to({x:-126.5},0).wait(1).to({x:-133.5},0).wait(1).to({x:-140.5},0).wait(1).to({x:-147.4,y:354.7},0).wait(1).to({x:-154.4},0).wait(1).to({x:-161.4},0).wait(1).to({x:-168.4,y:354.6},0).wait(1).to({x:-175.4},0).wait(1).to({x:-182.3},0).wait(1).to({x:-189.3},0).wait(1).to({x:-196.3},0).wait(1).to({x:-203.3,y:354.5},0).wait(1).to({x:-210.2},0).wait(1).to({x:-217.2},0).wait(1).to({x:-224.2},0).wait(1).to({x:-231.2,y:354.4},0).wait(1).to({x:-238.1},0).wait(1).to({x:-245.1},0).wait(1).to({x:-252.1},0).wait(1).to({x:-259.1,y:354.3},0).wait(1).to({x:-266},0).wait(1).to({x:-273},0).wait(1).to({x:-280},0).wait(1).to({x:-287},0).wait(1).to({x:-293.9,y:354.2},0).wait(1).to({x:-300.9},0).wait(1).to({x:-307.9},0).wait(1).to({x:-314.9},0).wait(1).to({x:-321.8},0).wait(1).to({x:-328.8,y:354.1},0).wait(1).to({x:-335.8},0).wait(1).to({x:-342.8},0).wait(1).to({x:-349.7},0).wait(1).to({x:-356.7},0).wait(1).to({x:-363.7},0).wait(1).to({x:-370.7,y:354},0).wait(1).to({x:-377.7},0).wait(1).to({x:-384.6},0).wait(1).to({x:-391.6},0).wait(1).to({x:-398.6},0).wait(1).to({x:-405.6},0).wait(1).to({x:-412.5,y:353.9},0).wait(1).to({x:-419.5},0).wait(1).to({x:-426.5},0).wait(1).to({x:-433.5},0).wait(1).to({x:-440.4},0).wait(1).to({x:-447.4},0).wait(1).to({x:-454.4,y:353.8},0).wait(1).to({x:-461.4},0).wait(1).to({x:-468.3},0).wait(1).to({x:-475.3},0).wait(1).to({x:-482.3},0).wait(1).to({x:-489.3},0).wait(1).to({x:-496.2},0).wait(1).to({x:-503.2},0).wait(1).to({x:-510.2,y:353.7},0).wait(1).to({x:-517.2},0).wait(1).to({x:-524.1},0).wait(1).to({x:-531.1},0).wait(1).to({x:-538.1},0).wait(1).to({x:-545.1},0).wait(1).to({x:-552.1},0).wait(1).to({x:-559},0).wait(1).to({x:-566},0).wait(1).to({x:-573,y:353.6},0).wait(1).to({x:-580},0).wait(1).to({x:-586.9},0).wait(1).to({x:-593.9},0).wait(1).to({x:-600.9},0).wait(1).to({x:-607.9},0).wait(1).to({x:-614.8},0).wait(1).to({x:-621.8},0).wait(1).to({x:-628.8},0).wait(1).to({x:-635.8},0).wait(1).to({x:-642.7},0).wait(1).to({x:-649.7},0).wait(1).to({x:-656.7},0).wait(1).to({x:-663.7,y:353.5},0).wait(1).to({x:-670.6},0).wait(1).to({x:-677.6},0).wait(1).to({x:-684.6},0).wait(1).to({x:-691.6},0).wait(1).to({x:-698.6},0).wait(1).to({x:-705.5},0).wait(1).to({x:-712.5},0).wait(1).to({x:-719.5},0).wait(1).to({x:-726.5},0).wait(1).to({x:-733.4},0).wait(1).to({x:-740.4},0).wait(1).to({x:-747.4},0).wait(1).to({x:-754.4},0).wait(1).to({x:-761.3},0).wait(1).to({x:-768.3},0).wait(1).to({x:-775.3},0).wait(1).to({x:-782.3},0).wait(1).to({x:-789.2},0).wait(1).to({x:-796.2},0).wait(1).to({x:-803.2},0).wait(1).to({x:-810.2},0).wait(1).to({x:-817.1},0).wait(1).to({x:-824.1},0).wait(1).to({x:-831.1},0).wait(1).to({x:-838.1},0).wait(1).to({x:-845},0).wait(1).to({x:-852},0).wait(1).to({x:-859},0).wait(1).to({x:-866},0).wait(1).to({x:-872.9},0).wait(1).to({x:-879.9},0).wait(1).to({x:-886.9},0).wait(1).to({x:-893.9},0).wait(1).to({x:-900.9},0).wait(1).to({x:-907.8},0).wait(1).to({x:-914.8},0).wait(1).to({x:-921.8},0).wait(1).to({x:-928.8},0).wait(1).to({x:-935.7},0).wait(1).to({x:-942.7},0).wait(1).to({x:-949.7},0).wait(1).to({x:-956.7},0).wait(1).to({x:-963.6},0).wait(1).to({x:-970.6},0).wait(1).to({x:-977.6},0).wait(1).to({x:-984.6,y:353.6},0).wait(1).to({x:-991.5},0).wait(1).to({x:-998.5},0).wait(1).to({x:-1005.5},0).wait(1).to({x:-1012.5},0).wait(1).to({x:-1019.4},0).wait(1).to({x:-1026.4},0).wait(1).to({x:-1033.4},0).wait(1).to({x:-1040.4},0).wait(1).to({x:-1047.3},0).wait(1).to({x:-1054.3},0).wait(1).to({x:-1061.3},0).wait(1).to({x:-1068.3,y:353.7},0).wait(1).to({x:-1075.3},0).wait(1).to({x:-1082.2},0).wait(1).to({x:-1089.2},0).wait(1).to({x:-1096.2},0).wait(1).to({x:-1103.2},0).wait(1).to({x:-1110.1},0).wait(1).to({x:-1117.1},0).wait(1).to({x:-1124.1},0).wait(1).to({x:-1131.1},0).wait(1).to({x:-1138,y:353.8},0).wait(1).to({x:-1145},0).wait(1).to({x:-1152},0).wait(1).to({x:-1159},0).wait(1).to({x:-1165.9},0).wait(1).to({x:-1172.9},0).wait(1).to({x:-1179.9},0).wait(1).to({x:-1186.9,y:353.9},0).wait(1).to({x:-1193.8},0).wait(1).to({x:-1200.8},0).wait(1).to({x:-1207.8},0).wait(1).to({x:-1214.8},0).wait(1).to({x:-1221.8},0).wait(1).to({x:-1228.7},0).wait(1).to({x:-1235.7,y:354},0).wait(1).to({x:-1242.7},0).wait(1).to({x:-1249.6},0).wait(1).to({x:-1256.6},0).wait(1).to({x:-1263.6},0).wait(1).to({x:-1270.6},0).wait(1).to({x:-1277.6,y:354.1},0).wait(1).to({x:-1284.5},0).wait(1).to({x:-1291.5},0).wait(1).to({x:-1298.5},0).wait(1).to({x:-1305.5},0).wait(1).to({x:-1312.4},0).wait(1).to({x:-1319.4,y:354.2},0).wait(1).to({x:-1326.4},0).wait(1).to({x:-1333.4},0).wait(1).to({x:-1340.3},0).wait(1).to({x:-1347.3},0).wait(1).to({x:-1354.3,y:354.3},0).wait(1).to({x:-1361.3},0).wait(1).to({x:-1368.2},0).wait(1).to({x:-1375.2},0).wait(1).to({x:-1382.2},0).wait(1).to({x:-1389.2,y:354.4},0).wait(1).to({x:-1396.1},0).wait(1).to({x:-1403.1},0).wait(1).to({x:-1410.1},0).wait(1).to({x:-1417.1,y:354.5},0).wait(1).to({x:-1424},0).wait(1).to({x:-1431},0).wait(1).to({x:-1438},0).wait(1).to({x:-1445,y:354.6},0).wait(1).to({x:-1452},0).wait(1).to({x:-1458.9},0).wait(1).to({x:-1465.9},0).wait(1).to({x:-1472.9,y:354.7},0).wait(1).to({x:-1479.9},0).wait(1).to({x:-1486.8},0).wait(1).to({x:-1493.8},0).wait(1).to({x:-1500.8,y:354.8},0).wait(1).to({x:-1507.8},0).wait(1).to({x:-1514.7},0).wait(1).to({x:-1521.7},0).wait(1).to({x:-1528.7,y:354.9},0).wait(1).to({x:-1535.7},0).wait(1).to({x:-1542.6},0).wait(1).to({x:-1549.6},0).wait(1).to({x:-1556.6,y:355},0).wait(1).to({x:-1563.6},0).wait(1).to({x:-1570.5},0).wait(1).to({x:-1577.5,y:355.1},0).wait(1).to({x:-1584.5},0).wait(1).to({x:-1591.5},0).wait(1).to({x:-1598.5},0).wait(1).to({x:-1605.4,y:355.2},0).wait(1).to({x:-1612.4},0).wait(1).to({x:-1619.4},0).wait(1).to({x:-1626.4,y:355.3},0).wait(1).to({x:-1633.3},0).wait(1).to({x:-1640.3},0).wait(1).to({x:-1647.3,y:355.4},0).wait(1).to({x:-1654.3},0).wait(1).to({x:-1661.2},0).wait(1).to({x:-1668.2,y:355.5},0).wait(1).to({x:-1675.2},0).wait(1).to({x:-1682.2},0).wait(1).to({x:-1689.1,y:355.6},0).wait(1).to({x:-1696.1},0).wait(1).to({x:-1703.1},0).wait(1).to({x:-1710.1,y:355.7},0).wait(1).to({x:-1717},0).wait(1).to({x:-1724},0).wait(1).to({x:-1731,y:355.8},0).wait(1).to({x:-1738},0).wait(1).to({x:-1744.9},0).wait(1).to({x:-1751.9,y:355.9},0).wait(1).to({x:-1758.9},0).to({_off:true},1).wait(49));

	// מחשב
	this.instance_65 = new lib.מקלדתועכבר();
	this.instance_65.parent = this;
	this.instance_65.setTransform(288.6,240.6,0.399,0.424,0,0,0,166.7,83.4);

	this.instance_66 = new lib.רמקול();
	this.instance_66.parent = this;
	this.instance_66.setTransform(189.5,188.1,0.529,0.698,0,0,0,21.2,52.9);

	this.instance_67 = new lib.רמקול();
	this.instance_67.parent = this;
	this.instance_67.setTransform(364.2,188.1,0.529,0.698,0,0,0,21.2,52.9);

	this.instance_68 = new lib.מחשב1();
	this.instance_68.parent = this;
	this.instance_68.setTransform(277.2,189.8,1.523,1,0,0,0,44.1,51.9);

	this.instance_69 = new lib.מחשבנייד();
	this.instance_69.parent = this;
	this.instance_69.setTransform(293.1,205,0.636,0.48,0,0,0,177.7,195.6);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65}]}).to({state:[{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65}]},39).to({state:[{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65}]},67).to({state:[{t:this.instance_68},{t:this.instance_67},{t:this.instance_66},{t:this.instance_65}]},8).to({state:[{t:this.instance_69}]},214).wait(407));

	// סביבה משרדית
	this.instance_70 = new lib.שולחן();
	this.instance_70.parent = this;
	this.instance_70.setTransform(273.7,301.9,0.948,0.845,0,0,0,275,113.8);

	this.shape_24 = new cjs.Shape();
	this.shape_24.graphics.f().s("#000000").ss(1,1,1).p("AKEQWIAAEgIAAElILGAAIM4AAIJiAAIAAFcIpiAAIAAAIAKEfHIAAgSIAAgOIAAhJIAAgMIAAj3AVKQWIAAEgIAAElAVKe3IAAgMIAAgUIAAg/IAAj9AKELhILGAAIAAE1IM4AAIAAEgIJKAAAKEU2ILGAAIM4AAIAAElAKEQWILGAAAKELhIAAE1EgqdALhMAAAgrQMBVzAAAMAAAArQIgKAAEAiCALhIJKAAEAiCAQWIJKAAIAAk1EAiCALhIAAE1AVKLhIM4AAEgqdALhIJSAAIJAAAIAAE1IAAEgIAAElIAADrIAABTIAABXEghLAQWIAAEgIpSAAIAAkgIAAk1EgrjAZbIBGAAIA9AAIIVAAIJAAAILlAAIAAD4IAAAKIAABKEghLAQWIpSAAEghLAU2IAAElIAAEoIAAAUEghLAQWIJAAAILlAAIAAEgIAAElILlAAILFAAEghLALhIAAE1EghLAU2IJAAAILlAAILlAAIAAElAspdTIAAAAAhBQWIAAEgILFAAAhBfHIAAgQIAAgDIAAhyIAAgDIAAjkAsmLhILlAAIAAE1ILFAAAsmLhIAAE1ILlAAA4LLhILlAAAgufHIgTAAIgeAAAjkfHIgjAAAppfHIhOAAAk6fHIgpAAAsJfHIgdAAIAAgTIAAgMEgg8AefIgPAAIAAgIIAAAAAfpe3IgSAAIgEAAAVce3IgSAAIAAAQIgiAAAake3Ij0AAAP/fHIg8AAAMLfHIgGAAAKafHIgWAAIguAAEAiCAe3IhhAAAhBLhILFAAEAiCAe3IAAlcA4LdGIgEBP");
	this.shape_24.setTransform(272.6,204);

	this.shape_25 = new cjs.Shape();
	this.shape_25.graphics.f("#FFFFC8").s().p("EAqvAVpIpJAAIs4AAIrGAAIrFAAIrlAAIrlAAIpAAAIpSAAMAAAgrQMBVzAAAMAAAArQg");
	this.shape_25.setTransform(275.4,139.3);

	this.shape_26 = new cjs.Shape();
	this.shape_26.graphics.f("#FFCCCC").s().p("A8lHDQgSgFAFgUIAEgNIgPAAIAAgIIAAgUIAAkpIJAAAIAADrIgFAEQAFALgEANQAEANgHARQABAIgCAJIAEAEQgFAIgHAIIgFAFIgJAMQgNAPgOACQgtAcg9AHQg5AGg3AAQiOAAiHgqgA89GBQAAACAJADIgFgJQgEACAAACgAeyG1Ij0AAIgKANQgdAjggghQgIgIgFgHIgSAAIAAgNIAKAAQgHgMABgLIgCgDIACgOQABgJgCgGQADgMgDgKIABgCIgCAAIgCgEIAAj9IM4AAIAAFdIhhAAQgaAbgegbIgTAAIASgCIgHgHIgOAJQgsAbg0ANQgtAMglAAQhQAAgtg0gAbGGlIALAAIAFAAIgPgDIgBADgAecGgIAGgBIAAgBIgGACgAlbHFIhOAAQgRAFgOABQgYAUgbgaIgdAAIAAgUIAMAAQgJgNgBgMIACgNIABgEIgBgEQgDgKACgJQABgFADgFQgGgMABgKIgCAAIAAj4ILkAAIAADlIABABIgBABIAAgCIAAACIgDAFQgLAQgCAUIgBAMQgBAOACAOIABADQADANAHALIgHAKIAMAAIAAAQIgeAAQgWAOgkACQgoABgjgRIgjAAIgLADQgVAEgSgHIgpAAQhBAfhCAAQhBAAhCgfgADME/gAZYjLIAAkhIM4AAIAAEhgAoYjLIAAkhILkAAIAAEhgEgmPgDLIAAkhIJSAAIAAEhg");
	this.shape_26.setTransform(245.6,357.8);

	this.shape_27 = new cjs.Shape();
	this.shape_27.graphics.f("#8DCDC1").s().p("A1EKOQhKgXhDgjIAAAAQgcAhgggfQgdgdACgXIgGgDIAAhTIgEBPIAAAAIgEgEQADgJgBgIQAHgRgEgNQADgNgFgMIAFgDIAAjrILlAAIAAD4IgDAAIAAAAIAAABIADAJQADAKAAAMQgCAJADAKIAAAIIgBANIgDAMIAAhKIAABKIAAABQgQA4hIgNQgWgEgTgPQg0gphIASQg5APg9gGQAEAGgBAJQgFBShIAAQgaAAgkgLgAPrJSIgPgFIg7AAIgRAGQhcAkhMgqIgFAAQg2Aeg1geIgXAAIAAgSIAFAAIgBgEIgEgKIAAhJIAABJIgFgVQAEgPAAgSQAAgHgCgFIADgHQAEgGAEgGIgIAAIAAj3ILGAAIAAD9IAAA/IAAg/IACAEIABACQADAKgCALQACAHgBAIIgDAOIgCAHQgDALgFAJIAIAAIAAAMIAAAQIgiAAQgZAUgpAGQgjAGgiAAQhKAAhJgbgEAhgAI9IAAlcIJhAAIAAFcgA4uIfIgEgEIAEhPIAABTIAAAAgAtJDhIAAkkILmAAIAAEkgEghuADhIAAkkIJAAAIAAEkgEgrAgFjIAAk1IJSAAIAAE1g");
	this.shape_27.setTransform(276.1,344.2);

	this.shape_28 = new cjs.Shape();
	this.shape_28.graphics.f("#FFFF33").s().p("AArJpQg8AWgngfIgSAAIAAgQIACAAIgCgDIAAhzIAABzIgFgHQgHgLgDgNIgBgDQgCgNABgOIABgNQACgTAKgRIAEgFIABgBIgBgBIAAjkILEAAIAAD3IgygBIAiAJQAJADAEAIQACAFAAAHQAAASgEAPQgFAVgMAOIAWAAIAAASIgtAAQgbAOgqgBIhVgCQhjgEhiAWQgmAJgjAAQhBAAg5gdgEgjXAJ1QhhgYhlAQQiCAUh0gvQgggNgBgjQgBhagJhaQgDglAAgmQAAgjAagMQAKgFAPgBQAVAAAQAGIg+AAIA+AAIIVAAIAAEoIAAAUIgBAAQgDBMhKAAQgXAAgegHgAVAD0IAAkkIM5AAIAAEkgAhKgwIAAkgILEAAIAAEggA4UgwIAAkgILkAAIAAEggEAh5gFQIAAk1IJJAAIAAE1g");
	this.shape_28.setTransform(273.6,342.3);

	this.shape_29 = new cjs.Shape();
	this.shape_29.graphics.f().s("#000000").ss(1,1,1).p("AKEQWIAAEgIAAElILGAAIM4AAIJiAAIAAFcIpiAAIAAAIAKEfHIAAgSIAAgOIAAhJIAAgMIAAj3AVKQWIAAEgIAAElAVKe3IAAgMIAAgUIAAg/IAAj9AKELhIAAE1ILGAAIM4AAIAAEgIAAElAKEU2ILGAAIM4AAIJKAAAVKLhIAAE1AKELhILGAAIM4AAIJKAAEgqdALhMAAAgrQMBVzAAAMAAAArQIgKAAEAiCAQWIJKAAIAAk1EAiCALhIAAE1EgqdALhIJSAAIAAE1IJAAAIAAEgIAAElIAADrIAABTIAABXEghLAQWIAAEgIpSAAIAAkgIAAk1EgrjAZbIBGAAIA9AAIIVAAIJAAAILlAAIAAD4IAAAKIAABKEghLAQWIpSAAEghLAU2IAAElIAAEoIAAAUIAAAAEghLAU2IJAAAILlAAIAAElILlAAILFAAA4LLhIAAE1ILlAAIAAEgILlAAIAAElEghLALhIJAAAILlAAIAAE1ILlAAIAAEgILFAAAspdTIAAAAAhBfHIAAgQIAAgDIAAhyIAAgDIAAjkAhBLhIAAE1ILFAAAsmLhILlAAILFAAAgufHIgTAAIgeAAAjkfHIgjAAAk6fHIgpAAAppfHIhOAAAsJfHIgdAAIAAgTIAAgMEgg8AefIgPAAIAAgIAfpe3IgSAAIgEAAAVce3IgSAAIAAAQIgiAAAake3Ij0AAAP/fHIg8AAAMLfHIgGAAAKafHIgWAAIguAAEAiCAe3IhhAAA4LdGIgEBPEAiCAe3IAAlc");
	this.shape_29.setTransform(272.6,204);

	this.shape_30 = new cjs.Shape();
	this.shape_30.graphics.f("#FFCCCC").s().p("A8lHDQgSgFAFgUIAEgNIgPAAIAAgIIAAgUIAAkpIJAAAIAADrIgFAEQAFALgEANQAEANgHARQABAIgCAJIAEAEQgFAIgHAIIgFAFIgJAMQgNAPgOACQgtAcg9AHQg5AGg3AAQiOAAiHgqgA89GBQAAACAJADIgFgJQgEACAAACgAeyG1Ij0AAIgKANQgdAjggghQgIgIgFgHIgSAAIAAgNIAKAAQgHgMABgLIgCgDIACgOQABgJgCgGQADgMgDgKIABgCIgCAAIgCgEIAAj9IM4AAIAAFdIhhAAQgaAbgegbIgTAAIASgCIgHgHIgOAJQgsAbg0ANQgtAMglAAQhQAAgtg0gAbGGlIALAAIAFAAIgPgDIgBADgAecGgIAGgBIAAgBIgGACgAlbHFIhOAAQgRAFgOABQgYAUgbgaIgdAAIAAgUIAMAAQgJgNgBgMIACgNIABgEIgBgEQgDgKACgJQABgFADgFQgGgMABgKIgCAAIAAj4ILkAAIAADlIAAACIAAgCIABABIgBABIgDAFQgLAQgCAUIgBAMQgBAOACAOIABADQADANAHALIgHAKIAMAAIAAAQIgeAAQgWAOgkACQgoABgjgRIgjAAIgLADQgVAEgSgHIgpAAQhBAfhCAAQhBAAhCgfgAZYjLIAAkhIM4AAIAAEhgAoYjLIAAkhILkAAIAAEhgEgmPgDLIAAkhIJSAAIAAEhg");
	this.shape_30.setTransform(245.6,357.8);

	this.shape_31 = new cjs.Shape();
	this.shape_31.graphics.f("#8DCDC1").s().p("A1EKOQhKgXhDgjIAAAAQgcAhgggfQgdgdACgXIgGgDIAAhTIgEBPIAAAAIgEgEQADgJgBgIQAHgRgEgNQADgNgFgMIAFgDIAAjrIpAAAIAAkkIJAAAIAAEkILlAAIAAD4IgDAAIAAAAIAAABIADAJQADAKAAAMQgCAJADAKIAAAIIgBANIgDAMIAAhKIAABKIAAABQgQA4hIgNQgWgEgTgPQg0gphIASQg5APg9gGQAEAGgBAJQgFBShIAAQgaAAgkgLgAPrJSIgPgFIg7AAIgRAGQhcAkhMgqIgFAAQg2Aeg1geIgXAAIAAgSIAFAAIgBgEIgEgKIAAhJIAABJIgFgVQAEgPAAgSQAAgHgCgFIADgHQAEgGAEgGIgIAAIAAj3ILGAAIAAD9IACAEIABACQADAKgCALQACAHgBAIIgDAOIgCAHIAAg/IAAA/QgDALgFAJIAIAAIAAAMIAAAQIgiAAQgZAUgpAGQgjAGgiAAQhKAAhJgbgEAhgAI9IAAlcIJhAAIAAFcgA4uIfIgEgEIAEhPIAABTIAAAAgAUnIdgAtJDhIAAkkILmAAIAAEkgAtJDhgEgrAgFjIAAk1IJSAAIAAE1g");
	this.shape_31.setTransform(276.1,344.2);

	this.shape_32 = new cjs.Shape();
	this.shape_32.graphics.f("#FFFF33").s().p("AArJpQg8AWgngfIgSAAIAAgQIACAAIgCgDIAAhzIAABzIgFgHQgHgLgDgNIgBgDQgCgNABgOIABgNQACgTAKgRIAEgFIABgBIgBgBIAAjkILEAAIAAD3IgygBIAiAJQAJADAEAIQACAFAAAHQAAASgEAPQgFAVgMAOIAWAAIAAASIgtAAQgbAOgqgBIhVgCQhjgEhiAWQgmAJgjAAQhBAAg5gdgEgjXAJ1QhhgYhlAQQiCAUh0gvQgggNgBgjQgBhagJhaQgDglAAgmQAAgjAagMIA+AAIIVAAIAAEoIAAAUIgBAAQgDBMhKAAQgXAAgegHgAVAD0IAAkkIM5AAIAAEkgEgqnAD0QAKgFAPgBQAVAAAQAGgEgqnAD0gAhKgwIAAkgILEAAIAAEggA4UgwIAAkgILkAAIAAEggEAh5gFQIAAk1IJJAAIAAE1g");
	this.shape_32.setTransform(273.6,342.3);

	this.shape_33 = new cjs.Shape();
	this.shape_33.graphics.f().s("#000000").ss(1,1,1).p("AKEQWIAAEgIAAElILGAAIM4AAIJiAAIAAFcIpiAAIAAAIAKEfHIAAgSIAAgOIAAhJIAAgMIAAj3AVKQWIAAEgIAAElAVKe3IAAgMIAAgUIAAg/IAAj9AKELhILGAAIAAE1IM4AAIAAEgIJKAAAKEU2ILGAAIM4AAIAAElAKEQWILGAAAKELhIAAE1EgqdALhMAAAgrQMBVzAAAMAAAArQIgKAAEAiCALhIJKAAEAiCAQWIJKAAIAAk1EAiCALhIAAE1AVKLhIM4AAEgqdALhIJSAAIJAAAIAAE1IAAEgIAAElIAADrIAABTIAABXEghLAQWIAAEgIpSAAIAAkgIAAk1EgrjAZbIBGAAIA9AAIIVAAIJAAAILlAAIAAD4IAAAKIAABKEghLAU2IAAElIAAEoIAAAUEghLAQWIpSAAEghLAQWIJAAAILlAAIAAEgIAAElILlAAILFAAEghLALhIAAE1EghLAU2IJAAAILlAAILlAAIAAElAspdTIAAAAAhBQWIAAEgILFAAAhBfHIAAgQIAAgDIAAhyIAAgDIAAjkAsmLhILlAAIAAE1ILFAAAsmLhIAAE1ILlAAA4LLhILlAAAgufHIgTAAIgeAAAjkfHIgjAAAppfHIhOAAAk6fHIgpAAAsJfHIgdAAIAAgTIAAgMEgg8AefIgPAAIAAgIIAAAAAfpe3IgSAAIgEAAAVce3IgSAAIAAAQIgiAAAake3Ij0AAAP/fHIg8AAAMLfHIgGAAAKafHIgWAAIguAAEAiCAe3IhhAAAhBLhILFAAEAiCAe3IAAlcA4LdGIgEBP");
	this.shape_33.setTransform(272.6,204);

	this.shape_34 = new cjs.Shape();
	this.shape_34.graphics.f("#8DCDC1").s().p("A1EKOQhKgXhDgjIAAAAQgcAhgggfQgdgdACgXIgGgDIAAhTIgEBPIAAAAIgEgEQADgJgBgIQAHgRgEgNQADgNgFgMIAFgDIAAjrILlAAIAAD4IgDAAIAAAAIAAABIADAJQADAKAAAMQgCAJADAKIAAAIIgBANIgDAMIAAhKIAABKIAAABQgQA4hIgNQgWgEgTgPQg0gphIASQg5APg9gGQAEAGgBAJQgFBShIAAQgaAAgkgLgAPrJSIgPgFIg7AAIgRAGQhcAkhMgqIgFAAQg2Aeg1geIgXAAIAAgSIAFAAIgBgEIgEgKIAAhJIAABJIgFgVQAEgPAAgSQAAgHgCgFIADgHQAEgGAEgGIgIAAIAAj3ILGAAIAAD9IACAEIABACQADAKgCALQACAHgBAIIgDAOIgCAHIAAg/IAAA/QgDALgFAJIAIAAIAAAMIAAAQIgiAAQgZAUgpAGQgjAGgiAAQhKAAhJgbgEAhgAI9IAAlcIJhAAIAAFcgA4uIfIgEgEIAEhPIAABTIAAAAgAUnIdgAtJDhIAAkkILmAAIAAEkgEghuADhIAAkkIJAAAIAAEkgEgrAgFjIAAk1IJSAAIAAE1g");
	this.shape_34.setTransform(276.1,344.2);

	this.timeline.addTween(cjs.Tween.get({}).to({state:[{t:this.shape_28},{t:this.shape_27},{t:this.shape_26},{t:this.shape_25},{t:this.shape_24},{t:this.instance_70}]}).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_25},{t:this.shape_29},{t:this.instance_70}]},39).to({state:[{t:this.shape_32},{t:this.shape_31},{t:this.shape_30},{t:this.shape_25},{t:this.shape_29},{t:this.instance_70}]},67).to({state:[{t:this.shape_32},{t:this.shape_34},{t:this.shape_30},{t:this.shape_25},{t:this.shape_33},{t:this.instance_70}]},8).wait(621));

}).prototype = p = new cjs.MovieClip();
p.nominalBounds = new cjs.Rectangle(267.9,199.8,559.5,410.9);
// library properties:
lib.properties = {
	width: 550,
	height: 400,
	fps: 24,
	color: "#FFFFFF",
	opacity: 1.00,
	manifest: [],
	preloads: []
};




})(lib = lib||{}, images = images||{}, createjs = createjs||{}, ss = ss||{}, AdobeAn = AdobeAn||{});
var lib, images, createjs, ss, AdobeAn;
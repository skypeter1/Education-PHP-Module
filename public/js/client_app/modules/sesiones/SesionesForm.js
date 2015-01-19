var SesionesForm = BaseForm.extend({

	template:"public/templates/sesiones_form.html",

	events:_.extend({
		"click a.validate_sesion": "validate_sesion",
		"click a.invalidate_sesion": "invalidate_sesion",
		"click .select_curso": "select_curso_event",
                "click .select_profesor": "select_profesor_event",
                "click .btn_go": "form_go"
	}, BaseForm.prototype.events),
   
	initialize: function(options){
		BaseForm.prototype.initialize.call(this, options);
		this.resubscribe_template_event();
	},

	form_go: function(event){
 
            var values = this.get_values(),
              date_ini = new Date(),
              date_end = new Date(),
              max_hours = 1,
              total_hours_session = 0,
              total_hours = 0; 
            
            if ( values.curso != null && values.hora_inicio.length && values.hora_fin.length ) {

              var h_ini = String(values.hora_inicio).split(':'),
               h_end = String(values.hora_fin).split(':');
 
              max_hours = parseInt(values.curso.horas);
                      
              date_ini.setHours(h_ini[0]);
              date_ini.setMinutes(h_ini[1]);
              date_ini.setSeconds(0);
              date_ini.setMilliseconds(0);

              date_end.setHours(h_end[0]);
              date_end.setMinutes(h_end[1]);
              date_end.setSeconds(0);
              date_end.setMilliseconds(0);

              var diff_ms = (date_end - date_ini),
                diff_s = Math.round(diff_ms / 1000),
                diff_m = Math.round(diff_s / 60),
                diff_h = Math.round(diff_m / 60);
  
              total_hours = parseInt(diff_h);  
            }
                 
            var hours_avail = max_hours - total_hours_session,
                hours_to_validate, control_horas=0;
            
            if ($("input[name='id']").val()){//is edit  

                var date_ini = new Date(),
                  date_end = new Date();

                var h_ini = String(values.curso.hora_inicio_original_of_sesion).split(':'),
                  h_end = String(values.curso.hora_fin_original_of_sesion).split(':');

                date_ini.setHours(h_ini[0]);
                date_ini.setMinutes(h_ini[1]);
                date_ini.setSeconds(0);
                date_ini.setMilliseconds(0);
        
                date_end.setHours(h_end[0]);
                date_end.setMinutes(h_end[1]);
                date_end.setSeconds(0);
                date_end.setMilliseconds(0);


                var diff_ms = (date_end - date_ini),
                  diff_s = Math.round(diff_ms / 1000),
                  diff_m = Math.round(diff_s / 60),
                  diff_h = Math.round(diff_m / 60);

                var total_horas_originales_sesion = parseInt(diff_h);
                
                if (total_hours > values.curso.horas ){
                    control_horas=0;
                     
                }else{
                
                    if (values.curso.hours_avail>0){//Si existen horas disnponibles
                        if (total_hours>0 && total_hours <= values.curso.hours_avail){
                            hours_to_validate = values.curso.hours_avail;   
                            control_horas=1
                        }else{
                            hours_to_validate = total_hours;
                            control_horas=1;
                        }   
                    }else{
                        control_horas=1;
                        hours_to_validate = total_horas_originales_sesion;         
                    }
                }
                 
            }else{//is new
                total_hours <= values.curso.hours_avail ? control_horas=1 : control_horas=0;   
                hours_to_validate = values.curso.hours_avail;  
            }         
      
            if ( total_hours <= hours_to_validate && hours_to_validate > 0 &&  control_horas==1 ) {       
                $(this.el).find('.btn_go').prop('disabled', false);
                $(this.el).find('#alert_danger').attr('class', 'none');
                this.submit();
            }     
            else {    
                $(this.el).find('#alert_incorrect_hours').attr('class', 'none');
                $(this.el).find('#alert_danger').attr('class', 'none'); 
                if (total_hours <= 0){   
                    $(this.el).find('#alert_incorrect_hours').attr('class', 'alert alert-danger');
                }else{
                    $(this.el).find('#alert_danger').attr('class', 'alert alert-danger');
                }
            }
	},
 
        select_profesor_event: function(event){
          event.preventDefault();
          this.select_profesor();
        },

	select_profesor: function() 
	{
		this.trigger("select:profesor");
	}, 

	select_curso_event: function(event){
		event.preventDefault();
		this.select_curso();
	},

	select_curso: function(){
		this.trigger("select:curso");
	},
  
	validate_sesion: function(event)
	{
		event.preventDefault();
		$(this.el).find("input[name='estado']").val(1);
                this.form_go();          
	},

	invalidate_sesion: function(event)
	{  
		event.preventDefault();
		$(this.el).find("input[name='estado']").val(0);
                this.form_go();                            
	},

	render_template: function(){
    var tarifas = [];
    tarifas.push({label:"Tarifa normal", value:"price"});
    tarifas.push({label:"Tarifa fin de semana", value:"weekend_price"});
    tarifas.push({label:"Tarifa fuera de academia", value:"out_academy_price"});
  
		this.template_values.is_admin = auth.check(["Administrador", "Director"]);
    this.template_values.tarifas = tarifas;  

		BaseForm.prototype.render_template.call(this);

		if($(this.el).find("#fecha_field").length === 0) return;

		var calendar_object = $(this.el).find("#fecha_field").data("dateinput");
		calendar_object.hide();
	},

	set_profesores: function(profesores){
		var transformed = [];

		$.each(profesores, function(index, profesor){
			transformed.push({label:profesor.name, value:profesor.id});
		});

		this.template_values.profesores = transformed;
	}
	
});

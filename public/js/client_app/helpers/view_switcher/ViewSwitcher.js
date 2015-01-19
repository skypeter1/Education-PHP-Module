(function(){
    
    var root = this;
    var ViewSwitcher;
   
    ViewSwitcher = root.ViewSwitcher = {};
    ViewSwitcher.views = {};
    
    var last_view_rendered;
    var last_container_rendered;

    ViewSwitcher.load = function(view, container_id)
    {
        var previous_view = get_previous_view(container_id);
 
        if(last_view_rendered == view && last_container_rendered == container_id) return;
        if(previous_view) previous_view.detach();
 
        attach_view(view, container_id);
        last_view_rendered = view;
        last_container_rendered = container_id;
    };

    function attach_view(view, container_id)
    {
        view.atach($('#'+container_id));
        view.delegate_events();
        ViewSwitcher.views[container_id] = view;
    }

    function get_previous_view(container_id)
    {
        if(ViewSwitcher.views[container_id] !== undefined) return ViewSwitcher.views[container_id];
        return false;
    }

}.call(this));

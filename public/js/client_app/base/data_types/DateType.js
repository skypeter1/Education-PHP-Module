var DateType = {

    output: function(value)
    {
        return new XDate(value).getTimestamp();
    },

    input: function(value)
    {
        return new XDate(value*1000).toString("dd/MM/yyyy");
    }

};


//here we are going to declare our custom matcher 
var customMatchers = {
    toBeAReasonableExpense: function(){
        return{
            compare: function(actual){
                var pass = actual.isReasonable();
                var judgement = pass ? 'unreasonable' : 'reasonable';

                return {
                    pass: pass,
                    message: 'Expected expense to be an ' + judgement + ' expense.'
                } ;
            }
        };
    }
};
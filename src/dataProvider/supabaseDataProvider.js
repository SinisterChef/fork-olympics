const supabaseDataProvider = (supabase) => ({
    getList: async (resource, { pagination, sort, filter }) => {
        const { data, error } = await supabase
            .from(resource)
            .select('*');
            
        if (error) throw error;
        
        return {
            data: data || [],
            total: data?.length || 0,
        };
    },
    
    getOne: async (resource, { id }) => {
        const { data, error } = await supabase
            .from(resource)
            .select('*')
            .eq('id', id)
            .single();
            
        if (error) throw error;
        
        return {
            data: data || {},
        };
    },
    
    create: async (resource, { data }) => {
        const { data: record, error } = await supabase
            .from(resource)
            .insert(data)
            .select()
            .single();
            
        if (error) throw error;
        
        return {
            data: record,
        };
    },
    
    update: async (resource, { id, data }) => {
        const { data: record, error } = await supabase
            .from(resource)
            .update(data)
            .eq('id', id)
            .select()
            .single();
            
        if (error) throw error;
        
        return {
            data: record,
        };
    },
    
    delete: async (resource, { id }) => {
        const { data, error } = await supabase
            .from(resource)
            .delete()
            .eq('id', id)
            .select()
            .single();
            
        if (error) throw error;
        
        return {
            data: data,
        };
    },
});

export default supabaseDataProvider; 
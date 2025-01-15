BX.ready(function(){
    if(BX.hasClass(document.body, 'task-detail-page')){

        let user_id = BX.message('USER_ID');
        let task = document.getElementsByName('ENTITY_ID');
        let task_id = Number(task[0].value);

        BX.ajax.get('url' + user_id, {}, function(result){
            json = JSON.parse(result);

            if(json.result[0].UF_DEPARTMENT[0] == 375){
                let buttonSinc = BX.create(
                    {
                        tag: 'button',
                        props: {
                            id: 'sincTaskCloudToBox',
                            className: 'ui-btn ui-btn-success btn-synccloudtobox',
                        },
                        events: {
                            click: function(){
                                BX.ajax.post('url' + task_id + '&data[FIELDS_AFTER][USER_ID]=' + user_id);

                                self.innerHTML = 'Наблюдатели добавлены';
					            location.reload();
                            }
                        },
                        html: '<span class="btn-synccloudtobox-loader"></span>Добавить АУ'
                    });

                let parentElement = document.querySelector('.tasks-iframe-header .pagetitle-menu');
                BX.prepend(buttonSinc, parentElement);
            }
        });
    }
});

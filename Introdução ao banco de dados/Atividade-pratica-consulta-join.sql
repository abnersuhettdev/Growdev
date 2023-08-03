select c."name" from items i
join orders o on i.id = o.id 
join customer c  on o.customer_id  = c.id 
join customer_address ca on c.id = ca.customer_id 
where i. "name" like 'Sapatilha em Couro Vazad%' and ca.state = 'MG'

select c."name", c.phone, o.total  from orders o
join customer c on c.id = o.customer_id 
join customer_address ca on ca.customer_id = c.id 
where o.total >= 8000 and ca.state = 'SP'
order by o.total asc;

select c."name", o.discount from orders o 
join customer c on c.id = o.customer_id
order by o.discount desc 
limit 1;


select c."name", ca.state from customer c, customer_address ca
where c.id = ca.customer_id and ca.state = 'MG'
order by c."name" asc;

select c."name", ca.city, ca.state  from customer c,customer_address ca 
where c.id  = ca.customer_id 
and c.gender = 'male' and ca.city like 'São Paulo';

select * from orders o 
where o.total >= 3000
order by o.total  asc;

select * from items i 
where i. "name" like 'Sapatilha em Couro Vazada%';


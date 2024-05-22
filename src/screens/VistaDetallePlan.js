import { useNavigate } from 'react-router-dom';
import '../css/vistaReservas.css';
import logo from '../img/logo.png';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { PlanDetailItem } from '../items/PlanDetailItem';

function ViewPlanDetail(){
    const navigate = useNavigate()
    const username = localStorage.getItem('username')
    const handleLogout = () => {
      navigate('/')
    };


    const [planDetails, setPlanDetails] = useState([]);
    const [num, setNum] = useState(0);
    const token = localStorage.getItem('token');

    useEffect(() => {
        const fetchPlans = async () => {
            try {
                const response = await axios.post(
                    'http://localhost:9092/plan_detail/page_plan_detail',
                    {
                        name: null,
                        daysUpper: null,
                        daysLower: null,
                        nightsUpper: null,
                        nightsLower: null,
                        valueUpper: null,
                        valueLower: null,
                        status: 'Active',
                        size: 10,
                        page: 0,
                    },
                    {
                        headers: {
                            Authorization: `Bearer ${token}`,
                            'Content-Type': 'application/json',
                        },
                    }
                );
                console.log(response)
                setPlanDetails(response.data.content);
            } catch (error) {
                console.log(error);
            }
        };

        const countPlans = async () => {
            try {
                const response = await axios.get('http://localhost:9092/plan_detail/count', {
                    headers: {
                        Authorization: `Bearer ${token}`,
                    },
                });
                setNum(response.data);
            } catch (error) {
                console.log(error);
            }
        };

        countPlans();
        fetchPlans();
    }, [token]);



    return (
        <body id="ii2r">
  <div id="i10d" class="gjs-row">
    <div id="ilv1" class="gjs-cell">
      <div class="gjs-row" id="ibzy2">
        <div class="gjs-cell" id="i526g">
          <img id="ijcaw" src={logo}/>
        </div>
        <div class="gjs-cell" id="ikt9w">
          <div id="iah6o2">Detalles plan
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="ipbh" class="gjs-row">
    <div class="gjs-cell">
      <div id="igqg" class="gjs-row">
        <div id="ikv4" class="gjs-cell">
          <div id="ilxmp" class="gjs-row">
            <div id="i1axm" class="gjs-cell">
              <div id="iwo55" class="gjs-row">
                <div id="i4o0i" class="gjs-cell">
                  <div class="gjs-row" id="i6rii7">
                    <div class="gjs-cell" id="i0ak2w">
                      <input type="text" id="im30us" placeholder="Plan"/>
                    </div>
                    <div class="gjs-cell" id="idgqzc">
                      <button type="button" id="i1aomg"></button>
                    </div>
                    <div class="gjs-cell" id="ivtoj3">
                      <button type="button" id="ivslaq">Crear</button>
                    </div>
                  </div>
                </div>
              </div>
              <div class="gjs-row" id="ilh64g">
                <div class="gjs-cell" id="izbov7">
                <div className="gjs-row1" id="plan-list">
                                              {planDetails.map((plan) => (
                                                  <PlanDetailItem
                                                  props = {plan}
                                                  />
                                              ))}
                                        </div>
                </div>
              </div>
              <div class="gjs-row" id="i39ss1">
                <div class="gjs-cell" id="istsko">
                  <div class="gjs-row" id="iu7isy">
                    <div class="gjs-cell" id="i6hi6h">
                      <button type="button" id="if0ynj">Anterior</button>
                    </div>
                    <div class="gjs-cell" id="ixsnst">
                      <div class="gjs-row" id="i89pat">
                        <div class="gjs-cell" id="ihtxki">
                          <input type="text" id="i46s8v"/>
                        </div>
                        <div class="gjs-cell" id="i9i75f">
                          <button type="button" id="inpm0j"></button>
                        </div>
                      </div>
                    </div>
                    <div class="gjs-cell" id="izlfvz">
                      <button type="button" id="isdsj6">Siguiente</button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</body>
    )
}

export {ViewPlanDetail}
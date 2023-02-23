import { useState, useEffect } from 'react';
import { Box, Grid, MenuItem, SelectChangeEvent } from '@mui/material';
import { dataLink, district, data, years } from 'assets/data';
import { DistrictInterface, PopulationDataInterface } from 'assets/interface';

/** COMPONENTS */
import ListItem from 'components/ListItem';
import BasicSelect from 'components/BasicSelect';
import Chart from 'components/Chart';

/** STYLE */
import * as UsedStyled from 'assets/style';

function App() {
  const [districtId, setDistrictId] = useState<string>(String(data[0].dcode));
  const [start, setStart] = useState<string>(String(years[0]));
  const [end, setEnd] = useState<string>(String(years[9]));
  const [dataChart, setDataChart] = useState<PopulationDataInterface>(data[0]);

  useEffect(() => {
    const dataByDistricId: any = data.find((d: PopulationDataInterface) => Number(d.dcode) === Number(districtId)) || data[0];
    let filterData: PopulationDataInterface = { dcode: dataByDistricId.dcode, name: dataByDistricId.name };
    Object.keys(dataByDistricId).forEach(function (key, index: number) {
      if (String(key) >= String(start) && String(key) <= String(end)) filterData = { ...filterData, [key]: dataByDistricId[key] };
    });
    setDataChart(filterData);
  }, [districtId, start, end]);

  return (
    <div className='App'>
      <UsedStyled.Container className={`py-8 px-5 mx-auto`}>
        <Box className={`mb-9 md:mb-[52px]`}>
          <UsedStyled.Header className={`pb-5 md:pb-6`}>สถิติประชากรกรุงเทพฯ พ.ศ. 2550 - 2559</UsedStyled.Header>
          <UsedStyled.Title className={`pb-3`}>ลักษณะพื้นที่</UsedStyled.Title>
          <UsedStyled.Body>
            กรุงเทพฯ เป็นจังหวัดที่มีประชากรมากที่สุดในประเทศไทย หากรวมประชากรแฝงที่ไม่ปรากฏในทะเบียนและคนที่ เดินทางมาทำงานในตอนกลางวันด้วยแล้ว
            คาดว่าจะสูงถึงเกือบเท่าตัวของประชากรที่ปรากฏในทะเบียน เราจึง เรียกกรุงเทพฯ ว่าเป็น “อภิมหานคร (megacity)” คือมีประชากรตั้งแต่ 10 ล้านคนขึ้นไป
          </UsedStyled.Body>
          <UsedStyled.Body className={`pt-3`}>อัตราเพิ่มของประชากรกรุงเทพฯ อยู่ระดับเกือบ 1% และเริ่มลดลงในปี 2559 ดังแสดงในแผนภูมิต่อไปนี้</UsedStyled.Body>
        </Box>

        <Box className={`mb-9 md:mb-10`}>
          <UsedStyled.Title>การเติบโต</UsedStyled.Title>
          <Grid container spacing={2} className={`!mt-0`}>
            <Grid item xs={12} md={6} className={`!pt-3`}>
              <Box className={`flex items-center`}>
                <UsedStyled.Body className={`w-11 flex-none`}>เขต</UsedStyled.Body>
                <BasicSelect
                  id={'district'}
                  onChange={(e: SelectChangeEvent) => setDistrictId(e.target.value)}
                  value={districtId}
                  option={district.map((d: DistrictInterface, index: number) => {
                    return (
                      <MenuItem key={index} value={String(d.dcode)}>
                        {d.name}
                      </MenuItem>
                    );
                  })}
                  formClass={'md:max-w-[140px]'}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={3} className={`!pt-3`}>
              <Box className={`flex items-center`}>
                <UsedStyled.Body className={`w-11 flex-none`}>ตั้งแต่</UsedStyled.Body>
                <BasicSelect
                  id={'start'}
                  onChange={(e: SelectChangeEvent) => setStart(e.target.value)}
                  value={start}
                  option={years.map((year: string, index: number) => {
                    return (
                      <MenuItem key={index} value={String(year)}>
                        {year}
                      </MenuItem>
                    );
                  })}
                  renderValue={(value) => `พ.ศ. ${value}`}
                  formClass={'md:max-w-[90px]'}
                />
              </Box>
            </Grid>
            <Grid item xs={6} md={3} className={`!pt-3`}>
              <Box className={`flex items-center`}>
                <UsedStyled.Body className={`w-11 flex-none`}>ถึง</UsedStyled.Body>
                <BasicSelect
                  id={'end'}
                  onChange={(e: SelectChangeEvent) => setEnd(e.target.value)}
                  value={end}
                  option={years.map((year: string, index: number) => {
                    return (
                      <MenuItem key={index} value={String(year)}>
                        {year}
                      </MenuItem>
                    );
                  })}
                  renderValue={(value) => `พ.ศ. ${value}`}
                  formClass={'md:max-w-[90px]'}
                />
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Chart data={dataChart} />
            </Grid>
          </Grid>
        </Box>

        <Box>
          <UsedStyled.Title className={`pb-4`}>แหล่งข้อมูล</UsedStyled.Title>
          <ListItem data={dataLink} />
        </Box>
      </UsedStyled.Container>
    </div>
  );
}

export default App;
